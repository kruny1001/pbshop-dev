'use strict';

angular.module('animation').directive('fadeUp', ['$timeout',
	function($timeout) {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
                var tl = new TimelineLite();
                tl.add("scene1", 2)
                    .to(element, 4, {}, "scene1")
                    //add tween 3 seconds after scene1 label
                    .to(element, 1, {opacity:0}, "scene1+=3");
                $timeout(function(element) {
                    console.log('fade-up directive');
                }, 3000);
			}
		};
	}
]);
