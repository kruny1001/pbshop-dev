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
			.then(function(answer) {
				$scope.alert = 'You said the information was "' + answer + '".';
			}, function() {
				$scope.alert = 'You cancelled the dialog.';
			});
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
		})
			.then(function(answer) {
				$scope.alert = 'You said the information was "' + answer + '".';
				$scope.$digest();
			}, function() {
				$scope.alert = 'You cancelled the dialog.';
			});
	};

	$scope.showNewClass = function(ev){
		$mdDialog.show({
			controller: 'D2lClassesController',
			templateUrl: 'modules/openboard/template/tutorial/newClass-dialog.tpl.html',
			targetEvent: ev
		})
			.then(function(answer) {
				$scope.alert = 'You said the information was "' + answer + '".';
				$scope.$digest();
			}, function() {
				$scope.alert = 'You cancelled the dialog.';
			});
	}
}
