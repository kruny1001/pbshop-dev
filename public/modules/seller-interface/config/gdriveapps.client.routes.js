'use strict';

//Setting up route
angular.module('seller-interface').config(['$stateProvider',
	function($stateProvider) {
		// Gdriveapps state routing
		$stateProvider.
			state('weather', {
				url: '/weather',
				templateUrl: 'modules/seller-interface/views/weather.client.view.html'
			}).
			state('listGdriveapps', {
				url: '/gdriveapps',
				templateUrl: 'modules/seller-interface/views/list-gdriveapps.client.view.html'
			}).
			state('createGdriveapp', {
				url: '/gdriveapps/create',
				templateUrl: 'modules/seller-interface/views/create-gdriveapp.client.view.html'
			}).
			state('viewGdriveapp', {
				url: '/gdriveapps/:gdriveappId',
				templateUrl: 'modules/seller-interface/views/view-gdriveapp.client.view.html'
			}).
			state('editGdriveapp', {
				url: '/gdriveapps/:gdriveappId/edit',
				templateUrl: 'modules/seller-interface/views/edit-gdriveapp.client.view.html'
			}).
			state('gDrive', {
				url: '/gDrive',
				templateUrl: 'modules/seller-interface/views/gdrive.html'
			}).
			state('gDrive2', {
				abstract: true,
				url: '/gDrive2',
				templateUrl: 'modules/seller-interface/views/storage.html'
			}).
			state('gDrive2.dashboard', {
				url: '/dashboard',
				templateUrl: 'modules/seller-interface/template/gDrive2.dashboard.tmp.html'
			}).
			state('gDrive2.addNewProduct', {
				url: '/addNewProduct',
				templateUrl: 'modules/seller-interface/template/gDrive2.addNewProduct.tmp.html'
			}).
			state('gDrive2.editProduct', {
				url: '/editProduct/:productId',
				templateUrl: 'modules/seller-interface/template/gDrive2.editProduct.tmp.html'
			}).
			state('gDrive2.historyPayment', {
				url: '/historyPayment',
				templateUrl: 'modules/seller-interface/template/gDrive2.historyPayment.tmp.html'
			})
			/*.

			 state('createFile', {
			 url: '/create',
			 templateUrl:'modules/gdriveapps/views/create-doc.client.view.html',
			 controller: 'CreateDocController'
			 }).
			 state('installTodo', {
			 url: '/install',
			 templateUrl:'modules/gdriveapps/views/install-todo.client.view.html',
			 controller: 'InstallTodoController'
			 }).
			 state('todoState',{
			 url:'/todos/:fileId/:filter',
			 templateUrl:'modules/gdriveapps/views/install-todo.client.view.html',
			 controller:'todoController',
			 resolve: {
			 //realtimeDocument: app.loadFile
			 }
			 })*/;
	}
]);
