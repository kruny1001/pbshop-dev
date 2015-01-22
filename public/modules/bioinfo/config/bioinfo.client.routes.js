'use strict';

//Setting up route
angular.module('bioinfo').config(['$stateProvider',
	function($stateProvider) {
		// Bioinfo state routing
		$stateProvider.
		state('bioinfo-home', {
			url: '/bioinfo-home',
			templateUrl: 'modules/bioinfo/views/bioinfo-home.client.view.html'
		});
	}
]);