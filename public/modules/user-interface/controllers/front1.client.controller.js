'use strict';

angular.module('user-interface').controller('Front1Controller', ['$scope',
	function($scope) {
		$scope.id = 'frint-1';
		var boxGraphic = Snap('#boxSvg');
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



*/


		///////////////////////////////////////////////
		/* Coffee Maker
		var s = Snap(1000, 800),
			p = 100 / 30,
			h = 250,
			x = 400,
			y = 200,
			R = 100,
			r = 70,
			open = 0,
			gstream,
			gmilk = "l()#F4EEE6-#fff:50-#F4EEE6:50-#F4EEE6",
			gcoffee = "l()#60544F-#8c7a73:50-#60544F:50-#60544F",
			gwater = "l()#B4D6DB-#D6EDEE:50-#B4D6DB:50-#B4D6DB";

		Snap.load("modules/user-interface/img/demo.svg", function (f) {
			var top = f.select("#top"),
				bot = f.select("#bottom"),
				tap = f.select("#tap"),
				knob = f.select("#knob"),
				dot = f.select("#dot"),
				arr = f.select("#arrow"),
				knobcx = knob.attr("cx"),
				knobcy = knob.attr("cy"),
				lead = f.select("#lead"),
				pie = {
					cx: f.select("#pie-chart circle").attr("cx"),
					cy: f.select("#pie-chart circle").attr("cy"),
					r: f.select("#pie-chart circle").attr("r"),
					coffee: f.select("#legend text"),
					water: f.selectAll("#legend text")[1],
					title: f.selectAll("#legend text")[2],
					waterBox: f.select("#legend rect:nth-child(2)")
				},
				angle = 0,
				lastAngle,
				startAngle,
				leadOpenPath = lead.attr("d"),
				leadClosedPath = f.select("#lead-target").attr("d"),
				closed,
				grp = s.g().insertBefore(tap);
			f.select("#pie-chart").remove();
			f.select("#americano-area").click(function () {
				chosen(0);
			});
			f.select("#latte-area").click(function () {
				chosen(72);
			});
			f.select("#mocha-area").click(function () {
				chosen(144);
			});
			f.select("#mochiatto-area").click(function () {
				chosen(216);
			});
			f.select("#espresso-area").click(function () {
				chosen(288);
			});
			x = +top.attr("cx");
			y = +top.attr("cy");
			R = +top.attr("rx");
			r = +bot.attr("rx");
			h = bot.attr("cy") - y;
			s.add(f.select("g"));
			lead.click(function () {
				var path,
					ease;
				if (closed) {
					path = leadOpenPath;
					ease = mina.easein;
					closed = 0;
				} else {
					path = leadClosedPath;
					ease = mina.bounce;
					closed = 1;
				}
				lead.stop().animate({
					d: path
				}, 1000, ease);
			});

			knob.attr({
				fill: "#000",
				opacity: 0
			}).drag(function (dx, dy, x, y) {
				var a = Snap.angle(knobcx, knobcy, x, y) - startAngle + angle;
				dot.transform("r" + [a, knobcx, knobcy]);
				arr.transform("r" + [a, knobcx, knobcy]);
				lastAngle = a;
			}, function (x, y) {
				startAngle = Snap.angle(knobcx, knobcy, x, y);
				lastAngle = angle;
				dot.stop();
				arr.stop();
			}, function () {
				angle = lastAngle;
				var a = Snap.snapTo(72, angle, 36);
				chosen(a);
			});
			function chosen(a) {
				a = (a + 1080) % 360;
				angle = a;
				var to = "r" + [a, knobcx, knobcy];
				dot.animate({
					transform: to
				}, 1000, mina.elastic);
				arr.animate({
					transform: to
				}, 1000, mina.elastic, function () {
					closeCup(function () {
						types[a]();
						pour();
						pieShow();
					});
				});
			}

			grp.path(outline(0, h)).attr("class", "outline");
			var o3 = (h - 70) / 3,
				o2 = (h - 70) / 2,
				cover = grp.ellipse(getEll(h - 60)).attr("class", "water"),
				ct1 = grp.path(cut(10, 10 + o3, 0)).attr({
					fill: gcoffee
				}),
				ct2 = grp.path(cut(10 + o3, h - 60, 0)).attr({
					fill: gwater
				}),
				middle = 10 + o3,
				pieCoffee,
				pieTitle,
				pieType,
				g = grp.g(),
				dr = grp.path(doors(0)).attr("class", "doors"),
				types = {
					// americano
					0: function () {
						cover.attr("class", "water");
						ct2.attr("fill", gwater);
						middle = 10 + o3;
						pieCoffee = 1 / 3;
						pieType = "water";
						pieTitle = "Americano";
						gstream = "l(0,1,0,0)#60544F-#60544F:33-#B4D6DB";
					},
					// latté
					72: function () {
						cover.attr("class", "milk");
						ct2.attr("fill", gmilk);
						middle = 10 + o3 * 2;
						pieCoffee = 2 / 3;
						pieType = "milk";
						pieTitle = "Latté";
						gstream = "l(0,1,0,0)#60544F-#60544F:66-#fff";
					},
					// mocha
					144: function () {
						cover.attr("class", "milk");
						ct2.attr("fill", gmilk);
						middle = 10 + o3;
						pieCoffee = 1 / 3;
						pieType = "milk";
						pieTitle = "Mocha";
						gstream = "l(0,1,0,0)#60544F-#60544F:33-#fff";
					},
					// machiatto
					216: function () {
						cover.attr("class", "milk");
						ct2.attr("fill", gmilk);
						middle = 10 + o2;
						pieCoffee = 1 / 2;
						pieType = "milk";
						pieTitle = "Machiatto";
						gstream = "l(0,1,0,0)#60544F-#60544F:50-#fff";
					},
					// espresso
					288: function () {
						cover.attr("class", "coffee");
						ct2.attr("fill", gcoffee);
						middle = 10;
						pieCoffee = 1;
						pieType = "milk";
						pieTitle = "Espresso";
						gstream = "#60544F";
					}
				};
			function closeCup(callback) {
				Snap.animate(90, 0, function (val) {
					ct1.attr("path", cut(10, middle, val));
					ct2.attr("path", cut(middle, h - 60, val));
					dr.attr("path", doors(val));
				}, 500, mina.easein, callback);
			}
			function pour() {
				steam(g, function () {
					Snap.animate(0, 90, function (val) {
						ct1.attr("path", cut(10, middle, val));
						ct2.attr("path", cut(middle, h - 60, val));
						dr.attr("path", doors(val));
					}, 1500, mina.elastic);
				});
			}
			var pieShow = (function () {
				var disc = s.circle(pie.cx, pie.cy, pie.r).attr({
						fill: "#fff",
						stroke: "#60544F"
					}),
					coffee = s.path().attr({
						stroke: "#60544F",
						strokeWidth: pie.r,
						fill: "none"
					}),
					olda = 0,
					a;
				return function () {
					var cof = pieCoffee,
						type = pieType;
					a = 360 * cof / 2;
					pie.waterBox.attr({
						fill: type == "water" ? "#d6edee" : "#fff"
					});
					disc.attr({
						fill: type == "water" ? "#d6edee" : "#fff"
					});
					pie.title.attr({
						"#text": pieTitle
					});
					pie.coffee.attr({
						"#text": "Espresso (" + Math.round(cof * 100) + "%)"
					});
					pie.water.attr({
						"#text": (type == "water" ? "Hot Water" : "Milk") + " (" + (100 - Math.round(cof * 100)) + "%)"
					});
					Snap.animate(olda, a, function (val) {
						coffee.attr({
							d: "M" + [pie.cx, pie.cy] +
							"U" + [pie.r / 2, 90 - val, 90 + val]
						});
					}, 500, function () {
						if (cof == 1) {
							disc.attr({
								fill: "#60544F"
							});
						}
					});
					olda = a;
				};
			}());

			types[0]();
			pour();
			pieShow();
		});


		function getEll(height) {
			var ra = r + (R - r) / h * height;
			return {
				cx: x,
				cy: y + h - height,
				rx: ra,
				ry: ra / p
			};
		}
		function arc(cx, cy, R, r, from, to, command) {
			var start = pointAtAngle(cx, cy, R, r, from),
				end = pointAtAngle(cx, cy, R, r, to);
			command = command || "M";
			return command + Snap.format("{sx},{sy}A{R},{r},0,{big},{way},{tx},{ty}", {
					sx: start.x,
					sy: start.y,
					R: R,
					r: r,
					tx: end.x,
					ty: end.y,
					big: +(Math.abs(to - from) > 180),
					way: +(from > to)
				});
		}
		function pointAtAngle(cx, cy, rx, ry, angle) {
			angle = Snap.rad(angle);
			return {
				x: cx + rx * Math.cos(angle),
				y: cy - ry * Math.sin(angle)
			};
		}
		function doors(alpha) {
			var sa = 270 - alpha / 2,
				ea = 270 + alpha / 2;
			if (alpha) {
				return arc(x, y, R, R / p, 180, sa) + arc(x, y + h, r, r / p, sa, 180, "L") + "z" +
					arc(x, y, R, R / p, ea, 360) + arc(x, y + h, r, r / p, 360, ea, "L") + "z";
			} else {
				return arc(x, y, R, R / p, 180, 360) + arc(x, y + h, r, r / p, 360, 180, "L") + "z";
			}
		}
		function fill(from, to) {
			var start = getEll(from),
				end = getEll(to);
			return "M" + (start.cx - start.rx) + "," + start.cy + "h" + start.rx * 2 +
				arc(end.cx, end.cy, end.rx, end.ry, 0, 180, "L") + "z";
		}
		function outline(from, to) {
			var start = getEll(from),
				end = getEll(to);
			return arc(start.cx, start.cy, start.rx, start.ry, 180, 0) +
				arc(end.cx, end.cy, end.rx, end.ry, 0, 180, "L") + "z";
		}
		function cut(from, to, alpha) {
			var s = getEll(from),
				e = getEll(to),
				sa = Snap.rad(270 - alpha / 2),
				ea = Snap.rad(270 + alpha / 2);
			return "M" + [s.cx, s.cy,
					s.cx + s.rx * Math.cos(ea), s.cy - s.ry * Math.sin(ea),
					e.cx + e.rx * Math.cos(ea), e.cy - e.ry * Math.sin(ea),
					e.cx, e.cy,
					e.cx + e.rx * Math.cos(sa), e.cy - e.ry * Math.sin(sa),
					s.cx + s.rx * Math.cos(sa), s.cy - s.ry * Math.sin(sa)
				] + "z";
		}
		function steam(g, callback) {
			g.rect(x - 10, y - 1030, 20, 1000, 10).attr({
				fill: gstream,
				clip: s.rect(x - 10, y - 200, 20, h + 200)
			}).animate({y: y + 40}, 800, function () {
				this.remove();
			});
			s.ellipse(x, y, R, R/p).attr({
				fill: "#fff",
				filter: s.filter(Snap.filter.blur(10))
			}).animate({cy: y - 30, opacity: 0}, 1000, callback);
		}
		*/
	}
]);
