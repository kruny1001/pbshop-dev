'use strict';

// D2l classes controller
angular.module('d2l-classes').controller('D2lClassesController', ['$scope', '$stateParams', '$location', '$mdDialog', 'Authentication', 'D2lClasses',
	function($scope, $stateParams, $location, $mdDialog, Authentication, D2lClasses) {
		$scope.authentication = Authentication;

		// Create new D2l class
		$scope.create = function() {
			// Create new D2l class object
			var d2lClass = new D2lClasses ({
				name: this.name,
				prefix:this.prefix
			});

			// Redirect after save
			d2lClass.$save(function(response) {
				console.log('ddd');
				$mdDialog.hide();
				//$location.path('d2l-classes/' + response._id);

				// Clear form fields
				$scope.name = '';
                $scope.prefix = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};



		// Remove existing D2l class
		$scope.remove = function(d2lClass) {
			if ( d2lClass ) { 
				d2lClass.$remove();

				for (var i in $scope.d2lClasses) {
					if ($scope.d2lClasses [i] === d2lClass) {
						$scope.d2lClasses.splice(i, 1);
					}
				}
			} else {
				$scope.d2lClass.$remove(function() {
					$location.path('d2l-classes');
				});
			}
		};

		// Update existing D2l class
		$scope.update = function() {
			var d2lClass = $scope.d2lClass;

			d2lClass.$update(function() {
				$location.path('d2l-classes/' + d2lClass._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of D2l classes
		$scope.find = function() {
			$scope.d2lClasses = D2lClasses.query();
		};

		// Find existing D2l class
		$scope.findOne = function() {
			$scope.d2lClass = D2lClasses.get({ 
				d2lClassId: $stateParams.d2lClassId
			});
		};
	}
]);
