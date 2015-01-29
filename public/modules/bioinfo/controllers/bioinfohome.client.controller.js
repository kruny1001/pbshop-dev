"use strict";

angular.module('bioinfo').controller('BioinfohomeController', ['$scope','$http',
	function($scope,$http) {
		$scope.gsbks = [];

            $http.get('gskbs-analysis/year').success(function(data){
                $scope.gsbksIndex = data[0].result;
                //console.log(data);
                x.domain(data[0].result.map(function(d) { return d._id; }));
                y.domain([0, d3.max(data[0].result, function(d) { return d.value; })]);

                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("class", "y axis")
                    .call(yAxis)
                    .append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("dy", ".71em")
                    .style("text-anchor", "end")
                    .text("Total Indexs");

                svg.selectAll(".bar")
                    .data(data[0].result)
                    .enter().append("rect")
                    .attr("class", "bar")
                    .attr("x", function(d) { return x(d._id); })
                    .attr("width", x.rangeBand())
                    .attr("y", function(d) { return y(d.value); })
                    .attr("height", function(d) { return height - y(d.value);});
		    });


        /////
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10, "%");

        var svg = d3.select("#graph").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        function type(d) {
            d.value = +d.value;
            return d;
        }
        //////
	}
]);
