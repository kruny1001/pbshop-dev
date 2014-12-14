'use strict';

angular.module('spec-view').controller('SpecHomeController', ['$scope','$timeout','$compile','Project1',
	function($scope, $timeout, $compile, Project1) {
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

					if($("#e-timeline").length == 0)
						educationSvg.append(data);

					educationSvg.attr({
						width: window.innerWidth,
						height: window.innerHeight,
						viewBox: "0 0 960 560"
					});

					//var educationSvg = Snap('.main');
					var d1 = educationSvg.select('#desc1');
					var d2 = educationSvg.select('#time2');
					var d3 = educationSvg.select('#desc3');

					Project1.getTransfromOrigin(d1, 'e-timeline');

					/*
					var transFromResult1 = Project1.getTransfromOrigin(d1, 'e-timeline');
					var transFromResult2 = Project1.getTransfromOrigin(d2, 'e-timeline');
					var transFromResult3 = Project1.getTransfromOrigin(d3, 'e-timeline');

					Snap('#e-timeline').rect(transFromResult1.x, transFromResult1.y, 5, 5).attr({fill:'blue'});
					Snap('#e-timeline').rect(transFromResult2.x, transFromResult2.y, 5, 5);
					Snap('#e-timeline').rect(transFromResult3.x, transFromResult3.y, 5, 5);

					console.log('new TransformOrigin')
					console.log(transFromResult1.x +' '+transFromResult1.y);
					console.log(transFromResult2.x +' '+transFromResult2.y);
					console.log(transFromResult3.x +' '+transFromResult3.y);

					var d1Transfrom1 = d1.getBBox().cx + " " +d1.getBBox().cy;
					var d1Transfrom2 = d2.getBBox().cx + " " +d2.getBBox().cy;
					var d1Transfrom3 = d3.getBBox().cx + " " +d3.getBBox().cy;
					console.log('old TransformOrigin')
					console.log(d1Transfrom1);
					console.log(d1Transfrom2);
					console.log(d1Transfrom3);
					*/

					/*
					var newTransform = new Snap.Matrix().translate(transFromResult2.x,transFromResult2.y);
					newTransform.scale(1.3,1.3,transFromResult2.containerW / 2 -transFromResult2.x,transFromResult2.containerH / 2 -transFromResult2.y);

					Snap('#entireGroup').animate({
						//transform: new Snap.Matrix().scale(s).translate(tx, ty).toTransformString();
						transform: newTransform.toTransformString()
					}, 1400, mina.backout);
					*/
					/*
					var effectTimeLine = new TimelineMax();

					effectTimeLine
						.to('#entireGroup', 1, {scale:1.9, transformOrigin:transFromResult1.x +' '+transFromResult1})
						.to('#entireGroup', 1, {scale:1, delay:3})
						.to('#entireGroup', 1, {scale:1.9, transformOrigin:transFromResult2.x +' '+transFromResult2.y})
						.to('#entireGroup', 1, {scale:1, delay:3})
						.to('#entireGroup', 1, {scale:1.9, transformOrigin:transFromResult3.x +' '+transFromResult3.y})
						.to('#entireGroup', 1, {scale:1, delay:3})
						.to('#entireGroup', 1, {scale:1.9, transformOrigin:"bottom left"})
						.to('#entireGroup', 1, {scale:1, delay:3});
					*/
					$timeout(function(){
						var educationSvg = Snap('#e-timeline');
						Snap.load("modules/spec-view/img/ironman.svg", function(data){
							var group = data.select('#IornMan');


							//group.attr({transform:'top, right'});
							if($("#IornMan").length == 0)
								group.appendTo(educationSvg);

							var transformString = "t" + (Snap('#e-timeline').getBBox().width - Snap('#IornMan').getBBox().width).toString() +","+ (Snap('#e-timeline').getBBox().height - Snap('#IornMan').getBBox().height).toString();
							/*
							console.log(Snap('#e-timeline').getBBox().width);
							console.log(Snap('#IornMan').getBBox().width);
							console.log(Snap('#e-timeline').getBBox().height);
							console.log(Snap('#IornMan').getBBox().height);
							console.log(transformString);
							*/

							/*
							group.attr({
								transform: transformString
							})
							*/


							TweenLite.to("#IornMan", .5, {css:{transform:"translateX("+ (Snap('#e-timeline').getBBox().width - Snap('#IornMan').getBBox().width).toString() +"px)"+
							" translateY("+ (Snap('#e-timeline').getBBox().height - Snap('#IornMan').getBBox().height).toString()+"px)"}, ease:Power2.easeOut});
						});

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
			TweenLite.to("#IornMan", .5, {css:{transform:"translateX(-5px) translateY(10px)"}, ease:Power2.easeOut});
		};

	}
]);
