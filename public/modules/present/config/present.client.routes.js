'use strict';

//Setting up route
angular.module('present').config(['$stateProvider',
	function($stateProvider) {
		// Present state routing
		$stateProvider.
		state('hybrid', {
			url: '/hybrid',
			templateUrl: 'modules/present/views/hybrid.client.view.html'
		}).
		state('open-board-present', {
			url: '/open-board-present',
			templateUrl: 'modules/present/views/open-board-present.client.view.html'
		});

	}
]);