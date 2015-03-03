'use strict';

angular.module('d2l-ads').directive('lineTrasit', [
	function() {
		return {
			template: '<div class="svg-container" id="lineTransit"></div>',
			restrict: 'E',
			link: {
				post:function postLink(scope, element, attrs) {
					var n = 40,
						random = d3.random.normal(0, .2),
						data = d3.range(n).map(random);

					var margin = {top: 20, right: 20, bottom: 20, left: 40},
						width = 400 - margin.left - margin.right,
						height = 300 - margin.top - margin.bottom;

					var x = d3.scale.linear()
						.domain([0, n - 1])
						.range([0, width]);

					var y = d3.scale.linear()
						.domain([-1, 1])
						.range([height, 0]);

					var line = d3.svg.line()
						.x(function(d, i) { return x(i); })
						.y(function(d, i) { return y(d); });

					var svg = d3.select("#lineTransit").append("svg")
						.attr("id","svg-line-transit")
						.attr("viewBox","0 0 400 300")
						.attr("perserveAspectRatio","xMinYMid")
						.attr("width", width + margin.left + margin.right)
						.attr("height", height + margin.top + margin.bottom)
						.append("g")
						.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

					svg.append("defs").append("clipPath")
						.attr("id", "clip")
						.append("rect")
						.attr("width", width)
						.attr("height", height);

					svg.append("g")
						.attr("class", "x axis")
						.attr("transform", "translate(0," + y(0) + ")")
						.call(d3.svg.axis().scale(x).orient("bottom"));

					svg.append("g")
						.attr("class", "y axis")
						.call(d3.svg.axis().scale(y).orient("left"));

					var path = svg.append("g")
						.attr("clip-path", "url(#clip)")
						.append("path")
						.datum(data)
						.attr("class", "line")
						.attr("d", line);

					tick();

					function tick() {

						// push a new data point onto the back
						data.push(random());

						// redraw the line, and slide it to the left
						path
							.attr("d", line)
							.attr("transform", null)
							.transition()
							.duration(500)
							.ease("linear")
							.attr("transform", "translate(" + x(-1) + ",0)")
							.each("end", tick);

						// pop the old data point off the front
						data.shift();

					}

					var c = $('#svg-line-transit');
					var aspect = c.width()/c.height();
					var container = c.parent().parent().parent();
					$(window).on("resize", function(){
						var container = c.parent().parent().parent();
						var targetWidth = container.width();
						c.attr("width", targetWidth);
						c.attr("height", Math.round(targetWidth/aspect));
						console.log('changed');
					}).trigger("resize");
				}
			}
		};
	}
]);
