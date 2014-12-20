'use strict';

angular.module('spec-view').controller('JarvisController', ['$scope','$timeout',
	function($scope, $timeout) {
		//Load Background SVG
		var backSvg = Snap('#backGroundSvg');
		var s = Snap("#smallMapSvg");
		var g = s.group();
		var l = Snap.load("modules/spec-view/img/traval/background2.svg", onSVGLoaded ) ;
		var customPart = Snap.load("modules/spec-view/img/traval/customPart.svg", onSVGLoaded2 )

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

		Snap.load("modules/spec-view/img/traval/background2.svg", function(data) {
			//Snap.load("http://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png", function(data) {

			//logoSvg.append(data);

			//backSvg.attr({"viewBox": "0 0 300 300", fill: "white"});
			backSvg.append(data);

			$timeout(function() {
				TweenMax.to('#backGroundSvg', 55, {scrollTo: {y: 0, x: 2000}, ease: Power2.easeInOut});

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
