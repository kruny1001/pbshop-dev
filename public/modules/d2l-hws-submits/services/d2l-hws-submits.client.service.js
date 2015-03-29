'use strict';

//D2l hws submits service used to communicate D2l hws submits REST endpoints
angular.module('d2l-hws-submits').factory('D2lHwsSubmits', ['$resource',
	function($resource) {
		return $resource('d2l-hws-submits/:d2lHwsSubmitId', { d2lHwsSubmitId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
])
	.factory('D2lHwsSubmitsTrue', ['$resource',
		function($resource) {
			return $resource('d2l-hws-submits/submitted', { d2lHwsSubmitId: '@_id'
			}, {
				update: {
					method: 'PUT'
				}
			});
		}
	]);
