"use strict";

angular.module('bioinfo').directive('menuiconHover', [
	function() {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {

                element.on('mouseover', function(){
                    TweenLite.to(this, 0.5, {backgroundColor:'gray'});
                });

                element.on('mouseleave', function(){
                    TweenLite.to(this, 0.5, {backgroundColor:'#939393'});
                });
			}
		};
	}
]);
