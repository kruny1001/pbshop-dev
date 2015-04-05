'use strict';

//Setting up route
angular.module('etc').config(['$stateProvider',
	function($stateProvider) {
		// Etc state routing
		$stateProvider.
		state('etc', {
			url: '/etc',
			templateUrl: 'modules/etc/views/etc.client.view.html'
		});
	}
]);