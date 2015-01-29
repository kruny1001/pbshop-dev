"use strict";

angular.module('payments').factory('GetPurchaseJWT', ['$resource',
	function($resource) {
		return $resource('purchase/gw_test/:productID/:qty/:optdesc',
			{
				productID: '@_id',
				qty:'@qty',
				optdesc:'@optdesc'
			}, {query: {method:'get', isArray:true}}
		);
	}
]);
