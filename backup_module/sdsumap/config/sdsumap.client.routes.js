"use strict";

//Setting up route
angular.module('sdsumap').config(['$stateProvider','uiGmapGoogleMapApiProvider',
	function($stateProvider,uiGmapGoogleMapApiProvider) {
		// Sdsumap state routing
		$stateProvider.
		state('sdsumap-main', {
			url: '/sdsumap-main',
			templateUrl: 'modules/sdsumap/views/sdsumap-main.client.view.html'
		});

		uiGmapGoogleMapApiProvider.configure({
			key: 'AIzaSyBEGA9BOSoo0DF69RNRh9MsMKDxaVlnT_U',
			v: '3.17',
			libraries: 'weather,geometry,visualization'
		});
	}
]);
