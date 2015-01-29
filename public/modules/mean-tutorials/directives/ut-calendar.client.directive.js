"use strict";

angular.module('mean-tutorials').directive('utCalendar', ['UtCalendar',
	function(UtCalendar) {
		return {
			template: '<div class="container" style="margin-top:20px">'+
                        '<table id="calendar" class="meanT-calendar"></table>'+
                      '</div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
                UtCalendar.calendar();
			}
		};
	}
]);
