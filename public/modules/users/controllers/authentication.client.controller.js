'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', '$mdDialog', 'Authentication',
	function($scope, $http, $location, $mdDialog, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/mean-home');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;
				$mdDialog.hide();
				// And redirect to the index page
				$location.path('/mean-home');
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
				$location.path('/mean-home');
			}).error(function(response) {
				$scope.error = response.message;
			});


		};
	}
]);
