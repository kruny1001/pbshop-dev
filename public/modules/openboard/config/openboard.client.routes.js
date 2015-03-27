'use strict';

//Setting up route
angular.module('openboard').config(['$stateProvider',
	function($stateProvider) {
		// Openboard state routing
		$stateProvider.
		state('openboard', {
			url: '/openboard',
			templateUrl: 'modules/openboard/views/openboard.client.view.html'
		});
	}
]);