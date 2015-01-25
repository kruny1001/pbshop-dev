'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'mean';
	var applicationModuleVendorDependencies =
        [
            'ngResource',
            'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router',
            //'ui.bootstrap', 'ui.utils',
            'ngMaterial', /*'ng-context-menu', 'uiGmapgoogle-maps',*/'smart-table','oc.lazyLoad'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('animation');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('articles');
'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('bioinfo');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('calculator');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
/**
 * Created by Kevin on 2014-11-26.
 */

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('disqus');

'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('mean-events');
'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('mean-tutorials');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('user-interface');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

//Setting up route
angular.module('animation').config(['$stateProvider',
	function($stateProvider) {
		// Animation state routing
		$stateProvider.
		state('svg1', {
			url: '/svg1',
			templateUrl: 'modules/animation/views/svg1.client.view.html'
		}).
		state('ryuhm12', {
			url: '/ryuhm12',
			templateUrl: 'modules/animation/views/ryuhm12.client.view.html'
		}).
		state('j1', {
			url: '/j1',
			templateUrl: 'modules/animation/views/j1.client.view.html'
		}).
		state('three', {
			url: '/three',
			templateUrl: 'modules/animation/views/three.client.view.html'
		});
	}
]);
'use strict';

angular.module('animation').controller('J1Controller', ['$scope', '$timeout',
	function($scope, $timeout) {

		var svgMVMU = Snap('#j1Svg');
		Snap.load("modules/animation/img/svg/j1.svg", function(data) {
			svgMVMU.append(data);

			var wholeSvg = $('#j1Svg svg').children();
			TweenMax.set(wholeSvg,{opacity: 0});

			$timeout(function(){

			var s1 = $('#S1');
			var s1TimeLine = new TimelineMax();
			s1TimeLine.to(s1, 1.5, {opacity:1});

			var s2 = $('#S2');
			var s2TimeLine = new TimelineMax();
			s2TimeLine.to(s2, 1.5, {opacity:1});

			var s3 = $('#S3');
			var s3TimeLine = new TimelineMax();
			s3TimeLine.to(s3, 1.5, {opacity:1});

			var s4 = $('#S4');
			var s4TimeLine = new TimelineMax();
			s4TimeLine.to(s4, 1.5, {opacity:1});

			var s5 = $('#S5');
			var grouptS5 = s5.children();
			var leftEar = $('#leftEar');
			var rightEar = $('#rightEar');
			var glasses = $('#glasses');
			var hair = $('#hair');
			var rightEye = $('#rightEye');
			var leftEye = $('#leftEye');

			var s5TimeLine = new TimelineMax();
			s5TimeLine

				.to([leftEar, rightEar], 1, {opacity:1})
				.to([glasses, hair], 1, {opacity:1})
				.to([leftEye, rightEye],1 ,{opacity:1});

			var s6 = $('#S6');
			var s6TimeLine = new TimelineMax();
			s6TimeLine.to(s6, 1, {opacity:1});

			var effect = $('#effect');
			var grountEffects = effect.children();
			var faceColor = $('#faceColor');
			var logo = $('#logo');
			var rightAir = $('#rightAir');
			var leftAir = $('#leftAir');
			var eyeAngry = $('#eyeAngry');
			var rightEyeBall = rightEye.find('ellipse');
			var effectTimeLine = new TimelineMax();
			effectTimeLine
				.to(logo, 2, {scale: 1, x: -10, opacity:1})
				.to(rightEye, 2, {scale:1.2})
				.to(rightEyeBall, 3, {rotationX:50, transformOrigin:"0% 100%"})
				.to(rightEyeBall, 2, {rotationX:0, transformOrigin:"0% 100%"})
				.to(rightEye, 2, {scale:1})
				.to(faceColor, 0.25, {opacity: 1})
				.to(faceColor, 0.25, {opacity: 0})
				.to(faceColor, 0.25, {opacity: 1})
				.to(faceColor, 0.25, {opacity: 0})
				.to(eyeAngry, 1, {opacity:1})
				.to(leftAir, 0.25, {opacity: 1})
				.to(rightAir, 0.25, {opacity: 1})
				.to(leftAir, 0.25, {opacity: 0})
				.to(rightAir, 0.25, {opacity: 0})
				.to([leftAir,rightAir], 0.25, {opacity: 1})
				.to([leftAir,rightAir], 0.25, {opacity: 0})
				.to([leftAir,rightAir], 0.25, {opacity: 1})
				.to(faceColor, 2, {opacity: 1})
				.to(logo, 2, {scale: 0.5, x: -10})

				var audio = document.getElementById("audioTag");
				audio.play();
				var masterTimeLine = new TimelineMax();
				masterTimeLine
					.add(s1TimeLine)
					.add(s2TimeLine)
					.add(s3TimeLine)
					.add(s4TimeLine)
					.set(s5, {opacity:1})
					.set(grouptS5, {opacity:0})
					.add(s5TimeLine)
					.add(s6TimeLine)
					.set(effect, {opacity:1})
					.set(grountEffects, {opacity:0})
					.add(effectTimeLine);

				$scope.replay = function(){
					masterTimeLine.restart();
				}
			}, 1000);
		});

		var logoSvg = Snap('#logoUrimium');
		Snap.load("modules/animation/img/svg/logo1.svg", function(data) {
			logoSvg.append(data);
		});
	}
]);

'use strict';

angular.module('animation').controller('Ryuhm12Controller', ['$scope',
	function($scope) {
		// Ryuhm12 controller logic
		// ...
	}
]);
'use strict';

angular.module('animation').directive('onFinishRender', ["$timeout", function ($timeout) {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			if (scope.$last === true) {
				$timeout(function () {
					scope.$emit('ngRepeatFinished');
				});
			}
		}
	}
}]);

angular.module('animation').controller('Svg1Controller', ['$scope','$timeout',
	function($scope, $timeout) {

		$scope.insts = [
			{desc:'1. 최대한 얼굴을 깨끗이 씻는다' },
			{desc:'2. 세안 후, 보습제를 바르지 않은 채로 두 시간을 보낸다' },
			{desc:'3. 두 시간 후 기름종이로 얼굴을 3~4초 동안 10회 이상 꾹 눌러준다' }]

		var timeLineInst = new TimelineMax({delay:0.75});

		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
			console.log('instruction loaded');
			var instructions = $('.inst');
			angular.forEach(instructions, function(value) {
					timeLineInst.from(value, 0.75, {x: -200, autoAlpha: 0, ease:Expo.easeOut});
				}
			)
		});

		$scope.afterLogo = false;

		$scope.description = "" +
		"This is a contents of md content";
		$scope.data = {
			group1 : '악지성',
			group2 : '3'
		};
		$scope.radioData = [
			{ label: '1', value: '1' },
			{ label: '2', value: '2' },
			{ label: '3', value: '3' }
		];
		$scope.addItem = function() {
			var r = Math.ceil(Math.random() * 1000);
			$scope.radioData.push({ label: r, value: r });
		};
		$scope.removeItem = function() {
			$scope.radioData.pop();
		};


		var logoSvg = Snap('.svg1-logo');
		Snap.load("modules/animation/img/svg/Urimium-Logo1.svg", function(data) {
			logoSvg.append(data);
			logoSvg.attr({
				width: window.innerWidth,
				height: window.innerHeight
			});

			var afterLogo = function(){
				console.log('dddd');
				$scope.afterLogo = true;
			}
			var wholeSvg=$('.svg1-logo');
			var logo_r = $('#logo-r');
			var logo_u = $('#logo-u');
			var logoTimeLine = new TimelineMax({paused:true, onComplete: afterLogo});
			logoTimeLine.set([logo_r, logo_u],{opacity:0})
				.fromTo([logo_r, logo_u], 2.5, {x:0, scale:0.5, opacity:0},{scale:1, opacity:1})
				.to(logo_r, 1.5, {rotation: 360, transformOrigin: "50% 50%", ease:Circ.easeOut})
				//.to(wholeSvg, 1.5, {top: 20, scale: 0.2})
				//.to(wholeSvg, 1.5, {top: 20, scale: 0.2, display: 'none', ease:Circ.easeOut });

			$scope.replay = function(){
				logoTimeLine.restart();
			}

			$timeout(function(){
				logoTimeLine.play();
			},1000);

		});

	}
]);

'use strict';

