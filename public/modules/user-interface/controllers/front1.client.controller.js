'use strict';

angular.module('user-interface').controller('Front1Controller', ['$scope',
	function($scope) {
		$scope.id = 'frint-1';

		var g = Snap('#map');
		g.attr({
			viewBox: [0, 0, 800, 600]
		});

		Snap.load("modules/user-interface/img/map.svg", function (f) {
			function getShift(dot) {
				return "t" + (400 - dot.x) + "," + (300 - dot.y);
			}
			var gr = f.select("g"),
				wrd = f.select("#world").attr({fill: "green"}),
				syd = f.select("#sydney").attr({fill: "red"}),
				msk = f.select("#san_francisco").attr({fill: "red"}),
				pth = f.select("#flight"),
				pln = f.select("#plane"),
				top = g.g();

			top.attr({
				mask: g.rect(100, 0, 600, 600).attr({
					fill: "r(.5,.5,.25)#fff-#000"
				})
			});
			top.add(gr);

			//Text 'Click'
			var click = top.text(410, 310, "click!").attr({
				//font: "20px Source Sans Pro, sans-serif",
				fill: "blue"
			});

			pth.attr({
				display: "none"
			});
			pln = gr.g(pln, pln.clone());
			pln.attr({
				display: "none"
			});
			pln[0].attr({
				stroke: "#fff",
				strokeWidth: 2
			});
			gr.attr({
				transform: getShift({
					x: syd.attr("cx"),
					y: syd.attr("cy")
				})
			});
			var flight = gr.path().attr({
				fill: "none",
				stroke: "red",
				strokeWidth: 3,
				strokeDasharray: "5 3"
			}).insertBefore(pln);

			$scope.getStart = function () {
				pln.attr({
					display: ""
				});
				click.attr({
					display: "none"
				});
				var flag,
					len = Snap.path.getTotalLength(pth.attr("d"));
				Snap.animate(0, len, function (l) {
					// Safari bug workaround: forcing redraw
					g.attr({width: 100 + (flag = !flag ? 1e-5 : 0) + "%"});
					//
					var dot = pth.getPointAtLength(l);
					flight.attr({
						d: pth.getSubpath(0, l)
					});
					pln.attr({
						transform: "t" + [dot.x, dot.y] +
						"r" + (dot.alpha - 90)
					});
					gr.attr({
						transform: getShift(dot)
					});
				}, 5000);
			};
		});


//		var base = Snap('#kiwi_svg');
		var s = Snap("#kiwi_svg");
		s.attr({
			viewBox: [0, 0, 800, 600]
		});
		var group = s.group();
		var tux = Snap.load("modules/user-interface/img/history_path.svg", function ( loadedFragment ) {
			group.append(loadedFragment);
			group.hover(hoverover, hoverout);
			group.text(300, 100, 'hover over me');
		});

		var hoverover = function() { group.animate({ transform: 's2r45,150,150' }, 1000, mina.bounce ) };
		var hoverout = function() { group.animate({ transform: 's1r0,150,150' }, 1000, mina.bounce ) };




		var HeaderSVG = Snap('#svg'), circles = [],
			bg = HeaderSVG.rect(0, 0, 800, 200);

		bg.attr({
			'fill': '#fff'
		});

		var circleGroup = HeaderSVG.group(bg);

// create 200 circles
		for(var i=0; i<200; i++) {
			var size = Math.random()*5 + 3,
				cx = Math.random()*800,
				cy = Math.random()*200,
				opacity = Math.random(),
				fill = '#9d77da',
				counter = Math.random()*360;
			var circ = HeaderSVG.circle(cx, cy, size);
			circ.attr({
				'fill': fill,
				'fill-opacity': opacity
			});
			circ.data('xOffset', cx);
			circ.data('cx', cx);
			circ.data('yOffset', cy);
			circ.data('cy', cy);
			circ.data('counter', counter);
			circles.push(circ);
			circleGroup.add(circ);
		}

		var increase = Math.PI * 2 /40,
			text = HeaderSVG.text(10, 130, "URIMIUM");

		text.attr({
			'font-size': 120,
			'fill': '#fff'
		});

		circleGroup.attr({
			mask: text
		});

		function draw() {
			for(var i=0, l=circles.length; i<l; i++) {
				var circ = circles[i];

				if(circ.data('cy') < 0) {
					circ.data('cy', 200);
				} else {
					circ.data('cy', (circ.data('cy')-2));
				}
				circ.data('cx', (circ.data('xOffset') + (50*(Math.sin( circ.data('counter')) / 5))));
				circ.attr({
					cx: circ.data('cx'),
					cy: circ.data('cy')
				});

				circ.data('counter',      circ.data('counter')+increase);
			}

		}

		function animate() {
			draw();
			window.requestAnimationFrame(animate);
		}

		animate();

	}
]);
