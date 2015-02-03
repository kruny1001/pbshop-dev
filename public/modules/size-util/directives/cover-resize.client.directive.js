'use strict';

angular.module('size-util').directive('coverResize', ['$window',
	function($window) {
		return {
			restrict: 'A',
            scope:{
                targetElem: "=bindingFoo"
            },
			link: function postLink(scope, element, attrs) {
                //function targetElement() {
                //    console.log(scope.targetElem);
                //    return scope.targetElem;
                //}
                //var targetElem = scope.targetElem;


                var w = angular.element($window);
                w.on('reszie', function(){
                    console.log('resize');
                })
                //console.log(w);
                //scope.$watch(function () {
                //    return {
                //        'h': w.height(),
                //        'w': w.width()
                //    };
                //}, function (newValue, oldValue) {
                //    scope.windowHeight = newValue.h;
                //    scope.windowWidth = newValue.w;
                //
                //    scope.resizeWithOffset = function (offsetH) {
                //
                //        scope.$eval(attr.notifier);
                //
                //        return {
                //            'height': (newValue.h - offsetH) + 'px'
                //            //,'width': (newValue.w - 100) + 'px'
                //        };
                //    };
                //
                //}, true);
                console.log(element);
                element.on("resize", function () {
                    console.log("resized.- element On");
                });
                element.bind('resize', function () {
                    console.log('resize');
                    scope.$apply();
                });
                element.bind('click', function () {
                    console.log('resize');
                    scope.$apply();
                });
			}
		};
	}
])
    .directive('ngSize', ['$rootScope', function($root) {
        return {
            scope: {
                size: '=ngSize'
            },
            link: function($scope, element, attrs) {

                $root.ngSizeDimensions  = (angular.isArray($root.ngSizeDimensions)) ? $root.ngSizeDimensions : [];
                $root.ngSizeWatch       = (angular.isArray($root.ngSizeWatch)) ? $root.ngSizeWatch : [];

                var handler = function() {
                    angular.forEach($root.ngSizeWatch, function(el, i) {
                        // Dimensions Not Equal?
                        if ($root.ngSizeDimensions[i][0] != el.offsetWidth || $root.ngSizeDimensions[i][1] != el.offsetHeight) {
                            // Update Them
                            $root.ngSizeDimensions[i] = [el.offsetWidth, el.offsetHeight];
                            // Update Scope?
                            $root.$broadcast('size::changed', i);
                        }
                    });
                };

                // Add Element to Chain?
                var exists = false;
                angular.forEach($root.ngSizeWatch, function(el, i) { if (el === element[0]) exists = i });

                // Ok.
                if (exists === false) {
                    $root.ngSizeWatch.push(element[0]);
                    $root.ngSizeDimensions.push([element[0].offsetWidth, element[0].offsetHeight]);
                    exists = $root.ngSizeWatch.length-1;
                }

                // Update Scope?
                $scope.$on('size::changed', function(event, i) {
                    // Relevant to the element attached to *this* directive
                    if (i === exists) {
                        $scope.size = {
                            width: $root.ngSizeDimensions[i][0],
                            height: $root.ngSizeDimensions[i][1]
                        };
                    }
                });

                // Refresh: 100ms
                if (!window.ngSizeHandler) window.ngSizeHandler = setInterval(handler, 100);

                // Window Resize?
                // angular.element(window).on('resize', handler);

            }
        };
    }]);;
