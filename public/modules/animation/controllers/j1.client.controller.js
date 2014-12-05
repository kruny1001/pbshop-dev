'use strict';

angular.module('animation').controller('J1Controller', ['$scope', '$timeout',
	function($scope, $timeout) {
		var svgMVMU = Snap('#j1Svg');
		Snap.load("modules/animation/img/svg/j1.svg", function(data) {
			svgMVMU.append(data);


			var wholeSvg = $('#j1Svg svg').children();
			TweenMax.set(wholeSvg,{opacity: 0});

			$timeout(function(){

			var s1 = $('#S1');
			var s1TimeLine = new TimelineMax();
			s1TimeLine.to(s1, 1.5, {opacity:1});


			var s2 = $('#S2');
			var s2TimeLine = new TimelineMax();
			s2TimeLine.to(s2, 1.5, {opacity:1});

			var s3 = $('#S3');
			var s3TimeLine = new TimelineMax();
			s3TimeLine.to(s3, 1.5, {opacity:1});

			var s4 = $('#S4');
			var s4TimeLine = new TimelineMax();
			s4TimeLine.to(s4, 1.5, {opacity:1});

			var s5 = $('#S5');
			var grouptS5 = s5.children();
			var leftEar = $('#leftEar');
			var rightEar = $('#rightEar');
			var glasses = $('#glasses');
			var hair = $('#hair');
			var rightEye = $('#rightEye');
			var leftEye = $('#leftEye');

			var s5TimeLine = new TimelineMax();
			s5TimeLine

				.to([leftEar, rightEar], 1, {opacity:1})
				.to([glasses, hair], 1, {opacity:1})
				.to([leftEye, rightEye],1 ,{opacity:1});

			var s6 = $('#S6');
			var s6TimeLine = new TimelineMax();
			s6TimeLine.to(s6, 1, {opacity:1});

			var effect = $('#effect');
			var grountEffects = effect.children();
			var faceColor = $('#faceColor');
			var logo = $('#logo');
			var rightAir = $('#rightAir');
			var leftAir = $('#leftAir');
			var eyeAngry = $('#eyeAngry');
			var rightEyeBall = rightEye.find('ellipse');
			var effectTimeLine = new TimelineMax();
			effectTimeLine
				.to(logo, 2, {scale: 1, x: -10, opacity:1})
				.to(rightEye, 2, {scale:1.2})
				.to(rightEyeBall, 3, {rotationX:50, transformOrigin:"0% 100%"})
				.to(rightEyeBall, 2, {rotationX:0, transformOrigin:"0% 100%"})
				.to(rightEye, 2, {scale:1})
				.to(faceColor, 0.25, {opacity: 1})
				.to(faceColor, 0.25, {opacity: 0})
				.to(faceColor, 0.25, {opacity: 1})
				.to(faceColor, 0.25, {opacity: 0})
				.to(eyeAngry, 1, {opacity:1})
				.to(leftAir, 0.25, {opacity: 1})
				.to(rightAir, 0.25, {opacity: 1})
				.to(leftAir, 0.25, {opacity: 0})
				.to(rightAir, 0.25, {opacity: 0})
				.to([leftAir,rightAir], 0.25, {opacity: 1})
				.to([leftAir,rightAir], 0.25, {opacity: 0})
				.to([leftAir,rightAir], 0.25, {opacity: 1})
				.to(faceColor, 2, {opacity: 1})
				.to(logo, 2, {scale: 0.5, x: -10})

				var audio = document.getElementById("audioTag");
				audio.play();
				var masterTimeLine = new TimelineMax();
				masterTimeLine
					.add(s1TimeLine)
					.add(s2TimeLine)
					.add(s3TimeLine)
					.add(s4TimeLine)
					.set(s5, {opacity:1})
					.set(grouptS5, {opacity:0})
					.add(s5TimeLine)
					.add(s6TimeLine)
					.set(effect, {opacity:1})
					.set(grountEffects, {opacity:0})
					.add(effectTimeLine);

				$scope.replay = function(){
					masterTimeLine.restart();
				}
			}, 1000);
		});


	}
]);
