'use strict';

//Setting up route
angular.module('tj-hair').config(['$stateProvider',
	function($stateProvider) {
		// Tj hair state routing
		$stateProvider.
		state('tj-main', {
			url: '/tj-main',
			templateUrl: 'modules/tj-hair/views/tj-main.client.view.html'
		});
	}
]);