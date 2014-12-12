'use strict';

angular.module('spec-view').controller('SpecHomeController', ['$scope','$timeout','$compile',
	function($scope, $timeout, $compile) {
		$scope.schoolInfo = [
			{name: "SDSU", year:"2008-2010", major:"Computer Science", position:'Undergrad'},
			{name: "TTU", year:"2011-2012", major:"Computer Science", position:'Researcher'},
			{name: "SDSU", year:"2013-2014", major:"Computer Science", position:'Grad'}
		];

		$scope.projectInfo = [
			{name:'Runway Incursion System', duration: '1year', tech:['JavaScript', 'HTML', 'MySQL']},
			{name:'Non-profit Organization Website CMS', duration: '1year', tech:['JavaScript', 'HTML', 'MySQL', 'Drupal(CMS)']},
			{name:'Virtualization Multi-core Processor', duration: '1year', tech:['VMware', 'centOS', 'Red Hat(Linux)']},
		]

		$scope.insts = [
			{desc:'1. SVG Animation provides more efficient presenting information' },
			{desc:'2. Like AngularJS framework, it makes possible to build an wep app with Modular based development' },
			{desc:'3. Cloud virtual service gives unlimited scalability' }]

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
					.fromTo(logo_r, 1.5, {scale:0.7, ease:Circ.easeOut},{scale:1, rotation: 360, transformOrigin: "50% 50%"});

				$scope.replay = function(){
					logoTimeLine.restart();
				}

				$timeout(function(){
					logoTimeLine.play();
				},1500);
			});

			$scope.clickEducationTimeLine = function(){
				console.log('Education Time Line');
				var educationSvg = Snap('.main');
				Snap.load("modules/spec-view/img/e-timeline1.svg", function(data){
					var previousSvg = logoSvg.select('#logo-ur');
					previousSvg.attr({display:"none"});

					//$("#e-timeline").attr("class", "svgC");

					if($("#e-timeline").length == 0){

						educationSvg.append(data);
					}

					educationSvg.attr({
						width: window.innerWidth,
						height: window.innerHeight,
						viewBox: "0 0 960 560"
					});
					//var educationSvg = Snap('.main');
					var d1 = educationSvg.select('#desc1');
					var d2 = educationSvg.select('#desc2');
					var d3 = educationSvg.select('#desc3');

					console.log(d2.getBBox().cx + " " +d2.getBBox().cy);
					/*
					// Mark Center of Element Object
					Snap('#e-timeline').rect(d1.getBBox().cx, d1.getBBox().cy, 3, 3);
					Snap('#e-timeline').rect(d2.getBBox().cx, d2.getBBox().cy, 3, 3);
					Snap('#e-timeline').rect(d3.getBBox().cx, d3.getBBox().cy, 3, 3);
					*/

					var d1Transfrom1 = d1.getBBox().x + " " +d1.getBBox().y;
					var d1Transfrom2 = d2.getBBox().x + " " +d2.getBBox().y;
					var d1Transfrom3 = d3.getBBox().x + " " +d3.getBBox().y;
					var effectTimeLine = new TimelineMax();
					effectTimeLine
						.to('#entireGroup', 1, {scale:1.5, transformOrigin:d1Transfrom1})
						.to('#entireGroup', 1, {scale:1, delay:3})
						.to('#entireGroup', 1, {scale:1.5, transformOrigin:d1Transfrom2})
						.to('#entireGroup', 1, {scale:1, delay:3})
						.to('#entireGroup', 1, {scale:1.5, transformOrigin:d1Transfrom3})
						.to('#entireGroup', 1, {scale:1, delay:3});

					$timeout(function(){
						Snap('#d1t').attr({'ng-bind':'schoolInfo[0].name'});
						$compile(angular.element('#d1t'))($scope);

						Snap('#d2t').attr({'ng-bind':'schoolInfo[1].name'});
						$compile(angular.element('#d2t'))($scope);

						Snap('#d3t').attr({'ng-bind':'schoolInfo[2].name'});
						$compile(angular.element('#d3t'))($scope);
					},10);
			})
		};

		$scope.clickCarrierTimeLine = function(){
			console.log('Carrier Time Line');
		};

	}
]);
