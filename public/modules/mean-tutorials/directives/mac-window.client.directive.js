'use strict';

angular.module('mean-tutorials').directive('macWindow', [
	function() {
		return {
			scope: {
				projectInfos: '=info'
			},
			templateUrl: 'modules/mean-tutorials/directives/templates/mac-window.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				scope.description = 'hello';
			}
		};
	}
]);
