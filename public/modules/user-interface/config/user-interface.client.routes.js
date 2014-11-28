'use strict';

//Setting up route
angular.module('user-interface').config(['$stateProvider','$disqusProvider',
	function($stateProvider,$disqusProvider) {
		// Seller interface state routing
		$disqusProvider.setShortname('urimium');
		$stateProvider.
		state('front-1', {
			url: '/front-1',
			templateUrl: 'modules/user-interface/views/front-1.client.view.html'
		}).
		state('experimental-interface', {
			url: '/experimental-interface',
			templateUrl: 'modules/user-interface/views/experimental-interface.client.view.html'
		}).
		state('listing-product', {
			url: '/',
			templateUrl: 'modules/user-interface/views/listing-product.client.view.html'
		})
		.state('detail-product', {
			url: '/detail-product/:productId',
			templateUrl: 'modules/user-interface/views/detail-product.client.view.html'
		});
	}
]);
