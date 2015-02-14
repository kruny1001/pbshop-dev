'use strict';

//Setting up route
angular.module('d2l').config(['$stateProvider',
	function($stateProvider) {
		// D2l state routing
		$stateProvider.
		state('d2l-home', {
			url: '/d2l-home',
			templateUrl: 'modules/d2l/views/d2l-home.client.view.html'
		});
	}
]);