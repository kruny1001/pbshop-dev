'use strict';

angular.module('calculator')
	// Cal Service
	.service("calService", function AppCalHistoryCtrl(){
		var calService = this;
		calService.history=[];
	})
	// Cal Factory
	.factory('calFactory', function(){
		var histories = [];
		return {
			addHistory: function(history){
				histories.push(history);
				console.log('factory is executed');
				console.log(histories);
			},
			getHistory: function(){
				return histories;
			},
            getHistoryByIndex: function(index){
                return histories[index];
            }
		}
	})



	// End Cal Service

	// Directive Calculator
	.directive('calculator', [
		function() {
			return {
				templateUrl: 'modules/calculator/directives/template/interface.html',
				restrict: 'AE',
				bindToController: true,
				controller: "AppCalCtrl as appCal"
			};
		}
	])
	.controller("AppCalCtrl", function AppCalCtrl($scope, calService, calFactory){
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
				// Service
				//calService.history.push({equation:appCal.input, result:eval(equation)});
				// Factory
				calFactory.addHistory({equation:appCal.input, result:eval(equation)});
				appCal.input = eval(equation);
			}
		}
		appCal.dataIn = function(event) {
			var input = event.target.innerText;
			appCal.input += input;
		}

        $scope.$on('handleBroadcast', function(event, args) {
            appCal.input = calFactory.getHistoryByIndex(args.message).equation//'ONE: ' + args.message;
        });
    })

	// History Directive
	.directive('calHistory', [
		function() {
			return {
				templateUrl: 'modules/calculator/directives/template/history.html',
				restrict: 'E',
				bindToController: true,
				controller: "AppCalHistoryCtrl as appCalHistory"
			};
		}
	])
	.controller("AppCalHistoryCtrl", function AppCalHistory($scope, calService, calFactory){
		var appCalHistory = this;

		//Service Way
		//appCalHistory.histories = calService.history;

		//Factory Way
		appCalHistory.histories = calFactory.getHistory();

        // emit
        appCalHistory.clickHistory = function(input){
            console.log(input + "index is ");
            $scope.$emit('handleEmit', {message: input});
        }
		/*
		Singleton Factory
		appCalHistory.refresh = function(){
			appCalHistory.histories = calFactory.getHistory();
		}
		*/

	})
	// End History Directive


