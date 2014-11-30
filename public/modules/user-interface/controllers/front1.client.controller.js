'use strict';
angular.module('user-interface').controller('Front1Controller', ['$scope','$log',
	function($scope, $log) {
		$scope.id = 'frint-1';
		$scope.tests = [];

		for(var index=0; index < 9; index++){
			$scope.tests.push(index);
		}

		$scope.title = '의리미엄으로 가보자';
		$scope.clickProduct = function(index){
			console.log(index);
		};

		/*
		var testSvg = Snap('#workspace');

		if( (/Firefox/i.test(navigator.userAgent)) ) {
			testSvg.node.addEventListener("DOMMouseScroll", mouseWheelHandler, false);
		} else {
			testSvg.node.addEventListener("mousewheel", mouseWheelHandler, false);
		}

		function mouseWheelHandler (ev) {
			ev.preventDefault();
			console.log( ev.target.localName );
		}
		*/


		/*
		var boxGraphic = Snap('.boxSvg');
		var headBox = boxGraphic.select('#box-lead');
		var upperBox = boxGraphic.select('#box-lead-target');
		var open = 0;
		var closedBox;

			var headBoxOpenPath = headBox.attr("d");
			var headBoxClosedPath = boxGraphic.select('#box-lead-target').attr("d");
			headBox.click(function () {
				var path,
					ease;
				if (closedBox) {
					path = headBoxOpenPath;
					ease = mina.easein;
					closedBox = 0;
					console.log('open Box');
				} else {
					path = headBoxClosedPath;
					ease = mina.bounce;
					closedBox = 1;
					console.log('close box');
				}
				headBox.stop().animate({
					d: path
				}, 1000, ease);
			});

			upperBox.click(function () {
				console.log('upperBox')
			});

		/*
		var group = Snap('#boxGraphic');
		var circle1= group.circle(20, 20, 10);
		var circle2 =  group.circle(20, 460, 10);
		var circle3 =  group.circle(480, 460, 10);
		var circle4 = group.circle(480, 20, 10);

		var gruop1 = group.group(circle1, circle2, circle3, circle4);
		gruop1.attr({
			fill: "#ff0000",
			stroke: "#0000ff",
			strokeWidth: 5
		})

		group.rect(50, 65, 70, 20);
		group.rect(130, 65, 70, 20);
		group.rect(210, 65, 70, 20);
		group.rect(290, 65, 70, 20);
		group.rect(370, 65, 70, 20);

		*/
	}

]);
