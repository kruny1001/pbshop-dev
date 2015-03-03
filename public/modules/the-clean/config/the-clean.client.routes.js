'use strict';

//Setting up route
angular.module('the-clean').config(['$stateProvider',
	function($stateProvider) {
		// The clean state routing
		$stateProvider.
		state('tc-order', {
			url: '/tc-order',
			templateUrl: 'modules/the-clean/views/tc-order.client.view.html'
		}).
		state('the-clean', {
			url: '/the-clean',
			templateUrl: 'modules/the-clean/views/the-clean.client.view.html'
		});
	}
]);