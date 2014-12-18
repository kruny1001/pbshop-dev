'use strict';

//Setting up route
angular.module('spec-view').config(['$stateProvider',
	function($stateProvider) {
		// Spec view state routing
		$stateProvider.
		state('jarvis', {
			url: '/jarvis',
			templateUrl: 'modules/spec-view/views/jarvis.client.view.html'
		}).
		state('spec-home', {
			url: '/spec-home',
			templateUrl: 'modules/spec-view/views/spec-home.client.view.html'
		});
	}
]);