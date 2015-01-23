'use strict';

angular.module('bioinfo').directive('menuiconHover', [
	function() {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {

                element.on('mouseover', function(){
                   console.log(this);
                    TweenLite.to(this, 0.5, {backgroundColor:'gray', scale:1.3});
                });

                element.on('mouseleave', function(){
                    console.log(this);
                    TweenLite.to(this, 0.5, {backgroundColor:'#939393', scale:1});
                });
			}
		};
	}
]);
