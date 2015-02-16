'use strict';

angular.module('d2l').controller('D2lHomeController', [
	'$scope','Googledrive','D2LOauth',
	function($scope, Googledrive, D2LOauth) {
		//$scope.testStr = S('asdf asdf wef sdf asdf wefsdf asf sf ').truncate(20, ' ...Read More').s;
		$scope.authName = 'Authorization';
		$scope.googleDrive={info:'gDriveCtrl'};

		$scope.hideResult = function(){
			var target = $('.listFolder');
			TweenLite.to(target, 0.5, {autoAlpha: 0, display:'none'})
		};
		$scope.showResult = function(){
			var target = $('.listFolder')
			TweenLite.to(target, 0.5, {autoAlpha: 1, display:'block'})
		};

		$scope.init = function init(){
			window.gapi.load('auth', D2LOauth.authenticateWithGoogle);
			window.gapi.load('picker');
			gapi.client.load('drive', 'v2').then(console.log('Ready to use Drive'));
			gapi.client.load('plus', 'v1');
		}

		$scope.plusTest = function(){
			var promise = Googledrive.plusTest();
			promise.then(
				function(result){
					//    console.log('service is done')
					$scope.gPlus = result;
					$scope.$digest();
				}
			)
		}

		$scope.listingFolderInfo = function(){
			$scope.gDocs = 'dd';
			console.log('gDriveDashCtrl');
			var promise = Googledrive.listFolder();
			promise.then(
				function(result){
					console.log('service is done');
					$scope.gDocs = result.items;
					$scope.$digest();
				}
			)
			//console.log($scope.gDocs);
			//$scope.$digest();

			//var request = gapi.client.drive.files.get({
			//    'fileId': "1Q_CJwJftcL-zabVm0USc1px5HDfbpxu6Klav-XYOzNg"
			//});
			//request.execute(function(resp) {
			//    if (!resp.error) {
			//        console.log('Title: ' + resp.title);
			//        console.log('Description: ' + resp.description);
			//        console.log('MIME type: ' + resp.mimeType);
			//        console.log(resp);
			//        $scope.gDocs = resp;
			//        $scope.$digest();
			//    } else if (resp.error.code == 401) {
			//        // Access token might have expired.
			//        checkAuth();
			//    } else {
			//        console.log('An error occured: ' + resp.error.message);
			//    }
			//});
		}

		// List File
		$scope.listFile = function(){

		}

		//
		//var accessToken;
		//$scope.permalLink = 'http://drive.google.com/uc?export=view&id=';
		//$scope.arrive = false;
		//$scope.authName = 'Authorize';
		//$scope.isAuth = false;
		//$scope.init = function init(){
		//    window.gapi.load('auth', $scope.authenticateWithGoogle);
		//    window.gapi.load('picker');
		//    gapi.client.load('urlshortener', 'v1');
		//}
		//$scope.authenticateWithGoogle =function authenticateWithGoogle(){
		//    window.gapi.auth.authorize({
		//        'client_id': configGdrive.clientId,
        
		//        'scope':configGdrive.scopes,
		//        'immediate': false
		//    }, handleAuthentication);
		//}
		//
		//function handleAuthentication(result){
		//    if(result && !result.error){
		//        $scope.isAuth = true;
		//        $scope.authName = 'Deauthorize';
		//        accessToken = result.access_token;
		//        //console.log(accessToken);
		//
		//        /*
		//         callGooglePlus();
		//         setFilePicker();
		//         listFolder();
		//         getGoogleDriveInfo();
		//         createFolder();
		//         */
		//        createNewAccountFolder();
		//        setFilePicker(); // singleFile
		//        //findTargetUriFolder();
		//    }else{
		//        console.log(result);
		//        console.log(result.error);
		//        console.log('fail to authentication')
		//    }
		//    $scope.$digest();
		//}

		function listFolder() {
			Googledrive.listFolder()
		}

		$scope.findFolder = function() {
			console.log('findFolder');
			//var query = "title contains 'URI-' and mimeType = 'application/vnd.google-apps.folder'";
			var query = "mimeType = 'application/vnd.google-apps.folder'";
			Googledrive.findFolder(query, function(result){
				$scope.numFolder = result.result.items.length;
				$scope.$digest();
				console.log(result);
			});
		}

		/*
		 function createFolder(){
		 var folderName;
		 Googledrive.createFolder(folderName, accessToken);
		 }
		 */
		function getGoogleDriveInfo(){
			Googledrive.getGoogleDriveInfo();
		}
		function callGooglePlus(){
			function callback(resp) {
				console.log(resp);
				var heading = document.createElement('h4');
				var image = document.createElement('img');
				image.src = resp.result.image.url;
				heading.appendChild(image);
				heading.appendChild(document.createTextNode(resp.result.displayName));

				document.getElementById('content').appendChild(heading);
			}
			GooglePlus.callGooglePlus(callback);
		}

		// Google PlatForm Service
		$scope.setupPicker = function() {
			function pickerCallback(data) {
				if(data.action == google.picker.Action.PICKED){
					//do something
					$scope.files = data.docs;
					$scope.arrive = true;

					// make shorten URL
					var request = gapi.client.urlshortener.url.get({
						'shortUrl': 'http://goo.gl/fbsS'
					});
					request.then(function(response) {
						appendResults(response.result.longUrl);
					}, function(reason) {
						console.log('Error: ' + reason.result.error.message);
					});

					//alert('URL: ' + data.docs[0].url);
					$scope.$digest()
				}else if(data.action ==google.picker.Action.CANCEL){
					//alert('goodbye');
				}
			}
			Googledrive.setupPicker(accessToken, pickerCallback);
		}

		$scope.listFolderInformation = function(){
			Googledrive.listFolder();
		}

		function createNewAccountFolder(){
			//Pre. Get User Information
			//check if there exists an
			// API /users/me (only allow to have)

			var callback = function(resp){
				console.log(resp.result.items.length);
				if(resp.result.items.length == 0){
					$http.get('users/me')
						.success(function(response) {
							console.log(response);
							var folderName = 'D2l-'+response._id;
							//1. Create A New Folder
							Googledrive.createFolder(folderName, accessToken);
							//2. Update User Information
							//$http.get()
						});
				}
				else{
					console.log('there is already exist')
					$scope.rootGdriveFolderID = resp.result.items[0].id
					$scope.$digest();
				}
			}
			Googledrive.findFolder(callback);
		}
	}
])
	.controller('gridListDemoCtrl', function($scope) {
        $scope.test=function(event){
            var target = event.target;
            TweenLite.to(target, 0.3, {opacity: 0.8, scale:0.85});
            TweenLite.to(target, 0.3, {opacity: 1, scale:1, rotation: 360, delay:0.2});
            //TweenLite.to(target, 0.3, {backgroundColor: 'blue', delay:0.5});
        }
		this.tiles = buildGridModel({
			icon : "avatar:svg-",
			title: "Svg-",
			background: ""
		});
		function buildGridModel(tileTmpl){
			var it, results = [ ];
			for (var j=0; j<12; j++) {
				it = angular.extend({},tileTmpl);
				it.icon  = it.icon + (j+1);
				it.title = it.title + (j+1);
				it.span  = { row : "1", col : "1" };
				switch(j+1) {
					case 1:
						it.background = "red";
                        it.title = "Introduction";
						//it.span.row = it.span.col = 2;

						break;
					case 2: it.background = "green"; it.title = "Tutorials"; break;
					case 3: it.background = "darkBlue"; it.title = "Tech Scopes"; break;
					case 4:
						it.background = "blue";
                        it.title = "Pricing";
						//it.span.col = 2;
						break;
					case 5:
						it.background = "yellow";
                        it.title = "Articles";
						//it.span.row = it.span.col = 2;
						break;
					case 6: it.background = "pink";
                        it.title = "Tutorials";
                        break;
					case 7: it.background = "darkBlue";
                        it.title = "Projects";
                        break;
					case 8: it.background = "purple";
                        it.title = "Portfolio";
                        break;
					case 9: it.background = "deepBlue";
                        it.title = "Career";
                        break;
					case 10: it.background = "lightPurple";
                        it.title = "MEANJS Stack";
                        break;
					case 11: it.background = "yellow";       break;
                    case 12: it.background = "deepBlue";       break;
				}
				results.push(it);
			}
			return results;
		}
	});
