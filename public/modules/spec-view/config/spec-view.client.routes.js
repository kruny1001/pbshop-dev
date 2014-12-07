'use strict';

//Setting up route
angular.module('spec-view').config(['$stateProvider',
	function($stateProvider) {
		// Spec view state routing
		$stateProvider.
		state('spec-home', {
			url: '/spec-home',
			templateUrl: 'modules/spec-view/views/spec-home.client.view.html'
		});
	}
]);