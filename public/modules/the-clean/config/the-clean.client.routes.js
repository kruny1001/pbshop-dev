'use strict';

//Setting up route
angular.module('the-clean').config(['$stateProvider',
	function($stateProvider) {
		// The clean state routing
		$stateProvider.
		state('the-clean', {
			url: '/the-clean',
			templateUrl: 'modules/the-clean/views/the-clean.client.view.html'
		});
	}
]);