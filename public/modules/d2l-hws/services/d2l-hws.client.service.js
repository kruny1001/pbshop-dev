'use strict';

//D2l hws service used to communicate D2l hws REST endpoints
angular.module('d2l-hws').factory('D2lHws', ['$resource',
	function($resource) {
		return $resource('d2l-hws/:d2lHwId', { d2lHwId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