angular.module('animation').controller('ThreeController', ['$scope',
	function($scope) {

		$().ready(function(){
			setTimeout(function(){
				var tremula = tremulaInit();
				tremula.Grid.updateConfig({itemConstraint:200,itemMargins:[20,20]});
				attachDemoControls(tremula);
				window.tremula=tremula;//does not need to be on the window -- implemented here for convienience.

				$('body').removeClass('doReflect');
				//toggleDebug();

			},1000);
		});


		function tremulaInit(){
			console.log('starting tremula');

			var tremulaContainer = $('.tremulaContainer');


			var tremula = new Tremula();
			var config = tremulaConfigs.default.call(tremula);

			tremula.init(tremulaContainer,config,this);

			var doScrollEvents = function(o){
				if(debugLoop)debugLoop(o);
				if(o.scrollProgress>.7){
					if(!tremula.cache.endOfScrollFlag){
						tremula.cache.endOfScrollFlag = true;
						console.log('END OF SCROLL!')
					}
				}
			}//doScrollEvents()

			tremula.setOnChangePub(doScrollEvents);

			return tremula;
		}

		var showControlData = function(o){
			if(!this.$debug)this.$debug = $('.debug');
			this.$debug.html(
				'<ul>'
					// + '<li>jsHeapSizeLimit: ' 							+ performance.memory.jsHeapSizeLimit 											+ '<span>total available memory</span></li>'
					// + '<li>totalJSHeapSize: ' 							+ performance.memory.totalJSHeapSize 											+ '<span>total used memory</span></li>'
					// + '<li>usedJSHeapSize: ' 							+ performance.memory.usedJSHeapSize 											+ '<span>current  used memory</span></li>'
				+ '<li>scrollAxis: '        					+ o.sa + ' [sx]--> ' + o.sx 				+ '<span>Direction of scroll</span></li>'
				+ '<li>this.frameRate: ' 							+ o.frameRate 											+ '<span>frameRate</span></li>'
				+ '<li>this.physicsLoopRAF: ' 				+ o.physicsLoopRAF 									+ '<span>RAF FRAME ID</span></li>'
				+ '<li>isTouching: '        					+ o.isTouching 											+ '<span></span></li>'
				+ '<li>absScrollPos: '        				+ o.absScrollPos 										+ '<span>The scroll position of the content head in relation to the visible leading border.</span></li>'
				+ '<li>scrollPos: '         					+ o.scrollPos 											+ '<span></span></li>'
				+ '<li>scrollProgress: '      				+ o.scrollProgress 									+ '<span></span></li>'
				+ '<li>marginScrollWarp: '      			+ o.marginScrollWarp 								+ '<span></span></li>'
				+ '<li>isInHeadMargin: '      				+ o.isInHeadMargin 									+ '<span></span></li>'
				+ '<li>isInTailMargin: '      				+ o.isInTailMargin 									+ '<span></span></li>'
				+ '<li>scrollAxisOffset: '						+ o.scrollAxisOffset 								+ '<span>The margin added before and after the content -- this creates a blank offset area on either side of the content -- IOW: this offsets the content position.</span></li>'
				+ '<li>scrollMargin: '        				+ o.scrollMargin 										+ '<span>The scrollable area added before and after the content. NOTE: this does not offset the content.</span></li>'
				+ '<li>firstItemPos: '        				+ o.firstItemPos 										+ '<span>The head edge position of the first item.</span></li>'
				+ '<li>bounceMargin: '       					+ o.bounceMargin 										+ '<span></span></li>'
				+ '<li>trailingEdgeScrollPos: '       + o.trailingEdgeScrollPos 					+ '<span></span></li>'
				+ '<li>absTrailingEdgeScrollPos: '    + o.absTrailingEdgeScrollPos 				+ '<span>The value of absScrollPos when content is scrolled completely to the tail position (exclude rubber band effect).</span></li>'
				+ '<li>currentGridContentDims: '     	+ o.currentGridContentDims					+ '<span>?</span></li>'
				+ '<li>boxAxisLengths: '      				+ o.boxAxisLengths 									+ '<span>A mysterious number which starts as the contentDims but gets transformed in ways that are no longer clear.</span></li>'
				+ '<li>contentDims: '      						+ o.contentDims 										+ '<span>Content bounding box dims.</span></li>'
				+ '<li>gridDims: '          					+ o.gridDims 												+ '<span></span></li>'
				+ '<li>hasShortGridDimsSi: '          + o.hasShortGridDimsSi 							+ '<span></span></li>'
				+ '<li>hasMediumGridDimsSi: '         + o.hasMediumGridDimsSi 						+ '<span></span></li>'
				+'</ul>'
			);
		}


		var debugLoop = null;

		var toggleDebug = function toggleDebug(){
			if(debugLoop){
				debugLoop = null;
				$('.debug').removeClass('show');
			}else{
				debugLoop = showControlData;
				$('.debug').addClass('show');
				showControlData({});
			}

		}

		function TremulaItem(data){
			this.data = data;
			this.imgUrl = data.imgUrl;//optional
			this.w = this.width = data.w;
			this.h = this.height = data.h;

			//options
			this.isLastContentBlock 			= data.isLastContentBlock||false;
			this.layoutType 					= data.layoutType||'tremulaInline';// ['tremulaInline' | 'tremulaBlockItem']
			this.noScaling 						= data.noScaling||false;
			this.isFavorite 					= data.isFavorite||false;
			this.auxClassList 					= data.auxClassList||'';
			this.template 						= this.data.template||('<img class="moneyShot" onload="imageLoaded(this)" src=""/>')
		}






		// for use with...
		// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c149b994c54c114bd7836b61539eec2e&tags=sky%2C+night%2C+day&format=json&page=1
		function flickrSearch(data,env){

			this.data = data;


			//meta options
			this.isLastContentBlock 	= data.isLastContentBlock||false;
			this.layoutType 					= data.layoutType||'tremulaInline';// ['tremulaInline' | 'tremulaBlockItem']
			this.noScaling 						= data.noScaling||false;
			this.isFavorite 					= data.isFavorite||false;
			this.auxClassList 				= data.auxClassList||'';


			//this is the static axis constraint of a stream image -- in px.
			var imgStatixAxisPx = env.options.itemConstraint;


			//if this data item has an expected URL parameter then it is an image -- otherwise it is probably an arbitrary html layout
			if(data.url_z){
				this.src = data.url_z
				this.w = this.width = data.width_z;
				this.h = this.height = data.height_z;
				this.imgUrl = this.src;
				this.auxClassList = "flickrRS " + this.auxClassList;//stamp each resultSet item with judyResultSet so it is easier to select by casper.js during testing
			}else{
				this.w = this.width = (this.data.w||100);
				this.h = this.height = (this.data.h||100);
				this.imgUrl = '';
			}

			this.itemTitle = data.title||'';

			this.template = this.data.template||('<img draggable="false" class="moneyShot" onload="imageLoaded(this)" src=""/>')
		}



		// for use with...
		// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c149b994c54c114bd7836b61539eec2e&tags=sky%2C+night%2C+day&format=json&page=1
		function flickrTest(data,env){

			this.data = data;


			//meta options
			this.isLastContentBlock 	= data.isLastContentBlock||false;
			this.layoutType 					= data.layoutType||'tremulaInline';// ['tremulaInline' | 'tremulaBlockItem']
			this.noScaling 						= data.noScaling||false;
			this.isFavorite 					= data.isFavorite||false;
			this.auxClassList 				= data.auxClassList||'';


			//this is the static axis constraint of a stream image -- in px.
			var imgStatixAxisPx = env.options.itemConstraint;


			//if this data item has an expected URL parameter then it is an image -- otherwise it is probably an arbitrary html layout
			if(data.url_z){
				this.src = data.url_z
				this.w = this.width = data.width_z;
				this.h = this.height = data.height_z;
				this.imgUrl = this.src;
				this.auxClassList = "flickrRS " + this.auxClassList;//stamp each resultSet item with judyResultSet so it is easier to select by casper.js during testing
			}else{
				this.w = this.width = (this.data.w||100);
				this.h = this.height = (this.data.h||100);
				this.imgUrl = '';
			}

			this.itemTitle = data.title||'';

			//this.template = this.data.template||('<img draggable="false" class="moneyShot" onload="imageLoaded(this)" src=""/>')
		}

		var tremulaConfigs = {

			default: function(){
				return ({
					onChangePub					: this.doScrollEvents,
					data                : null,
					maxWidthClassMap		: {mini:50,small:143,medium:244,large:2000},//large will apply to anything over medium limit
					// lastContentBlock 		: {template :'<div class="lastContentItem"></div>',layoutType :'tremulaBlockItem',noScaling:true,w:300,h:390,isLastContentBlock:true,adapter:this.dataAdapters.TremulaItem},
					adapter             : null,//this.dataAdapters.JudyItem,//a default adapter incase none is specified during import
					itemConstraint      :300,
					itemMargins         :[30,30],
					staticAxisOffset    :0,//px
					scrollAxisOffset    :20,//px
					scrollAxis          :'x',
					staticAxisCount     :0,//zero based
					isLooping         	:false,
					ignoreUserEvents		:false,//when true, Tremula will not initalize touch or pointer handling. In this mode TremulaJS works more like a responsive layout machine.
					defaultLayout       :this.layouts.basicGridLayout,//<--- TODO:  this is not yet implemented.
					surfaceMap          :this.projections.streamHorizontal,//for your own projections try-->  surfaceMap:userProjection then edit tremulaProjections.js
					itemPreloading      :true,
					itemEasing          :false,
					itemEasingParams    :{
						touchCurve          :this.easings.easeOutCubic,
						swipeCurve          :this.easings.easeOutCubic,
						transitionCurve     :this.easings.easeOutElastic,
						easeTime            :500,
						springLimit         :40 //in px
					}
				});
			} //end default

		}//end tremulaConfigs

		function attachDemoControls(tremula){

			var s = tremula.Grid;

			$(".streamHorizontal").click(function() {
				// s.jumpToScrollProgress(0);
				s.toggleScrollAxis('x');
				setTimeout(function(){
					var targetSize = tremula.$e.height()*.5;
					s.doTransition(tremula.layouts.basicGridLayout,{steppedScrolling:false,axes:0,itemConstraint:targetSize,itemMargins:[25,25],staticAxisOffset:0},800,tremula.easings.easeOutElastic,tremula.projections.streamHorizontal);
					resizeFn(tremula)
				}, 100)
			})

			$(".pinterest").click(function() {

				// s.jumpToScrollProgress(0);
				s.toggleScrollAxis('y');
				setTimeout(function(){
					body.removeClass('doReflect');
					s.doTransition(tremula.layouts.basicGridLayout,{steppedScrolling:false,axes:3,itemConstraint:250,itemMargins:[25,25],staticAxisOffset:0},800,tremula.easings.easeOutElastic,tremula.projections.pinterest);
					resizeFn = autoColumnCount;
					resizeFn(tremula)
				}, 100)
			})

			$(".btnL2").click(function() {
				// s.jumpToScrollProgress(0);
				s.toggleScrollAxis('x');
				setTimeout(function(){
					body.addClass('doReflect');
					var targetSize = tremula.$e.height()*.5;
					s.doTransition(tremula.layouts.basicGridLayout,{steppedScrolling:false,axes:0,itemConstraint:targetSize,staticAxisOffset:0},800,tremula.easings.easeOutElastic,tremula.projections.turntable);
					s.setItemEasing(false);


					resizeFn(tremula)
				}, 100)
			})

			$(".btnL3").click(function() {
				// s.jumpToScrollProgress(0);
				s.toggleScrollAxis('x');
				setTimeout(function(){
					s.doTransition(tremula.layouts.basicGridLayout,{steppedScrolling:false,axes:0,itemConstraint:300,itemMargins:[30,30],staticAxisOffset:0},800,tremula.easings.easeOutElastic,tremula.projections.enterTheDragon);
					s.setItemEasing(false);
					resizeFn(tremula)
				}, 100)
			})

			$(".btnL4").click(function() {
				s.toggleScrollAxis('x');
				setTimeout(function(){
					s.doTransition(tremula.layouts.basicGridLayout,{steppedScrolling:false,axes:0,itemConstraint:100,staticAxisOffset:0},800,tremula.easings.easeOutElastic,tremula.projections.sunrise);
					s.setItemEasing(false);
					resizeFn(tremula)
				}, 100)
			})

			$(".mountain").click(function() {
				s.toggleScrollAxis('x');
				setTimeout(function(){
					body.addClass('doReflect');
					var targetSize = tremula.$e.height()*.4;
					s.doTransition(tremula.layouts.basicGridLayout,{steppedScrolling:false,axes:0,itemConstraint:targetSize,itemMargins:[10,10],staticAxisOffset:0},800,tremula.easings.easeOutElastic,tremula.projections.mountain);
					s.setItemEasing(false);
					diableAuto();
					var refreshData=false;
					resizeFn(tremula)
				}, 100)
			})

			$(".btnL5").click(function() {
				s.toggleScrollAxis('x');
				setTimeout(function(){
					body.removeClass('doReflect');
					s.doTransition(tremula.layouts.basicGridLayout,{steppedScrolling:false,axes:0,itemConstraint:200,itemMargins:[5,5],staticAxisOffset:0},800,tremula.easings.easeOutElastic,tremula.projections.bezierShape);
					s.setItemEasing(false);
					resizeFn(tremula)
				}, 100)
			})

			$(".xy").click(function() {
				function jiggleHandle(){
					var ax = (s.sa=='x')?'y':'x';
					s.toggleScrollAxis(ax);
					body.removeClass('doReflect');
					s.updateConfig({steppedScrolling:false,axes:1,itemConstraint:200,itemMargins:[20,20],staticAxisOffset:20,surfaceMap:tremula.projections.xyPlain});
					s.setItemEasing(false);
					resizeFn(tremula)
				}
				//yes, I know...  would be great to know why this is necessary. #freeSoftware  :/
				jiggleHandle();
				jiggleHandle();
				jiggleHandle();

			})


			$(".btn1").click(function() {
				s.jumpToScrollProgress(0);
				setTimeout(function(){
					s.doTransition(tremula.layouts.basicGridLayout,{steppedScrolling:false,axes:0,staticAxisOffset:0},800,tremula.easings.easeOutElastic);
					s.setItemEasing(false);
					diableAuto();
				}, 100)
			})

			$(".btn2").click(function() {
				s.jumpToScrollProgress(0);
				setTimeout(function(){
					s.doTransition(tremula.layouts.basicGridLayout,{steppedScrolling:false,axes:1,staticAxisOffset:0},800,tremula.easings.easeOutElastic);
					s.setItemEasing(false);
					diableAuto();
				}, 100)
			})
			$(".btn3").click(function() {
				s.jumpToScrollProgress(0);
				setTimeout(function(){
					s.doTransition(tremula.layouts.basicGridLayout,{steppedScrolling:false,axes:2,staticAxisOffset:0},800,tremula.easings.easeOutElastic);
					s.setItemEasing(false);
					diableAuto();
				}, 100)
			})



			$(".size1").click(function() {
				// s.jumpToScrollProgress(0);
				setTimeout(function(){
					s.updateConfig({itemConstraint:100},true);
					diableAuto();
				}, 100)
			})

			$(".size2").click(function() {
				// s.jumpToScrollProgress(0);
				setTimeout(function(){
					s.updateConfig({itemConstraint:200},true);
					diableAuto();
				}, 100)
			})

			$(".size3").click(function() {
				// s.jumpToScrollProgress(0);
				setTimeout(function(){
					s.updateConfig({itemConstraint:300},true);
					diableAuto();
				}, 100)
			})



			$(".margin1").click(function() {
				// s.jumpToScrollProgress(0);
				setTimeout(function(){
					s.updateConfig({itemMargins:[10,10]},true);
					resizeFn(tremula);
				}, 100)
			})

			$(".margin2").click(function() {
				// s.jumpToScrollProgress(0);
				setTimeout(function(){
					s.updateConfig({itemMargins:[20,20]},true);
					resizeFn(tremula);
				}, 100)
			})

			$(".margin3").click(function() {
				// s.jumpToScrollProgress(0);
				setTimeout(function(){
					s.updateConfig({itemMargins:[30,30]},true);
					resizeFn(tremula);
				}, 100)
			})




			var body = $("body");

			body.on('click tremulaItemSelect',function() {
				body.removeClass('showControls');
			})

			$('.tab').on('click',function(evt) {
				evt.stopPropagation();
				body.toggleClass('showControls');
			})

			$(".more").on('click',function(evt) {
				evt.stopPropagation();
				$('.streamHorizontal').click();
				body.addClass('showTweaks')
				$(".more").remove();
			})

			$(".controls").on('click',function(evt) {
				evt.stopPropagation();
				if($(evt.target).hasClass('buttons')||$(evt.target).hasClass('controls'))
					body.removeClass('showControls');
			})

			$(".showCtrlData").on('click',function(evt) {
				toggleDebug();
			})


			$(".toggleReflect").click(function() {
				body.toggleClass('doReflect');
			})


			$(".toggleItemEase").click(function() {
				s.setItemEasing(!s.itemEasing);
			})


			$(".toggleScrollAxis").click(function() {
				s.toggleScrollAxis();
			})


			$(".toggleIsLooping").click(function() {
				s.toggleIsLooping();
			})


			var refreshData = false;//setting this to true will replace data with new results; false will append data.
			$(".toggleRefreshData").text('appending');

			$(".toggleRefreshData").click(function() {
				refreshData = !refreshData
				var label
				if(refreshData)
					label = 'replacing'
				else
					label = 'appending'
				$(".toggleRefreshData").text(label);
			})




			$(".tailScroll").click(function() {
				s.setLastTouchOrigin(s.gridDims[s.si]/2);
				s.easeTo(s.getScrollPos()-(s.getScrollViewDim()*.50),800)
			})


			$(".headScroll").click(function() {
				s.setLastTouchOrigin(s.gridDims[s.si]/2);
				s.easeTo(s.getScrollPos()+(s.getScrollViewDim()*.50),800)
			})


			$('.tremulaContainer').on('tremulaItemSelect',function(gestureEvt,domEvt){
				// console.log(gestureEvt,domEvt)
				var
					$e = $(domEvt.target);
				t = $e.closest('.gridBox')[0];
				if(t){
					var
						boxObj = $.data(t).model,
						data = boxObj.model.data;
				}

				console.log(boxObj||'no target object selected')

				if(!data)return;

				if(s.steppedScrolling){
					var o = s.getClosestScrollOriginObj();
					if(boxObj===o){
						alert('DO STUFF!');
					}else{
						s.easeToThisStepItem(boxObj);
					}
				}


			})




			function resizeSteppedScrolling(t){

				var
					g = t.Grid,
					si = g.si,
					saDim = g.saDim,
					saGridDim = g.gridDims[si],
					firstImageScrollDim = g.getBoxFromIndex(0)&&g.getBoxFromIndex(0)[saDim]||0,
					newScrollOffset = saGridDim*.5-firstImageScrollDim*.5-g.itemMargins[si]*.5;
// console.log(newScrollOffset)
				g.updateConfig({scrollAxisOffset:newScrollOffset},true);
				t.resize();

			}



			function autoColumnCount(t){
				var
					targetSizeFactor = .9
					,g = t.Grid
					,saDim_ = g.saDim_
					,si_ = g.si_
					,currentCount = g.staticAxisCount
					,margin = g.itemMargins[si_]*2
					,eStaticAxisLessMargin = targetSizeFactor * (t.$e[saDim_]() - margin * (currentCount+1))
					,currentConstraint = g.itemConstraint
					,newCount = Math.max(0,Math.floor(eStaticAxisLessMargin/currentConstraint)-1);

				if(newCount!=currentCount){
					g.updateConfig({axes:newCount},true);
				}

			}

			function autoColumnSize(t){
				var
					targetSizeFactor = .9
					,g = t.Grid
					,saDim_ = g.saDim_
					,si_ = g.si_
					,currentCount = g.staticAxisCount
					,margin = g.itemMargins[si_]*2
					,eStaticAxisLessMargin = (t.$e[saDim_]()-margin) * (1/(currentCount+1))
					,currentConstraint = g.itemConstraint
					,newFactor = Math.max(.1,eStaticAxisLessMargin/currentConstraint)
					,newConstraint = targetSizeFactor*currentConstraint*newFactor-margin;

				if(newConstraint!=currentConstraint){
					g.updateConfig({itemConstraint:newConstraint},true);
				}

			}

			function functionName(fun) {
				var ret = fun.toString();
				ret = ret.substr('function '.length);
				ret = ret.substr(0, ret.indexOf('('));
				return ret;
			}

			function diableAuto(){
				tremula.Grid.scrollAxisOffset=0;//cleanup after any auto centering shenanigans.
				resizeFn = function(){};
			}

			var resizeFn = function(){};

			$(".autoSize").click(function() {resizeFn = autoColumnSize; resizeFn(tremula); })
			$(".autoCount").click(function() {resizeFn = autoColumnCount; resizeFn(tremula); })
			$(".autoDisable").click(diableAuto)
			$(window).on('resize', $.debounce(250, function(){ resizeFn(tremula) }) );

			$(".loadArtDotCom").click(function(){loadArtDotCom(null,postLoadSeq)});
			$(".loadFlickr").click(function(){loadFlickr(null,postLoadSeq)})



			function loadArtDotCom(url_,cb){
				var dataUrl = 'http://ws-decor.art.com/api/decorProductSearch?engine=judy&pageNumber=1&numProducts=200&rsLimit=1000&moodId=undefined&paletteHex=dfdd78-695d87&statusMsg=0.632s%3A+200+of+1000+returned&refinements=&keyword=abstract&includePoster=true&includeArt=true&includeDecorProducts=false&totalRetrieved=0&getDataFromThisUrl=null&totalFound=1000&pageReturned=4';

				// var dataUrl = 'decorProductSearch.json';
				$.getJSON(dataUrl,function(res){


					var rs = res.ImageDetails.filter(function(o,i){return o.ImageDimensions[2].PixelHeight > o.ImageDimensions[2].PixelWidth * .5});//filter out any with a really wide aspect ratio.
					if(refreshData){
						console.log('refresh',rs);
						tremula.refreshData(rs,tremula.dataAdapters.JudyItem);//art.com
						if(cb)cb();
					}else{
						console.log('append',rs);
						tremula.appendData(rs,tremula.dataAdapters.JudyItem);//art.com
						if(cb)cb();
					}
				}).fail(function(){console.log('getJSON problem.')});
			}

			function loadFlickr(url_,cb){
				var dataUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c149b994c54c114bd7836b61539eec2e&tags=street+art&format=json&page=1&extras=url_z';
				$.ajax({
					url:dataUrl
					,dataType: 'jsonp'
					,jsonp: 'jsoncallback'
				})
					.done(function(res){
						console.log(res);
						var rs = res.photos.photo.filter(function(o,i){return o.height_z > o.width_z * .5});//filter out any with a really wide aspect ratio.

						if(refreshData)
							tremula.refreshData(rs,flickrSearch);//flicker
						if(cb)cb();
						else
							tremula.appendData(rs,flickrSearch);//flicker
						if(cb)cb();
					})
					.fail( function(d,config,err){ console.log('API FAIL. '+err) })
			}


			function loadTestData(dataUrl,cb){
				$.getJSON(dataUrl)
					.done(function(res){
						var rs = res;
						var adapter = TremulaItem;

						if(rs[0]&&rs[0].url_n || rs[0]&&rs[0].url_z){
							// only necessary for flickr data vvvv
							adapter = flickrTest;
							rs = res.filter(function(o,i){
								o.height_z = o.height_n || o.height_z;
								o.width_z = o.width_n || o.height_z;
								o.url_z = o.url_n || o.url_z;
								return o.height_z > o.width_z * .5
							});//filter out any with a really wide aspect ratio.
							// end flickr adapter ^^^
						}


						console.log(rs);

						if(refreshData){
							tremula.refreshData(rs,adapter);//flicker
							if(cb)cb();
						}
						else{
							tremula.appendData(rs,adapter);//flicker
							if(cb)cb();
						}

					})
					.fail( function(d,config,err){ console.log('API FAIL. '+err) })
			}






			// tremula.Grid.toggleScrollAxis('y');
			// tremula.Grid.updateConfig({steppedScrolling:true,axes:0,itemConstraint:200,itemMargins:[10,10],easeToCompensation:20,surfaceMap:thumbRollerDial});
			// tremula.Grid.updateConfig({steppedScrolling:false,axes:0,itemConstraint:100,itemMargins:[10,10],easeToCompensation:50,surfaceMap:twelveToSix});
			// tremula.Grid.updateConfig({steppedScrolling:false,axes:0,itemConstraint:100,itemMargins:[10,10],easeToCompensation:50,surfaceMap:sixToTwelve});
			// tremula.Grid.updateConfig({steppedScrolling:true,axes:0,itemConstraint:200,itemMargins:[20,20],easeToCompensation:50,surfaceMap:tremula.projections.pinterest});
			// window.resizeFn = resizeSteppedScrolling;
			// window.resizeFn(tremula)
			// toggleDebug();


			window.loadHorizontalPop = function loadHorizontalPop(){
				tremula.Grid.removeAll();
				tremula.Grid.updateConfig({steppedScrolling:true,axes:0,itemConstraint:200,itemMargins:[20,20],easeToCompensation:0,surfaceMap:horizontalPop});
				window.resizeFn = resizeSteppedScrolling;
				window.resizeFn(tremula)
				loadArtDotCom(null,postLoadSeq)
			}


			window.loadMountainPop = function(){
				tremula.Grid.removeAll();
				tremula.Grid.updateConfig({steppedScrolling:true,axes:0,itemConstraint:150,itemMargins:[20,20],easeToCompensation:-15,surfaceMap:mountainPop});
				window.resizeFn = resizeSteppedScrolling;
				window.resizeFn(tremula)
				loadArtDotCom(null,postLoadSeq)
			}


			window.loadCarouselWithPop = function(){
				tremula.Grid.removeAll();
				tremula.Grid.updateConfig({steppedScrolling:true,axes:0,itemConstraint:200,itemMargins:[50,0],easeToCompensation:15,surfaceMap:carouselWithPop});
				window.resizeFn = resizeSteppedScrolling;
				window.resizeFn(tremula)
				loadArtDotCom(null,postLoadSeq)
			}



			window.loadTwelveToSix= function(){
				tremula.Grid.removeAll();
				tremula.Grid.toggleScrollAxis('y');
				tremula.Grid.updateConfig({steppedScrolling:false,axes:0,itemConstraint:100,itemMargins:[10,10],easeToCompensation:50,surfaceMap:twelveToSix});
				window.resizeFn = resizeSteppedScrolling;
				window.resizeFn(tremula)
				loadArtDotCom(null,postLoadSeq)
			}

			// loadTwelveToSix()
			// loadMountainPop()
			// loadCarouselWithPop()
			loadHorizontalPop()
			// loadArtDotCom(null,postLoadSeq)//uncomment to load basic demo dataset


			// loadTestData(
			// 	// 'test/ctrls_5.json',
			// 	'test/flickr_10_allRect.json',
			// 	// 'test/flickr_10.json',
			// 	// 'test/flickr_25.json',
			// 	postLoadSeq //<---- this is here for the stepped scrolling test
			// );

			function postLoadSeq(){
				console.log('postLoadSeq',!!tremula.steppedScrolling)
				if(tremula.Grid.steppedScrolling)
					setTimeout(function(){
						tremula.Grid.easeToClosestStepItem();
					},100);
			}


			return this;

		}


		//====================
		// Below is a custom Projection template which allows you to specify your own bezier path
		// To use, modify the above configuration @ surfaceMap -->  surfaceMap : userProjection,

		//EXPERIMENTAL! Generally, this works, But it's not particularly tested. Some paths may not work as expected.
		//Please file bugs to https://github.com/garris/TremulaJS/issues


		var userPath = [
			{x:0.0,y:0},
			{x:0.5,y:0.7},
			{x:0.5,y:0.7},
			{x:1,y:0}
		];



		function horizontalPop(x,y){

			var curve = userPath;

			var
				grid0 = this.parent.gridDims[0],
				grid1 = this.parent.gridDims[1],
				axisLength = this.parent.currentGridContentDims,
				tRamp = this.waves.tailRamp,
				hRamp = this.waves.headRamp,
				tri = this.waves.triangle,
				xo,
				yo;

			tri = Math.min(.9,tri);


			var xyFactor = [
				grid0,
				grid1
			];

			var cubicBezier = jsBezier.factorCurveBy(curve,xyFactor);

			var p = jsBezier.pointOnCurve(cubicBezier, tRamp);
			var g = jsBezier.gradientAtPoint(cubicBezier, tRamp);

			// var xo = p.x - (this.dims[0]*.5);
			var xo = x+16;

			// var yo = grid1 - p.y - (this.dims[1]*.5) - (((axisLength[1]-this.dims[1])*.5) - y - this.itemMargins[1]);
			var yo = (grid1*.5) - (p.y*0) - (this.dims[1]*.5) - (((axisLength[1]-this.dims[1])*.5) - (y*0) - this.itemMargins[1]);

			var zo = (tri*100)*(tri*10)*.5;

			// if(this.index==0)console.log(tri)

			this.e.style.transformOrigin = this.e.style.webkitTransformOrigin = this.e.style.MozTransformOrigin = '50%';

			this.e.style.transform = this.e.style.MozTransform = this.e.style.webkitTransform =
				'translate3d(' + xo + 'px,' + yo +'px, ' + zo + 'px)';
			//+' rotateY('+((tRamp*.7*90)-30)+'deg)';


			// var z = 10000-this.index;
			var z = 10000-this.index;
			this.e.style.zIndex = Math.abs(Math.floor(tri*100));
			this.e.style.opacity = 1;//Math.max(tri,.5);
			this.e.style.webkitBoxShadow = '0 0 10px rgba(0,0,0,'+Math.min(tri,.3)+')';

			this.pPos = [x,y];
		}

// ========= carousel with bump =================




		var softKnee = [
			{x:0,y:.5},
			{x:.45,y:.5},
			{x:.55,y:.5},
			{x:1,y:.5}
		];

		function carouselWithPop(x,y){


			var curve = softKnee;


			//var xoffset = box.width / 2;
			//var yoffset = box.height / 2;
			var
				grid0 = this.parent.gridDims[0],
				grid1 = this.parent.gridDims[1],
				axisLength = this.parent.currentGridContentDims,
				tRamp = this.waves.tailRamp,
				hRamp = this.waves.headRamp,
				tri = this.waves.triangle,
			//s = 1,
				r,
				xo,//xo=x,//-xoffset,
				yo;//yo=y;//-yoffset;

			var xyFactor = [
				grid0, //Math.max(0,grid0),
				grid1 //Math.max(0,grid1)
			];

			var cubicBezier = jsBezier.factorCurveBy(curve,xyFactor);

			var p = jsBezier.pointOnCurve(cubicBezier, hRamp);
			var g = jsBezier.gradientAtPoint(cubicBezier, hRamp);

			var xo = (grid0-this.outerDims[0]*.5)-p.x+10;
			// var yo = (grid1-this.outerDims[1]*.5)-p.y;

			var yo = p.y-(this.dims[1]*.5)+y - ((axisLength[1]-this.dims[1])*.5) - this.itemMargins[1];
			var zo = Math.min(-200,((1-tri)*-2000))+500;

			this.e.style.webkitTransformOrigin = '50%';
			this.e.style.MozTransformOrigin = '50%';

			this.e.style.transform = this.e.style.OTransform = this.e.style.MozTransform = this.e.style.webkitTransform =
				'translate3d(' + xo + 'px,' + yo +'px, '+ zo +'px)'
				+' rotateY('+((tRamp*180)-96)+'deg)';

			this.e.style.opacity = Math.min(1,((tri*2)-.5));

			var z = 10000-this.index;
			this.e.style.zIndex = Math.abs(Math.floor(tri*100));

			this.e.style.webkitBoxShadow = '0 0 20px -3px rgba(0,0,0,'+Math.min(tri,.6)+')';


			this.pPos = [x,y];
		}//turntable()










// ========= thumbRollerDial =================


		var thumbRollerDialPath = [
			{x:0,y:0},				//p0
			{x:0,y:1},	//p1
			{x:1,y:0},	//p2
			{x:1,y:1} 				//p3
		];
		function thumbRollerDial(x,y){

			var curve = thumbRollerDialPath;

			var
				count = this.parent.staticAxisCount+1,

				grid0 = this.parent.gridDims[0],
				grid1 = this.parent.gridDims[1],

				axisLength = this.parent.currentGridContentDims,
				tRamp = this.waves.tailRamp,
				hRamp = this.waves.headRamp,
				tri = this.waves.triangle,
			//s = 1,
				r,
				xo,//xo=x,//-xoffset,
				yo;//yo=y;//-yoffset;


			// console.log(axisLength)

			var xyFactor = [
				grid0,
				grid1
			];

			var cubicBezier = jsBezier.factorCurveBy(curve,xyFactor);

			var p = jsBezier.pointOnCurve(cubicBezier, hRamp);
			// var g = jsBezier.gradientAtPoint(cubicBezier, hRamp);
			// var gExt = (g<0)?156+(156+g*100):g*100;
			var gExt = tRamp * 90 -45;

			// var xo = grid0 - p.x - (this.dims[0]*.5) - (((axisLength[0]-this.dims[0])*.5) - x - this.itemMargins[0]);
			var zo = grid0 - p.x - (this.dims[0]*.5) - (((axisLength[0]-this.dims[0])*.5) - x - this.itemMargins[0]);
			var yo = (grid1-this.outerDims[1]*.5)-p.y;
			var xo = grid0*.5-this.dims[0]*.5;
// if(this.index==3)console.log(gExt)

			this.e.style.webkitTransformOrigin = this.e.style.MozTransformOrigin = '50%';

			this.e.style.transform = this.e.style.OTransform = this.e.style.MozTransform = this.e.style.webkitTransform =
				'translate3d(' + xo + 'px,' + yo +'px, ' + zo + 'px)'
			//+' rotateX('+(gExt)+'deg)';

			var z = 1000000-this.index;
			this.e.style.zIndex = z;

			this.e.style.opacity = 1;//Math.min(1,zo*zo*0.00007);

			this.pPos = [x,y];
		}//thumbRollerDial()







// ========= twelveToSix =================


		var twelveToSixPath = [
			//soft arc 12to6
			{x:1,y:0},				//p0
			{x:0.75,y:0.25},	//p1
			{x:0.75,y:0.75},	//p2
			{x:1,y:1} 				//p3


			//hard arc 12to6
			// {x:1,y:0},//p0
			// {x:0,y:0},//p1
			// {x:0,y:1},//p2
			// {x:1,y:1} //p3
		];


		function twelveToSix(x,y){

			var curve = twelveToSixPath;

			var
				count = this.parent.staticAxisCount+1,

				grid0 = this.parent.gridDims[0],
				grid1 = this.parent.gridDims[1],

				axisLength = this.parent.currentGridContentDims,
				tRamp = this.waves.tailRamp,
				hRamp = this.waves.headRamp,
				tri = this.waves.triangle,
			//s = 1,
				r,
				xo,//xo=x,//-xoffset,
				yo;//yo=y;//-yoffset;


			// console.log(axisLength)

			var xyFactor = [
				grid0,
				grid1
			];

			var cubicBezier = jsBezier.factorCurveBy(curve,xyFactor);

			var p = jsBezier.pointOnCurve(cubicBezier, hRamp);
			// var g = jsBezier.gradientAtPoint(cubicBezier, hRamp);
			// var gExt = (g<0)?156+(156+g*100):g*100;
			var gExt = tRamp * 90 -45;
// if(this.index==3)console.log(gExt)

			var xo = grid0 - p.x - (this.dims[0]*.5) - (((axisLength[0]-this.dims[0])*.5) - x - this.itemMargins[0]);
			var yo = (grid1-this.outerDims[1]*.5)-p.y;
			var zo = 0;

			this.e.style.webkitTransformOrigin = this.e.style.MozTransformOrigin = '50%';

			this.e.style.transform = this.e.style.OTransform = this.e.style.MozTransform = this.e.style.webkitTransform =
				'translate3d(' + xo + 'px,' + yo +'px, ' + zo + 'px)'
				+' rotateZ('+(gExt)+'deg)';

			var z = 1000000-this.index;
			this.e.style.zIndex = z;

			this.e.style.opacity = 1;//Math.min(1,zo*zo*0.00007);

			this.pPos = [x,y];
		}//thumbRollerDial()









// ========= sixToTwelvePath =================

		var sixToTwelvePath = [
			//soft arc 12to6
			{x:0,y:0},				//p0
			{x:0.25,y:0.25},	//p1
			{x:0.25,y:0.75},	//p2
			{x:0,y:1} 				//p3

		];
		function sixToTwelve(x,y){

			var curve = sixToTwelvePath;

			var
				count = this.parent.staticAxisCount+1,

				grid0 = this.parent.gridDims[0],
				grid1 = this.parent.gridDims[1],

				axisLength = this.parent.currentGridContentDims,
				tRamp = this.waves.tailRamp,
				hRamp = this.waves.headRamp,
				tri = this.waves.triangle,
			//s = 1,
				r,
				xo,//xo=x,//-xoffset,
				yo;//yo=y;//-yoffset;


			// console.log(axisLength)

			var xyFactor = [
				grid0,
				grid1
			];

			var cubicBezier = jsBezier.factorCurveBy(curve,xyFactor);

			var p = jsBezier.pointOnCurve(cubicBezier, hRamp);
			// var g = jsBezier.gradientAtPoint(cubicBezier, hRamp);
			// var gExt = (g<0)?156+(156+g*100):g*100;
			var gExt = hRamp * 90 -45;
// if(this.index==3)console.log(gExt)

			var xo = grid0 - p.x - (this.dims[0]*.5) - (((axisLength[0]-this.dims[0])*.5) - x - this.itemMargins[0]);
			var yo = (grid1-this.outerDims[1]*.5)-p.y;
			var zo = 0;

			this.e.style.webkitTransformOrigin = this.e.style.MozTransformOrigin = '50%';

			this.e.style.transform = this.e.style.OTransform = this.e.style.MozTransform = this.e.style.webkitTransform =
				'translate3d(' + xo + 'px,' + yo +'px, ' + zo + 'px)'
				+' rotateZ('+(gExt)+'deg)';

			var z = 1000000-this.index;
			this.e.style.zIndex = z;

			this.e.style.opacity = 1;//Math.min(1,zo*zo*0.00007);

			this.pPos = [x,y];
		}//sixToTwelvePath()












		//===== mountain with bump ========




		function mountainPop(x,y){


			var mountainCurve = [
				{x:0,y:.90},
				{x:.33,y:.40},
				{x:.66,y:.40},
				{x:1,y:.90}
			];
			var
				minViewPortSa = 1000,
				grid0 = this.parent.gridDims[0],
				grid1 = this.parent.gridDims[1],
			// viewOffset = grid0+10,//(grid0>minViewPortSa)?0:(minViewPortSa-grid0)*.5,
				axisLength = this.parent.currentGridContentDims,
				tRamp = this.waves.tailRamp,
				hRamp = this.waves.headRamp,
				tri = this.waves.triangle,
				r,
				xo,//xo=x,//-xoffset,
				yo;//yo=y;//-yoffset;

			//compensation vvvvv
			//grid0 = Math.max(minViewPortSa,grid0);
			// grid0=grid0+viewOffset

			var xyFactor = [
				grid0, //Math.max(0,grid0),
				grid1 //Math.max(0,grid1)
			];

			//var curve = (grid0<minViewPortSa)?(grid0<641)?sunriseCurvePhone:mountainCurve;
			var curve = mountainCurve;
			var cubicBezier = jsBezier.factorCurveBy(curve,xyFactor);

			var p = jsBezier.pointOnCurve(cubicBezier, hRamp);
			var g = jsBezier.gradientAtPoint(cubicBezier, hRamp);

			var xo = (grid0-this.outerDims[0]*.5)-p.x+30;

			//compensation vvvvv
			// xo = xo -viewOffset;

			var yo = p.y-(this.dims[1]*.5)+y - ((axisLength[1]-this.dims[1])*.5) - this.itemMargins[1];

			var zo = (tri*100)*(tri*10)*.5;

			this.e.style.transformOrigin = this.e.style.webkitTransformOrigin = this.e.style.MozTransformOrigin = '50%';

			this.e.style.transform = this.e.style.OTransform = this.e.style.MozTransform = this.e.style.webkitTransform =
				'translate3d(' + xo + 'px,' + yo +'px, ' + zo + 'px)'
				+' rotateZ('+(-g*60+1)+'deg)';

			this.e.style.opacity = 1;

			var z = 10000-this.index;
			this.e.style.zIndex = Math.abs(Math.floor(tri*100));

			this.e.style.webkitBoxShadow = '0 0 20px rgba(0,0,0,'+Math.min(tri,.5)+')';

			this.pPos = [x,y];
		}//mountain()












	}
]);

