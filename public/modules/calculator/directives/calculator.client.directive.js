'use strict';

angular.module('calculator')
	// Cal Service
	.service("calService", function AppCalHistoryCtrl(){
		var calService = this;
		calService.history=[];
	})
	// End Cal Service

	// Directive Calculator
	.directive('calculator', [
		function() {
			return {
				templateUrl: 'modules/calculator/directives/template/interface.html',
				restrict: 'E',
				bindToController: true,
				controller: "AppCalCtrl as appCal"
			};
		}
	])
	.controller("AppCalCtrl", function AppCalCtrl(calService){
		var appCal = this;
		appCal.input = '';
		var operators = ['+', '-', 'x', '÷'];

		appCal.clear = function(){
			appCal.input = '';
		}
		appCal.execution = function() {
			var equation = appCal.input;

			var lastChar = equation[equation.length - 1];

			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');


			if(equation){
				calService.history.push({equation:appCal.input, result:eval(equation)});
				appCal.input = eval(equation);
			}
		}
		appCal.dataIn = function(event) {
			var input = event.target.innerText;
			appCal.input += input;
		}
	})

	// History Directive
	.directive('calHistory', [
		function() {
			return {
				template: '<div id="calHistory" ng-repeat="history in appCalHistory.histories"><h4>h{{$index + 1}}: {{history.equation}} = {{history.result}}</h4></div>',
				restrict: 'E',
				bindToController: true,
				controller: "AppCalHistoryCtrl as appCalHistory"
			};
		}
	])
	.controller("AppCalHistoryCtrl", function AppCalHistory(calService){
		var appCalHistory = this;
		appCalHistory.histories = calService.history;
	})
	// End History Directive


