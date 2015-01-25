'use strict';

angular.module('spec-view').directive('resize', ['$window',
	function($window) {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
				var w= angular.element($window);
				scope.getWindowDimensions = function () {
					return {
						'h': w.height(),
						'w': w.width()
					};
				};
				scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
					console.log('size is changed');
					scope.windowHeight = newValue.h;
					scope.windowWidth = newValue.w;

					scope.style = function () {
						return {
							'height': (newValue.h) + 'px',
							'width': (newValue.w) + 'px'
						};
					};
				}, true);

				w.bind('resize', function () {
					scope.$apply();
				});

			}
		};
	}
]);
