"use strict";

//Setting up route
angular.module('utility').config(['$stateProvider',
	function($stateProvider) {
		// Utility state routing
		$stateProvider.
		state('test-page-generator', {
			url: '/test-page-generator',
			templateUrl: 'modules/utility/views/test-page-generator.client.view.html'
		});
	}
]);
