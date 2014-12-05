'use strict';

//Setting up route
angular.module('animation').config(['$stateProvider',
	function($stateProvider) {
		// Animation state routing
		$stateProvider.
		state('j1', {
			url: '/j1',
			templateUrl: 'modules/animation/views/j1.client.view.html'
		}).
		state('three', {
			url: '/three',
			templateUrl: 'modules/animation/views/three.client.view.html'
		});
	}
]);