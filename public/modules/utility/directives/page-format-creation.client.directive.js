'use strict';

angular.module('utility').directive('pageFormatCreation', [
	function() {
		return {
			templateUrl: 'modules/utility/directives/template/default-format.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
			}
		};
	}
]);
