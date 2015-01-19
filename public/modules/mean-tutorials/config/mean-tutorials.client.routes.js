'use strict';

//Setting up route
angular.module('mean-tutorials').config(['$stateProvider',
	function($stateProvider) {
		// Mean tutorials state routing
		$stateProvider.
		state('project1', {
			url: '/project1',
			templateUrl: 'modules/mean-tutorials/views/project1.client.view.html'
		}).
		state('mean-home', {
			url: '/mean-home',
			templateUrl: 'modules/mean-tutorials/views/mean-home.client.view.html'
		});
	}
]);
