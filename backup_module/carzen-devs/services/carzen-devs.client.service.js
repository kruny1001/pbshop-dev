"use strict";

//Carzen devs service used to communicate Carzen devs REST endpoints
angular.module('carzen-devs').factory('CarzenDevs', ['$resource',
	function($resource) {
		return $resource('carzen-devs/:carzenDevId', { carzenDevId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
