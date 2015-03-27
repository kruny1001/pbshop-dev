'use strict';


angular.module('openboard').controller('OpenboardController', OpenboardController);

function OpenboardController($scope, $mdDialog, Authentication) {
	// Openboard controller logic
	// ...

	//Init
	$scope.authentication = Authentication;
	$scope.user = Authentication.user;

	// This function should be combined later
	$scope.showSignUp = function(ev) {
		$mdDialog.show({
			controller: 'AuthenticationController',
			templateUrl: 'modules/mean-tutorials/template/authentication/signup-dialog.tpl.html',
			targetEvent: ev
		})
			//.then(function(answer) {
			//	$scope.alert = 'You said the information was "' + answer + '".';
			//}, function() {
			//	$scope.alert = 'You cancelled the dialog.';
			//});
	};

	$scope.showSignIn = function(ev) {
		$mdDialog.show({
			controller: 'AuthenticationController',
			templateUrl: 'modules/mean-tutorials/template/authentication/signin-dialog.tpl.html',
			targetEvent: ev
		})
			.then(function(answer) {
				$scope.alert = 'You said the information was "' + answer + '".';
			}, function() {
				$scope.alert = 'You cancelled the dialog.';
			});
	};

	$scope.showSetRule = function(ev){
		$mdDialog.show({
			controller: 'AuthenticationController',
			templateUrl: 'modules/openboard/template/tutorial/setRole-dialog.tpl.html',
			targetEvent: ev
		});
	};

	$scope.showNewClass = function(ev){
		$mdDialog.show({
			controller: 'D2lClassesController',
			templateUrl: 'modules/openboard/template/tutorial/newClass-dialog.tpl.html',
			targetEvent: ev
		});
	};

	$scope.showNewAssign = function(ev){
		$mdDialog.show({
			controller: D2lHwDialogCtrl,
			templateUrl: 'modules/openboard/template/tutorial/newAssign-dialog.tpl.html',
			targetEvent: ev
		}).then(function(answer) {
			$scope.alert = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.alert = 'You cancelled the dialog.';
		});

		function D2lHwDialogCtrl(scope, $timeout, $mdDialog, D2lHws, D2lClassesOwnership, GDriveSelectResult){
		// Create new D2l hw

			scope.$on('handleEmit', function(event, args) {
				console.log('broadcast is invoked');
				scope.project.gdocId=args.message;
				scope.$digest();
			});

			scope.docs = GDriveSelectResult;
			scope.project = {gdocId : scope.docs.id};
			scope.project = {
				dDate: new Date('4/1/2015'),
				gdocId : GDriveSelectResult.id
				//desc: 'Nuclear Missile Defense System',
			};

			scope.loadClasses = function() {
				return $timeout(function() {
					scope.classes = D2lClassesOwnership.query();
				}, 650);
			};
			scope.createNewRecord = function() {
				console.log('Create');
				// Create new D2l hw object
				var d2lHw = new D2lHws (scope.project);
				d2lHw.class = d2lHw.class._id;
				// Redirect after save
				d2lHw.$save(function(response) {
					//$location.path('d2l-hws/' + response._id);
					// Clear form fields
					scope.name = '';
					$mdDialog.cancel();
					scope.project = null;

				}, function(errorResponse) {
					scope.error = errorResponse.data.message;
				});
			};
		}

	};
}
