'use strict';

angular.module('spec-view').controller('JarvisController', ['$scope','$timeout',
	function($scope, $timeout) {
		//Load Background SVG
		var backSvg = Snap('#backGroundSvg');
		var s = Snap("#smallMapSvg");
		var g = s.group();
		var l = Snap.load("modules/spec-view/img/traval/background2.svg", onSVGLoaded ) ;
		var customPart = Snap.load("modules/spec-view/img/traval/customPart.svg", onSVGLoaded2 )

		$scope.position = {};

		$scope.addedObject = [];

		function onSVGLoaded2(data){
			var group = data.select("g");
			group.drag();
			g.append(group);

		}

		function onSVGLoaded( data ){
			//s.attr({id:'smallMap'});
			//s.append( data );
			g.append(data);
			//TweenLite.set('#smallMapSvg', {scale:'0.5'});
		}

		$scope.addPin = function(parentID, position){
			var parentSvg = Snap('#'+parentID);
			var pin = Snap.load("modules/spec-view/img/traval/pin.svg", function(data){
				var group = data.select("g");

				var t = new Snap.Matrix();
				t.translate(position.x-150, position.y-150);
				group.transform(t);
				group.attr({id:position.id, cursor: 'pointer'});
				var move = function(dx,dy) {
					this.attr({
						transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
					});
				}
				var start = function() {
					this.data('origTransform', this.transform().local );
				}
				var stop = function() {
					console.log('finished dragging');
					console.log(this);
				}
				group.drag(move, start, stop);
				parentSvg.group().append(group);
				$scope.addedObject.push(group.node.id);
				$scope.$apply();
			});
		}

		$scope.addCirclePin = function(parentID, position){
			var parentSvg = Snap('#'+parentID);
			var pin = Snap.load("modules/spec-view/img/traval/circlePin.svg", function(data){
				var group = data.select("g");
				var t = new Snap.Matrix();
				t.translate(position.x-150, position.y-150);
				group.transform(t);
				group.attr({id:position.id, cursor: 'pointer'});
				var move = function(dx,dy) {
					this.attr({
						transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
					});
				}
				var start = function() {
					this.data('origTransform', this.transform().local );
				}
				var stop = function() {
					console.log('finished dragging');
					console.log(this);
				}
				group.drag(move, start, stop);
				parentSvg.group().append(group);
				$scope.addedObject.push(group.node.id);
				$scope.$apply();
			});
		}

		Snap.load("modules/spec-view/img/traval/background2.svg", function(data) {
			backSvg.append(data);

			$timeout(function() {
				TweenMax.to('#backGroundSvg', 55, {scrollTo: {y: 0, x: 2000}, ease: Power2.easeInOut});
				var circlePinPosition = {x:98 , y:350, id:'circlePin1'};
				var pinPosition = {x:98 , y:350, id:'pin1'};
				$scope.addCirclePin('backGroundSvg', circlePinPosition);
				$scope.addPin('backGroundSvg', pinPosition);

				var path = Snap('#bikePath');
				var bike = Snap('#bike');
				var len = path.getTotalLength();

				Snap.animate(0, len, function( value ) {
					var movePoint = path.getPointAtLength( value );
					var feetTrans = 't' + parseInt(movePoint.x) + ',' + parseInt( movePoint.y-365) + 'r' + (movePoint.alpha-180);
					//feetTrans2 = 't' + parseInt(movePoint.x - 270) + ',' + parseInt( movePoint.y - 1770) + 'r' + (movePoint.alpha - 90);
					bike.transform(feetTrans);
					//feetG.transform(feetTrans2);
					//console.log(movePoint.alpha);
				}, 55000,mina.easeinout);

				$scope.selectN = false;
				TweenMax.staggerFrom(".frontNavBtn", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
			},1500);
		});


		$scope.stories = [
			{
				num: '1',
				name: '부산 -> 시모노세키',
				totalNum: 3
			},
			{
				num: '2',
				name: '시모노세키 -> 호후'
			},
			{
				num: '3',
				name: '부산 -> 시모노세키'
			},
			{
				num: '4',
				name: '시모노세키 -> 호후'
			},
			{
				num: '5',
				name: '부산 -> 시모노세키'
			},
			{
				num: '6',
				name: '시모노세키 -> 호후'
			},
			{
				num: '7',
				name: '부산 -> 시모노세키'
			},
			{
				num: '8',
				name: '시모노세키 -> 호후'
			},
			{
				num: '9',
				name: '부산 -> 시모노세키'
			},
			{
				num: '10',
				name: '시모노세키 -> 호후'
			},
			{
				num: '11',
				name: '부산 -> 시모노세키'
			},
			{
				num: '12',
				name: '시모노세키 -> 호후'
			},
			{
				num: '13',
				name: '부산 -> 시모노세키'
			},
			{
				num: '14',
				name: '시모노세키 -> 호후'
			}
		];

		$scope.targetDescription = $scope.stories[0];
		$scope.crntPage = 1;

		$scope.start = function(){
			var navClickEvent = new TimelineMax();
			navClickEvent
				.staggerTo(".frontNavBtn", 0.5, {opacity:0, y:-100, ease:Back.easeIn})
				.staggerTo("#nSelect", 0.5, {opacity:0, y:-100, display:'none', ease:Back.easeIn}, "+=0.5")
				.to("#nSelect", 1, {display:'none'},1, "+=1")
				.to("#nSelect2", 1, {width:'90%', maxWidth:'900px', height:'90%', display:'block'}, "+=0.5")
				//.to("#testC", 3, {width:'0%', height:'0%'})
				.to("#storyMenu", 1, {display:'-webkit-inline-box'});
		};

		$scope.mapLoad = function(){
			var mapSvg = Snap('#progressStory');
			Snap.load("modules/spec-view/img/japanmap.svg", function(data){
				mapSvg.attr({ "viewBox": "0 0 300 300", fill:"white"});
				var group = data.select('g');
				mapSvg.append(group);

				$timeout(function(){

					TweenMax.to('#progressStory', 0.5, {display:'block'});
					TweenMax.to('#progressStoryName', 0.5, {display:'block'});

				},1500);
			})
		}

		$scope.startStory = function(storyNum){
			//display:none MapSVG

			TweenLite.to('#progressStory', 0.5, {scale:0.5, x:'80%', position:'absolute'});

			var startSvg = 's'+storyNum;

			var mainSvg = Snap('#mainStory');
			Snap.load("modules/spec-view/img/traval/"+startSvg+"s1.svg", function(data){
				mainSvg.attr({ "viewBox": "0 0 300 300", fill:"white"});
				var group = data.select('g');
				mainSvg.append(group);

				$timeout(function(){
					//$scope.crntPage++;
					TweenLite.set('#mainStory', {display:'block'});
					TweenLite.set('#progressStoryName',{display:'none'});
					TweenLite.to('#storyController', 0.5, {display:'block'});

				},1500);
			})

			console.log(storyNum);
		}

		$scope.nextStory = function(current, totalNum){

			var next = $scope.crntPage+1;

			console.log(next);

			if(next <= totalNum) {
				console.log(next + 'is executed');
				var mainSvg = Snap('#mainStory');
				Snap.load("modules/spec-view/img/traval/s1s"+next+".svg", function(data){
					mainSvg.select('g').remove();
					mainSvg.attr({ "viewBox": "0 0 300 300", fill:"white"});
					var group = data.select('g');
					mainSvg.append(group);

					$timeout(function(){
						$scope.crntPage++;
						TweenLite.to('#progressStory', 0.5, {opacity:0, display:'none'});
						TweenLite.to('#mainStory', 0.5, {display:'block'});
						TweenLite.set('#progressStoryName',{display:'none'});
					},1500);
				})
			} else{
				//finish Season
			}

		}

	}
]);
