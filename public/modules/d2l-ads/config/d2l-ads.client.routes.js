'use strict';

//Setting up route
angular.module('d2l-ads').config(['$stateProvider',
	function($stateProvider) {
		// D2l ads state routing
		$stateProvider.
		state('ads1', {
			url: '/ads1',
			templateUrl: 'modules/d2l-ads/views/ads1.client.view.html'
		});
	}
]);