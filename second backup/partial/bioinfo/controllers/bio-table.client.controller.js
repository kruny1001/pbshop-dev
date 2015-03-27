'use strict';

angular.module('bioinfo').controller('BioTableController', ['$scope','$http',
	function($scope,$http) {
		$http.get('gskbs/indexQuery').success(function(data){
			$scope.data = data;
		});

		function makeApiCall() {
			gapi.client.load('plus', 'v1').then(function() {
				var request = gapi.client.plus.people.get({
					'userId': 'me'
				});
				request.then(function(resp) {
					var heading = document.createElement('h4');
					var image = document.createElement('img');
					image.src = resp.result.image.url;
					heading.appendChild(image);
					heading.appendChild(document.createTextNode(resp.result.displayName));

					document.getElementById('content').appendChild(heading);
				}, function(reason) {
					console.log('Error: ' + reason.result.error.message);
				});
			});
		}
		// Bio table controller logic
		// ...
	}
]);
