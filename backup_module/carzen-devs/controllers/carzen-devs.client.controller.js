'use strict';

// Carzen devs controller
angular.module('carzen-devs').controller('CarzenDevsController', ['$scope', '$stateParams', '$location', 'Authentication', 'CarzenDevs',
	function($scope, $stateParams, $location, Authentication, CarzenDevs) {
		$scope.authentication = Authentication;

		// Create new Carzen dev
		$scope.create = function() {
			// Create new Carzen dev object
			var carzenDev = new CarzenDevs ({
				name: this.name
			});

			// Redirect after save
			carzenDev.$save(function(response) {
				$location.path('carzen-devs/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Carzen dev
		$scope.remove = function(carzenDev) {
			if ( carzenDev ) { 
				carzenDev.$remove();

				for (var i in $scope.carzenDevs) {
					if ($scope.carzenDevs [i] === carzenDev) {
						$scope.carzenDevs.splice(i, 1);
					}
				}
			} else {
				$scope.carzenDev.$remove(function() {
					$location.path('carzen-devs');
				});
			}
		};

		// Update existing Carzen dev
		$scope.update = function() {
			var carzenDev = $scope.carzenDev;

			carzenDev.$update(function() {
				$location.path('carzen-devs/' + carzenDev._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Carzen devs
		$scope.find = function() {
			$scope.carzenDevs = CarzenDevs.query();
		};

		// Find existing Carzen dev
		$scope.findOne = function() {
			$scope.carzenDev = CarzenDevs.get({ 
				carzenDevId: $stateParams.carzenDevId
			});
		};
	}
]);