'use strict';

angular.module('bioinfo').controller('BioinfohomeController', ['$scope','$http',
	function($scope,$http) {
		$scope.gsbks = [];
		$scope.updateGsbks = function(){
			$http.get('gskbs').success(function(data){
				$scope.gsbks = data;
			});
		}

	}
]);
