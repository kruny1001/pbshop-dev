'use strict';

angular.module('spec-view').factory('Project1', [
	function() {
		return {
			getTransfromOrigin: function(SnapElem, container) {
				var d1 = Snap('#desc1');
				var d2 = Snap('#desc2');
				var d3 = Snap('#desc3');

				var getTxTy = function(SnapElem, scale){

					var t = Snap();
					t = SnapElem;
					var centerX         = t.getBBox().cx;
					var centerY         = t.getBBox().cy;
					var width           = t.getBBox().width;
					var height          = t.getBBox().height;// width = height = radius
					var containerW      = 1158//$('#'+container).width();
					var containerH      = 450//$('#'+container).height();

					var sX = containerW / width;
					var sY = containerH / height;
					var s = sX < sY ? sX : sY;

					s=scale;

					var tx = -centerX + containerW / 2;
					var ty = -centerY + containerH / 2;

					var newTransform = new Snap.Matrix().translate(tx,ty);
					newTransform.scale(s,s,containerW / 2 -tx, containerH / 2 -ty);

					return newTransform;
				}



				var next = function() {
					console.log('next');
					TweenMax.from('#time1', 2, {rotation: 360, transformOrigin: "50% 50%"});

					Snap('#entireGroup').animate({
						//transform: new Snap.Matrix().scale(s).translate(tx, ty).toTransformString();
						transform: getTxTy(d2,2).toTransformString()
					}, 1400, mina.backout, next2);
				};

				var next2 = function() {
					console.log('next');
					TweenMax.from('#time1', 2, {rotation: 360, transformOrigin: "50% 50%"});

					Snap('#entireGroup').animate({
						//transform: new Snap.Matrix().scale(s).translate(tx, ty).toTransformString();
						transform: getTxTy(d3,2).toTransformString()
					}, 1400, mina.backout, next3);
				};

				var next3 = function() {
					console.log('next');
					TweenMax.from('#time1', 2, {rotation: 360, transformOrigin: "50% 50%"});


					Snap('#entireGroup').animate({
						//transform: new Snap.Matrix().scale(s).translate(tx, ty).toTransformString();
						transform: 'S1'
					}, 1400, mina.backout);
				};


				Snap('#entireGroup').animate({
					//transform: new Snap.Matrix().scale(s).translate(tx, ty).toTransformString();
					transform: getTxTy(d1, 2).toTransformString()
				}, 1400, mina.backout, next);
			}
		};
	}
]);
