'use strict';

angular.module('mean-tutorials').controller('Project1Controller', ['$scope','$document','$timeout',
	function($scope, $document, $timeout) {



			var win, productSearch,
				productInput, siteSearch, siteInput,
				productButton, siteButton, megaSearch,
				searchField, transX;

			function onDocumentReady() {
				win = $(window);
				megaSearch = $(document.getElementById('mega-search'));
				productSearch = $(document.getElementById('mega-productsearch'));
				productInput = $(document.getElementById('mega-p-s'));
				productButton = $(document.getElementById('product-submit'));
				siteSearch = $(document.getElementById('mega-sitesearch'));
				siteInput = $(document.getElementById('mega-s'));
				siteButton = $(document.getElementById('full-site-submit'));
				searchField = megaSearch.find('.search-form-field');

				if (win.width() < 568) {
					transX = '-38px';
				} else {
					transX = '-62px';
				}

				if (megaSearch.length > 0) {
					searchFormInit();
					searchField.on('focus', onInactiveFocus);
				}
			}

			function searchFormInit() {
				siteSearch.stop(true, false).velocity({
					opacity: 0.39,
					translateX: transX,
					translateY: '51px',
					translateZ: '-200px'
				}, 0);

				productSearch.stop(true, false).velocity({
					opacity: 1,
					translateX: 0,
					translateY: 0,
					translateZ: 0
				}, 0);

				productButton.on('click', function() {
					return false;
				});
				siteButton.on('click', function() {
					return false;
				});
			}

			function onInactiveFocus(e) {
				var focused = $(e.currentTarget),
					focusedParent = focused.closest('.search-form'),
					sibling = focusedParent.siblings('.search-form');


				if (focusedParent.hasClass('inactive')) {

					focusedParent.removeClass('inactive').addClass('active')
						.stop(true, false).velocity({
							translateX: 0,
							translateZ: 0
						}, 300)
						.stop(true, false).velocity({
							opacity:1,
							translateY: 0
						}, {delay:200}, 300)
						.find('.button').stop(true, false).velocity('fadeIn', {delay: 600}, {duration:300}, "ease");

					sibling.removeClass('active').addClass('inactive')
						.stop(true, false).velocity({
							translateX: transX,
							translateZ: '-200px'
						}, 300)
						.stop(true, false).velocity({
							opacity: 0.39,
							translateY: '51px'
						}, {delay:200}, 300)
						.find('.button').stop(true, false).velocity('fadeOut', {duration:10});
				}
			}
			$document.ready(function(){
				$(onDocumentReady);
			});



		// Project1 controller logic
		// ...

		/*
		var width = 960,
			height = 500,
			centered;

		var projection = d3.geo.albersUsa()
			.scale(1070)
			.translate([width / 2, height / 2]);

		var path = d3.geo.path()
			.projection(projection);

		var svg = d3.select("#geo").append("svg")
			.attr("width", width)
			.attr("height", height);

		svg.append("rect")
			.attr("class", "background")
			.attr("width", width)
			.attr("height", height)
			.on("click", clicked);

		var g = svg.append("g");



		d3.json("/modules/mean-tutorials/img/us.json"
			, function(error, us){
				g.append("g")
					.attr("id", "states")
					.selectAll("path")
					.data(topojson.feature(us, us.objects.states).features)
					.enter().append("path")
					.attr("d", path)
					.on("click", clicked);

				g.append("path")
					.datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
					.attr("id", "state-borders")
					.attr("d", path);
			}
		);

		function clicked(d) {
			var x, y, k;

			if (d && centered !== d) {
				var centroid = path.centroid(d);
				x = centroid[0];
				y = centroid[1];
				k = 4;
				centered = d;
			} else {
				x = width / 2;
				y = height / 2;
				k = 1;
				centered = null;
			}

			g.selectAll("path")
				.classed("active", centered && function (d) {
					return d === centered;
				});

			g.transition()
				.duration(750)
				.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
				.style("stroke-width", 1.5 / k + "px");
		}
		*/
	}
]);
