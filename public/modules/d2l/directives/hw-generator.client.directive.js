'use strict';

/**
 *  @ngdoc module
 *  @name pbshop.components.select
 */

/*
 [Process Step]

 Check Requirements
 Process payment
 */

/**************************************************************

 ### TODO ###
 **DOCUMENTATION AND DEMOS**

 -[ ] ng-modle with child mdOptions (basic)
 -[ ] ng-modle="foo" ng-model-options="{targetBy: ''}"

 **************************************************************/

angular.module('d2l')

	.directive('d2lHwGenerator', HwGenerator)
	.directive('d2lHwPublisher', HwPublisher)
	.factory('D2lHwPermission', ['$resource',
		function($resource) {
			return $resource('/HWD2l/getPermission/:id', {
				id: '@_id'
			},{getDoc: {method:'GET'}});
		}
	])
	.factory('D2lHwCopy', ['$resource',
		function($resource) {
			return $resource('/HWD2l/copyFile/:id', {
				id: '@_id'
			},{copyDoc: {method:'GET'}});
		}
	])
	.controller('ToastCtrl', function($scope, $mdToast) {
		$scope.closeToast = function() {
			$mdToast.hide();
		};
	});

function HwGenerator($mdToast, $location, devConfig, D2lHws) {
	return {
		templateUrl: 'modules/d2l/directives/template/d2l-hw-generator-tpl.html',
		restrict: 'E',
		link: function postLink(scope, element, attrs) {
			scope.isOpen=true;
			//scope.devColor = devConfig.directive;
			scope.docTypes = ['Docs', 'Sheets', 'Slides', 'PDF'];

			scope.create = function() {
				console.log('Create');
				// Create new D2l hw object
				var d2lHw = new D2lHws (scope.project);
				// Redirect after save

				d2lHw.$save(function(response) {
					$location.path('d2l-hws/' + response._id);
					// Clear form fields
					scope.name = '';
				}, function(errorResponse) {
					$scope.error = errorResponse.data.message;
				});
			};

			scope.createFile = function(){
				//$http.get('/createFile').success(function(data, status, headers, config){
				//       $scope.fileResult = data;
				//	//console.log('data', data);
				//	//console.log('status', status);
				//	//console.log('headers', headers);
				//	//console.log('config', config);
				//});
				scope.isOpen = !scope.isOpen;
				if(scope.isOpen){
					console.log("open");
					TweenMax.to($('#fileCreator'), 1, {alpha:1, yPercent:0, display:"block",   ease: Power2.easeOut, paused:false});
					//TweenMax.to($('#createFileBtn'), 0.6,{boxShadow:"inset 0 0 25px #05fe65, 0px 0px 30px 12px #12ea9b", repeat:-1, yoyo:true, ease:Linear.easeNone});
					//TweenMax.to($('#fileCreator'),1, {yPercent:-150, transformOrigin:"0 0 0", ease:Back.easeOut});
				}

				else{
					console.log("close");
					TweenMax.to($('#fileCreator'), 1, {alpha:0, yPercent:-150, display:"none", ease: Power2.easeOut, paused:false});
					//TweenMax.to($('#createFileBtn'), 0.6,{boxShadow:"inset 0 0 0px #05fe65, 0px 0px 0px 0px #12ea9b", repeat:-1, yoyo:true, ease:Linear.easeNone});
					//TweenMax.to($('#fileCreator'),1, {height:'100%', transformOrigin:"0 0 0", ease:Back.easeOut});
				}

				scope.assignment = '';
			}

			scope.publishHW = function() {
				alert('Click');
			}

			scope.toastPosition = {
				bottom: true,
				top: false,
				left: false,
				right: true
			};
			scope.getToastPosition = function() {
				return Object.keys(scope.toastPosition)
					.filter(function(pos) { return scope.toastPosition[pos]; })
					.join(' ');
			};
			scope.showCustomToast = function() {
				$mdToast.show({
					controller: 'ToastCtrl',
					templateUrl: 'modules/d2l/directives/toast-template.html',
					hideDelay: 16000,
					position: scope.getToastPosition()
				});
			};

		}
	};
}

function HwPublisher($timeout,D2lHwPermission, D2lHwCopy){
	return {
		templateUrl: 'modules/d2l/directives/template/d2l-hw-publisher-tpl.html',
		restrict: 'E',
		link:function postLink(scope, element, attrs) {
			scope.listP = function(id){
					scope.result = D2lHwPermission.getDoc({
						id: id
					}).$promise.then(
						//success
						function( value ){
							scope.items = value.items;
							//based On the result
						},
						//error
						function( error ){console.log(error);}
					)
			};


			//Make a Copy
			scope.copyFile = function(id){
				D2lHwCopy.copyDoc({id:id})
					.$promise.then(function(value){console.log(value)},function(error){console.log(error)})
			}

			//Insert Permissions


			//Create File
			scope.publish = function(id){
				scope.result = D2lHwPermission.getDoc({
					id: id
				}).$promise.then(
					//success
					function( value ){
						scope.items = value.items;
						//based On the result
					},
					//error
					function( error ){console.log(error);}
				)
			};

			scope.loadUsers = function() {
				// Use timeout to simulate a 650ms request.
				scope.users = [];
				return $timeout(function() {
					scope.users = [
						{ id: 1, name: 'Copy of restFulAPI Test2', docId:'1HP0LZO1chIZSp-wxK0Gx2B5EVDrw9dVnl8y6OkQB5_k' },
						//{ id: 2, name: 'Shaggy Rodgers' },
						//{ id: 3, name: 'Fred Jones' },
						//{ id: 4, name: 'Daphne Blake' },
						//{ id: 5, name: 'Velma Dinkley' },
					];
				}, 650);
			};

		}
	}
}
