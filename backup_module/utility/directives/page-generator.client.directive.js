'use strict';

angular.module('utility').directive('pageGenerator', [
	function() {
		return {
			template: '<div ng-bind-html="view"></div>',
			restrict: 'E',
			scope:{
				pageInfo: '='
			},
			link: function postLink(scope, element, attrs) {
				var generateView = function() {
					return '<h2>Hello World</h2><img src="http://www.ilbe.com/mylogo/ilbe.png">'
				};

				if(scope.pageInfo != null){
					console.log(scope.pageInfo);
					scope.view = scope.pageInfo;
				}
				else{
					scope.pageInfo = {
						frame: ['r1c1'],
						name: 'test',
						appliedDirective: {
							Article:['r1c1']
						}
					};
					scope.view ='<h2>There is no Page Content</h2>';
				}
			}
		};
	}
]);
