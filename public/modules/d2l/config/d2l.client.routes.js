'use strict';

//Setting up route
angular.module('d2l').config(['$stateProvider','$mdIconProvider',
	function($stateProvider,$mdIconProvider) {
		// D2l state routing
		$stateProvider.
		state('d2l-home', {
			url: '/d2l-home',
			templateUrl: 'modules/d2l/views/d2l-home.client.view.html'
		});

		$mdIconProvider.iconSet("avatar", '/modules/d2l/svg/avatar-icons.svg', 128);
	}
]);
