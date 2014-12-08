'use strict';

angular.module('spec-view').controller('SpecHomeController', ['$scope','$timeout',
	function($scope, $timeout) {
		$scope.insts = [
			{desc:'1. 최대한 얼굴을 깨끗이 씻는다' },
			{desc:'2. 세안 후, 보습제를 바르지 않은 채로 두 시간을 보낸다' },
			{desc:'3. 두 시간 후 기름종이로 얼굴을 3~4초 동안 10회 이상 꾹 눌러준다' }]

		var timeLineInst = new TimelineMax({delay:0.75});

		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
			console.log('instruction loaded');
			var instructions = $('.inst');
			angular.forEach(instructions, function(value) {
					timeLineInst.from(value, 0.75, {x: -200, autoAlpha: 0, ease:Expo.easeOut});
				}
			)
		});

		$scope.afterLogo = false;

		$scope.description = "" +
		"This is a contents of md content";
		$scope.data = {
			group1 : '악지성',
			group2 : '3'
		};
		$scope.radioData = [
			{ label: '1', value: '1' },
			{ label: '2', value: '2' },
			{ label: '3', value: '3' }
		];
		$scope.addItem = function() {
			var r = Math.ceil(Math.random() * 1000);
			$scope.radioData.push({ label: r, value: r });
		};
		$scope.removeItem = function() {
			$scope.radioData.pop();
		};


		var logoSvg = Snap('.main');
		Snap.load("modules/animation/img/svg/Urimium-Logo1.svg", function(data) {
			logoSvg.append(data);
			logoSvg.attr({
				width: window.innerWidth,
				height: window.innerHeight
			});

			var afterLogo = function(){
				$scope.afterLogo = true;
			}
			var wholeSvg=$('.main');
			var logo_r = $('#logo-r');
			var logo_u = $('#logo-u');
			var logoTimeLine = new TimelineMax({paused:true, onComplete: afterLogo});
			logoTimeLine.set([logo_r, logo_u],{opacity:0})
				.fromTo([logo_r, logo_u], 2.5, {x:0, scale:0.5, opacity:0},{scale:1, opacity:1})
				.to(logo_r, 1.5, {rotation: 360, transformOrigin: "50% 50%", ease:Circ.easeOut})
			//.to(wholeSvg, 1.5, {top: 20, scale: 0.2})
			//.to(wholeSvg, 1.5, {top: 20, scale: 0.2, display: 'none', ease:Circ.easeOut });

			$scope.replay = function(){
				logoTimeLine.restart();
			}

			$timeout(function(){
				logoTimeLine.play();
			},1000);

		});
	}
]);
