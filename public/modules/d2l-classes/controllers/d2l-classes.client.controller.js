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
]).controller('gridClassMenu', gridClassMenu);

function gridClassMenu($scope){
	this.tiles = buildGridModel({
		icon : "avatar:svg-",
		title: "Svg-",
		background: ""
	});
	function buildGridModel(tileTmpl){
		var it, results = [ ];
		for (var j=0; j<11; j++) {
			it = angular.extend({},tileTmpl);
			it.icon  = it.icon + (j+1);
			it.title = it.title + (j+1);
			it.span  = { row : "1", col : "1" };
			switch(j+1) {
				case 1:
					it.background = "red";
					it.span.row = it.span.col = 2;
					break;
				case 2: it.background = "green";         break;
				case 3: it.background = "darkBlue";      break;
				case 4:
					it.background = "blue";
					it.span.col = 2;
					break;
				case 5:
					it.background = "yellow";
					it.span.row = it.span.col = 2;
					break;
				case 6: it.background = "pink";          break;
				case 7: it.background = "darkBlue";      break;
				case 8: it.background = "purple";        break;
				case 9: it.background = "deepBlue";      break;
				case 10: it.background = "lightPurple";  break;
				case 11: it.background = "yellow";       break;
			}
			results.push(it);
		}
		return results;
	}
}



angular.module('d2l-classes')
	.controller('mainController', function($scope, $state) {
		$scope.pageClass = 'page-home';
		$scope.goTo = function(name){
			$state.go(name);
		}
	})
	.controller('aboutController', function($scope, $state) {
		$scope.pageClass = 'page-about';
		$scope.goTo = function(name){
			$state.go(name);
		}
	})
	.controller('contactController', function($scope, $state) {
		$scope.pageClass = 'page-contact';
		$scope.goTo = function(name){
			$state.go(name);
		}
	});

