'use strict';

angular.module('sdsumap').controller('SdsumapmainController', ['$scope','uiGmapGoogleMapApi',
	function($scope, uiGmapGoogleMapApi) {
		// Sdsumap main controller logic
		// ...
		uiGmapGoogleMapApi.then(function(maps) {
			console.log('Google Map is ready');
		});
		//44.3101729,-96.7831942,15z
		$scope.map = { center: { latitude: 44.3101729, longitude: -96.7831942 }, zoom: 15 };
	}
]);
