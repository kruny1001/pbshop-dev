'use strict';

angular.module('d2l').controller('InsClassController', ['$scope','$http',
	function($scope,$http) {
		$scope.createFile = function(){
			$http.get('/createFile').success(function(data, status, headers, config){
				console.log('data', data);
				console.log('status', status);
				console.log('headers', headers);
				console.log('config', config);
			});
		}
		$scope.listGPlus = function(){
			$http.get('/gs').success(function(data, status, headers, config){
				$scope.userInfo = data;
				console.log('data', data);
				console.log('status', status);
				console.log('headers', headers);
				console.log('config', config);
			});
		}
	}
]);
