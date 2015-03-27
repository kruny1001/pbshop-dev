'use strict';

//Setting up route
angular.module('bioinfo').config(['$stateProvider',
	function($stateProvider) {
		// Bioinfo state routing
		$stateProvider.
		state('bio-table', {
			url: '/bio-table',
			templateUrl: 'modules/bioinfo/views/bio-table.client.view.html'
		}).
		state('bioinfo-home', {
			url: '/bioinfo-home',
			templateUrl: 'modules/bioinfo/views/bioinfo-home.client.view.html'
		});
	}
]);