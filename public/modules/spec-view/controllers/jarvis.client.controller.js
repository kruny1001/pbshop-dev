'use strict';

angular.module('spec-view').controller('JarvisController', ['$scope','$timeout',
	function($scope, $timeout) {

		$scope.stories = [
			{
				num: '#1',
				name: '부산 -> 시모노세키'
			},
			{
				num: '#2',
				name: '시모노세키 -> 호후'
			},
			{
				num: '#3',
				name: '부산 -> 시모노세키'
			},
			{
				num: '#4',
				name: '시모노세키 -> 호후'
			},
			{
				num: '#5',
				name: '부산 -> 시모노세키'
			},
			{
				num: '#6',
				name: '시모노세키 -> 호후'
			},
			{
				num: '#7',
				name: '부산 -> 시모노세키'
			},
			{
				num: '#8',
				name: '시모노세키 -> 호후'
			},
			{
				num: '#9',
				name: '부산 -> 시모노세키'
			},
			{
				num: '#10',
				name: '시모노세키 -> 호후'
			},
			{
				num: '#11',
				name: '부산 -> 시모노세키'
			},
			{
				num: '#12',
				name: '시모노세키 -> 호후'
			}
		]

		// Jarvis controller logic
		// ...
		$scope.selectN = false;
		TweenMax.staggerFrom(".frontNavBtn", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);


		$(".frontNavBtn").click(function(){
			var navClickEvent = new TimelineMax();
			navClickEvent.staggerTo(".frontNavBtn", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1)
				.staggerTo("#nSelect", 0.5, {opacity:0, y:-100, display:'none', ease:Back.easeIn}, 0.1)
				.to("#nSelect", 1, {display:'none'},0.1)
				.to("#nSelect2", 1, {width:'90%', height:'90%', maxWidth:'100%', ease:Back.easeIn}, 0.1)
				.to("#testC", 3, {width:'0%', height:'0%'})
				.to("#storyMenu", 3, {display:'-webkit-inline-box'});

		});

		var logoSvg = Snap('#testC');
		Snap.load("modules/spec-view/img/ja1.svg", function(data) {
		//Snap.load("http://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png", function(data) {

			//logoSvg.append(data);

			logoSvg.attr({ "viewBox": "0 0 300 300", fill:"white"});

			var group = data.select('g');
			logoSvg.append(group);

			//group.attr({transform:'top, right'});
			//if($("#jarvisMain").length == 0)
			//	group.appendTo(logoSvg);

			$timeout(function(){
				TweenMax.to('#OutterArc', 20, {rotation:360, repeat:-1, transformOrigin :"50% 50%"});
			},1500);
		});
	}
]);
