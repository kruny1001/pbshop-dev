'use strict';

//Setting up route
angular.module('top-hair').config(['$stateProvider',
	function($stateProvider) {
		// Top hair state routing
		$stateProvider.
		state('top-hair-home', {
			url: '/top-hair-home',
			templateUrl: 'modules/top-hair/views/top-hair-home.client.view.html'
		});
	}
]);