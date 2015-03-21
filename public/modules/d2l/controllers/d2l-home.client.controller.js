'use strict';

angular.module('d2l').controller('D2lHomeController', [
	'$scope','$http','$window', '$interval','Googledrive','D2LOauth','D2lHwsSubmits',
	function($scope, $http, $window, $interval, Googledrive, D2LOauth, D2lHwsSubmits) {

        $scope.AppScriptAPI = "";
        $scope.docs = [{docId:'1wqIynYi4EyBRDJCkULTV5-lucN09iRzPeKe8CVt6BAM',user:'Kevin1905548'}];

        $scope.getHW = function(doc){
            var AppScriptAPI = 'https://script.google.com/macros/s/AKfycbzoXxZDgzjLOJdqGUGYCWSpIT7n2sHyvnIo2W7E5jmXI_2sryj3/exec?docId='+doc.docId+'&userId='+doc.user;
            $window.open(AppScriptAPI);
            // Create new D2l hws submit object
            var d2lHwsSubmit = new D2lHwsSubmits ({
                name: 'add Assign',
                docId: doc.docId
            });
            d2lHwsSubmit.$save(function(response) {
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

		//remove Header
		TweenMax.set($('header'), {y:-51});

		$scope.mode = 'query';
		$scope.determinateValue = 30;
		$interval(function() {
			$scope.determinateValue += 1;
			if ($scope.determinateValue > 100) {
				$scope.determinateValue = 30;
			}
		}, 100, 0, true);
		$scope.progressCircular = false;
		//End remove Header
		// app script test //

		$scope.files = [{fileId:"13C7rKU3N7fnyEC4h92YSyYQxtVDP3ZVqsbKPwrWIqFs", fileName:"Add-On"},{fileId:"1wOt48YCVJ0R064vRwx2a40TuAgACoJUzeYK9tIEDFA0", fileName:"Assignment2"}]
		$scope.appScript = function(fileId) {
			$scope.progressCircular = true;
			/* APP SCRIPT*/
			//var fileId = '1wqIynYi4EyBRDJCkULTV5-lucN09iRzPeKe8CVt6BAM'; //Assignment2
			//var fileId = e.parameter.docId;
			//var fileId2 = '13C7rKU3N7fnyEC4h92YSyYQxtVDP3ZVqsbKPwrWIqFs'; //Add-On
			/* END APP SCRIPT*/

			var AppScriptAPI = 'https://script.google.com/macros/s/AKfycbzJEZyl0IuBoop5F9PG5Jv7rH3o4sPWp-5iNfxEcPhKjOzSxwY/exec';
			$http.get(AppScriptAPI+'?docId='+fileId+'&userId=world')
				.success(function(data){
					console.log(data);
					$scope.progressCircular = false;
				})
				.error(function(data, status, headers, config) {
					console.log(data);
					$scope.progressCircular = false;
				})





		}
		// End app script
		//table data
		$scope.cmCollection = [
			{title:'Lecture1', class:'CSC601-2015', publishDate:'1/5', docLink:''},
			{title:'Lecture2', class:'CSC601-2015', publishDate:'1/12', docLink:''},
			{title:'Lecture3', class:'CSC601-2015', publishDate:'1/19', docLink:''},
			{title:'Lecture4', class:'CSC601-2015', publishDate:'1/26', docLink:''},
			{title:'Lecture5', class:'CSC601-2015', publishDate:'2/5', docLink:''},
			{title:'Lecture6', class:'CSC601-2015', publishDate:'2/12', docLink:''}
		];

		$scope.HWCollection = [
			{title:'A1', class:'CSC601-2015', dDate:'1/12', tPoint:'200', tPercent:'5%', docLink:''},
			{title:'A2', class:'CSC601-2015', dDate:'1/25', tPoint:'300', tPercent:'5%', docLink:''},
			{title:'A3', class:'CSC601-2015', dDate:'2/12', tPoint:'400', tPercent:'5%', docLink:''},
			{title:'A4', class:'CSC601-2015', dDate:'2/25', tPoint:'300', tPercent:'5%', docLink:''},
			{title:'A5', class:'CSC601-2015', dDate:'3/19', tPoint:'200', tPercent:'5%', docLink:''},
			{title:'A6', class:'CSC601-2015', dDate:'4/12', tPoint:'250', tPercent:'5%', docLink:''}
		];

		//Should be connected with DB
		$scope.rowCollection = [
			{firstName: 'Laurent', lastName: 'Renard', id:'1905548', grade:95, submit:true, email: 'whatever@gmail.com'},
			{firstName: 'Blandine', lastName: 'Faivre', id:'1905528', grade:0, submit:false, email: 'oufblandou@gmail.com'},
			{firstName: 'Blandine', lastName: 'Faivre', id:'1905528', grade:100, submit:true, email: 'oufblandou@gmail.com'},
			{firstName: 'Francoise', lastName: 'Frere', id:'1906648', grade:65, submit:true, email: 'raymondef@gmail.com'}
		];

		//Should be connected with DB
		$scope.gradeCollection = [
			{numAssignment: 'A1', grade:200, total: 250, docLink:""},
			{numAssignment: 'A2', grade:160, total: 250, docLink:""},
			{numAssignment: 'A3', grade:220, total: 250, docLink:""},
			{numAssignment: 'A4', grade:75, total: 100, docLink:""},
			{numAssignment: 'A5', grade:85, total: 150, docLink:""}
		]
		//end table data

		//$scope.testStr = S('asdf asdf wef sdf asdf wefsdf asf sf ').truncate(20, ' ...Read More').s;
		$scope.authName = 'Authorization';
		$scope.googleDrive={info:'gDriveCtrl'};
		$scope.openMenu = true;

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
	.controller('gridListDemoCtrl', function($scope, $state) {
        function goToHWList(){
            //$state.go('listD2lHws');
        }
		$scope.test=function(event, targetInfo){
			console.log('dddd');
			var target = event.target;
			console.log(target);
			TweenLite.to(target, 0.3, {opacity: 0.8, scale:0.85});
			TweenLite.to(target, 0.3, {opacity: 1, scale:1, rotation: 360, delay:0.2, onComplete:goToHWList});
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
                        it.title = "Notifications";
						//it.span.row = it.span.col = 2;

						break;
					case 2: it.background = "green"; it.title = "Tutorials"; break;
					case 3: it.background = "darkBlue"; it.title = "Classes"; it.state="classes"; break;
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
	})
    .controller('DemoCtrl', ['$timeout', '$q', function DemoCtrl ($timeout, $q) {
        var self = this;
        // list of `state` value/display objects
        self.states        = loadAll();
        self.selectedItem  = null;
        self.searchText    = null;
        self.querySearch   = querySearch;
        self.simulateQuery = false;
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
            var results = query ? self.states.filter( createFilterFor(query) ) : [],
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }
        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
            return allStates.split(/, +/g).map( function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }
    }])


