'use strict';

angular.module('d2l').controller('D2lHwController', ['$scope', '$stateParams', '$location', 'Authentication', 'D2lHws',
	function($scope, $stateParams, $location, Authentication, D2lHws) {
		$scope.project = {
			title:'Assignment 1',
			dDate:'4/1/2015',
			desc: 'Nuclear Missile Defense System',
			rate: 500
		};

		$scope.authentication = Authentication;
		console.log($scope.authentication);
		// Create new D2l hw
		$scope.create = function() {
			console.log('Create');
			// Create new D2l hw object
			var d2lHw = new D2lHws ($scope.project);

			// Redirect after save
			d2lHw.$save(function(response) {
				$location.path('d2l-hws/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing D2l hw
		$scope.remove = function(d2lHw) {
			if ( d2lHw ) {
				d2lHw.$remove();

				for (var i in $scope.d2lHws) {
					if ($scope.d2lHws [i] === d2lHw) {
						$scope.d2lHws.splice(i, 1);
					}
				}
			} else {
				$scope.d2lHw.$remove(function() {
					$location.path('d2l-hws');
				});
			}
		};

		// Update existing D2l hw
		$scope.update = function() {
			var d2lHw = $scope.d2lHw;

			d2lHw.$update(function() {
				$location.path('d2l-hws/' + d2lHw._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of D2l hws
		$scope.find = function() {
			$scope.d2lHws = D2lHws.query();
		};

		// Find existing D2l hw
		$scope.findOne = function() {
			$scope.d2lHw = D2lHws.get({
				d2lHwId: $stateParams.d2lHwId
			});
		};
	}
]);