'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Articles', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('topbar', 'articles', 'List Articles', 'articles');
		Menus.addSubMenuItem('topbar', 'articles', 'New Article', 'articles/create');
	}
]);
'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listArticles', {
			url: '/articles',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		}).
		state('createArticle', {
			url: '/articles/create',
			templateUrl: 'modules/articles/views/create-article.client.view.html'
		}).
		state('viewArticle', {
			url: '/articles/:articleId',
			templateUrl: 'modules/articles/views/view-article.client.view.html'
		}).
		state('editArticle', {
			url: '/articles/:articleId/edit',
			templateUrl: 'modules/articles/views/edit-article.client.view.html'
		});
	}
]);
'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function($scope, $stateParams, $location, Authentication, Articles) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};
	}
]);
'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Articles', ['$resource',
	function($resource) {
		return $resource('articles/:articleId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

//Setting up route
angular.module('bioinfo').config(['$stateProvider',
	function($stateProvider) {
		// Bioinfo state routing
		$stateProvider.
		state('bioinfo-home', {
			url: '/bioinfo-home',
			templateUrl: 'modules/bioinfo/views/bioinfo-home.client.view.html'
		});
	}
]);
'use strict';

angular.module('mean-tutorials').controller('BioD31Controller', ['$scope',
	function($scope) {

        var w = 400;
        var h = 300;
        var margin_x = 32;
        var margin_y = 20;

        var data = [100, 110, 140, 130, 80, 75, 120, 130, 100];
        var scale = d3.scale.linear().domain([0,5]).range([0,255]);
        console.log(Math.round(scale(2.7)));

        var y = d3.scale.linear().domain([0, d3.max(data)]).range([0 + margin_y, h - margin_y]);
        var x = d3.scale.linear().domain([0, data.length]).range([0 + margin_x, w - margin_x]);

        var svg = d3.select("#barG")
            .append("svg:svg")
            .attr("width", w)
            .attr("height", h);
        var g = svg.append("svg:g")
            .attr("transform", "translate(0," + h + ")");
        var line = d3.svg.line()
            .x(function(d,i) { return x(i); })
            .y(function(d) { return -1 * y(d); });
        g.append("svg:path").attr("d", line(data));

        // draw the x axis
        g.append("svg:line")
            .attr("x1", x(0))
            .attr("y1", -y(0))
            .attr("x2", x(w))
            .attr("y2", -y(0))

        // draw the y axis
        g.append("svg:line")
            .attr("x1", x(0))
            .attr("y1", -y(0))
            .attr("x2", x(0))
            .attr("y2", -y(d3.max(data))-10)

        //draw the xLabels
        g.selectAll(".xLabel")
            .data(x.ticks(5))
            .enter().append("svg:text")
            .attr("class", "xLabel")
            .text(String)
            .attr("x", function(d) { return x(d) })
            .attr("y", 0)
            .attr("text-anchor", "middle");
        // draw the yLabels
        g.selectAll(".yLabel")
            .data(y.ticks(5))
            .enter().append("svg:text")
            .attr("class", "yLabel")
            .text(String)
            .attr("x", 25)
            .attr("y", function(d) { return -y(d) })
            .attr("text-anchor", "end");

        //draw the x ticks
        g.selectAll(".xTicks")
            .data(x.ticks(5))
            .enter().append("svg:line")
            .attr("class", "xTicks")
            .attr("x1", function(d) { return x(d); })
            .attr("y1", -y(0))
            .attr("x2", function(d) { return x(d); })
            .attr("y2", -y(0)-5)

        // draw the y ticks
        g.selectAll(".yTicks")
            .data(y.ticks(5))
            .enter().append("svg:line")
            .attr("class", "yTicks")
            .attr("y1", function(d) { return -y(d); })
            .attr("x1", x(0)+5)
            .attr("y2", function(d) { return -y(d); })
            .attr("x2", x(0))

        //draw the x grid
        g.selectAll(".xGrids")
            .data(x.ticks(5))
            .enter().append("svg:line")
            .attr("class", "xGrids")
            .attr("x1", function(d) { return x(d); })
            .attr("y1", -y(0))
            .attr("x2", function(d) { return x(d); })
            .attr("y2", -y(d3.max(data))-10);
        // draw the y grid
        g.selectAll(".yGrids")
            .data(y.ticks(5))
            .enter().append("svg:line")
            .attr("class", "yGrids")
            .attr("y1", function(d) { return -y(d); })
            .attr("x1", x(w))
            .attr("y2", function(d) { return -y(d); })
            .attr("x2", x(0));

    }
]);

'use strict';

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

'use strict';

angular.module('bioinfo').directive('menuiconHover', [
	function() {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {

                element.on('mouseover', function(){
                   console.log(this);
                    TweenLite.to(this, 0.5, {backgroundColor:'gray', scale:1.3});
                });

                element.on('mouseleave', function(){
                    console.log(this);
                    TweenLite.to(this, 0.5, {backgroundColor:'#939393', scale:1});
                });
			}
		};
	}
]);

'use strict';

angular.module('calculator').controller('CalTestController', ['$scope',
	function($scope) {
		// Cal test controller logic
		// ...
	}
]);
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
	.controller("AppCalCtrl", ["$scope", "calService", "calFactory", function AppCalCtrl($scope, calService, calFactory){
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
    }])

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
	.controller("AppCalHistoryCtrl", ["$scope", "calService", "calFactory", function AppCalHistory($scope, calService, calFactory){
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

	}])
	// End History Directive



'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');
		// Home state routing
		$stateProvider.
		state('link-list', {
			url: '/link-list',
			templateUrl: 'modules/core/views/link-list.client.view.html'
		}).
		state('home', {
			url: '/dev',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);


/**
 * Binds a TinyMCE widget to <textarea> elements.
 */
angular.module('ui.tinymce', [])
	.value('uiTinymceConfig', {
		plugins: "image, link, fullscreen, code, table, contextmenu, media",
		contextmenu: "link media image inserttable | cell row column deletetable",
		image_advtab: true,
		image_class_list: [
			{title: 'Responsive Size', value: 'img-responsive'}

		],
		fullscreen_new_window : true,
		fullscreen_settings : {
			theme_advanced_path_location : "top"
		}
	})
	.directive('uiTinymce', ['uiTinymceConfig', function(uiTinymceConfig) {
		uiTinymceConfig = uiTinymceConfig || {};
		var generatedIds = 0;
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ngModel) {
				var expression, options, tinyInstance;
				// generate an ID if not present
				if (!attrs.id) {
					attrs.$set('id', 'uiTinymce' + generatedIds++);
				}
				options = {
					// Update model when calling setContent (such as from the source editor popup)
					setup: function(ed) {
						ed.on('init', function(args) {
							ngModel.$render();
						});
						// Update model on button click
						ed.on('ExecCommand', function(e) {
							ed.save();
							ngModel.$setViewValue(elm.val());
							if (!scope.$$phase) {
								scope.$apply();
							}
						});
						// Update model on keypress
						ed.on('KeyUp', function(e) {
							console.log(ed.isDirty());
							ed.save();
							ngModel.$setViewValue(elm.val());
							if (!scope.$$phase) {
								scope.$apply();
							}
						});
					},
					mode: 'exact',
					elements: attrs.id
				};
				if (attrs.uiTinymce) {
					expression = scope.$eval(attrs.uiTinymce);
				} else {
					expression = {};
				}
				angular.extend(options, uiTinymceConfig, expression);
				setTimeout(function() {
					tinymce.init(options);
				});


				ngModel.$render = function() {
					if (!tinyInstance) {
						tinyInstance = tinymce.get(attrs.id);
					}
					if (tinyInstance) {
						tinyInstance.setContent(ngModel.$viewValue || '');
					}
				};
			}
		};
	}]);

