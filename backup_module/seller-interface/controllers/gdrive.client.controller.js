
angular.module('seller-interface')
    .controller('gdrive', ['$scope','$state','$http','$q', '$mdDialog', '$mdSidenav','configGdrive', 'Googledrive', 'GooglePlus', 'Products','Authentication','ProductByUserId',
        function ($scope, $state, $http, $q, $mdDialog, $mdSidenav, configGdrive, Googledrive, GooglePlus, Products, Authentication, ProductByUserId) {
            $scope.authentication = Authentication;
            $scope.goChildView = function(stateName){
                $state.go(stateName);
                $mdSidenav('left').close();
            }

            $scope.redirect = function(stateName, param){
                $state.go(stateName, {productId: param});
                $mdSidenav('left').close();
            }

            //$scope.queriedProduct = ProductByUserId.query({userId:$scope.authentication.user._id });

        /*
        google.load('visualization', '1', {
            packages: ['corechart']
        });


         var data = google.visualization.arrayToDataTable([
         ['Year', 'Sales', 'Expenses'],
         ['명이나물', 1000, 400],
         ['더덕나물', 1170, 460],
         ['문어젖갈', 660, 1120],
         ['오징어젖갈', 1030, 540]
         ]);
         var options = {
         title: 'Company Performance'
         };
         var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));

         chart.draw(data, options);
         /**/

        $http({'url': 'http://drive.google.com/uc?export=view&id=0B8FisuvAYPTfZl9VUnEwcGdFdHc', method:"GET", headers: {
            "Content-Type": "image/jpeg"
        }})
            .success(function(data) {
                console.log(data);
            })
        $scope.data = {};
        $scope.data.cb1 = true;
        $scope.data.cb2 = false;

        $scope.user = {
            title:     "Technical Program Manager",
            email:     "ipsum@lorem.com",
            firstName: "Naomi",
            lastName:  "" ,
            company:   "Google" ,
            address:   "1600 Amphitheatre Pkwy" ,
            city:      "Mountain View" ,
            state:     "CA" ,
            country:   "USA" ,
            postalCode : "94043"
        };

        $scope.todos = [
            {
                product_uri : 'http://drive.google.com/uc?export=view&id=0B8FisuvAYPTfaTJnaHRWWmozRUU',
                name: '명이나물',
                who: '명이게이',
                when: '3:08PM',
                notes: "아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요"
            },
            {
                product_uri : 'http://drive.google.com/uc?export=view&id=0B8FisuvAYPTfcDVGYVc3NEtaSEU',
                name: '더덕나물',
                who: '명이게이',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
        ]

        /*
         * */
        var accessToken;
        $scope.permalLink = 'http://drive.google.com/uc?export=view&id=';
        $scope.arrive = false;
        $scope.authName = 'Authorize';
        $scope.isAuth = false;
        $scope.init = function init(){
            window.gapi.load('auth', $scope.authenticateWithGoogle);
            window.gapi.load('picker');
            gapi.client.load('urlshortener', 'v1');
        }
        $scope.authenticateWithGoogle =function authenticateWithGoogle(){
            window.gapi.auth.authorize({
                'client_id': configGdrive.clientId,
                'scope':configGdrive.scopes,
                'immediate': false
            }, handleAuthentication);
        }
        function handleAuthentication(result){
            if(result && !result.error){
                $scope.isAuth = true;
                $scope.authName = 'Deauthorize';
                accessToken = result.access_token;
                //console.log(accessToken);

                /*
                 callGooglePlus();
                 setFilePicker();
                 listFolder();
                 getGoogleDriveInfo();
                 createFolder();
                 */
                createNewAccountFolder();
                setFilePicker(); // singleFile
                //findTargetUriFolder();
            }else{
                console.log(result);
                console.log(result.error);
                console.log('fail to authentication')
            }
            $scope.$digest();
        }

        function listFolder() {
            Googledrive.listFolder()
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

        /// Custom file Picker Start ----------------------------------------------------------
        /*
         function setFilePicker() {
         var filePicker = document.getElementById('filePicker');

         filePicker.style.display = 'none';

         // Access token has been successfully retrieved, requests can be sent to the API.
         filePicker.style.display = 'block';
         filePicker.onchange = uploadFile;
         }

         function uploadFile(evt) {
         var callback = function(file) {
         console.log('!!File!!');
         console.log(file);
         }
         gapi.client.load('drive', 'v2', function() {
         var file = evt.target.files[0];
         insertFile(file, callback);
         });
         }

         function insertFile(fileData, callback) {
         var boundary = '-------314159265358979323846';
         var delimiter = "\r\n--" + boundary + "\r\n";
         var close_delim = "\r\n--" + boundary + "--";

         var reader = new FileReader();
         reader.readAsBinaryString(fileData);
         reader.onload = function(e) {
         var contentType = fileData.type || 'application/octet-stream';
         var metadata = {
         'title': fileData.name,
         'mimeType': contentType,
         'writersCanShare':true,
         'parents': [{
         'kind': "drive#fileLink",
         'id': "0B8FisuvAYPTfN1o1Q0d4T2JLTk0"
         }]

         };

         var base64Data = btoa(reader.result);
         var multipartRequestBody =
         delimiter +
         'Content-Type: application/json\r\n\r\n' +
         JSON.stringify(metadata) +
         delimiter +
         'Content-Type: ' + contentType + '\r\n' +
         'Content-Transfer-Encoding: base64\r\n' +
         '\r\n' +
         base64Data +
         close_delim;
         console.log(multipartRequestBody);

         var request = gapi.client.request({
         'path': '/upload/drive/v2/files',
         'method': 'POST',
         'params': {'uploadType': 'multipart'},
         'headers': {
         'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
         },
         'body': multipartRequestBody});
         if (!callback) {
         callback = function(file) {
         console.log(file)
         };
         }
         request.execute(callback);
         }
         }
         */
        /// Custom file Picker End ----------------------------------------------------------

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
                            var folderName = 'URI-'+response._id;
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

        $scope.find = function() {
            $scope.products = ProductByUserId.query({userId:$scope.authentication.user._id });
        };

        $scope.onChangeStatus = function(){
            console.log('sdfsf');
            $scope.$digest();
        };

        $scope.openNewProductDialog = function(ev) {
            //Open Dialog
            $mdDialog.show({
                templateUrl: 'modules/seller-interface/template/newProductTemplate.html',
                targetEvent: ev,
                controller: newProductDialog,
                clickOutsideToClose  : false
            }).then(function() {
                $scope.alert = 'You said "Okay".';
            }, function() {
                $scope.alert = 'You cancelled the dialog.';
            });
        };

        function newProductDialog($scope, $mdDialog){
            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }

        $scope.toggleLeft = function() {
            $mdSidenav('left').open();
        };

        $scope.getPaymentHistory = function() {
            $scope.payments = Payments.query();
        }
    }]
);

angular.module('seller-interface').controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
    $scope.alert = '';

    $scope.showListBottomSheet = function($event) {
        $mdBottomSheet.show({
            templateUrl: 'modules/seller-interface/views/bottom-sheet-list-template.html',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };

    $scope.showGridBottomSheet = function($event) {
        $mdBottomSheet.show({
            templateUrl: 'modules/seller-interface/views/bottom-sheet-grid-template.html',
            controller: 'GridBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };
})
    .controller('LeftCtrl', function($scope, $timeout, $mdSidenav) {
        $scope.close = function() {
            $mdSidenav('left').close();
        };
    });

angular.module('seller-interface').controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {

    $scope.items = [
        { name: 'Upload New Image (Google Drive)', icon: 'share' },
        { name: 'Select Existing Image (Google Drive)', icon: 'upload' },
        { name: 'Product History (Google Sheets)', icon: 'copy' },
        { name: 'Print this page (PDF Printer)', icon: 'print' },
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
});

angular.module('seller-interface').controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {

    $scope.items = [
        { name: 'Hangout', icon: 'hangout' },
        { name: 'Mail', icon: 'mail' },
        { name: 'Message', icon: 'message' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' },
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
});
