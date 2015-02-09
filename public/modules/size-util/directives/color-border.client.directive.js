'use strict';

angular.module('size-util').directive('colorBorder', [
	function() {
		return {
            scope:{
                color : '=colorBorder'
            },
			link: function postLink(scope, element, attrs) {
                //element.css('border-color', scope.color);
                //element.css('border-style', 'solid');
                //element.css('border-width', '1px');

                TweenLite.set(element, {
                    borderColor: scope.color,
                    borderStyle: 'solid',
                    borderWidth: '1px'
                });
			}
		};
	}
]);
