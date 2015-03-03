'use strict';

angular.module('the-clean').directive('tcOrderUi', [
	function() {
		return {
			templateUrl: 'modules/the-clean/directives/template/tc-order-ui-tpl.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
			}
		};
	}
]);
