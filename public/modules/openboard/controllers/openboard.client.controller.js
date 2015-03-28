'use strict';


angular.module('openboard').controller('OpenboardController', OpenboardController);

function OpenboardController($scope, $mdDialog, $window, $http, Authentication, Users, D2lHws, D2lClassesOwnership, UsersRole) {
	// Openboard controller logic
	// ...

	//Init
	$scope.authentication = Authentication;
	var authentication = Authentication;
	$scope.user = Authentication.user;
	$scope.roles = [{name: 'Student',value:'student'},{name: 'Instructor', value:'instructor'}];

	$scope.hws = D2lHws.query();
	$scope.hwsCopy = [].concat($scope.hws);
	$scope.classes = D2lClassesOwnership.query();
	$scope.classesCopy = [].concat($scope.classes);


	$scope.linkHW = function(docId){
		var AppScriptAPI = 'https://script.google.com/macros/s/AKfycbzoXxZDgzjLOJdqGUGYCWSpIT7n2sHyvnIo2W7E5jmXI_2sryj3/exec?docId='+docId+'&userId='+authentication.user.username;
		$window.open(AppScriptAPI);
	};

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
		});
	};

	$scope.showSetRule = function(ev){
		$mdDialog.show({
			controller: 'OpenboardController',
			templateUrl: 'modules/openboard/template/tutorial/setRole-dialog.tpl.html',
			targetEvent: ev,
			clickOutsideToClose: false,
			//preserveScope: true
		}).then(function(answer) {
			$scope.alert = 'You updated as "' + answer + '".';
		}, function() {
			$scope.alert = 'You cancelled.';
		});
	};


	$scope.cancel = function() {
		$mdDialog.cancel();
	};

	$scope.answer = function(answer) {
		//$mdDialog.hide(answer);
	};

	$scope.setRole = function(){
		console.log('openboardCtrl-setRole ' +$scope.user.roles);
		$scope.user.roles =$scope.credentials.roles;
		console.log('openboardCtrl-setRole ' +$scope.user.roles);
		var user = new UsersRole($scope.user);
		user.$update(function(result) {
				Authentication.user = result;
				$scope.user =Authentication.user;
				$scope.alert = "[Success] Update";
				$mdDialog.hide($scope.credentials.roles);
			}, function(response) {
				$scope.error = response.data.message;
		});
	};

	$scope.showNewClass = function(ev){
		$mdDialog.show({
			//controller: 'D2lClassesController',
			controller: D2lClassDialogCtrl,
			templateUrl: 'modules/openboard/template/tutorial/newClass-dialog.tpl.html',
			targetEvent: ev,
			clickOutsideToClose: false
		}).then(
			function(){
				console.log('created Class');
				$scope.classes = D2lClassesOwnership.query();
				$scope.classesCopy = [].concat($scope.classes);},
			function(){console.log('2')}
		);
		function D2lClassDialogCtrl($scope, $mdDialog, D2lClasses){
			$scope.cancel = function() {
				$mdDialog.cancel();
			};

			$scope.create = function() {
				// Create new D2l class object
				var d2lClass = new D2lClasses ({
					name: this.name,
					prefix:this.prefix
				});

				// Redirect after save
				d2lClass.$save(function(response) {
					$scope.name = '';
					$scope.prefix = '';
					$mdDialog.hide();
				}, function(errorResponse) {
					$scope.error = errorResponse.data.message;
				});
			};
		}
	};

	$scope.showNewAssign = function(ev){

		$mdDialog.show({
			controller: D2lHwDialogCtrl,
			templateUrl: 'modules/openboard/template/tutorial/newAssign-dialog.tpl.html',
			targetEvent: ev,
			clickOutsideToClose: false
		});

		function D2lHwDialogCtrl(scope, $timeout, $mdDialog, D2lHws, D2lClassesOwnership, GDriveSelectResult){
		// Create new D2l hw
			scope.$on('handleEmit', function(event, args) {
				console.log('broadcast is invoked');
				scope.project.gdocId=args.message;
				//scope.$digest();
			});
			scope.cancel = function(){
				$mdDialog.hide();
			};
			scope.docs = GDriveSelectResult;
			scope.project = {gdocId : scope.docs.id};
			scope.project = {
				dDate: new Date('4/1/2015'),
				gdocId : GDriveSelectResult.id
				//desc: 'Nuclear Missile Defense System',
			};

			scope.loadClasses = function() {
				console.log('Load Class is invoked');
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


	$scope.setRoleAsStudent = function(){
		$scope.user.roles ="student";
		var user = new Users($scope.user);
		user.$update(function(response) {
			$scope.success = true;
			Authentication.user = response;
			$scope.user = response;
			$mdDialog.hide();
		}, function(response) {
			$scope.error = response.data.message;
		});
	};
}
