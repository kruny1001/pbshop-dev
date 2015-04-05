'use strict';

angular.module('etc').directive('colorPicker', [
	function() {
		return {
			templateUrl: 'modules/etc/directives/template/color-picker.html',
			restrict: 'E',
			controller: ColorPickerCtrl,
			controllerAs: 'vm',
			link: function postLink(scope, element, attrs) {

			}
		};

		function ColorPickerCtrl($scope) {
			this.tiles = buildGridModel({
				icon : "avatar:svg-",
				title: "Svg-",
				background: ""
			});
			function buildGridModel(tileTmpl){
				var it, results = [ ];
				for (var j=0; j<18; j++) {
					it = angular.extend({},tileTmpl);
					it.icon  = it.icon + (j+1);
					it.title = it.title + (j+1);
					it.span  = { row : "1", col : "1" };
					switch(j+1) {
						case 1:
							it.background = "red"; it.img="modules/etc/img/1.jpg"
							it.span.row = it.span.col = 2;
							break;
						case 2: it.background = "green"; it.img="modules/etc/img/2.jpg"; break;
						case 3: it.background = "darkBlue"; it.img="modules/etc/img/3.jpg"; break;
						case 4:
							it.background = "blue";
							it.span.row = it.span.col = 2;
							it.img="modules/etc/img/4.jpg";
							break;
						case 5:
							it.background = "yellow";
							it.span.row = it.span.col = 2;
							it.img="modules/etc/img/5.jpg";
							break;
						case 6:
							//it.span.row = it.span.col = 4;
							it.background = "pink";it.img="modules/etc/img/6.jpg"; break;
						case 7: it.background = "darkBlue";it.img="modules/etc/img/7.jpg"; break;
						case 8:
							//it.span.row = it.span.col = 6;
							it.background = "purple";it.img="modules/etc/img/8.jpg"; break;
						case 9: it.background = "deepBlue";it.img="modules/etc/img/9.jpg"; break;
						case 10: it.span.row = it.span.col = 2; it.background = "lightPurple";it.img="modules/etc/img/10.jpg"; break;
						case 11: it.background = "yellow";it.img="modules/etc/img/11.jpg"; break;
						case 12: it.background = "deepBlue";it.img="modules/etc/img/9.jpg"; break;
						case 13: it.background = "lightPurple";it.img="modules/etc/img/10.jpg"; break;
						case 14: it.background = "yellow";it.img="modules/etc/img/11.jpg"; break;
						case 15: it.background = "deepBlue";it.img="modules/etc/img/9.jpg"; break;
						case 16: it.background = "lightPurple";it.img="modules/etc/img/10.jpg"; break;
						case 17: it.background = "yellow";it.img="modules/etc/img/11.jpg"; break;
						case 18: it.background = "yellow";it.img="modules/etc/img/12.jpg"; break;
					}
					results.push(it);
				}
				return results;
			}
		}
	}
]);