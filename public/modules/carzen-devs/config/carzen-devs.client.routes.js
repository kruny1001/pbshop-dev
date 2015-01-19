'use strict';

//Setting up route
angular.module('carzen-devs').config(['$stateProvider',
	function($stateProvider) {
		// Carzen devs state routing
		$stateProvider.
		state('carzen-home', {
			url: '/carzen-home',
			templateUrl: 'modules/carzen-devs/views/carzen-home.client.view.html'
		}).
		state('listCarzenDevs', {
			url: '/carzen-devs',
			templateUrl: 'modules/carzen-devs/views/list-carzen-devs.client.view.html'
		}).
		state('createCarzenDev', {
			url: '/carzen-devs/create',
			templateUrl: 'modules/carzen-devs/views/create-carzen-dev.client.view.html'
		}).
		state('viewCarzenDev', {
			url: '/carzen-devs/:carzenDevId',
			templateUrl: 'modules/carzen-devs/views/view-carzen-dev.client.view.html'
		}).
		state('editCarzenDev', {
			url: '/carzen-devs/:carzenDevId/edit',
			templateUrl: 'modules/carzen-devs/views/edit-carzen-dev.client.view.html'
		});
	}
]);