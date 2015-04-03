'use strict';

angular.module('d2l-ads').directive('openboardAds1', [
	function() {
		return {
			templateUrl: '/modules/d2l-ads/directives/template/openboard-ads1.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
                var papers =[];
                papers.push($('#paper1'));
                papers.push($('#paper2'));
                papers.push($('#paper3'));
                papers.push($('#paper4'));
                papers.push($('#paper5'));
                TweenMax.to(papers[0], 2, {x:400, y:200, rotation: 12});
                TweenMax.to(papers[1], 2, {x:-400, y:-400, rotation: -12});
                TweenMax.to(papers[2], 2, {x:200, y:-400, rotation: 22});
                TweenMax.to(papers[3], 2, {x:600, y:-400, rotation: 62});
                TweenMax.to(papers[4], 2, {x:-200, y:600, rotation: 2});
			}
		};
	}
]);
