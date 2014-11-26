'use strict';

angular.module('user-interface').controller('Front1Controller', ['$scope',
	function($scope) {
		var svg = $("#svg1"), kiwi = $(".kiwi"), blurNode = $("feGaussianBlur");

		TweenMax.set([svg, kiwi], {rotationX:0});
		var tl = new TimelineMax({delay:0.5});

		tl.to(kiwi, 1, {autoAlpha:1})
			.to(svg, 0.5, {scale:0.5, ease:Back.easeOut})
			.to(kiwi, 0.5, {fill:"red"})
			.to(kiwi, 0.2, {stroke:"white", strokeWidth:"10"})
			.to(kiwi, 0.2, {strokeWidth:"0"})
			.to(blurNode, 0.5, {attr:{stdDeviation:20}}, "blur")
			.to($("h1"), 0.4, {text:"이야~ 기분 딱 존노!", ease:Linear.easeNone}, "blur")
			.to(blurNode, 0.3, {attr:{stdDeviation:0}}, "blur+=2")
			.to($("h1"), 0.3, {autoAlpha:0, left:200}, "+=0.6")
			.to(svg, 1, {rotation:360, ease:Back.easeOut})
			.to(svg, 0.2, {x:"+=20"})
			.to(kiwi, 0.2, {fill:"white"})
			.add(TweenMax.to(svg, 0.2, {rotation:"6_cw", x:"+=20", repeat:5}), "-=0.2")
			.set(kiwi, {fill:"yellow"})
			.to(svg, 3, {rotationY:360, ease:Elastic.easeOut})
			.to(svg, 0.2, {skewX:40, x:"-=100"}, "-=1")
			.add("fly", "-=0.8")
			.to(svg, 0.5, {x:1000, y:-100, ease:Power1.esaseIn}, "fly")
			.to(svg, 0.2, {skewX:-60, scaleY:0.2}, "fly");
		tl.timeScale(1) // try 4 for super speed!
	}
]);
