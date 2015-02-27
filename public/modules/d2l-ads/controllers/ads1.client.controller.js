'use strict';

angular.module('d2l-ads').controller('Ads1Controller', ['$scope',
	function($scope) {
		var iconData = [
			{name: 'icon-home'        , color: "#777" },
			{name: 'icon-user-plus'   , color: "rgb(89, 226, 168)" },
			{name: 'icon-google-plus2', color: "#A00" },
			{name: 'icon-youtube4'    , color:"#00A" },
			// Use theming to color the font-icon
			{name: 'icon-settings'    , color:"#A00", theme:"md-warn md-hue-5"}
		];
		// Create a set of sizes...
		$scope.sizes = [
			{size:12,padding:0},
			{size:21,padding:2},
			{size:36,padding:6},
			{size:48,padding:10}
		];
		$scope.fonts = [].concat(iconData);
		$scope.it = $scope.sizes[3];
		var gdoc = $('.s48');
	//	TweenMax.to(gdoc, 2, {scale:2});
		$scope.animate = function() {
			TweenMax.to(gdoc, 2, {scaleY:2});
		}

		$scope.animate2 = function() {
			TweenMax.to(gdoc, 2, {scale:2});
		}

		$scope.animate3 = function() {
			TweenMax.to(gdoc, 2, {scaleX:1, scaleY:1});
		}
		function sizeUp(size){
			var gdoc = $('.s48');
			TweenMax.to(gdoc, 2, {scale:size});
		}

	}
]);
