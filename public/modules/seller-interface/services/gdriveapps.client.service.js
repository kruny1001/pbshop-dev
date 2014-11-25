'use strict';

//Gdriveapps service used to communicate Gdriveapps REST endpoints
angular.module('seller-interface').factory('Gdriveapps', ['$resource',
	function($resource) {
		return $resource('gdriveapps/:gdriveappId', { gdriveappId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
