'use strict';

//Setting up route
angular.module('d2l-classes').config(['$stateProvider',
	function($stateProvider) {
		// D2l classes state routing
		$stateProvider.
		state('listD2lClasses', {
			url: '/d2l-classes',
			templateUrl: 'modules/d2l-classes/views/list-d2l-classes.client.view.html'
		}).
		state('createD2lClass', {
			url: '/d2l-classes/create',
			templateUrl: 'modules/d2l-classes/views/create-d2l-class.client.view.html'
		}).
		state('viewD2lClass', {
			url: '/d2l-classes/:d2lClassId',
			templateUrl: 'modules/d2l-classes/views/view-d2l-class.client.view.html'
		}).
		state('editD2lClass', {
			url: '/d2l-classes/:d2lClassId/edit',
			templateUrl: 'modules/d2l-classes/views/edit-d2l-class.client.view.html'
		});
	}
]);