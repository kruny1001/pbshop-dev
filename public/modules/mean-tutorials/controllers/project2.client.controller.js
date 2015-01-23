'use strict';

angular.module('mean-tutorials').controller('Project2Controller', ['$scope',
	function($scope,$rootScope) {
        // Disqus ID
		$scope.id='meanT-project2';

        // Listen event
        $scope.$on('handleEmit', function(event, args) {
            $scope.$broadcast('handleBroadcast', args);
        });
	}
]);
