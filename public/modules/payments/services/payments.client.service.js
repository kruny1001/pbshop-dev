"use strict";

//Payments service used to communicate Payments REST endpoints
angular.module('payments').factory('Payments', ['$resource',
	function($resource) {
		return $resource('payments/:paymentId', {
			paymentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('payments').factory('PaymentsBySellerData', ['$resource',
	function($resource) {
		return $resource('payments/:sellerData', {
			sellerData: '@sellerData'
		}, {
		});
	}
]);
