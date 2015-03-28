'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$timeout','$location', '$mdDialog', 'Authentication','Users',
	function($scope, $http, $timeout, $location, $mdDialog, Authentication, Users) {
		$scope.authentication = Authentication;
		$scope.user = Authentication.user;
		// If user is signed in then redirect back home
		//if ($scope.authentication.user) $location.path('/mean-home');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;
				$mdDialog.hide();
				// And redirect to the index page
				//$location.path('/mean-home');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;
				$mdDialog.hide();
				// And redirect to the index page
				//$location.path('/mean-home');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		//$scope.setRole = function(){
		//	$scope.user.roles =$scope.credentials.roles;
		//	var user = new Users($scope.user);
		//	$http.put('/users/role').success(function(result){
		//		Authentication.user = result;
		//	}).error(function(response) {
		//		$scope.error = response.message;
		//	});
		//	//user.$update(function(response) {
		//	//	$scope.success = true;
		//	//
		//	//	$scope.user = response;
		//	//	$mdDialog.hide();
		//	//}, function(response) {
		//	//	$scope.error = response.data.message;
		//	//});
		//};

	}
]);
