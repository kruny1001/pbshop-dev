'use strict';

angular.module('tj-hair').controller('TjMainController', ['$scope','$timeout',
	function($scope, $timeout) {
		// Tj main controller logic
		// ...

		$scope.addAvatar = function(parentID, position){
			var parentSvg = Snap('#'+parentID);
			var pin = Snap.load("modules/tj-hair/img/people1.svg", function(data){
				var group = data;

				/*
				var t = new Snap.Matrix();
				t.translate(position.x, position.y);
				t.scale(1);
				group.transform(t);
				group.attr({id:position.id, cursor: 'pointer'});
				 */
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

				//group.drag(move, start, stop);
				parentSvg.append(group);
				//$scope.addedObject.push(group.node.id);
				$scope.$apply();
			});
		}

		var backSvg = Snap('#backGroundSvg');
		Snap.load("modules/tj-hair/img/building1.svg", function(data) {
			backSvg.append(data);

			$timeout(function() {
				var circlePinPosition = {x:'443' , y:'299', id:'circlePin1'};
				$scope.addAvatar('backGroundSvg', circlePinPosition);
				/*
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
				*/
			},1500);
		});
	}
]);
