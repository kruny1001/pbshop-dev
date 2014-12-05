'use strict';

//Setting up route
angular.module('animation').config(['$stateProvider',
	function($stateProvider) {
		// Animation state routing
		$stateProvider.
		state('ryuhm12', {
			url: '/ryuhm12',
			templateUrl: 'modules/animation/views/ryuhm12.client.view.html'
		}).
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