'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);
'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication, YT_event) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.firstJumbo = 'first-jumbo-content';
		$scope.secondJumbo = 'second-jumbo-content';
		$scope.thirdJumbo = 'third-jumbo-content';
		var texts = angular.element(document.querySelector('.core-text-anni'));
		var tl = new TimelineMax({repeat:6, repeatDelay:1, yoyo:true});
		tl.staggerTo(texts, 0.2, {className:'+=superShadow', top:'-=10px', ease:Power1.easeIn}, '0.3', 'start');
	}
]);

'use strict';

angular.module('core').controller('LinklistController', ['$scope',
	function($scope) {
		// Link list controller logic
		// ...
		$scope.modules = [
			{
				name:'Animation',
				links:[
					{linkName: 'svg1', linkHref:'/#!/svg1'},
					{linkName: 'ryuhm12', linkHref:'/#!/ryuhm12'},
					{linkName: 'j1', linkHref:'/#!/j1'},
					{linkName: 'three', linkHref:'/#!/three'}
				]
			},
			{
				name:'Banners',
				links:[
					{linkName: 'List', linkHref:'/#!/banners'},
					{linkName: 'Create', linkHref:'/#!/banners/create'},
					{linkName: 'Banner', linkHref:'/#!/banners/:bannerId'},
					{linkName: 'Edit', linkHref:'/#!/banners/:bannerId/edit'}
				]
			},
			{
				name:'Core',
				links:[
					{linkName: 'Dev', linkHref:'/#!/dev'}
				]
			},
			{
				name:'SDSUMAP',
				links:[
					{linkName: 'SDSU Map', linkHref:'/#!/sdsumap-main'}
				]
			},
			{
				name:'Spec-view',
				links:[
					{linkName: 'Jarvis', linkHref:'/#!/jarvis'},
					{linkName: 'Spec Home', linkHref:'/#!/spec-home'}
				]
			},
			{
				name:'Tj-main',
				links:[
					{linkName: 'tj-main', linkHref:'/#!/tj-main'}
				]
			},
			{
				name:'User-interface',
				links:[
					{linkName: 'MCMU', linkHref:'/#!/mcmu'},
					{linkName: 'Front -1 ', linkHref:'/#!/front-1'},
					{linkName: 'Experimental Interface', linkHref:'/#!/experimental-interface'},
					{linkName: 'Product List', linkHref:'/#!/'},
					{linkName: 'detail-product', linkHref:'/#!/detail-product/:productId'}
				]
			},
			{
				name:'Utility',
				links:[
					{linkName: 'test-page-generator', linkHref:'/#!/test-page-generator'}
				]
			}
		]
	}
]);

/**
 * Created by KevinSo on 9/3/2014.
 */

'use strict';


angular.module('core').controller('PlanController', ['$scope', '$element', 'Authentication', 'Getplans',
    function($scope, $element, Authentication, Getplans) {
        //$scope.plans = Getplans;

        $scope.find = function() {
            $scope.plans = Getplans.query();
            //$scope.plans.contents = $sce.trustAsHtml($scope.plans.contents);
        };
        $scope.find();
        //$scope.plans = [{title: 'test1', body:'content', date:""}];
    }

]);


'use strict';

angular.module('core').factory('Getplans', ['$resource',
	function($resource) {
		// Getplans service logic
		// ...

		// Public API
        return $resource('/articles', {
            userID: '@_id'
        }, {
            update: {
                method: 'GET'
            }
        });
	}
]);
'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
	}
]);
/**
 * Created by Kevin on 2014-11-26.
 */

(function (angular, window) {
    'use strict';

    var disqusModule = angular.module('disqus', [ ]);

    /**
     * $disqus provider.
     */
    disqusModule.provider('$disqus', function() {
        var TYPE_EMBED = 'embed.js'; // general disqus embed script
        var TYPE_COUNT = 'count.js'; // used for count

        // Placeholder for the disqus shortname
        var shortname;

        /**
         * @return {Element} dom element for script adding
         */
        function getScriptContainer() {
            return (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);
        }

        /**
         * @return {String} disqus shortname
         */
        function getShortname() {
            return shortname || window.disqus_shortname;
        }

        /**
         * @param {String} shortname disqus shortname
         * @param {String} file file name to add.
         * @return {String} disqus embed src with embedded shortname
         */
        function getScriptSrc(shortname, file) {
            return '//' + shortname + '.disqus.com/' + file;
        }

        /**
         * Builds the script tag
         *
         * @param {String} src script source
         * @return {Element} script element
         */
        function buildScriptTag(src) {
            var script = document.createElement('script');

            // Configure the script tag
            script.type  = 'text/javascript';
            script.async = true;
            script.src   = src;

            return script;
        }

        /**
         * Searches the given element for defined script tag
         * if its already there then return true. Otherwise return false
         *
         * @param {Element} element element to search within
         * @param {String} scriptSrc script src
         * @return {Boolean} true if its there, false if its not
         */
        function hasScriptTagInPlace(container, scriptSrc) {
            var scripts   = container.getElementsByTagName('script'),
                script, i;

            for (i = 0; i < scripts.length; i += 1) {
                script = scripts[i];

                // Check if the name contains the given values
                // We need to check with indexOf because browsers replace // with their protocol
                if (~script.src.indexOf(scriptSrc)) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Writes disqus globals to window object.
         * Needed for the first load. Otherwise the disqus wouldn't know what thread comments to load.
         *
         * @param {String} id disqus identifier
         * @param {String} url disqus url
         * @param {String} shortname disqus shortname
         */
        function setGlobals(id, url, shortname) {
            window.disqus_identifier = id;
            window.disqus_url        = url;
            window.disqus_shortname  = shortname;
        }

        /**
         * Refreshes the count from DISQUSWIDGETS.
         */
        function getCount() {
            var widgets = window.DISQUSWIDGETS;
            if (widgets && angular.isFunction(widgets.getCount)) {
                widgets.getCount();
            }
        }

        /**
         * Trigger the reset comment call
         * @param  {String} $location location service
         * @param  {String} id Thread id
         */
        function resetCommit($location, id) {
            window.DISQUS.reset({
                reload: true,
                config : function() {
                    this.page.identifier = id;
                    this.page.url        = $location.absUrl();
                }
            });
        }

        /**
         * Adds disqus script tag to header by its type.
         * If the script tag already exists in header then wont continue.
         *
         * Adds script tags by their type.
         * Currently we are using two types:
         *  1. count.js
         *  2. embed.js
         *
         * @param {String} shortname disqus shortname
         * @param {String} type disqus script tag type
         */
        function addScriptTag(shortname, type) {
            var container = getScriptContainer(),
                scriptSrc = getScriptSrc(shortname, type);

            // If it already has a script tag in place then lets not do anything
            // This might happen if the user changes the page faster than then disqus can load
            if (hasScriptTagInPlace(container, scriptSrc)) {
                return;
            }

            // Build the script tag and append it to container
            container.appendChild(buildScriptTag(scriptSrc));
        }


        /**
         * @param {String} sname shortname
         */
        this.setShortname = function(sname) {
            shortname = sname;
        };

        // Provider constructor
        this.$get = [ '$location', function($location) {

            /**
             * Resets the comment for thread.
             * If disqus was not defined then it will add disqus to script tags.
             * If disqus was initialized earlier then it will just use disqus api to reset it
             *
             * @param  {String} id required thread id
             */
            function commit(id) {
                var shortname = getShortname();

                if (!angular.isDefined(shortname)) {
                    throw new Error('No disqus shortname defined');
                } else if (!angular.isDefined(id)) {
                    throw new Error('No disqus thread id defined');
                } else if (angular.isDefined(window.DISQUS)) {
                    resetCommit($location, id);
                } else {
                    setGlobals(id, $location.absUrl(), shortname);
                    addScriptTag(shortname, TYPE_EMBED);
                }
            }

            /**
             * Loads the comment script tag and initiates the comments.
             * Sets the globals according to the current page.
             *
             * If the embed disqus is not added to page then adds that.
             *
             * @param {String} id thread id
             */
            function loadCount(id) {
                setGlobals(id, $location.absUrl(), shortname);
                addScriptTag(getShortname(), TYPE_EMBED);
                addScriptTag(getShortname(), TYPE_COUNT);
                getCount();
            }

            // Expose public api
            return {
                commit       : commit,
                getShortname : getShortname,
                loadCount    : loadCount
            };
        }];
    });

    /**
     * Disqus thread comment directive.
     * Used to display the comments block for a thread.
     */
    disqusModule.directive('disqus', [ '$disqus', function($disqus) {

        return {
            restrict : 'AC',
            replace  : true,
            scope    : {
                id : '=disqus',
            },
            template : '<div id="disqus_thread"></div>',
            link: function link(scope) {
                scope.$watch('id', function(id) {
                    if (angular.isDefined(id)) {
                        $disqus.commit(id);
                    }
                });
            }
        };
    }]);

    /**
     * Disqus comment count directive.
     * Just wraps `disqus-identifier` to load the disqus comments count script tag on page
     */
    disqusModule.directive('disqusIdentifier', [ '$disqus', function($disqus) {
        return {
            restrict : 'A',
            link     : function(scope, elem, attr) {
                $disqus.loadCount(attr.disqusIdentifier);
            }
        };
    }]);

})(angular, this);


'use strict';

// Configuring the Articles module
angular.module('mean-events').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mean events', 'mean-events', 'dropdown', '/mean-events(/create)?');
		Menus.addSubMenuItem('topbar', 'mean-events', 'List Mean events', 'mean-events');
		Menus.addSubMenuItem('topbar', 'mean-events', 'New Mean event', 'mean-events/create');
	}
]);
'use strict';

//Setting up route
angular.module('mean-events').config(['$stateProvider',
	function($stateProvider) {
		// Mean events state routing
		$stateProvider.
		state('listMeanEvents', {
			url: '/mean-events',
			templateUrl: 'modules/mean-events/views/list-mean-events.client.view.html'
		}).
		state('createMeanEvent', {
			url: '/mean-events/create',
			templateUrl: 'modules/mean-events/views/create-mean-event.client.view.html'
		}).
		state('viewMeanEvent', {
			url: '/mean-events/:meanEventId',
			templateUrl: 'modules/mean-events/views/view-mean-event.client.view.html'
		}).
		state('editMeanEvent', {
			url: '/mean-events/:meanEventId/edit',
			templateUrl: 'modules/mean-events/views/edit-mean-event.client.view.html'
		});
	}
]);
'use strict';

// Mean events controller
angular.module('mean-events').controller('MeanEventsController', ['$scope', '$stateParams', '$location', 'Authentication', 'MeanEvents',
	function($scope, $stateParams, $location, Authentication, MeanEvents) {
		$scope.authentication = Authentication;

		// Create new Mean event
		$scope.create = function() {
			// Create new Mean event object
			var meanEvent = new MeanEvents ({
				name: this.name
			});

			// Redirect after save
			meanEvent.$save(function(response) {
				$location.path('mean-events/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Mean event
		$scope.remove = function(meanEvent) {
			if ( meanEvent ) { 
				meanEvent.$remove();

				for (var i in $scope.meanEvents) {
					if ($scope.meanEvents [i] === meanEvent) {
						$scope.meanEvents.splice(i, 1);
					}
				}
			} else {
				$scope.meanEvent.$remove(function() {
					$location.path('mean-events');
				});
			}
		};

		// Update existing Mean event
		$scope.update = function() {
			var meanEvent = $scope.meanEvent;

			meanEvent.$update(function() {
				$location.path('mean-events/' + meanEvent._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Mean events
		$scope.find = function() {
			$scope.meanEvents = MeanEvents.query();
		};

		// Find existing Mean event
		$scope.findOne = function() {
			$scope.meanEvent = MeanEvents.get({ 
				meanEventId: $stateParams.meanEventId
			});
		};
	}
]);
'use strict';

//Mean events service used to communicate Mean events REST endpoints
angular.module('mean-events').factory('MeanEvents', ['$resource',
	function($resource) {
		return $resource('mean-events/:meanEventId', { meanEventId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

//Setting up route
angular.module('mean-tutorials').config(['$stateProvider',
	function($stateProvider) {
		// Mean tutorials state routing
		$stateProvider.
		state('project3', {
			url: '/project3',
			templateUrl: 'modules/mean-tutorials/views/project3.client.view.html'
		}).
		state('versioning', {
			url: '/versioning',
			templateUrl: 'modules/mean-tutorials/views/versioning.client.view.html'
		}).
		state('project2', {
			url: '/project2',
			templateUrl: 'modules/mean-tutorials/views/project2.client.view.html',
		}).
		state('project1', {
			url: '/project1',
			templateUrl: 'modules/mean-tutorials/views/project1.client.view.html'
		}).
		state('mean-home', {
			url: '/mean-home',
			templateUrl: 'modules/mean-tutorials/views/mean-home.client.view.html'
		});
	}
]);

'use strict';

angular.module('mean-tutorials').controller('CalTestController', ['$scope',
	function($scope) {
		// Cal test controller logic
		// ...
	}
]);
'use strict';

angular.module('mean-tutorials')
	.controller('MeanLoginCtrl', ["$scope", "Authentication", function($scope, Authentication){
		$scope.Auth = Authentication;
		console.log($scope.Auth);
	}])
	.controller('LeftCtrl', ["$scope", "$timeout", "$mdSidenav", "$log", function($scope, $timeout, $mdSidenav, $log) {
		$scope.close = function() {
			$mdSidenav('left').close()
		};
	}])
	.controller('RightCtrl', ["$scope", "$timeout", "$mdSidenav", "$log", function($scope, $timeout, $mdSidenav, $log) {
		$scope.close = function() {
			$mdSidenav('right').close()
		};
	}])
	.controller('MeanHomeController', ['$scope','$state','$mdDialog','$timeout', '$mdSidenav', '$log',
	function($scope,$state,$mdDialog,$timeout, $mdSidenav, $log) {

		$scope.toggleLeft = function() {
			$mdSidenav('left').toggle()
		};
		$scope.toggleRight = function() {
			$mdSidenav('right').toggle()
		};

		$scope.signUp = function(ev) {
			$mdDialog.show(
				$mdDialog.alert()
					.title('Sign-in')
					.content('Please Sign Up if you want to become our member')
					.ariaLabel('Password notification')
					.ok('Got it!')
					.targetEvent(ev)
			);
		};

		$scope.logIn = function(ev) {
			$mdDialog.show(
				$mdDialog.alert()
					.title('Log-in')
					.content('Please Login if you want to check current work')
					.ariaLabel('Password notification')
					.ok('Got it!')
					.targetEvent(ev)
			);
		};

		$scope.loginBtn = function(){
			$state.go('signin');
		};
		$scope.signupBtn = function(){
			$state.go('signup');
		};
		$scope.projects = [
			{ name: 'Project1', date:'Jan 17th', body: 'Create Calculator <a href="/#!/project1" target="_blank">Sample Solution</a>' },
			{ name: 'Project2', date:'Jan 24th', body: 'Create Calculator Directive Version' },
			{ name: 'Project3', date:'Jan 29th', body: 'Testing - Simple Unit test' },
			{ name: 'Project4', date:'Feb 1st', body: 'Dev - Learning JSON Object' },
			{ name: 'Project5', date:'Feb 8st', body: 'Create Simple API Method' },
		];

		$scope.announcements = [
			{name:'2nd Conference', date:'Jan 17th', body:'동훈님과 누자베스님께서 angularJS 코드 설명을 해주시겠습니다.'},
			{name:'New Member', date:'Jan 14th', body:'Shin Charlie became our team member! email:present1011 at gmail dot com'},
			{name:'Upcoming Conference', date:'Jan 17th', body:'We are going to talk about the first project. Each team member represents a project.'},
			{name:'1st Conference', date:'Jan 9th', body:'간단한 튜토리얼과 함께 Mean Stack의 전반적인 부분을 이야기 하겠습니다.'},
		];

		$scope.techs = [
			{name:'AngularJS', body:''},
			{name:'MongoDB', body:''},
			{name:'Express', body:''},
			{name:'NodeJS', body:''},
			{name:'GSAP', body:''},
			{name:'SVG', body:''},
			{name:'SnapSVG', body:''},
			{name:'Animation', body:''},
			{name:'D3', body:''},
			{name:'CSS3', body:''},
			{name:'SCSS', body:''},
			{name:'LESS', body:''},
		];

		$scope.dataIn = [
			{
				dateStart:'10 Jan 2014',
				dateEnd:'17 Jan 2014',
				headLine:'Project 1 - Calculator',
				text:'...',
				img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9353/300.png',
				link:'',
				date1:'',
				date2:''
			},
			{
				dateStart:'18 Jan 2014',
				dateEnd:'23 Jan 2014',
				headLine:'Project 2 - Calculator Directive',
				text:'...',
				img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9353/300.png',
				link:'',
				date1:'',
				date2:''
			},
			{
				dateStart:'24 Jan 2014',
				dateEnd:'30 Jan 2014',
				headLine:'Strelka and Belka\'s successful orbit',
				text:'...',
				img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9353/300.png',
				link:'',
				date1:'',
				date2:''
			}
		];

		/*	News Section Colours */
		var colourPurple =	["#DABDD8","#95177E","#B570A7","#651E59","#461E47"];
		var colourYellow =	["#FED162","#F8B436","#F29500","#D37510","#AF6A17"];
		var colourRed =		["#EE8361","#EB6B4B","#E85338","#E53524","#A8131D"];
		var colourBlue =	["#84D0F0","#3BAADC","#006DB2","#2C3387","#152760"];
		var colourGreen =	["#E1DC00","#96BE17","#45A72C","#00892F","#00642D"];

		/*	Typography */
		var colourText =	["#363636","#707070","#006699","#5C7996","#222222","#EEEEEE","#F5821F","#C4C4C4"];

		/*	Border Colours */
		var colourBorder =	["#999999","#E7E7E7","#C7C8CC","#B7B7B7","#D4D4D4","#CCCCCC","#006699","#C4C4C4"];

		/*	Background Colours */
		var colourBackground =	["#006699","#2C2C2C","#E1E4E9","#ECECEC","#5E5E5E","#F9F9F9","#F0F1F3"];

		var	items = [];

		$.ajax({
			url: "http://codepen.io/chris-creditdesign/pen/87c2848937b6962f4efd2a67e5ea2031.html",
			// url: "table-nih.html",
			dataType: 'text',
			success: function(data) {

				/* Helper function to format and parse date from data */
				function getDate(d) {
					/*	If d is a number or a string in the format Day Month Year
					 process it as normal. Other wise presume that it may be a string
					 in the format Month Year and add 1 to the start so that Firefox
					 and safari can parse the date */
					if (typeof d === "number") {
						return new Date(d);
					} else if (Date.parse(d)) {
						return new Date(d);
					} else {
						return new Date("1 " + d);
					}
				}

				var fullData = $(data);
				var table = $(data).find("table tbody tr");

				/* Grab the tables headline and caption so that we can reproduce them in the widget */
				var headline = $(fullData).find("h2.table-heading").text();

				var standfirst = $(data).find("table caption p").text();

				/* Hides the table and shows the SVG if javascript is enabled */
				// $("h2:contains('Dogs at work')").parent("section").parent("div").css({"display":"none"});
				// $("h2:contains('Dogs at work') + table").css({"width":"630px"});
				$(".outerwrapper span.timeline-heading").text('AngularJS');
				$(".outerwrapper p.timeline-standfirst").text('Angular Front End Project');
				// $(".outerwrapper").css({"display":"block"});


				/*	Push an object into the items array for each table row/point on the timeline*/

				console.log($(table).length);

				for (var i = 0; i < $(table).length; i++) {
					var newObject = {};
					items.push(newObject);
				};


				/*	Add a prorerty to the objects for each column in the table/bit of info we want to show
				 i.e date, headline, the text, image link and credit */
				for (var i = 0; i < $(table).length; i++) {

					var dateStart = $(table).eq(i).children('td').eq(0).html();
					var dateEnd;

					if ($(table).eq(i).children('td').eq(1).html() === " ") {
						dateEnd = $(table).eq(i).children('td').eq(0).html();
					} else {
						dateEnd = $(table).eq(i).children('td').eq(1).html();
					}

					items[i].dateStart = dateStart;
					items[i].dateEnd = dateEnd;
					items[i].date1 = getDate(dateStart);
					items[i].date2 = getDate(dateEnd);

					if ($(table).eq(i).children('td').eq(2).html() !== " ") {
						items[i].headline = $(table).eq(i).children('td').eq(2).html();
					}

					if ($(table).eq(i).children('td').eq(3).html() !== " " ) {
						items[i].text = $(table).eq(i).children('td').eq(3).html();
					}

					if ($(table).eq(i).children('td').eq(4).html() !== " ") {
						items[i].link = $(table).eq(i).children('td').eq(4).html();
					}

					if ($(table).eq(i).children('td').eq(5).html() !== " " ) {
						items[i].img = $(table).eq(i).children('td').eq(5).html();
						items[i].credit = $(table).eq(i).children('td').eq(6).html();
					}
				};
				console.log(items[0]);
				items = $scope.dataIn;
				console.log(items);

				items.forEach(function(value){
					console.log(value);
					value.date1 = getDate(value.dateStart);
					value.date2 = getDate(value.dateEnd);
				});

				/*	Insert an .event div for each event */
				for (var i = 0; i < items.length; i++) {
					$(".outerwrapper .info-box .panel").append('<div class="event-' + i + '"></div>');
				};

				for (var i = 0; i < $('.outerwrapper div[class^="event"]').length; i++) {

					if ( items[i].img) {
						$('.outerwrapper div[class="event-' + i + '"]')
							.append('<span class="timeline-img"><img alt="#" ng-src="'+ items[i].img +'"/>'+ '</span>');
					}

					if (items[i].date1 < items[i].date2 ) {
						$('.outerwrapper div[class="event-' + i + '"]')
							.append('<h3>' + items[i].dateStart + ' - ' + items[i].dateEnd + '</h3>');
					} else {
						$('.outerwrapper div[class="event-' + i + '"]')
							.append('<h3>' + items[i].dateStart + '</h3>');
					}

					if ( items[i].headline ) {
						$('.outerwrapper div[class="event-' + i + '"]')
							.append('<h4>' + items[i].headline + ' (' + (i+1) + ' of ' + items.length +  ')</h4>');
					} else {
						$('.outerwrapper div[class="event-' + i + '"]')
							.append('<h4> (' + (i+1) + ' of ' + items.length +  ')</h4>');
					}

					if ( items[i].text ) {
						$('.outerwrapper div[class="event-' + i + '"]')
							.append('<p>' + items[i].text + '</p>');
					}

					if(items[i].link) {
						$('.outerwrapper div[class="event-' + i + '"]')
							.append('<p>' + items[i].link + '</p>');
					}

					if (items[i].img) {
						$('.outerwrapper div[class="event-' + i + '"]')
							.append('<p class="credit">PICTURE CREDIT: ' + items[i].credit + '</p>')
					}

				};

				var eventWidth = $('.outerwrapper .info-box').width();

				var position = 0;

				var panelWidth = eventWidth*items.length;

				$(".outerwrapper .info-box .panel").css({"width": panelWidth + "px"});

				/* Load D3 */
				/* All of the D3/svg code is contained within the callback function */
				/* Loading D3 via a html script tag into ie6-8 will to cause a runtime error */
				$.getScript("http://d3js.org/d3.v3.min.js", function() {
					// $.getScript("http://d3js.org/d3.v3.min.js", function() {
					/*	Define the dimensions of the SVG */
					var duration = 200;
					var marginTop = 5;
					var	marginRight = 0;
					var	marginBottom = 40;
					var	marginLeft = 0;
					var	padding = 2;
					var	width = 630 - marginRight - marginLeft;
					var	height = 290 - marginTop - marginBottom;
					var	miniHeight = 75;
					var	mainHeight = height - miniHeight - 50;

					var zoom = 1;
					var maxZoom = 10;
					var zoomIncrement = 1;

					/*	A global variable to control which event/location to show */
					var counter = 0;

					/*	A global variable to control the amout of ticks visible */
					var ticks = 8;

					/*	Find the earliest and latest time in the range */
					var	timeFirst = d3.min(items, function(d) { return d.date1;});
					var	timeLast = d3.max(items, function(d) { return d.date2;});

					/*	Work out the time span of the whole timeline in miliseconds plus one tenth of this value */
					var timeDiff = timeLast - timeFirst;
					timeDiff = timeDiff + (timeDiff*0.1);

					/*	Extend the time range before the first date and after the last date
					 to make for a more attractive timeline */
					var	timeBegin = getDate(items[counter].date1.getTime() - timeDiff);
					var	timeEnd = getDate(items[counter].date1.getTime() + timeDiff);

					/* Scales */
					var x = d3.time.scale()
						.domain( [timeBegin, timeEnd])
						.range([0, width]);

					/*	Create the SVG and its elements */
					var chart = d3.select(".timeline")
						.append("svg")
						.attr("width", width + marginRight + marginLeft )
						.attr("height", height + marginTop + marginBottom )
						.attr("class", "chart");


					/*	Draw the four icons for zooming and moving through the time line as well as their enclosing
					 rects. Add functionality for hover and click. */
					var zoomInIcon = chart.append("path")
						.attr("d", "M22.646,19.307c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127l3.535-3.537L22.646,19.307zM13.688,20.369c-3.582-0.008-6.478-2.904-6.484-6.484c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486C20.165,17.465,17.267,20.361,13.688,20.369zM15.687,9.051h-4v2.833H8.854v4.001h2.833v2.833h4v-2.834h2.832v-3.999h-2.833V9.051z")
						.style("pointer-events","none")
						.attr("transform", "translate(5,60), scale(1.25)");

					var zoomInButton = chart.append("rect")
						.attr("width", 50)
						.attr("height", 50)
						.style("fill", colourBackground[4])
						.style("opacity", 0.2)
						.attr("transform", "translate(0,55)")
						.style("cursor", "pointer")
						.on("click", function(e){
							if (zoom < maxZoom) {
								zoom += zoomIncrement;
								showLocation();
							};
							d3.event.preventDefault();
							return false;
						})
						.on("mouseover", function() {
							if (zoom < maxZoom) {
								d3.select(this).transition()
									.duration(duration)
									.style("opacity", 0.5);
							};
						})
						.on("mouseout", function() {
							d3.select(this).transition()
								.duration(duration)
								.style("opacity", 0.2);
						});

					var zoomOutIcon = chart.append("path")
						.attr("d", "M22.646,19.307c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127l3.535-3.537L22.646,19.307zM13.688,20.369c-3.582-0.008-6.478-2.904-6.484-6.484c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486C20.165,17.465,17.267,20.361,13.688,20.369zM8.854,11.884v4.001l9.665-0.001v-3.999L8.854,11.884z")
						.style("pointer-events","none")
						.attr("transform", "translate(55,60), scale(1.25)");

					var zoomOutButton = chart.append("rect")
						.attr("width", 50)
						.attr("height", 50)
						.style("fill", colourBackground[4])
						.style("opacity", 0.2)
						.attr("transform", "translate(50,55)")
						.style("cursor", "pointer")
						.on("click", function(e){
							if (zoom > 1) {
								zoom -= zoomIncrement;
								showLocation();
							};

							d3.event.preventDefault();
							return false;
						})
						.on("mouseover", function() {
							if (zoom > 1) {
								d3.select(this).transition()
									.duration(duration)
									.style("opacity", 0.5);
							};

						})
						.on("mouseout", function() {
							d3.select(this).transition()
								.duration(duration)
								.style("opacity", 0.2);
						});

					var leftIcon = chart.append("path")
						.attr("d", "M20.834,8.037L9.641,14.5c-1.43,0.824-1.43,2.175,0,3l11.193,6.463c1.429,0.826,2.598,0.15,2.598-1.5V9.537C23.432,7.887,22.263,7.211,20.834,8.037z")
						.style("pointer-events","none")
						.attr("transform", "translate(0,0), scale(1.5)");

					var leftButton = chart.append("rect")
						.attr("width", 50)
						.attr("height", 50)
						.style("fill", colourBackground[4])
						.style("opacity", 0.2)
						.attr("transform", "translate(0,0)")
						.style("cursor", "pointer")
						.on("click", function(e){
							if (counter > 0) {
								counter -= 1;
							};

							showLocation();
							d3.event.preventDefault();
							return false;
						})
						.on("mouseover", function() {

							if (counter > 0) {
								d3.select(this).transition()
									.duration(duration)
									.style("opacity", 0.5);
							};
						})
						.on("mouseout", function() {
							d3.select(this).transition()
								.duration(duration)
								.style("opacity", 0.2);
						});

					var rightIcon = chart.append("path")
						.attr("d", "M11.166,23.963L22.359,17.5c1.43-0.824,1.43-2.175,0-3L11.166,8.037c-1.429-0.826-2.598-0.15-2.598,1.5v12.926C8.568,24.113,9.737,24.789,11.166,23.963z")
						.style("pointer-events","none")
						.attr("transform", "translate(50,0), scale(1.5)");

					var rightButton = chart.append("rect")
						.attr("width", 50)
						.attr("height", 50)
						.style("fill", colourBackground[4])
						.style("opacity", 0.2)
						.attr("transform", "translate(50,0)")
						.style("cursor", "pointer")
						.on("click", function(e){
							if (counter < (items.length - 1)) {
								counter += 1;
							};

							showLocation();
							d3.event.preventDefault();
							return false;
						})
						.on("mouseover", function() {

							if (counter < (items.length - 1)) {
								d3.select(this).transition()
									.duration(duration)
									.style("opacity", 0.5);
							};

						})
						.on("mouseout", function() {
							d3.select(this).transition()
								.duration(duration)
								.style("opacity", 0.2);
						});

					/*	Prepare a cliping path to stop the locations and scales breaking spilling over the edges
					 of the SVG in IE */
					chart.append("defs").append("clipPath")
						.attr("id", "clip")
						.append("rect")
						.attr("x",0)
						.attr("y", 0)
						.attr("width", width)
						.attr("height" , height + marginTop + marginBottom);

					chart.append("g")
						.append("rect")
						.attr("x",0)
						.attr("y", (height - miniHeight) )
						.attr("width", width)
						.attr("height", miniHeight)
						.attr("fill", colourBackground[2])
						.style("opacity", 0.5);

					var miniHolder = chart.append("g")
						.attr("clip-path", "url(#clip)");

					var mini = miniHolder.append("g")
						.attr("width", width)
						.attr("height", miniHeight)
						.attr("class", "mini")
						.attr("transform", "translate(0," + (height - miniHeight)  + ")")


					/* create three seperate x axis for Year, Month and Day based on the same x scale */
					var xYearAxis = d3.svg.axis()
						.scale(x)
						.tickSize(15, 0)
						.ticks(d3.time.years, 1)
						.tickFormat(d3.time.format('%Y'))
						.orient('top');

					var yearAxis = mini.append('g')
						.attr('class', 'year-axis')
						.call(xYearAxis);

					var xMonthAxis = d3.svg.axis()
						.scale(x)
						.tickSize(-miniHeight, 0)
						.orient('top');

					var monthAxis = mini.append('g')
						.attr('class', 'axis')
						.call(xMonthAxis);

					var xDayAxis = d3.svg.axis()
						.scale(x)
						.tickSize(10, 0)
						.tickFormat(function (d) { return ''; })
						.orient('bottom');

					var dayAxis = mini.append('g')
						.attr('class', 'axis')
						.attr("transform", "translate(0," + (miniHeight - 10) + ")")
						.call(xDayAxis);


					/* draw the static triangle to act as a pointer */
					chart.append("path")
						.attr("d", "M10,0 L20,20 L0,20z")
						.style("fill", colourBorder[0])
						.style("pointer-events","none")
						.attr("transform", "translate(" + ((width / 2)-10) + "," + height  + ")");

					/* 	Add rect for each point on the timeline */
					var locations = mini.append("g").selectAll("rect")
						.data(items)
						.enter()
						.append("rect")
						.attr("class", function(d, i) {
							if (i === counter) {
								return "locations selected";
							} else{
								return "locations";
							};
						} )
						.attr("x", function(d, i) {
							return x(d.date1);
						} )
						.attr("y", function(d,i) {
							/*	Work out if the first date of the current range overlaps the last date of the previous
							 if so move the current rect down so that there is no overlap*/
							var prev = 0;

							if (i > 0) {
								prev = i - 1;
							}

							if( i === 0 ) {
								return 0;
							} else if (items[prev].date2 < items[i].date1) {
								return 0;
							} else {
								return (miniHeight - 10)/2;
							}
						} )
						.attr("width", function(d) {
							if (d.date1 < d.date2 ) {
								/* 	decide the width of the rect based on the range of dates */
								return x(d.date2) - x(d.date1);
							} else {
								/* 	if no end date is specified add 86,400,000 milliseconds (1 day) to the first
								 date to create a span of time for the width
								 but make sure that it is at least 4 px wide */
								var thisWidth = x(getDate(d.date1.getTime() + 86400000)) - x(d.date1);

								if (thisWidth < 4) {
									return 4;
								} else {
									return thisWidth;
								}
							}
						} )
						.attr("height", function(d,i) {
							/*	Work out if the first date of the current range overlaps the last date of the previous
							 if so half the height of the block to accomadate */
							var prev = 0;
							var next;

							if (i > 0) {
								prev = i - 1;
							}

							if (i < items.length - 1 ) {
								next = i + 1
							} else {
								next = items.length - 1;
							}

							if ( prev > 0 ) {
								if (items[i].date2 > items[next].date1) {
									return (miniHeight - 10)/2 ;
								} else if (items[prev].date2 > items[i].date1) {
									return (miniHeight - 10)/2 ;
								} else {
									return (miniHeight - 10);
								}
							} else {
								return (miniHeight - 10);
							}

						})
						.on("mouseover", function(d, i) {

							if (d.date1 < d.date2 ) {
								d3.select(".outerwrapper .timeline .tooltip")
									.html("<p>" + d.dateStart + " - <br />" + d.dateEnd + "</p>");
							} else {
								d3.select(".outerwrapper .timeline .tooltip")
									.html("<p>" + d.dateStart  + "</p>");
							}

							var eventLeft = parseInt(d3.select(this).attr("x"));
							var eventWidth = parseInt(d3.select(this).attr("width"));

							var eventTop = parseInt(d3.select(this).attr("y"));

							var tooltipHeight = parseInt($(".outerwrapper .timeline .tooltip").css("height"));

							$(".outerwrapper .timeline .tooltip")
								.css({"left": eventLeft + (eventWidth/2) + "px", "top": 145 - (tooltipHeight - eventTop) + "px"});

							$(".outerwrapper .timeline .tooltip").css({"opacity":1, "display": "block"});

						})
						.on("mouseout", function() {
							$(".outerwrapper .timeline .tooltip").css({"opacity":0, "display": "none"});
						})
						.on("click", function(d, i){
							counter = i;

							showLocation();

							$(".outerwrapper .timeline .tooltip").css({"opacity":0, "display": "none"});

							d3.event.preventDefault();
							return false;
						})

					/*	Function to add the info for the next selected location
					 Adds the relevent content to info-box and provides a new value for xPosition
					 to center the timeline on the selected location*/
					function showLocation () {

						position = eventWidth*counter;

						$('.outerwrapper .info-box').animate({scrollLeft: position}, duration);

						/*	Recalculate the start and end point of the time range based upon
						 the current location and the zoom level */
						timeBegin = getDate(items[counter].date1.getTime() - (timeDiff/zoom));
						timeEnd = getDate(items[counter].date1.getTime() + (timeDiff/zoom));

						/*	Replace the values used in the x domain */
						x.domain( [timeBegin, timeEnd]);


						/*	Adjust the ticks for each x axis depening on the time range */
						/* ticks for than 5 years, 157,788,000,000 milliseconds */
						if ((timeEnd - timeBegin) > 157788000000)  {
							xMonthAxis.ticks(d3.time.years, 1).tickFormat(function (d) { return ''; });
							xDayAxis.ticks(d3.time.years, 1);
						}
						/* ticks for than a year, 31,557,600,000 milliseconds */
						else if ((timeEnd - timeBegin) > 31557600000)  {
							xMonthAxis.ticks(d3.time.months, 3).tickFormat(d3.time.format('%d %b'));
							xDayAxis.ticks(d3.time.months, 1);
						}
						/* ticks for than six months 31,557,600,000 milliseconds divided by 2 */
						else if ((timeEnd - timeBegin) > 15778800000) {
							xMonthAxis.ticks(d3.time.months, 1).tickFormat(d3.time.format('%d %b'));
							xDayAxis.ticks(d3.time.weeks, 1);
						}
						/* ticks for than two months 31,557,600,000 milliseconds divided by 6 */
						else if ((timeEnd - timeBegin) > 5259600000) {
							xMonthAxis.ticks(d3.time.months, 1).tickFormat(d3.time.format('%d %b'));
							xDayAxis.ticks(d3.time.days, 1);
						}
						/* ticks for than a month 31,557,600,000 milliseconds divided by 12 */
						else if ((timeEnd - timeBegin) > 2629800000) {
							xMonthAxis.ticks(d3.time.weeks, 1).tickFormat(d3.time.format('%d %b'));
							xDayAxis.ticks(d3.time.days, 1);
						}
						/* ticks for a day */
						else {
							xMonthAxis.ticks(d3.time.days, 4).tickFormat(d3.time.format('%d %b'));
							xDayAxis.ticks(d3.time.days, 1);
						}



						/*	Redraw each x axis based on the new domain */
						yearAxis.transition()
							.duration(duration)
							.call(xYearAxis);

						monthAxis.transition()
							.duration(duration)
							.call(xMonthAxis);

						dayAxis.transition()
							.duration(duration)
							.call(xDayAxis);


						/*	Give the selected location the class of 'selected'
						 then animate the locations to their new position based on the updated x scale */
						locations.classed("selected", false)
							.attr("class", function(d, i) {
								if (i === counter) {
									return "locations selected";
								} else{
									return "locations";
								};
							})
							.transition()
							.duration(duration)
							.attr("x", function(d,i) {
								return x(d.date1);
							})
							.attr("width", function(d) {
								if (d.date1 < d.date2 ) {
									/* 	decide the width of the rect based on the range of dates */
									return x(d.date2) - x(d.date1);
								} else {
									/* 	if no end date is specified add 86,400,000 milliseconds to the first
									 date to create a span of time for the width
									 but make sure that it is at least 4 px wide */
									var thisWidth = x(getDate(d.date1.getTime() + 86400000)) - x(d.date1);

									if (thisWidth < 4) {
										return 4;
									} else {
										return thisWidth;
									}
								}
							} );

						/*	Fade out the next/prev and zoom buttons when they are not available */
						switch (counter) {
							case 0:
								leftIcon.style("fill", colourText[7]);
								rightIcon.style("fill", colourText[1]);
								break;
							case (items.length - 1):
								leftIcon.style("fill", colourText[1]);
								rightIcon.style("fill", colourText[7]);
								break;
							default:
								leftIcon.style("fill", colourText[1]);
								rightIcon.style("fill", colourText[1]);
								break;
						}

						switch (zoom) {
							case 1:
								zoomInIcon.style("fill", colourText[1]);
								zoomOutIcon.style("fill", colourText[7]);
								break;
							case maxZoom:
								zoomInIcon.style("fill", colourText[7]);
								zoomOutIcon.style("fill", colourText[1]);
								break;
							default:
								zoomInIcon.style("fill", colourText[1]);
								zoomOutIcon.style("fill", colourText[1]);
								break;
						}

					}

					/* Initial call of show position to adjust the timeline on page load */
					showLocation();

				}); /* End of getScript callback function */
			}
		}); /* End of Ajax success function */



		////calendar////
		/*
		var CalendarException = function CalendarException(message) {
			this.message = message;
			this.toString = function() {
				return this.constructor.name + ": " + this.message
			};
		}

		var Calendar = function Calendar(firstWeekDay) {
			//properties
			this.firstWeekDay = firstWeekDay || 0; // 0 = Sunday
		};

		Calendar.prototype = {
			constructor : Calendar,
			weekStartDate : function weekStartDate(date) {
				var startDate = new Date(date.getTime());
				while (startDate.getDay() !== this.firstWeekDay) {
					startDate.setDate(startDate.getDate() - 1);
				}
				return startDate;
			},
			monthDates : function monthDates(year, month, dayFormatter, weekFormatter) {
				if ((typeof year !== "number") || (year < 1970)) {
					throw new CalendarException('year must be a number >= 1970');
				};
				if ((typeof month !== "number") || (month < 0) || (month > 11)) {
					throw new CalendarException('month must be a number (Jan is 0)');
				};
				var weeks = [],
					week = [],
					i = 0,
					date = this.weekStartDate(new Date(year, month, 1));
				do {
					for (i=0; i<7; i++) {
						week.push(dayFormatter ? dayFormatter(date) : date);
						date = new Date(date.getTime());
						date.setDate(date.getDate() + 1);
					}
					weeks.push(weekFormatter ? weekFormatter(week) : week);
					week = [];
				} while ((date.getMonth()<=month) && (date.getFullYear()===year));
				return weeks;
			},
			monthDays : function monthDays(year, month) {
				var getDayOrZero = function getDayOrZero(date) {
					return date.getMonth() === month ? date.getDate() : 0;
				};
				return this.monthDates(year, month, getDayOrZero);
			},
			monthText : function monthText(year, month) {
				if (typeof year === "undefined") {
					var now = new Date();
					year = now.getFullYear();
					month = now.getMonth();
				};
				var getDayOrBlank = function getDayOrBlank(date) {
					var s = date.getMonth() === month ? date.getDate().toString() : "  ";
					while (s.length < 2) s = " "+s;
					return s;
				};
				var weeks = this.monthDates(year, month, getDayOrBlank,
					function (week) { return week.join(" ") });
				return weeks.join("\n");
			}
		};
		var months = "JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" ");
		for (var i=0; i<months.length; i++)
			Calendar[months[i]] = i;

		window.Calendar = Calendar;
		window.consts = {
			monthNames: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			],
			dayNames: [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			]
		};
		*/
		////
		var cal = new Calendar();

		var month = 0;
		var year = 2015;
		var weeks = cal.monthDays(year, month);

		var table = d3.select('#calendar');
		var header = table.append('thead');
		var body = table.append('tbody');

		header
			.append('tr')
			.append('td')
			.attr('colspan', 7)
			.style('text-align', 'center')
			.style('font-size', '16px')
			.text(consts.monthNames[month]);

		header
			.append('tr')
			.selectAll('td')
			.data(consts.dayNames)
			.enter()
			.append('td')
			.style('text-align', 'center')
			.text(function (d) {
				return d;
			});

		weeks.forEach(function (week) {
			body
				.append('tr')
				.selectAll('td')
				.data(week)
				.enter()
				.append('td')
				.attr('class', function (d) {
					return d > 0 ? '' : 'empty';
				})
				.text(function (d) {
					return d > 0 ? d : '';
				});
		});
		////END calendar////

		// Animation //
		var title = $('.ani-title');
		var youtubePlayBtn = $('#youtubePlayButton');
		var techIcons = $('.ani-techs');
		var meanTotem = $('#meanTotem');
		var meanTotemDesc = $('#meanTotem-desc');
		$scope.clickPlayBtn = function() {
			TweenMax.fromTo(youtubePlayBtn, 1.5, {scale:2}, {scale:0.8, opacity:0});
			TweenMax.to(title, 2.5, {x:-1200});
			TweenMax.to('.ani-techs', 0.1, {opacity:1});
			TweenMax.to([meanTotem,meanTotemDesc], 1.3, {display:'block', height: '100%', opacity:1});
		}

		$scope.resetPlayBtn = function() {
			TweenMax.to(youtubePlayBtn, 0.5, {scale:1, opacity:1});
			TweenMax.to(title, 0.5, {x:0});
			TweenMax.to([meanTotem, meanTotemDesc], 1.3, {display:'none', height: '0%', opacity:0});
		}

		// End Animation //

	}
]);

'use strict';

angular.module('mean-tutorials').controller('Project1Controller', ['$scope','$document','$timeout',
	function($scope, $document, $timeout) {

		$scope.id='meanT-project1';
		var width = 960,
			height = 500,
			centered;

		var projection = d3.geo.albersUsa()
			.scale(1070)
			.translate([width / 2, height / 2]);

		var path = d3.geo.path()
			.projection(projection);

		var aspect = 500 / 950;

		var svg = d3.select("#geo").append("svg")
			.attr("viewBox", "0 0 960 500")
			.attr("preserveAspectRatio", "xMidMid")

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

	}
]);

'use strict';

angular.module('mean-tutorials').controller('Project2Controller', ['$scope',
	function($scope,$rootScope) {
        // Disqus ID
		$scope.id='meanT-project2';

        // Google Map
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

        // Listen event
        $scope.$on('handleEmit', function(event, args) {
            $scope.$broadcast('handleBroadcast', args);
        });
	}
]);

'use strict';

angular.module('mean-tutorials').controller('Project3Controller', ['$scope',
	function($scope) {
		// Project3 controller logic
		// ...
	}
]);
var CalendarException = function CalendarException(message) {
    this.message = message;
    this.toString = function() {
        return this.constructor.name + ": " + this.message
    };
}

var Calendar = function Calendar(firstWeekDay) {
    //properties
    this.firstWeekDay = firstWeekDay || 0; // 0 = Sunday
};

Calendar.prototype = {
    constructor : Calendar,
    weekStartDate : function weekStartDate(date) {
        var startDate = new Date(date.getTime());
        while (startDate.getDay() !== this.firstWeekDay) {
            startDate.setDate(startDate.getDate() - 1);
        }
        return startDate;
    },
    monthDates : function monthDates(year, month, dayFormatter, weekFormatter) {
        if ((typeof year !== "number") || (year < 1970)) {
            throw new CalendarException('year must be a number >= 1970');
        };
        if ((typeof month !== "number") || (month < 0) || (month > 11)) {
            throw new CalendarException('month must be a number (Jan is 0)');
        };
        var weeks = [],
            week = [],
            i = 0,
            date = this.weekStartDate(new Date(year, month, 1));
        do {
            for (i=0; i<7; i++) {
                week.push(dayFormatter ? dayFormatter(date) : date);
                date = new Date(date.getTime());
                date.setDate(date.getDate() + 1);
            }
            weeks.push(weekFormatter ? weekFormatter(week) : week);
            week = [];
        } while ((date.getMonth()<=month) && (date.getFullYear()===year));
        return weeks;
    },
    monthDays : function monthDays(year, month) {
        var getDayOrZero = function getDayOrZero(date) {
            return date.getMonth() === month ? date.getDate() : 0;
        };
        return this.monthDates(year, month, getDayOrZero);
    },
    monthText : function monthText(year, month) {
        if (typeof year === "undefined") {
            var now = new Date();
            year = now.getFullYear();
            month = now.getMonth();
        };
        var getDayOrBlank = function getDayOrBlank(date) {
            var s = date.getMonth() === month ? date.getDate().toString() : "  ";
            while (s.length < 2) s = " "+s;
            return s;
        };
        var weeks = this.monthDates(year, month, getDayOrBlank,
            function (week) { return week.join(" ") });
        return weeks.join("\n");
    }
};
var months = "JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" ");
for (var i=0; i<months.length; i++)
    Calendar[months[i]] = i;

window.Calendar = Calendar;
window.consts = {
    monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    dayNames: [
        '일',
        '월',
        '화',
        '수',
        '목',
        '금',
        'S'
    ]
};

'use strict';

angular.module('mean-tutorials').directive('macWindow', [
	function() {
		return {
			scope: {
				projectInfos: '=info'
			},
			templateUrl: 'modules/mean-tutorials/directives/templates/mac-window.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				scope.description = 'hello';
				scope.minimizeMacWindow = function(event){
					console.log('Click minimize');
					var pageElement = event.target.parentElement.parentElement.getElementsByClassName('page');
					TweenMax.to(pageElement, 1.2, {display:'none', height:'0%'});
				}
				scope.maximizeMacWindow = function(event){
					console.log('Click maximize');
					var pageElement = event.target.parentElement.parentElement.getElementsByClassName('page');
					TweenMax.to(pageElement, 1.2, {display:'block',height:'100%'});
				}
			}
		};
	}
]);

'use strict';

//Setting up route
angular.module('user-interface').config(['$stateProvider','$disqusProvider',
	function($stateProvider,$disqusProvider) {
		// Seller interface state routing
		$disqusProvider.setShortname('urimium');
		$stateProvider.
		state('mcmu', {
			url: '/mcmu',
			templateUrl: 'modules/user-interface/views/mcmu.client.view.html'
		}).
		state('front-1', {
			url: '/front-1',
			templateUrl: 'modules/user-interface/views/front-1.client.view.html'
		}).
		state('experimental-interface', {
			url: '/experimental-interface',
			templateUrl: 'modules/user-interface/views/experimental-interface.client.view.html'
		}).
		state('listing-product', {
			url: '/',
			templateUrl: 'modules/user-interface/views/listing-product.client.view.html'
		})
		.state('detail-product', {
			url: '/detail-product/:productId',
			templateUrl: 'modules/user-interface/views/detail-product.client.view.html'
		});
	}
]);

'use strict';

angular.module('user-interface').controller('DetailProductController', ['$scope','$stateParams','$sce','Products', 'GetPurchaseJWT','Payments','configGdrive',
	function($scope, $stateParams, $sce, Products, GetPurchaseJWT, Payments, configGdrive) {
		var productId=$stateParams.productId;
		$scope.quantity = 1;

		var tabs = [
			{ title: '반품/배송/교환 문의', content: 'No Contents'},
			{ title: '상세 상품설명', content: ''},
			{ title: '상품분석평/상품문의', content: "No Contents"},
		];

		// Find a Product
		$scope.findOne = function() {
			Products.get({
				productId: productId
			}).$promise.then(
				function(value){
					$scope.product = value;
					tabs[1].content =  $sce.trustAsHtml(value.detailDesc);
				}
			);
		};

		// Tabs Start -----------------------------------------------


		$scope.tabs = tabs;
		$scope.selectedIndex = 1;

		$scope.announceSelected = announceSelected;
		$scope.announceDeselected = announceDeselected;

		$scope.addTab = function (title, view) {
			view = view || title + " Content View";
			tabs.push({ title: title, content: view, disabled: false, style:style});
		};

		$scope.removeTab = function (tab) {
			for (var j = 0; j < tabs.length; j++) {
				if (tab.title == tabs[j].title) {
					$scope.tabs.splice(j, 1);
					break;
				}
			}
		};

		function announceDeselected(tab) {
			$scope.farewell = 'Goodbye ' + tab.title + '!';
		}

		function announceSelected(tab) {
			$scope.greeting = 'Hello ' + tab.title + '!';
		}
		// Tabs End -----------------------------------------------

		$scope.from_one = {
			from_one :'bold data in controller in from_one.js'
		}

		var accessToken;

		$scope.authenticateWithGoogle =function authenticateWithGoogle(){

			window.gapi.auth.authorize({
				'client_id': configGdrive.clientId,
				'scope':configGdrive.scopes,
				'immediate': false
			}, handleAuthentication);
		}

		function buttonReady(params) {
			if (params.status == "SUCCESS") {
				if (document.readyState === "interactive" || document.readyState == "complete" || document.readyState == "loaded") {
					document.getElementById("wallet-button-holder")
						.appendChild(params.walletButtonElement);
				} else {
					document.addEventListener("DOMContentLoaded", function() {
						document.getElementById("wallet-button-holder")
							.appendChild(params.walletButtonElement);
					});
				}
			}
		}

		var createWalletButtonSuccessCallback = function(param) {
			wallet.transactionId = param.response.response.googleTransactionId;

			console.log('Masked Wallet Response:' + JSON.stringify(param.response));
			/*
			$.mobile.changePage('#confirmation-page', {
				transition: 'slide'
			}
			*/
		}

		var createWalletButtonFailureCallback = function(error) {

			// log error message
			console.log('There was an error getting the Masked Wallet: ' +
			JSON.stringify(error));
		}

		function handleAuthentication(result){
			var test2 = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHb29nbGUiLCJyZXF1ZXN0Ijp7ImN1cnJlbmN5Q29kZSI6IlVTRCIsInByaWNlIjoxMiwibmFtZSI6IkxhbTEyIiwic2VsbGVyRGF0YSI6IjU0MmNmM2NkMDZkZDA3NTAxNjRhZDZmOSIsImRlc2NyaXB0aW9uIjoi7KO866y47IiY65-JOiAx6rCcIn0sInJlc3BvbnNlIjp7Im9yZGVySWQiOiJHV0RHX1MuNjJlY2ExNWItMjUwMS00MzEyLTg4NTgtMzE3YWNkNDk0ZjVjIn0sInR5cCI6Imdvb2dsZS9wYXltZW50cy9pbmFwcC9pdGVtL3YxL3Bvc3RiYWNrL2J1eSIsImF1ZCI6IjA4MjQzMzYyMDA3MTc0NzAwNDY2IiwiaWF0IjoxNDE1ODU1NTQ2LCJleHAiOjE0MTU4NTU1NjZ9.C9vt9cNEAvtrpfw5hqQaqJYa1Mqva8jvINWqQMy0NwM'
			console.log(configGdrive.clientId);
			google.wallet.online.authorize({
				"clientId" : configGdrive.clientId,
				"callback" : function(result){
					console.log(result);
					google.wallet.online.createWalletButton({
						"jwt" : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwODI0MzM2MjAwNzE3NDcwMDQ2NiIsImF1ZCI6Ikdvb2dsZSIsInR5cCI6Imdvb2dsZS93YWxsZXQvb25saW5lL21hc2tlZC92Mi9yZXF1ZXN0IiwiaWF0IjoxNDE1ODU5MTYzLCJleHAiOjE2NzI0NjY0MDAwMDAsInJlcXVlc3QiOnsiY2xpZW50SWQiOiI1NzQ1NjM1Mzk0ODgtbjB2cmV2Z2pwMzYwNmwyMGhmazRycWZrMWRjOGozcWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJtZXJjaGFudE5hbWUiOiJwYlNob3AiLCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvIiwicGhvbmVOdW1iZXJSZXF1aXJlZCI6dHJ1ZSwicGF5Ijp7ImVzdGltYXRlZFRvdGFsUHJpY2UiOiIxNS4wMSIsImN1cnJlbmN5Q29kZSI6IlVTRCJ9LCJzaGlwIjp7fX19.ayFuAfhYnlzBWNlJxbuwHT2o-4k01tZ2x41c9_fzeJk',
						"success" : createWalletButtonSuccessCallback,
						"failure" : createWalletButtonFailureCallback,
						"ready" : buttonReady,
						"height": "44",
						"width": "230"
					});
				}
			});
			/*
			if(result && !result.error){
				$scope.isAuth = true;
				$scope.authName = 'Deauthorize';
				accessToken = result.access_token;

			}else{
				console.log(result);
				console.log(result.error);
				console.log('fail to authentication')
			}
			$scope.$digest();
			*/
		}

		$scope.testPurchaseProduct = function(){
			google.wallet.online.setAccessToken(
				"[accessToken]");
		};

		$scope.purchaseProduct = function(productID, quantity){
			console.log(productID);
			console.log(quantity);
			var optdesc= '주문수량: '+ quantity+'개';
			GetPurchaseJWT.query({productID: productID, qty: quantity, optdesc: optdesc}).$promise
				.then(function (response){
					google.payments.inapp.buy({
						parameters: {},
						jwt: response[0],
						success: function(result) {
							//window.alert('success: '+ result);
							//console.log(result.request);
							//console.log(result.response);
							console.log(result.jwt);
							// Insert Payment History
							createPaymentHistory(result);
						},
						failure: function() {
							window.alert('Your Payment transaction is failed')
						}
					})
				});
		};

		var createPaymentHistory = function (result) {
			// Create new Payment object
			var payment = new Payments({
				name: result.request.name,
				price: Number(result.request.price),
				sellerData: result.request.sellerData,
				description: result.request.description,
				currencyCode: result.request.currencyCode,
				orderID: result.response.orderId
			});
			// Redirect after save
			payment.$save(function (response) {
				//$location.path('payments/' + response._id);
				// Clear form fields
				//$scope.name = '';
			}, function (errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
	}
]);

'use strict';

angular.module('user-interface').controller('ExperimentalinterfaceController', ['$scope',
	function($scope) {

	}
]);

'use strict';
angular.module('user-interface').controller('Front1Controller', ['$scope','$log',
	function($scope, $log) {
		$scope.id = 'frint-1';
		$scope.tests = [];

		for(var index=0; index < 4; index++){
			$scope.tests.push(index);
		}

		$scope.title = '의리미엄으로 가보자';
		$scope.clickProduct = function(index){
			console.log(index);
		};

		var boxGraphic = Snap('.boxSvg');
		var headBox = boxGraphic.select('#box-lead');
		var upperBox = boxGraphic.select('#box-lead-target');
		var open = 0;
		var closedBox;

		var headBoxOpenPath = headBox.attr("d");
		var headBoxClosedPath = boxGraphic.select('#box-lead-target').attr("d");
		headBox.click(openCloseBox);

		var openCloseBox = function(){
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
			headBox.stop().animate({d: path}, 1000, ease);
		};
		openCloseBox();

		upperBox.click(function () {
			console.log('upperBox')
		});

		var menuSvg = Snap('#menu1');
		menuSvg.attr({opacity:0.2, fill:'#FFFFFF'})
		var menuSvg2 = Snap('#menu2');
		var menuSvg3 = Snap('#menu3');

		var circle1 = menuSvg.circle(60,60,60);
		var circle2 = menuSvg2.circle(60,60,60);
		var circle3 = menuSvg3.circle(60,60,60);
		var text1 = menuSvg.text(55, 60, "D");
		text1.attr({fill:'#FFFFFF'});

		var circleNText = menuSvg.group(circle1, text1);
		circleNText.drag();







		/////////////////////////////////////////////////
		//http://codepen.io/sdras/pen/RNWaMX
		TweenMax.ticker.fps(60);
		var box = $('.boxSvg');
		$(document).ready(master)
		function master() {
			var takeOne = new TimelineLite();
			takeOne.to(box, 2, {scale:0.5, ease:Expo.easeOut})
				.to(box, 3, {scale:0.8, y:-120, ease:Expo.easeOut})
				.to(box, 3, {rotation:180, transformOrigin:"50% 50%", ease:Expo.easeOut, onComplete:openCloseBox})
		}

		var data = Snap.path.toCubic($('.boxSvg2 path').attr('d')),
			dataLength = data.length,
			points = [], //holds our series of x/y values for anchors and control points,
			pointsString = data.toString();

// convert cubic data to GSAP bezier
		for (var i = 0; i < dataLength; i++) {
			var seg = data[i];
			if (seg[0] === "M") { // move (starts the path)
				var point = {};
				point.x = seg[1];
				point.y = seg[2];
				points.push(point);
			} else { // seg[0] === "C" (Snap.path.toCubic should return only curves after first point)
				for (var j = 1; j < 6; j+=2) {
					var point = {};
					point.x = seg[j];
					point.y = seg[j+1];
					points.push(point);
				}
			}
		}

//make the tween
		var tween = TweenMax.to("#circleTarget", 3, {bezier:{type:"cubic", values:points}, force3D:true, ease:Power0.easeNone});



		/*
		var $text = $("p.lg"), $text2 = $("p.lg2"), $text3 = $("p.lg3"), $text4 = $("p.lg4"), $text5 = $("p.lg5"),
			$head = $(".head"),
			$neck = $(".neck"),
			$torso = $(".torso"),
			$person = $(".person"),
			$landscape = $(".landscape"),
			$inside = $(".inside"),
			$reg = $(".reg"),
			$circle = $(".inside circle"),
			$tiny = $(".tiny"),
			$starfield = $(".starfield"),
			$stars = $(".stars"),
			$starpoly = $(".star-poly"),
			$cons = $(".cons"),
			$cons2 = $(".cons2"),
			$flare = $(".flare");

		TweenMax.set("p, .cons, .cons2", {perspective:400});
		TweenMax.set("p, .landscape, .starfield,  .contour2, .inside, .turn, .around, .cons, .cons2", {visibility:"visible"});

// when you're feeling low
		function sceneOne() {
			var tl = new TimelineLite();

			tl
				.to($person, 3, {rotation:-5, transformOrigin:"80% 50%", y:-10,  ease:Circ.easeOut})
				.to($head, 3, {rotation:-10, transformOrigin:"0% 100%", y:10, ease:Back.easeOut}, "-=3")
				.to($neck, 3, {rotation:-10, transformOrigin:"0% 100%", y:10, ease:Back.easeOut}, "-=3");

			return tl;
		}

// you might be focused on the wrong thing
		function sceneTwo() {
			var tl = new TimelineLite();



			tl
				.add("scaleIn")
				.to($person, 2, {scale:3, x:-60, ease:Circ.easeOut}, "scaleIn")
				.to($landscape, 2, {scale:2.5, y:-100, x:-170, ease:Circ.easeOut}, "scaleIn");

			return tl;
		}

// you might be too zoomed in
		function sceneThree() {
			var tl = new TimelineLite();



			tl
				.add("insular-=4");
			tl.to($landscape, 2, {scale:20, transformOrigin:"50% 50%", force3D:true, ease:Power2.easeIn}, "insular+=1")
				.to($person, 3, {scale:5, x:-100, y:200, force3D:true, ease:Power2.easeIn}, "insular-=0.5")
				.fromTo($inside, 3, {scale:0, force3D:true, ease:Power2.easeIn}, {scale:3, x:400, force3D:true, transformOrigin:"50% 50%", ease:Power2.easeIn}, "insular")
				.staggerFrom($reg, 4.25, {autoAlpha:0, rotation:90, force3D:true, transformOrigin:"50% 50%", ease:Bounce.easeOut}, 0.1, "-=2.25")
				.from($tiny, 3.5, {opacity:0, scale:0, transformOrigin:"50% 50%", ease:Elastic.easeOut}, "-=3.5")
				.add("inner")
				.to($tiny, 3, {opacity:0, scale:0, rotation:180, transformOrigin:"50% 50%", ease:Elastic.easeOut}, "inner")
				.staggerTo($reg, 4, {autoAlpha:0, rotation:200, transformOrigin:"50% 50%", ease:Power4.easeOut}, 0.1, "inner")
				.to($inside, 2, {scale:0, opacity:0, ease:Power2.easeIn}, "inner+=2")
				.to($landscape, 3, {scale:1.5, y:0, transformOrigin:"50% 50%", force3D:true, ease:Expo.easeOut}, "inner+=3")
				.to($person, 3, {scale:1.5, y:0, transformOrigin:"50% 50%", force3D:true, ease:Expo.easeOut}, "inner+=4");


			return tl;
		}

// you're looking through the wrong end of the telescope
		function sceneFour() {
			var tl = new TimelineLite();


			tl
				.add("person-=1")
				.to($head, 3, {rotation:5, transformOrigin:"0% 100%", y:-10, ease:Power2.easeOut}, "person")
				.to($neck, 3, {rotation:5, transformOrigin:"0% 100%", y:-10, ease:Power2.easeOut}, "person")
				.to($torso, 3, {rotation:5, transformOrigin:"0% 100%", y:-10, ease:Power2.easeOut}, "person")
				.to($person, 2, {rotation:60, transformOrigin:"50% 50%", y:-10, ease:Power2.easeOut})
				.add("atmosphere-=1")
				.to($landscape, 3, {scale:0.4, opacity:0, transformOrigin:"50% 50%", y:35, force3D:true, ease:Power4.easeOut}, "atmosphere-=1")
				.to($person, 2, {scale:3, transformOrigin:"50% 50%", x:-800, y:600, force3D:true, ease:Power4.easeOut}, "atmosphere")
				.from(".around", 1, {opacity:0, scale:0, transformOrigin:"50% 50%", ease:Power4.easeOut}, "atmosphere");

			return tl;
		}

// the turn it around scene
		function sceneFive() {
			var tl = new TimelineLite();


			tl.from(".turn", 0.5, {autoAlpha:0, ease:Elastic.easeOut})
				.from($starfield, 1, {rotation:10, opacity:0, scale:2, ease:Back.easeOut}, 0.1)
				.from($starpoly, 1, {y:-200, x:100, scale:1.2, ease:Back.easeOut}, 0.1)
			return tl;
		}

// spacedance
		function sceneSix() {
			var tl = new TimelineLite();

			tl.add("sixbegin")
				.fromTo($cons, 2, {rotation:60, scale:0.2, opacity:0, transformOrigin:"0% 100%", x:-200, ease:Power4.easeOut}, {rotation:0, scale:1, opacity:0.7, transformOrigin:"50%", x:500, ease:Power4.easeOut})
				.to($cons, 3, {rotation:-100, scaleX:0.4, z:-300, opacity:0.5, transformOrigin:"50%", x:-20, ease:Back.easeOut}, "+=1")
				.fromTo($cons2, 2, {rotation:-60, scale:0.2, opacity:0, transformOrigin:"0% 100%", x:900, y:-200, ease:Power4.easeOut}, {rotation:0, scale:1, opacity:0.7, transformOrigin:"50%", x:200, ease:Power4.easeOut})
				.to($cons, 4, {rotation:200, y:-150, scaleY:0.2, z:100, opacity:0.3, transformOrigin:"50%", ease:Back.easeOut}, "-=2")
				.to($cons2, 4, {rotation:-80, y:-300, scaleX:0.2, z:100, opacity:0.3, transformOrigin:"50%", ease:Back.easeOut}, "-=2")
				.to($cons2, 1, {opacity:0.4, scaleX:0.25, ease:Expo.easeIn})
				.to($cons2, 5, {scale:0.25, x:600, y:-20, opacity: 0.2, ease:Back.easeOut}, "-=2")

				.staggerFromTo(".cons polygon", 0.8, {opacity:1, ease:Back.easeOut}, {opacity:0.5, repeat:10, scaleX:0.7, transformOrigin:"50%", ease:Back.easeOut}, 0.4, "sixbegin")
				.staggerFromTo(".cons2 polygon", 0.8, {opacity:1, ease:Back.easeOut}, {opacity:0.5, repeat:10, scaleX:0.7, transformOrigin:"50%", ease:Back.easeOut}, 0.4, "sixbegin")

				.staggerTo(".liney", 20, {opacity:0.5, scale:1.4, x:200, y:100, transformOrigin:"50%", ease:Back.easeOut}, 0.4, "sixbegin")

				.to($flare, 15, {scale:0.3, y:100, transformOrigin:"50%", ease:Back.easeOut}, "sixbegin")

				.staggerFromTo($stars, 1, {rotation:10, opacity:1, scale:0.5, ease:Back.easeOut}, {rotation:20, opacity:0, scale:0.85, repeat:-1, ease:Back.easeOut}, 0.1, "sixbegin");

			return tl;
		}



		var master = new TimelineLite();
		$(document).ready(master)
		master.add(sceneOne(), "scene1")
			.add(sceneTwo(), "scene2")
			.add(sceneThree(), "scene3")
			.add(sceneFour(), "scene4")
			.add(sceneFive(), "scene5")
			.add(sceneSix(), "scene6");
		*/

	}

]);

'use strict';

angular.module('user-interface').controller('ListingProductController', ['$scope', '$log', 'Products',
	function($scope, $log, Products) {

		$scope.find = function() {
			$scope.products = Products.query()
			$scope.products.$promise.then(function (result) {
				$scope.partitioned = partition(result, 3);
			});
		};

		$scope.testColumnSystem = function(numberOfColumn){
			$scope.partitioned = partition($scope.products, numberOfColumn);
		}

		$scope.listItemClick = function($index) {
			var clickedItem = $scope.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};

		/*
		$scope.purchaseProduct = function (productID) {
			GetPurchaseJWT.query({ productID: productID }).$promise.then(function (response) {
				console.log(response[0]);
				google.payments.inapp.buy({
					parameters: {},
					jwt: response[0],
					success: function () {
						window.alert('success');
					},
					failure: function () {
						window.alert('failure');
					}
				});
			});
		};
		*/

		function partition(input, size) {
			var newArr = [];
			for (var i=0; i<input.length; i+=size) {
				newArr.push(input.slice(i, i+size));
			}
			return newArr;
		};

	}
]);

'use strict';

angular.module('user-interface').controller('McmuController', ['$scope', '$timeout',
	function($scope, $timeout) {

		var svgMVMU = Snap('#faceSvg');
		Snap.load("modules/user-interface/img/mcmu/mcmu.svg", function(data){
			svgMVMU.append(data);

			var lylics_small = $('#song_small');
			var lylics_ah = $('#song_ah');
			var lylics_hak = $('#song_hak');
			var lylics_haak = $('#song_haak');

			var master = function(){
				var mcmu = $('#faceSvg svg');
				var eyeBro = $('#eyebro path');
				var mouth1 = $('#mouth1');
				var mouth2 = $('#mouth2');
				var leftBro = eyeBro[0];
				var rightBro = eyeBro[2];
				var audio = document.getElementById("audioTag");

				//audio.stop();
				console.log(leftBro);
				console.log(rightBro);


				var closeMouth = $('#mouth1');
				var openMouth = $('#mouth2');

				var mouth_timeLine = new TimelineMax({repeat:3})
				mouth_timeLine.set(closeMouth, {opacity:0})
					.to(openMouth, 0.5,{opacity:1})
					.set(openMouth, {opacity:0})
					.set(closeMouth, {opacity:1});

				var screamSmell = new TimelineMax();
				screamSmell.from(lylics_small, 0.5, {scale:0.5, autoAlpha:0,  ease:Back.easeOut})
					.to(lylics_small, 0.1, {scale:0.5, autoAlpha:1, ease:Back.easeOut})
					.set(lylics_small,{autoAlpha:0});

				var screamAh = new TimelineMax({repeat:8});
				screamAh
					.add(mouth_timeLine)
					.from(lylics_ah, 0.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})//1
					.to(lylics_ah, 0.5, {scale:1, autoAlpha:1, ease:Back.easeOut})
					.from(lylics_ah, 0.1, {scale:0.5, autoAlpha:0, ease:Back.easeOut})//2
					.to(lylics_ah, 0.5, {scale:1, autoAlpha:1, ease:Back.easeOut})
					.from(lylics_ah, 0.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})//3
					.to(lylics_ah, 0.1, {scale:1, autoAlpha:1, ease:Back.easeOut})
					.from(lylics_ah, 0.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})//4
					.to(lylics_ah, 0.5, {scale:1, autoAlpha:1, ease:Back.easeOut})
					.from(lylics_ah, 0.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})//5
					.to(lylics_ah, 0.5, {scale:1, autoAlpha:1, ease:Back.easeOut})
					.set(lylics_ah,{scale:1, autoAlpha:0, ease:Back.easeOut});

				var screamhak = new TimelineMax();
					screamhak.from(lylics_hak, 1.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
					.to(lylics_hak, 1.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
					.from(lylics_haak, 1.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
					.to(lylics_haak, 1.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})

				var timeLine = new TimelineMax({paused:true, delay:.2, onComplete:printComplete})
				timeLine
					.to(mcmu, 3.3, {scale:0.5, opacity:1})
					.to([leftBro, rightBro], 1, {rotation: 360, scale:1.2, fill:"red", opacity:1, transformOrigin:"50% 50%"})
					.add(screamSmell, 3.7)
					.add(screamAh,4.5)
					.add(mouth_timeLine, 4.5)
					.add(screamhak,8);

				timeLine.stop();

				$scope.totalTime = timeLine.totalDuration().toFixed(2);

				$timeout(function() {
					//audio.play();
					//timeLine.play();
					console.log('time out is done');
				}, 5000);

			}
			master();



		});

		var printComplete = function(){
			console.log('complete');
		};

		//transform origin
		var boxes = $(".box"),
			stage = $(".stage");


		TweenLite.set(stage, {css:{perspective:400, transformStyle:"preserve-3d"}});
		boxes.each(function (index, element){
			TweenLite.set(element, {css:{rotationY:index*20, transformOrigin:"left 50% -200"}});
			TweenMax.to(element, 20, {css:{rotationY:"+=180"}, repeat:1, ease:Linear.easeNone});
		});
	}
]);

'use strict';

angular.module('user-interface').directive('article', ['Articles',
	function(Articles) {
		return {
			templateUrl: 'modules/user-interface/directives/templates/article.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				scope.find = function() {
					scope.articles = Articles.query();
				};
				scope.find();

			}
		};
	}
]);

'use strict';
//http://css-tricks.com/draggable-elements-push-others-way/
angular.module('user-interface').directive('mainInterface', ['$compile',
	function($compile) {
		return {
			templateUrl: 'modules/user-interface/directives/templates/main-interface.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {

				var draggableTargets = $('.draggable-target');
				var ids = [];
				angular.forEach(draggableTargets, function(index){ids.push(index.id)})
				console.log(ids);

				scope.clicked=false;
				scope.dragable = false;
				scope.dragin = false;
				var newY, ghost = null;

				var sortable = $("#box");
				var box = Draggable.create(sortable,
					{
						type:"x,y",
						edgeResistance:0.85,
						//throwProps:true,
						//onPress: draggablePress,
						onDragStart:function(){
							TweenMax.to("#box",0.25,{scale:0.8});
							console.log('Click');
						},
						onDrag: function(){
							TweenMax.to(".draggable-target",0,{opacity:1, backgroundColor:'lightgreen'});
							angular.forEach(ids, function(index){
								if (box[0].hitTest("#"+index, 20)) {
									TweenMax.to("#"+index, 0.25,{opacity:0.5, backgroundColor:'lightgreen'});
								}
							});
						},
						onDragEnd:function(){
							angular.forEach(ids, function(index){
								if (box[0].hitTest("#"+index, 20)) {
									var el = $compile( "<article></article>" )(scope );
									angular.element("#"+index).append(el);
									//Set bound to menu
									box[0].applyBounds("#widget_menu");
									//release bound setting
									box[0].vars.bounds="";
								}
							});

							TweenMax.to("#box",0.25,{scale:1});
						}
					});
			}
		};
	}
]);

'use strict';

angular.module('user-interface').factory('Allproducts', ['$resource',
	function($resource) {
		return $resource('products/:productID', {productID: '@_id'});
	}
]);

angular.module('user-interface').factory('AllBanners', ['$resource',
	function($resource) {
		return $resource('banners', {productID: '@_id'});
	}
]);

'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);
'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/mean-home');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/mean-home');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/mean-home');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);

'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return $resource('users', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);