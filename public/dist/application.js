"use strict";

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'mean';
	var applicationModuleVendorDependencies =
        [
            'ngResource',
            'ngCookies',  'ngAnimate',  'ngTouch',
	          'ngMessages',
	          'ngSanitize',  'ui.router',
            'ui.bootstrap', //'ui.utils',
            'ngMaterial', /*'ng-context-menu', 'uiGmapgoogle-maps',*/
            'smart-table',
            //'oc.lazyLoad',
            'nvd3',
            'braintree-angular'
        ];

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
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider','$compileProvider',
	function($locationProvider,$compileProvider) {
		$locationProvider.hashPrefix('!');
        //$compileProvider.debugInfoEnabled(false);
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

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('d2l-ads');

'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('d2l-classes');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('d2l-grades');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('d2l-hws-submits');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('d2l-hws');
'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('d2l');

/**
 * Created by Kevin on 2014-11-26.
 */

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('disqus');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('g-drive');

'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('mean-events');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('mean-tutorials');

'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('payments');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('products');
'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('seller-interface');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('size-util');

'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('the-clean-cruds');
'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('the-clean');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('tinymce');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('tj-hair');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('top-hair');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('user-interface');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('util');

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

		var svgMVMU = new Snap('#j1Svg');
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
				.to(logo, 2, {scale: 0.5, x: -10});

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
				};
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
	};
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
					timeLineInst.from(value, 0.75, {x: -200, autoAlpha: 0});
				}
			);
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
			};
			var wholeSvg=$('.svg1-logo');
			var logo_r = $('#logo-r');
			var logo_u = $('#logo-u');
			var logoTimeLine = new TimelineMax({paused:true, onComplete: afterLogo});
			logoTimeLine.set([logo_r, logo_u],{opacity:0})
				.fromTo([logo_r, logo_u], 2.5, {x:0, scale:0.5, opacity:0},{scale:1, opacity:1})
				.to(logo_r, 1.5, {rotation: 360, transformOrigin: "50% 50%"});
				//.to(wholeSvg, 1.5, {top: 20, scale: 0.2})
				//.to(wholeSvg, 1.5, {top: 20, scale: 0.2, display: 'none', ease:Circ.easeOut });

			$scope.replay = function(){
				logoTimeLine.restart();
			};

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

angular.module('animation').directive('fadeUp', ['$timeout',
	function($timeout) {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
                var tl = new TimelineLite();
                tl.add("scene1", 2)
                    .to(element, 4, {}, "scene1")
                    //add tween 3 seconds after scene1 label
                    .to(element, 1, {opacity:0}, "scene1+=3");
                $timeout(function(element) {
                    console.log('fade-up directive');
                }, 3000);
			}
		};
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

angular.module('articles').controller('ArticlesController',
	['$scope', '$stateParams', '$location', '$http', '$sce','Authentication', 'Articles',
	function($scope, $stateParams, $location, $http, $sce, Authentication, Articles) {
		$scope.authentication = Authentication;
        $scope.docTypes = [{name: 'Project'}, {name: 'Article'}, {name: 'Information'}];
        $scope.docType = 2;

        $scope.radioData = [
            { label: 'Information', value: 1 },
            { label: 'Article', value: 2 },
            { label: 'Project', value: 3}
        ];

		$scope.create = function() {
			var article = new Articles({
				title: $scope.title,
                docType: $scope.docType,
				content: $scope.content
			});

			article.$save(function(response) {
				$location.path('articles/' + response._id);
				$scope.title = '';
                $scope.type='';
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
			}, function(data){console.log(data);data.content = $sce.trustAsHtml(data.content)})
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
		state('bio-table', {
			url: '/bio-table',
			templateUrl: 'modules/bioinfo/views/bio-table.client.view.html'
		}).
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

angular.module('bioinfo').controller('BioTableController', ['$scope','$http',
	function($scope,$http) {
		$http.get('gskbs/indexQuery').success(function(data){
			$scope.data = data;
		});

		function makeApiCall() {
			gapi.client.load('plus', 'v1').then(function() {
				var request = gapi.client.plus.people.get({
					'userId': 'me'
				});
				request.then(function(resp) {
					var heading = document.createElement('h4');
					var image = document.createElement('img');
					image.src = resp.result.image.url;
					heading.appendChild(image);
					heading.appendChild(document.createTextNode(resp.result.displayName));

					document.getElementById('content').appendChild(heading);
				}, function(reason) {
					console.log('Error: ' + reason.result.error.message);
				});
			});
		}
		// Bio table controller logic
		// ...
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
                    TweenLite.to(this, 0.5, {backgroundColor:'gray'});
                });

                element.on('mouseleave', function(){
                    TweenLite.to(this, 0.5, {backgroundColor:'#939393'});
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
]).constant("devConfig", {
		"directive": "red"
	})
    .constant('clientTokenPath', 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIyYmFjOWMxNjE4ZjA3Mzg2YjFmNjRkYTk1Mjc1MTliOWQ3NzMyMjIxOTIxOWUzZDgzOGI4MDVlZWExYzBkY2JhfGNyZWF0ZWRfYXQ9MjAxNS0wMy0wNlQxOTo1NToxOC45MTE2MTMxMjcrMDAwMFx1MDAyNm1lcmNoYW50X2lkPWRjcHNweTJicndkanIzcW5cdTAwMjZwdWJsaWNfa2V5PTl3d3J6cWszdnIzdDRuYzgiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL2RjcHNweTJicndkanIzcW4vY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInRocmVlRFNlY3VyZSI6eyJsb29rdXBVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi90aHJlZV9kX3NlY3VyZS9sb29rdXAifSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwibWVyY2hhbnRBY2NvdW50SWQiOiJzdGNoMm5mZGZ3c3p5dHc1IiwiY3VycmVuY3lJc29Db2RlIjoiVVNEIn0sImNvaW5iYXNlRW5hYmxlZCI6dHJ1ZSwiY29pbmJhc2UiOnsiY2xpZW50SWQiOiIxMWQyNzIyOWJhNThiNTZkN2UzYzAxYTA1MjdmNGQ1YjQ0NmQ0ZjY4NDgxN2NiNjIzZDI1NWI1NzNhZGRjNTliIiwibWVyY2hhbnRBY2NvdW50IjoiY29pbmJhc2UtZGV2ZWxvcG1lbnQtbWVyY2hhbnRAZ2V0YnJhaW50cmVlLmNvbSIsInNjb3BlcyI6ImF1dGhvcml6YXRpb25zOmJyYWludHJlZSB1c2VyIiwicmVkaXJlY3RVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbS9jb2luYmFzZS9vYXV0aC9yZWRpcmVjdC1sYW5kaW5nLmh0bWwifSwibWVyY2hhbnRJZCI6ImRjcHNweTJicndkanIzcW4iLCJ2ZW5tbyI6Im9mZmxpbmUiLCJhcHBsZVBheSI6eyJzdGF0dXMiOiJtb2NrIiwiY291bnRyeUNvZGUiOiJVUyIsImN1cnJlbmN5Q29kZSI6IlVTRCIsIm1lcmNoYW50SWRlbnRpZmllciI6Im1lcmNoYW50LmNvbS5icmFpbnRyZWVwYXltZW50cy5kZXYtZGNvcGVsYW5kIiwic3VwcG9ydGVkTmV0d29ya3MiOlsidmlzYSIsIm1hc3RlcmNhcmQiLCJhbWV4Il19fQ==');


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

        $(document).on( 'scroll', function(){
            console.log('11111');
            if($(document).scrollTop() > 150)
                TweenMax.to($('header'), 1, {y:-51});
            else
                TweenMax.set($('header'), {y:0});
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

'use strict';

//Setting up route
angular.module('d2l-ads').config(['$stateProvider',
	function($stateProvider) {
		// D2l ads state routing
		$stateProvider.
		state('ads2', {
			url: '/ads2',
			templateUrl: 'modules/d2l-ads/views/ads2.client.view.html'
		}).
		state('ads1', {
			url: '/ads1',
			templateUrl: 'modules/d2l-ads/views/ads1.client.view.html'
		});
	}
]);
'use strict';

angular.module('d2l-ads').controller('Ads1Controller', ['$scope',
	function($scope) {
        $scope.date = {
            month: moment().format("MMM").toUpperCase(),
            date: moment().date(),
            year: moment().year()
        }
        $scope.animationC1=function(){
            var c = $('.ad1-calendarHolder');
            TweenMax.to(c, 0.6, {x:0, y:0, scale:0.4, transformOrigin: "50% 50%"});
        }

        $scope.animationC2=function(){
            var c = $('.ad1-calendarHolder');
            TweenMax.to(c, 0.6, {x:0, y:0, scale:1, transformOrigin: "50% 50%"});
        }

        $scope.init = function(){
	          //var tl = new TimelineMax();
	          //
	          //var Tween1 = TweenMax.to($('#testDate'), 3.6, {x:0, y:0, scale:0.2, transformOrigin: "0% 0%"});
	          //var Tween2 = TweenMax.to($('#testTool'), 0.6, {height:100, y:30});
	          //tl.add(Tween1).add(Tween2);
        }


        $scope.menus = [{title: "Animation1", desc:""}, {title: "Animation2", desc:""}, {title: "Animation3", desc:""}]
		var iconData = [
			{name: 'icon-home'        , color: "#777" },
			{name: 'icon-user-plus'   , color: "rgb(89, 226, 168)" },
			{name: 'icon-google-plus2', color: "#A00" },
			{name: 'icon-youtube4'    , color:"#00A" },
			// Use theming to color the font-icon
			{name: 'icon-settings'    , color:"#A00", theme:"md-warn md-hue-5"}
		];
		// Create a set of sizes...
		$scope.sizes = [
			{size:12,padding:0},
			{size:21,padding:2},
			{size:36,padding:6},
			{size:48,padding:10}
		];
		$scope.fonts = [].concat(iconData);
		$scope.it = $scope.sizes[3];
		var gdoc = $('.s48');
	//	TweenMax.to(gdoc, 2, {scale:2});
		$scope.animate = function() {
			TweenMax.to(gdoc, 2, {scaleY:2});
		}

		$scope.animate2 = function() {
			TweenMax.to(gdoc, 2, {scale:2});
		}

		$scope.animate3 = function() {
			TweenMax.to(gdoc, 2, {scaleX:1, scaleY:1});
		}

		function sizeUp(size){
			var gdoc = $('.s48');
			TweenMax.to(gdoc, 2, {scale:size});
		}
	}
]);

'use strict';

angular.module('d2l-ads').controller('Ads2Controller', ['$scope',
	function($scope) {
		// Ads2 controller logic
		// ...
	}
]);
'use strict';

angular.module('d2l-ads').directive('calDate', [
	function() {
		return {
			template: '<div class="ad1-calendarHolder" >'
								+'<div class="ad1-calendar">'
								+'<div class="ad1-month">{{date.month}}</div>'
								+'<div class="ad1-day">{{date.date}}</div>'
								+'<div class="ad1-year">{{date.year}}</div>'
								+'</div>'
								+'<div class="ad1-timer"  ng-mouseover="ad1TimerHover()">'
								+'<div class="ad1-sec">1</div>'
								+'</div>'
								+'</div>',
			restrict: 'E',
			link:{
				pre: function preLink(scope, iElement, iAttrs, controller) {
					//console.log('pre: '+ iElement);
				},
				post: function postLink(scope, iElement, iAttrs, controller) {
					$(".ad1-calendarHolder").hover(
						function() {
							TweenLite.to($(this).find('.ad1-timer'), 1.2, {rotationY:360, ease:Back.easeOut});
						},
						function() {
							TweenLite.to($(this).find('.ad1-timer'), 1.2, {rotationY:0, ease:Back.easeOut});
						}
					);
					//console.log('post: '+ iElement);
				}
			}
		};
	}
]);

'use strict';

angular.module('d2l-ads').directive('lineTrasit', ['$timeout',
	function($timeout) {
		return {
			template: '<div class="svg-container" id="lineTransit"></div>',
			restrict: 'E',
			link: {
				pre:function preLink(scope, element, attrs){
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
						.attr("width", width)
						.attr("height", height)
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
				},
				post:function postLink(scope, element, attrs) {
					var c = $('#svg-line-transit');
					var aspect = c.width()/c.height();
					var container = c.parent().parent().parent();
					$(window).on("resize", $timeout(
						function(){
							$timeout()
							var container = c.parent().parent().parent();
							var targetWidth = container.width();
							if($('figure').width() !==0){
								c.attr("width", targetWidth);
								c.attr("height", Math.round(targetWidth/aspect));
							}
						},0.5)).trigger("resize");
				}
			}
		};
	}
]);

'use strict';

// Configuring the Articles module
angular.module('d2l-classes').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'D2l classes', 'd2l-classes', 'dropdown', '/d2l-classes(/create)?');
		Menus.addSubMenuItem('topbar', 'd2l-classes', 'List D2l classes', 'd2l-classes');
		Menus.addSubMenuItem('topbar', 'd2l-classes', 'New D2l class', 'd2l-classes/create');
	}
]);
'use strict';

//Setting up route
angular.module('d2l-classes').config(['$stateProvider',
	function($stateProvider) {
		// D2l classes state routing
		$stateProvider.
		state('listD2lClasses', {
			url: '/d2l-classes',
			templateUrl: 'modules/d2l-classes/views/list-d2l-classes.client.view.html'
		}).
		state('createD2lClass', {
			url: '/d2l-classes/create',
			templateUrl: 'modules/d2l-classes/views/create-d2l-class.client.view.html'
		}).
		state('viewD2lClass', {
			url: '/d2l-classes/:d2lClassId',
			templateUrl: 'modules/d2l-classes/views/view-d2l-class.client.view.html'
		}).
		state('editD2lClass', {
			url: '/d2l-classes/:d2lClassId/edit',
			templateUrl: 'modules/d2l-classes/views/edit-d2l-class.client.view.html'
		});
	}
]);
'use strict';

// D2l classes controller
angular.module('d2l-classes').controller('D2lClassesController', ['$scope', '$stateParams', '$location', 'Authentication', 'D2lClasses',
	function($scope, $stateParams, $location, Authentication, D2lClasses) {
		$scope.authentication = Authentication;

		// Create new D2l class
		$scope.create = function() {
			// Create new D2l class object
			var d2lClass = new D2lClasses ({
				name: this.name,
                prefix:this.prefix
			});

			// Redirect after save
			d2lClass.$save(function(response) {
				$location.path('d2l-classes/' + response._id);

				// Clear form fields
				$scope.name = '';
                $scope.prefix = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing D2l class
		$scope.remove = function(d2lClass) {
			if ( d2lClass ) { 
				d2lClass.$remove();

				for (var i in $scope.d2lClasses) {
					if ($scope.d2lClasses [i] === d2lClass) {
						$scope.d2lClasses.splice(i, 1);
					}
				}
			} else {
				$scope.d2lClass.$remove(function() {
					$location.path('d2l-classes');
				});
			}
		};

		// Update existing D2l class
		$scope.update = function() {
			var d2lClass = $scope.d2lClass;

			d2lClass.$update(function() {
				$location.path('d2l-classes/' + d2lClass._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of D2l classes
		$scope.find = function() {
			$scope.d2lClasses = D2lClasses.query();
		};

		// Find existing D2l class
		$scope.findOne = function() {
			$scope.d2lClass = D2lClasses.get({ 
				d2lClassId: $stateParams.d2lClassId
			});
		};
	}
]);

'use strict';

//D2l classes service used to communicate D2l classes REST endpoints
angular.module('d2l-classes').factory('D2lClasses', ['$resource',
	function($resource) {
		return $resource('d2l-classes/:d2lClassId', { d2lClassId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('d2l-grades').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'D2l grades', 'd2l-grades', 'dropdown', '/d2l-grades(/create)?');
		Menus.addSubMenuItem('topbar', 'd2l-grades', 'List D2l grades', 'd2l-grades');
		Menus.addSubMenuItem('topbar', 'd2l-grades', 'New D2l grade', 'd2l-grades/create');
	}
]);
'use strict';

//Setting up route
angular.module('d2l-grades').config(['$stateProvider',
	function($stateProvider) {
		// D2l grades state routing
		$stateProvider.
		state('listD2lGrades', {
			url: '/d2l-grades',
			templateUrl: 'modules/d2l-grades/views/list-d2l-grades.client.view.html'
		}).
		state('createD2lGrade', {
			url: '/d2l-grades/create',
			templateUrl: 'modules/d2l-grades/views/create-d2l-grade.client.view.html'
		}).
		state('viewD2lGrade', {
			url: '/d2l-grades/:d2lGradeId',
			templateUrl: 'modules/d2l-grades/views/view-d2l-grade.client.view.html'
		}).
		state('editD2lGrade', {
			url: '/d2l-grades/:d2lGradeId/edit',
			templateUrl: 'modules/d2l-grades/views/edit-d2l-grade.client.view.html'
		});
	}
]);
'use strict';

// D2l grades controller
angular.module('d2l-grades').controller('D2lGradesController', ['$scope', '$stateParams', '$location', 'Authentication', 'D2lGrades',
	function($scope, $stateParams, $location, Authentication, D2lGrades) {
		$scope.authentication = Authentication;

		// Create new D2l grade
		$scope.create = function() {
			// Create new D2l grade object
			var d2lGrade = new D2lGrades ({
				name: this.name
			});

			// Redirect after save
			d2lGrade.$save(function(response) {
				$location.path('d2l-grades/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing D2l grade
		$scope.remove = function(d2lGrade) {
			if ( d2lGrade ) { 
				d2lGrade.$remove();

				for (var i in $scope.d2lGrades) {
					if ($scope.d2lGrades [i] === d2lGrade) {
						$scope.d2lGrades.splice(i, 1);
					}
				}
			} else {
				$scope.d2lGrade.$remove(function() {
					$location.path('d2l-grades');
				});
			}
		};

		// Update existing D2l grade
		$scope.update = function() {
			var d2lGrade = $scope.d2lGrade;

			d2lGrade.$update(function() {
				$location.path('d2l-grades/' + d2lGrade._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of D2l grades
		$scope.find = function() {
			$scope.d2lGrades = D2lGrades.query();
		};

		// Find existing D2l grade
		$scope.findOne = function() {
			$scope.d2lGrade = D2lGrades.get({ 
				d2lGradeId: $stateParams.d2lGradeId
			});
		};
	}
]);
'use strict';

//D2l grades service used to communicate D2l grades REST endpoints
angular.module('d2l-grades').factory('D2lGrades', ['$resource',
	function($resource) {
		return $resource('d2l-grades/:d2lGradeId', { d2lGradeId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('d2l-hws-submits').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'D2l hws submits', 'd2l-hws-submits', 'dropdown', '/d2l-hws-submits(/create)?');
		Menus.addSubMenuItem('topbar', 'd2l-hws-submits', 'List D2l hws submits', 'd2l-hws-submits');
		Menus.addSubMenuItem('topbar', 'd2l-hws-submits', 'New D2l hws submit', 'd2l-hws-submits/create');
	}
]);
'use strict';

//Setting up route
angular.module('d2l-hws-submits').config(['$stateProvider',
	function($stateProvider) {
		// D2l hws submits state routing
		$stateProvider.
		state('listD2lHwsSubmits', {
			url: '/d2l-hws-submits',
			templateUrl: 'modules/d2l-hws-submits/views/list-d2l-hws-submits.client.view.html'
		}).
		state('createD2lHwsSubmit', {
			url: '/d2l-hws-submits/create',
			templateUrl: 'modules/d2l-hws-submits/views/create-d2l-hws-submit.client.view.html'
		}).
		state('viewD2lHwsSubmit', {
			url: '/d2l-hws-submits/:d2lHwsSubmitId',
			templateUrl: 'modules/d2l-hws-submits/views/view-d2l-hws-submit.client.view.html'
		}).
		state('editD2lHwsSubmit', {
			url: '/d2l-hws-submits/:d2lHwsSubmitId/edit',
			templateUrl: 'modules/d2l-hws-submits/views/edit-d2l-hws-submit.client.view.html'
		});
	}
]);
'use strict';

// D2l hws submits controller
angular.module('d2l-hws-submits').controller('D2lHwsSubmitsController', ['$scope', '$stateParams', '$location', 'Authentication', 'D2lHwsSubmits',
	function($scope, $stateParams, $location, Authentication, D2lHwsSubmits) {
		$scope.authentication = Authentication;

		// Create new D2l hws submit
		$scope.create = function() {
			// Create new D2l hws submit object
			var d2lHwsSubmit = new D2lHwsSubmits ({
				name: this.name
			});

			// Redirect after save
			d2lHwsSubmit.$save(function(response) {
				$location.path('d2l-hws-submits/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing D2l hws submit
		$scope.remove = function(d2lHwsSubmit) {
			if ( d2lHwsSubmit ) { 
				d2lHwsSubmit.$remove();

				for (var i in $scope.d2lHwsSubmits) {
					if ($scope.d2lHwsSubmits [i] === d2lHwsSubmit) {
						$scope.d2lHwsSubmits.splice(i, 1);
					}
				}
			} else {
				$scope.d2lHwsSubmit.$remove(function() {
					$location.path('d2l-hws-submits');
				});
			}
		};

		// Update existing D2l hws submit
		$scope.update = function() {
			var d2lHwsSubmit = $scope.d2lHwsSubmit;

			d2lHwsSubmit.$update(function() {
				$location.path('d2l-hws-submits/' + d2lHwsSubmit._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of D2l hws submits
		$scope.find = function() {
			$scope.d2lHwsSubmits = D2lHwsSubmits.query();
		};

		// Find existing D2l hws submit
		$scope.findOne = function() {
			$scope.d2lHwsSubmit = D2lHwsSubmits.get({ 
				d2lHwsSubmitId: $stateParams.d2lHwsSubmitId
			});
		};
	}
]);
'use strict';

//D2l hws submits service used to communicate D2l hws submits REST endpoints
angular.module('d2l-hws-submits').factory('D2lHwsSubmits', ['$resource',
	function($resource) {
		return $resource('d2l-hws-submits/:d2lHwsSubmitId', { d2lHwsSubmitId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

//Setting up route
angular.module('d2l-hws').config(['$stateProvider',
	function($stateProvider) {
		// D2l hws state routing
		$stateProvider.
		state('listD2lHws', {
			url: '/d2l-hws',
			templateUrl: 'modules/d2l-hws/views/list-d2l-hws.client.view.html'
		}).
		state('createD2lHw', {
			url: '/d2l-hws/create',
			templateUrl: 'modules/d2l-hws/views/create-d2l-hw.client.view.html'
		}).
		state('viewD2lHw', {
			url: '/d2l-hws/:d2lHwId',
			templateUrl: 'modules/d2l-hws/views/view-d2l-hw.client.view.html'
		}).
		state('editD2lHw', {
			url: '/d2l-hws/:d2lHwId/edit',
			templateUrl: 'modules/d2l-hws/views/edit-d2l-hw.client.view.html'
		});
	}
]);
'use strict';

// D2l hws controller
angular.module('d2l-hws').controller('D2lHwsController', ['$scope', '$stateParams', '$location', 'Authentication', 'D2lHws',
	function($scope, $stateParams, $location, Authentication, D2lHws) {
		$scope.authentication = Authentication;

		// Create new D2l hw
		//$scope.create = function() {
		//	// Create new D2l hw object
		//	var d2lHw = new D2lHws ({
		//		name: this.name,
         //       class: this.
		//		dDate: new Date(this.dDate)
		//	});
        //
		//	// Redirect after save
		//	d2lHw.$save(function(response) {
		//		$location.path('d2l-hws/' + response._id);
        //
		//		// Clear form fields
		//		$scope.name = '';
		//	}, function(errorResponse) {
		//		$scope.error = errorResponse.data.message;
		//	});
		//};

		// Remove existing D2l hw
		$scope.remove = function(d2lHw) {
			if ( d2lHw ) { 
				d2lHw.$remove();

				for (var i in $scope.d2lHws) {
					if ($scope.d2lHws [i] === d2lHw) {
						$scope.d2lHws.splice(i, 1);
					}
				}
			} else {
				$scope.d2lHw.$remove(function() {
					$location.path('d2l-hws');
				});
			}
		};

		// Update existing D2l hw
		$scope.update = function() {
			var d2lHw = $scope.d2lHw;
			d2lHw.class = d2lHw.class._id;
			//console.log('here');
			d2lHw.dDate = new Date(d2lHw.dDate);

			d2lHw.$update(function() {
				$location.path('d2l-hws/' + d2lHw._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of D2l hws
		$scope.find = function() {
			$scope.d2lHws = D2lHws.query();
		};

		// Find existing D2l hw
		$scope.findOne = function() {
			$scope.d2lHw = D2lHws.get({ 
				d2lHwId: $stateParams.d2lHwId
			}, function(result){
				result.dDate = new Date(result.dDate);
			});
		};
	}
]);

'use strict';

//D2l hws service used to communicate D2l hws REST endpoints
angular.module('d2l-hws').factory('D2lHws', ['$resource',
	function($resource) {
		return $resource('d2l-hws/:d2lHwId', { d2lHwId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

//Setting up route
angular.module('d2l').config(['$stateProvider','$mdIconProvider',
	function($stateProvider,$mdIconProvider) {
		// D2l state routing
		$stateProvider.
		state('lms-start', {
			url: '/lms-start',
			templateUrl: 'modules/d2l/views/lms-start.client.view.html'
		}).
		state('d2l-main', {
			url: '/d2l-main',
			templateUrl: 'modules/d2l/views/d2l-main.client.view.html'
		}).
		state('d2l-stu', {
			url: '/d2l-stu',
			templateUrl: 'modules/d2l/views/d2l-stu.client.view.html'
		}).
		state('d2l-ins', {
			abstract: true,
			url: '/d2l-ins',
			templateUrl: 'modules/d2l/views/d2l-ins.client.view.html'
		}).
			state('d2l-ins.menu',{
				url: '/menu',
				templateUrl: 'modules/d2l/template/ins-menu.html'
			}).
			state('d2l-ins.class', {
				url: '/class',
				templateUrl: 'modules/d2l/template/ins-class.html'
			}).
		state('d2l-ad', {
			url: '/d2l-ad',
			templateUrl: 'modules/d2l/views/d2l-ad.client.view.html'
		}).
		state('d2l-home', {
			url: '/d2l-home',
			templateUrl: 'modules/d2l/views/d2l-home.client.view.html'
		})
		.state('d2l-hw', {
				url: '/d2l/hw',
				templateUrl: 'modules/d2l/views/d2l-hw.client.view.html'
			});

		$mdIconProvider.iconSet("avatar", '/modules/d2l/svg/avatar-icons.svg', 128);
	}
]);

'use strict';

angular.module('d2l').controller('D2lAdController', ['$scope',
	function($scope) {
		// D2l ad controller logic
		// ...
	}
]);
'use strict';

angular.module('d2l')
	.controller('D2lHomeController', D2lHomeController)     //main D2l-Home page
	.controller('gridListDemoCtrl', gridListDemoCtrl)       //grid Menu
	.controller('DemoCtrl', DemoCtrl);                      //<!-- Search Box: Should be removed later-->

function D2lHomeController(
	$scope, $window, Authentication, D2LOauth, D2lHwsSubmits, D2lClasses, D2lHws) {

	//Init
	$scope.classes = D2lClasses.query();
	$scope.hws = D2lHws.query();
	$scope.hwsCopy = [].concat($scope.hws);
	$scope.totalHwPoints = 0;
	$scope.totalPercentages = 0;
	var authentication = Authentication;

	//Should be connected with DB
	$scope.gradeCollection = [
		{numAssignment: 'A1', grade:200, total: 250, docLink:""},
		{numAssignment: 'A2', grade:160, total: 250, docLink:""},
		{numAssignment: 'A3', grade:220, total: 250, docLink:""},
		{numAssignment: 'A4', grade:75, total: 100, docLink:""},
		{numAssignment: 'A5', grade:85, total: 150, docLink:""}
	];

	// To get average and total
	$scope.hws.$promise.then(function(){
		angular.forEach($scope.hws, function(value, key){
				$scope.totalHwPoints += value.totalGrade;
				$scope.totalPercentages += value.percent;
		});
	});

	$scope.linkHW = function(docId){
		var AppScriptAPI = 'https://script.google.com/macros/s/AKfycbzoXxZDgzjLOJdqGUGYCWSpIT7n2sHyvnIo2W7E5jmXI_2sryj3/exec?docId='+docId+'&userId='+authentication.user.username;
		$window.open(AppScriptAPI);
	};



}
D2lHomeController.$inject = ["$scope", "$window", "Authentication", "D2LOauth", "D2lHwsSubmits", "D2lClasses", "D2lHws"];

// Open Grid Menu Controller
function gridListDemoCtrl($scope, $state){
	function goToHWList(){
		//$state.go('listD2lHws');
	}
	$scope.test=function(event, targetInfo){
		console.log('dddd');
		var target = event.target;
		console.log(target);
		TweenLite.to(target, 0.3, {opacity: 0.8, scale:0.85});
		TweenLite.to(target, 0.3, {opacity: 1, scale:1, rotation: 360, delay:0.2, onComplete:goToHWList});
		//TweenLite.to(target, 0.3, {backgroundColor: 'blue', delay:0.5});
	}
	this.tiles = buildGridModel({
		icon : "avatar:svg-",
		title: "Svg-",
		background: ""
	});
	function buildGridModel(tileTmpl){
		var it, results = [ ];
		for (var j=0; j<12; j++) {
			it = angular.extend({},tileTmpl);
			it.icon  = it.icon + (j+1);
			it.title = it.title + (j+1);
			it.span  = { row : "1", col : "1" };
			switch(j+1) {
				case 1: it.background = "red"; it.title = "Notifications"; /* it.span.row = it.span.col = 2; */ break;
				case 2: it.background = "green"; it.title = "Classes"; break;
				case 3: it.background = "darkBlue"; it.title = "List HWs"; it.state="classes"; break;
				case 4: it.background = "blue"; it.title = "Grades"; /*it.span.col = 2;*/ break;
				case 5: it.background = "yellow"; it.title = "Articles"; /* it.span.row = it.span.col = 2; */ break;
				case 6: it.background = "pink"; it.title = "Tutorials"; break;
				case 7: it.background = "darkBlue"; it.title = "Projects"; break;
				case 8: it.background = "purple"; it.title = "Portfolio"; break;
				case 9: it.background = "deepBlue"; it.title = "Career"; break;
				case 10: it.background = "lightPurple"; it.title = "MEANJS Stack"; break;
				case 11: it.background = "yellow"; break;
				case 12: it.background = "deepBlue"; break;
			}
			results.push(it);
		}
		return results;
	}
}
gridListDemoCtrl.$inject = ["$scope", "$state"];

// Search Box Controller Angular Material
function DemoCtrl($timeout, $q){
		var self = this;
		// list of `state` value/display objects
		self.states        = loadAll();
		self.selectedItem  = null;
		self.searchText    = null;
		self.querySearch   = querySearch;
		self.simulateQuery = false;
		// ******************************
		// Internal methods
		// ******************************
		/**
		 * Search for states... use $timeout to simulate
		 * remote dataservice call.
		 */
		function querySearch (query) {
			var results = query ? self.states.filter( createFilterFor(query) ) : [],
				deferred;
			if (self.simulateQuery) {
				deferred = $q.defer();
				$timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
				return deferred.promise;
			} else {
				return results;
			}
		}
		/**
		 * Build `states` list of key/value pairs
		 */
		function loadAll() {
			var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
			return allStates.split(/, +/g).map( function (state) {
				return {
					value: state.toLowerCase(),
					display: state
				};
			});
		}
		/**
		 * Create filter function for a query string
		 */
		function createFilterFor(query) {
			var lowercaseQuery = angular.lowercase(query);
			return function filterFn(state) {
				return (state.value.indexOf(lowercaseQuery) === 0);
			};
		}
	}
	DemoCtrl.$inject = ["$timeout", "$q"];

'use strict';

angular.module('d2l').controller('D2lHwController', ['$scope', '$stateParams',
	'$location', '$timeout', 'Authentication', 'D2lHws','D2lClasses', 'GDriveSelectResult',
	function($scope, $stateParams, $location, $timeout, Authentication, D2lHws, D2lClasses, GDriveSelectResult) {


		$scope.$on('handleEmit', function(event, args) {
			console.log('broadcast is invoked');
			$scope.project.gdocId=args.message;
			$scope.$digest();
		});

		$scope.docs = GDriveSelectResult;
		$scope.project = {gdocId : $scope.docs.id};
		$scope.project = {
			dDate: new Date('4/1/2015'),
			gdocId : GDriveSelectResult.id
			//desc: 'Nuclear Missile Defense System',
		};

		$scope.loadClasses = function() {
			return $timeout(function() {
				$scope.classes = D2lClasses.query();
			}, 650);
		};

		$scope.authentication = Authentication;
		console.log($scope.authentication);

		// Create new D2l hw
		$scope.createNewRecord = function() {
			console.log('Create');
			// Create new D2l hw object

			var d2lHw = new D2lHws ($scope.project);
			d2lHw.class = d2lHw.class._id;

			// Redirect after save
			d2lHw.$save(function(response) {
				$location.path('d2l-hws/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing D2l hw
		$scope.remove = function(d2lHw) {
			if ( d2lHw ) {
				d2lHw.$remove();

				for (var i in $scope.d2lHws) {
					if ($scope.d2lHws [i] === d2lHw) {
						$scope.d2lHws.splice(i, 1);
					}
				}
			} else {
				$scope.d2lHw.$remove(function() {
					$location.path('d2l-hws');
				});
			}
		};

		// Update existing D2l hw
		$scope.update = function() {
			alert('dd');
			var d2lHw = $scope.d2lHw;
			d2lHw.class = d2lHw.class._id;

			d2lHw.$update(function() {
				$location.path('d2l-hws/' + d2lHw._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of D2l hws
		$scope.find = function() {
			$scope.d2lHws = D2lHws.query();
		};

		// Find existing D2l hw
		$scope.findOne = function() {
			$scope.d2lHw = D2lHws.get({
				d2lHwId: $stateParams.d2lHwId
			});
		};
	}
]);

'use strict';

angular.module('d2l').controller('D2lInsController', ['$scope',
	function($scope) {
		$scope.menus = [{title:"Classes", desc:""},{title:"Events", desc:""},{title:"Profile", desc:"linkedin, Google+, facebook, link"},{title:"ToDo", desc:""},{title:"Previous Classes", desc:""}];
	}
]);

'use strict';

angular.module('d2l').controller('D2lStuController', ['$scope',
	function($scope) {
		$scope.menus = [{title:"Previous Classes", desc:""},{title:"Classes", desc:""},{title:"Events", desc:""},{title:"Portfolio", desc:"linkedin, Google+, facebook, link"},{title:"ToDo", desc:""}];
	}
]);

/*
* This controller is for authorization for google file picker
* */

'use strict';

angular.module('d2l')
	.factory('GDriveSelectResult', GDriveSelectResult)
	.controller('GDriveFilePickerController', GDriveFilePicker);

// Communicating between controller and Picker
function GDriveSelectResult(){
	var selectedDocs={id:''};
	return selectedDocs;
}


function GDriveFilePicker($scope, Googledrive, configGdrive, GDriveSelectResult) {
	$scope.isAuth = true;
	$scope.docs = [];
	$scope.setupPicker = function() {
		function pickerCallback(data) {
			if(data.action == google.picker.Action.PICKED){
				//do something
				$scope.files = data.docs;
				$scope.arrive = true;
				GDriveSelectResult.id = data.docs[0].id;
				$scope.$emit('handleEmit', {message: GDriveSelectResult.id});
			}else if(data.action ==google.picker.Action.CANCEL){

			}
		}
		Googledrive.setupPicker(accessToken, pickerCallback);
	}

	$scope.authName = 'Authorization';
	$scope.googleDrive={info:'gDriveCtrl'};
	$scope.openMenu = true;

	$scope.hideResult = function(){
		var target = $('.listFolder');
		TweenLite.to(target, 0.5, {autoAlpha: 0, display:'none'})
	};
	$scope.showResult = function(){
		var target = $('.listFolder')
		TweenLite.to(target, 0.5, {autoAlpha: 1, display:'block'})
	};

	$scope.plusTest = function(){
		var promise = Googledrive.plusTest();
		promise.then(
			function(result){
				//    console.log('service is done')
				$scope.gPlus = result;
				$scope.$digest();
			}
		)
	}

	$scope.listingFolderInfo = function(){
		$scope.gDocs = 'dd';
		console.log('gDriveDashCtrl');
		var promise = Googledrive.listFolder();
		promise.then(
			function(result){
				console.log('service is done');
				$scope.gDocs = result.items;
				$scope.$digest();
			}
		)
		//console.log($scope.gDocs);
		//$scope.$digest();

		//var request = gapi.client.drive.files.get({
		//    'fileId': "1Q_CJwJftcL-zabVm0USc1px5HDfbpxu6Klav-XYOzNg"
		//});
		//request.execute(function(resp) {
		//    if (!resp.error) {
		//        console.log('Title: ' + resp.title);
		//        console.log('Description: ' + resp.description);
		//        console.log('MIME type: ' + resp.mimeType);
		//        console.log(resp);
		//        $scope.gDocs = resp;
		//        $scope.$digest();
		//    } else if (resp.error.code == 401) {
		//        // Access token might have expired.
		//        checkAuth();
		//    } else {
		//        console.log('An error occured: ' + resp.error.message);
		//    }
		//});
	}

	// List File
	$scope.listFile = function(){

	}

	var accessToken;
	$scope.arrive = false;
	$scope.authName = 'Authorize';

	$scope.init = function init(){
		window.gapi.load('auth', $scope.authenticateWithGoogle);
		window.gapi.load('picker');
		//gapi.client.load('urlshortener', 'v1');
	}
	$scope.authenticateWithGoogle =function authenticateWithGoogle(){
		window.gapi.auth.authorize({
			'client_id': configGdrive.clientId,

			'scope':configGdrive.scopes,
			'immediate': false
		}, handleAuthentication);
	}

	function handleAuthentication(result){
		if(result && !result.error){
			$scope.isAuth = true;
			$scope.authName = 'Deauthorize';
			accessToken = result.access_token;
			console.log(accessToken);

			/*
			 callGooglePlus();
			 setFilePicker();
			 listFolder();
			 getGoogleDriveInfo();
			 createFolder();
			 */
			//createNewAccountFolder();
			//setFilePicker(); // singleFile
			//findTargetUriFolder();
		}else{
			console.log(result);
			console.log(result.error);
			console.log('fail to authentication')
		}
		//$scope.$digest();
	}

	function listFolder() {
		Googledrive.listFolder()
	}

	$scope.findFolder = function() {
		console.log('findFolder');
		//var query = "title contains 'URI-' and mimeType = 'application/vnd.google-apps.folder'";
		var query = "mimeType = 'application/vnd.google-apps.folder'";
		Googledrive.findFolder(query, function(result){
			//var numFolder = result.result.items.length;
			console.log(result);
		});
	}

	$scope.listFolderInformation = function(){
		Googledrive.listFolder();
	}


	function createNewAccountFolder(){
		//Pre. Get User Information
		//check if there exists an
		// API /users/me (only allow to have)

		var callback = function(resp){
			console.log(resp.result.items.length);
			if(resp.result.items.length == 0){
				$http.get('users/me')
					.success(function(response) {
						console.log(response);
						var folderName = 'D2l-'+response._id;
						//1. Create A New Folder
						Googledrive.createFolder(folderName, accessToken);
						//2. Update User Information
						//$http.get()
					});
			}
			else{
				console.log('there is already exist')
				$scope.rootGdriveFolderID = resp.result.items[0].id
				$scope.$digest();
			}
		}
		Googledrive.findFolder(callback);
	}
}
GDriveFilePicker.$inject = ["$scope", "Googledrive", "configGdrive", "GDriveSelectResult"];

'use strict';

angular.module('d2l').controller('InsClassController', ['$scope','$http','CreateFile',
	function($scope,$http,CreateFile) {

		var objFile = CreateFile.create();
		console.log(objFile.getInfo());

		TweenMax.set($('#fileCreator'), {alpha:0, yPercent:-150});
		$scope.assignments = [];


		$scope.createHWbtn = function(){
			$scope.isOpen = !$scope.isOpen;
			if($scope.isOpen){
				console.log("open");
				TweenMax.to($('#fileCreator'), 1, {alpha:1, yPercent:0, display:"block",   ease: Power2.easeOut, paused:false});
			}

			else{
				console.log("close");
				TweenMax.to($('#fileCreator'), 1, {alpha:0, yPercent:-150, display:"none", ease: Power2.easeOut, paused:false});
			}
			$scope.assignment = '';
		}

		$scope.createFolder = function(){

		}

		$scope.publishFile = function(){

		}

		$scope.listGPlus = function(){
			$http.get('/gs').success(function(data, status, headers, config){
				$scope.userInfo = data;
				console.log('data', data);
				console.log('status', status);
				console.log('headers', headers);
				console.log('config', config);
			});
		}
	}
]);

'use strict';

angular.module('d2l').controller('LmsStartController', ['$scope',
	function($scope) {
		// Lms start controller logic
		// ...
	}
]);
'use strict';

/**
 *  @ngdoc module
 *  @name pbshop.components.select
 */

/*
 [Process Step]

 Check Requirements
 Process payment
 */

/**************************************************************

 ### TODO ###
 **DOCUMENTATION AND DEMOS**

 -[ ] ng-modle with child mdOptions (basic)
 -[ ] ng-modle="foo" ng-model-options="{targetBy: ''}"

 **************************************************************/

angular.module('d2l')

	.directive('d2lHwGenerator', HwGenerator)
	.directive('d2lHwPublisher', HwPublisher)
	.factory('D2lHwPermission', ['$resource',
		function($resource) {
			return $resource('/HWD2l/getPermission/:id', {
				id: '@_id'
			},{getDoc: {method:'GET'}});
		}
	])
	.factory('D2lHwCopy', ['$resource',
		function($resource) {
			return $resource('/HWD2l/copyFile/:id/:userNameDoc', {
				id: '@_id',userNameDoc:'@_userNameDoc'
			},{copyDoc: {method:'GET'}});
		}
	])
	.controller('ToastCtrl', ["$scope", "$mdToast", function($scope, $mdToast) {
		$scope.closeToast = function() {
			$mdToast.hide();
		};
	}]);

function HwGenerator($mdToast, $location, devConfig, D2lHws) {
	return {
		templateUrl: 'modules/d2l/directives/template/d2l-hw-generator-tpl.html',
		restrict: 'E',
		link: function postLink(scope, element, attrs) {
			scope.isOpen=true;
			//scope.devColor = devConfig.directive;
			scope.docTypes = ['Docs', 'Sheets', 'Slides', 'PDF'];

			scope.create = function() {
				console.log('Create');
				// Create new D2l hw object
				var d2lHw = new D2lHws (scope.project);
				// Redirect after save

				d2lHw.$save(function(response) {
					$location.path('d2l-hws/' + response._id);
					// Clear form fields
					scope.name = '';
				}, function(errorResponse) {
					$scope.error = errorResponse.data.message;
				});
			};



			scope.publishHW = function() {
				alert('Click');
			}

			scope.toastPosition = {
				bottom: true,
				top: false,
				left: false,
				right: true
			};
			scope.getToastPosition = function() {
				return Object.keys(scope.toastPosition)
					.filter(function(pos) { return scope.toastPosition[pos]; })
					.join(' ');
			};
			scope.showCustomToast = function() {
				$mdToast.show({
					controller: 'ToastCtrl',
					templateUrl: 'modules/d2l/directives/toast-template.html',
					hideDelay: 16000,
					position: scope.getToastPosition()
				});
			};

		}
	};
}
HwGenerator.$inject = ["$mdToast", "$location", "devConfig", "D2lHws"];

function HwPublisher($timeout, $http, D2lHwPermission, D2lHwCopy, D2lHws){
	return {
		templateUrl: 'modules/d2l/directives/template/d2l-hw-publisher-tpl.html',
		restrict: 'E',
		link:function postLink(scope, element, attrs) {
			scope.listP = function(id){
					scope.result = D2lHwPermission.getDoc({
						id: id
					}).$promise.then(
						//success
						function( value ){
							scope.items = value.items;
							//based On the result
						},
						//error
						function( error ){console.log(error);}
					)
			};

			//Make a Copy
			scope.copyFileTemplate = function(id){

				var users = [{email:"pbshop1001@gmail.com"},{email:"kruny1001@gmail.com"}];

				users.forEach(function(user){
					D2lHwCopy.copyDoc({id:id, userNameDoc: user.email})
						.$promise.then(function(value){console.log(value); alert('copy process is done');},function(error){console.log(error)});
				})



				//D2lHwCopy.copyDoc({id:id})
				//	.$promise.then(function(value){console.log(value); alert('copy process is done');},function(error){console.log(error)});

			}

			scope.gsCopyFile = function(){

				var url = 'http://localhost:8080/api/AKfycbwqcvW0ogVTk4o5-J89Fih5wO2XoNcsiTX_FCfbPXZdhGpIYNHW/cats';
				$http.get(url).success(function(data){console.log(data)}).error(function(data){data});
			}

			//Insert Permissions


			//Create File
			scope.publish = function(id){
				scope.result = D2lHwPermission.getDoc({
					id: id
				}).$promise.then(
					//success
					function( value ){
						scope.items = value.items;
						//based On the result
					},
					//error
					function( error ){console.log(error);}
				)
			};

			scope.loadUsers = function() {
				// Use timeout to simulate a 650ms request.
				scope.users = [];
				scope.d2lhws = D2lHws.query();

				return $timeout(function() {
					scope.users = [
						{ id: 1, name: 'Copy of restFulAPI Test2', docId:'1HP0LZO1chIZSp-wxK0Gx2B5EVDrw9dVnl8y6OkQB5_k' },
						//{ id: 2, name: 'Shaggy Rodgers' },
						//{ id: 3, name: 'Fred Jones' },
						//{ id: 4, name: 'Daphne Blake' },
						//{ id: 5, name: 'Velma Dinkley' },
					];
				}, 650);
			};

		}
	}
}
HwPublisher.$inject = ["$timeout", "$http", "D2lHwPermission", "D2lHwCopy", "D2lHws"];

'use strict';

angular.module('d2l').factory('CreateFile',CreateFile);

function CreateFile($resource) {
    return {
        create: create,
        read: read
    };

    function create(){
        console.log('Create Function from CreateFile');
        var o = $resource('/userInfo',
            {userId: 123, cardId:'@id'},
            {
                charge:{method:'POST', params:{charge:true}},
                getInfo:{method:'GET'}
            });
        return o;
    }

    function read(){
        console.log('read Function from CreateFile');
        var o =$resource('/createFile', {},
            {
                readFile:{method:'GET', params:{id:'@id'}}
            });
        return o;
    }
}
CreateFile.$inject = ["$resource"];

'use strict';

angular.module('d2l').factory('D2LOauth', ['configGdrive',
	function(configGdrive) {
        var testStr = 'asdfasdfsdfsf';
        var accessToken;
        var permalLink = 'http://drive.google.com/uc?export=view&id=';
        var arrive = false;
        var authName = 'Authorize';
        var isAuth = false;

		return {
            getAccessToken: getAccessToken,
            authenticateWithGoogle: authenticateWithGoogle,
            //setupPicker: setupPicker,
            createNewAccountFolder: createNewAccountFolder
		};

        function getAccessToken() {
            return true;
        }

        function authenticateWithGoogle(){
            window.gapi.auth.authorize({
                'client_id': configGdrive.clientId,
                'scope':configGdrive.scopes,
                'immediate': false
            }, handleAuthentication);
        }

        function handleAuthentication(result){
            console.log(testStr);
            if(result && !result.error){
                isAuth = true;
                authName = 'Deauthorize';
                accessToken = 'ya29.FgGTDUyLSY6oSvDzClGVcrwws2xf2PJ6JHC5uXkRoutVf6k8BLamn4t9dsvKBG0sHtZR34tYjP6CHg';
                //accessToken = result.access_token;
                console.log(accessToken);
                /*callGooglePlus();setFilePicker();listFolder();getGoogleDriveInfo();createFolder();*/

                //createNewAccountFolder();
                //setFilePicker(); // singleFile
                //findTargetUriFolder();
            }else{
                console.log(result);
                console.log('ERROR: '+result.error);
                console.log('fail to authentication')
            }
            //$scope.$digest();
        }

        // Google PlatForm Service
        //function setupPicker() {
        //    function pickerCallback(data) {
        //        if(data.action == google.picker.Action.PICKED){
        //            //do something
        //            $scope.files = data.docs;
        //            $scope.arrive = true;
        //
        //            // make shorten URL
        //            var request = gapi.client.urlshortener.url.get({
        //                'shortUrl': 'http://goo.gl/fbsS'
        //            });
        //            request.then(function(response) {
        //                appendResults(response.result.longUrl);
        //            }, function(reason) {
        //                console.log('Error: ' + reason.result.error.message);
        //            });
        //
        //            //alert('URL: ' + data.docs[0].url);
        //            $scope.$digest()
        //        }else if(data.action ==google.picker.Action.CANCEL){
        //            //alert('goodbye');
        //        }
        //    }
        //    Googledrive.setupPicker(accessToken, pickerCallback);
        //}

        // Create New Account Folder
        function createNewAccountFolder(){
            //Pre. Get User Information
            //check if there exists an
            // API /users/me (only allow to have)

            var callback = function(resp){
                console.log(resp.result.items.length);
                if(resp.result.items.length == 0){
                    $http.get('users/me')
                        .success(function(response) {
                            console.log(response);
                            var folderName = 'D2l-'+response._id;
                            //1. Create A New Folder
                            Googledrive.createFolder(folderName, accessToken);
                            //2. Update User Information
                            //$http.get()
                        });
                }
                else{
                    console.log('there is already exist')
                    //$scope.rootGdriveFolderID = resp.result.items[0].id
                    //$scope.$digest();
                }
            }
            Googledrive.findFolder(callback);
        }
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

var CONFIG = {
	//clientId: '574563539488-n0vrevgjp3606l20hfk4rqfk1dc8j3qb.apps.googleusercontent.com',
    clientId: '574563539488-pctm7fr21vcetcfpdf9hhaje9q5vepee.apps.googleusercontent.com',
	developerKey: 'AIzaSyBEGA9BOSoo0DF69RNRh9MsMKDxaVlnT_U',
	scopes: [
		'https://www.googleapis.com/auth/drive',
		'https://www.googleapis.com/auth/drive.appdata',
		'https://www.googleapis.com/auth/plus.me',
		'https://www.googleapis.com/auth/paymentssandbox.make_payments'
	]
};
angular.module('g-drive').value('configGdrive', CONFIG);

//Setting up route
angular.module('g-drive').config(['$stateProvider',
	function($stateProvider) {
	}
]);

'use strict';
function GDocs(selector) {
    var SCOPE_ = 'https://www.googleapis.com/drive/v2/';
    this.lastResponse = null;
    this.__defineGetter__('SCOPE', function() {
        return SCOPE_;
    });
    this.__defineGetter__('DOCLIST_FEED', function() {
        return SCOPE_ + 'files/';
    });
    this.__defineGetter__('CREATE_SESSION_URI', function() {
        return 'https://www.googleapis.com/upload/drive/v2/files?uploadType=resumable';
    });
    this.__defineGetter__('DEFAULT_CHUNK_SIZE', function() {
        return 1024 * 1024 * 5; // 5MB;
    });
};
GDocs.prototype.auth = function(interactive, opt_callback) {
    try {
        chrome.identity.getAuthToken({interactive: interactive}, function(token) {
            if (token) {
                this.accessToken = token;
                opt_callback && opt_callback();
            }
        }.bind(this));
    } catch(e) {
        console.log(e);
    }
};
GDocs.prototype.removeCachedAuthToken = function(opt_callback) {
    if (this.accessToken) {
        var accessToken = this.accessToken;
        this.accessToken = null;
        // Remove token from the token cache.
        chrome.identity.removeCachedAuthToken({
            token: accessToken
        }, function() {
            opt_callback && opt_callback();
        });
    } else {
        opt_callback && opt_callback();
    }
};
GDocs.prototype.revokeAuthToken = function(opt_callback) {
    if (this.accessToken) {
        // Make a request to revoke token
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://accounts.google.com/o/oauth2/revoke?token=' +
        this.accessToken);
        xhr.send();
        this.removeCachedAuthToken(opt_callback);
    }
}
GDocs.prototype.makeRequest = function(method, url, callback, opt_data, opt_headers) {
    var data = opt_data || null;
    var headers = opt_headers || {};
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    // Include common headers (auth and version) and add rest.
    xhr.setRequestHeader('Authorization', 'Bearer ' + this.accessToken);
    for (var key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }
    xhr.onload = function(e) {
        this.lastResponse = this.response;
        callback(this.lastResponse, this);
    }.bind(this);
    xhr.onerror = function(e) {
        console.log(this, this.status, this.response,
            this.getAllResponseHeaders());
    };
    xhr.send(data);
};
GDocs.prototype.upload = function(blob, callback, retry) {
    var onComplete = function(response) {
        document.getElementById('main').classList.remove('uploading');
        var entry = JSON.parse(response).entry;
        callback.apply(this, [entry]);
    }.bind(this);
    var onError = function(response) {
        if (retry) {
            this.removeCachedAuthToken(
                this.auth.bind(this, true,
                    this.upload.bind(this, blob, callback, false)));
        } else {
            document.getElementById('main').classList.remove('uploading');
            throw new Error('Error: '+response);
        }
    }.bind(this);
    var uploader = new MediaUploader({
        token: this.accessToken,
        file: blob,
        onComplete: onComplete,
        onError: onError
    });
    document.getElementById('main').classList.add('uploading');
    uploader.upload();
};

///*
// * Created by Kevin on 2014-10-29.
//* */

'use strict';

angular.module('g-drive').factory('Googledrive', [
    '$q','configGdrive',
	function($q, configGdrive) {
		return {
			createFolder: createFolder,
			findFolder: findFolder,
			getGoogleDriveInfo: getGoogleDriveInfo,
			setupPicker: setupPicker,
			listFolder: listFolder,
			createFile: createFile,
            /////////
            plusTest: plusTest
		};

		function createFolder(FolderName, accessToken){
			var request = gapi.client.request({
				'path': '/drive/v2/files/',
				'method': 'POST',
				'headers': {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + accessToken
				},
				'body':{
					"title" : FolderName,
					"mimeType" : "application/vnd.google-apps.folder"
				}
			});
			request.execute(function(resp) {
				console.log(resp);
			});
		}

		// Search Folder
		function findFolder(callback){
			//console.log('Service: '+query);
			gapi.client.load('drive', 'v2').then(function(){
				var request = gapi.client.drive.files.list({
					q: "title contains 'Open'",
					//q:  query,
					maxResults:10,
					fields: 'items(id\,title)'
				});
				request.then(function(resp){
					callback(resp);
				});
			});
		}

        // create File
        function createFile(callback){
            gapi.client.load('drive', 'v2').then(function(){
                var request = gapi.client.drive.files.list({
                    q: "title contains 'URI-'",
                    fields: 'items(id\,title)'
                });
                request.then(function(resp){
                    //callback(resp);
                });
            });
        }

		function getGoogleDriveInfo(){
			gapi.client.load('drive', 'v2').then(function() {
				var request = gapi.client.drive.about.get();
				request.execute(function (resp) {
					console.log('Current user name: ' + resp.name);
					console.log('Root folder ID: ' + resp.rootFolderId);
					console.log('Total quota (bytes): ' + resp.quotaBytesTotal);
					console.log('Used quota (bytes): ' + resp.quotaBytesUsed);
				});
			});
		}

		//Google File Picker Platform
		function setupPicker(accessToken, callback){
			console.log('from gdrive service');
			var callbackAfterFindFolder = function(resp){
				var folderID = resp.result.items[0].id;
				var picker = new google.picker.PickerBuilder()
					.setOAuthToken(accessToken)

					//.setOAuthToken("ya29.NQGgHdO9RRpPL_NSzdY7BHnDa7irQ9sVyYj-0NJKeOK-fWZdZ_7msD8oquqWdKBsAl_Om4Zd1WO84Q")
					.setDeveloperKey(configGdrive.developerKey)
					//.addView(new google.picker.DocsUploadView().setParent(folderID))
					//.addView(new google.picker.DocsView().setParent(folderID))
					.addView(new google.picker.DocsView())
					.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
					.setLocale('us')
					//.enableFeature(google.picker.Feature.NAV_HIDDEN)
					.setCallback(callback)
					.build();
				picker.setVisible(true);
			}
			findFolder(callbackAfterFindFolder);
		}

		function listFolder(){
            var deffered = $q.defer();
			console.log('listForlder');
			gapi.client.load('drive', 'v2').then(function() {
				var request = gapi.client.drive.files.list({
					maxResults:10,
					fields: 'etag,items(thumbnailLink,id,webViewLink,webContentLink,title)'
				});
				request.then(function(resp){
					console.log('result File list');
					//console.log(resp)
					deffered.resolve(resp.result);
				});
			});
            return deffered.promise;
		}

        function plusTest(){
            var deffered = $q.defer();
            gapi.client.load('plus', 'v1').then(function(){
                var request = gapi.client.plus.activities.list({
                    'userId' : 'me',
                    'collection' : 'public'
                });

                request.execute(function(resp) {
                    var numItems = resp.items.length;
                    for (var i = 0; i < numItems; i++) {
                        //console.log('ID: ' + resp.items[i].id + ' Content: ' + resp.items[i].object.content);
                        deffered.resolve(resp.items);
                    }
                });
            });
            return deffered.promise;
        }
	}
]);

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
		console.log($scope.authentication);
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
            state('projectview', {
                abstract: true,
                url: '/projects',
                templateUrl: 'modules/mean-tutorials/views/projectView.client.view.html'
            }).
                state('projectview.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'modules/mean-tutorials/template/projectView.dashboard.tmp.html'
                }).
                state('projectview.projects', {
                    url: '/projectlist',
                    templateUrl: 'modules/mean-tutorials/template/projectView.projects.tmp.html'
                }).
                state('projectview.articles', {
                    url: '/articleslist',
                    templateUrl: 'modules/mean-tutorials/template/projectView.articles.tmp.html'
                }).

            state('versioning', {
                url: '/versioning',
                templateUrl: 'modules/mean-tutorials/views/versioning.client.view.html'
            }).
            state('project2', {
                url: '/project2',
                templateUrl: 'modules/mean-tutorials/views/project2.client.view.html'
            }).
            state('project1', {
                url: '/project1',
                templateUrl: 'modules/mean-tutorials/views/project1.client.view.html'
            }).
            state('mean-home', {
			        url: '/',
			        templateUrl: 'modules/mean-tutorials/views/mean-home.client.view.html'
			        //views:{
				       // "":{templateUrl: 'modules/mean-tutorials/views/mean-home.client.view.html'},
				       // "tt":{template:"<h1>Hello World</h1>"}
			        //}
            });
    }
]);

'use strict';

angular.module('mean-tutorials')
    .controller('GapiCtrlController', ['$scope','$http',
	function($scope, $http) {
		// Gapi ctrl controller logic
		// ...
        $scope.googleAccess = function(){
            $http.get('/gapi').success(function(data, status, headers, config) {
                $scope.url = data;
                    $http.get($scope.url).success(function(data){
                        console.log(data);
                    })

            }).
                error(function(data, status, headers, config) {
                    $scope.url = 'Error';
                });
        }
	}
]);

'use strict';

angular.module('mean-tutorials').controller('HomeDialogtmpController', ['$scope','$mdDialog',
	function($scope, $mdDialog) {
		// Home dialogtmp controller logic
		// ...
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
	}
]);

'use strict';

angular.module('mean-tutorials')
	.controller('MeanLoginCtrl', MeanLoginCtrl)
	.controller('MeanHomeController',MeanHomeController);

function MeanLoginCtrl($scope, Authentication, $mdDialog){
	$scope.authentication = Authentication;

	$scope.hide = function() {
		$mdDialog.hide();
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.answer = function(answer) {
		$mdDialog.hide(answer);
	};
}
MeanLoginCtrl.$inject = ["$scope", "Authentication", "$mdDialog"];

function MeanHomeController(
		$scope, $state, $http, $mdDialog,
		$mdSidenav, $log, Authentication) {


	$(document).on( 'scroll', function(){
		if($(document).scrollTop() > 150)
			TweenMax.to($('#floatMenus'), 1, {y:-51});
		else
			TweenMax.set($('#floatMenus'), {y:0});
	});


	$scope.date = {
		month: moment().format("MMM").toUpperCase(),
		date: moment().date(),
		year: moment().year()
	}

	$scope.authentication = Authentication;
	$scope.notice = "Web Application for E-Learning";

	$scope.goTo = function(stateName){
		$state.go(stateName);
	}

	$http.get('modules/mean-tutorials/data/home.json').success(function(data) {
		//console.log(data);
		$scope.dataFromJson = data;
		$scope.projects = $scope.dataFromJson.projects;
		$scope.announcements = $scope.dataFromJson.announcements;
		$scope.techs = $scope.dataFromJson.techs;
	});

	$scope.colorBorder = {
		header: "blue"
	}

	$scope.close = function() {
		$mdSidenav('left').close();
	};

	$scope.gotoState = function(state) {
		$state.go(state);
	}

	$scope.toggleLeft = function() {
		$mdSidenav('left').toggle()
			.then(function(){
				$log.debug("toggle left is done");
			});
	};
	$scope.toggleRight = function() {
		$mdSidenav('right').toggle()
			.then(function(){
				$log.debug("toggle RIGHT is done");
			});
	};

	$scope.signUp = function(ev) {
		$mdDialog.show({
			controller: 'MeanLoginCtrl',
			templateUrl: 'modules/mean-tutorials/template/MD/signup-dialog.tpl.html',
			targetEvent: ev
		})
			.then(function(answer) {
				$scope.alert = 'You said the information was "' + answer + '".';
			}, function() {
				$scope.alert = 'You cancelled the dialog.';
			});
	};

	$scope.logIn = function(ev) {
		$mdDialog.show({
			controller: 'MeanLoginCtrl',
			templateUrl: 'modules/mean-tutorials/template/MD/signin-dialog.tpl.html',
			targetEvent: ev
		})
			.then(function(answer) {
				$scope.alert = 'You said the information was "' + answer + '".';
			}, function() {
				$scope.alert = 'You cancelled the dialog.';
			});
	};

	$scope.loginBtn = function(){
		$state.go('signin');
	};
	$scope.signupBtn = function(){
		$state.go('signup');
	};

	//// Animation //
	//var title = $('.ani-title');
	//var youtubePlayBtn = $('#youtubePlayButton');
	//var techIcons = $('.ani-techs');
	//var meanTotem = $('#meanTotem');
	//var meanTotemDesc = $('#meanTotem-desc');
	//
	//$scope.clickPlayBtn = function() {
	//	TweenMax.fromTo(youtubePlayBtn, 1.5, {scale:2}, {scale:0.8, opacity:0});
	//	TweenMax.to(title, 2.5, {x:-1200});
	//	TweenMax.to('.ani-techs', 0.1, {opacity:1});
	//	TweenMax.to([meanTotem,meanTotemDesc], 1.3, {display:'block', height: '100%', opacity:1});
	//}
	//
	//$scope.resetPlayBtn = function() {
	//	TweenMax.to(youtubePlayBtn, 0.5, {scale:1, opacity:1});
	//	TweenMax.to(title, 0.5, {x:0});
	//	TweenMax.to([meanTotem, meanTotemDesc], 1.3, {display:'none', height: '0%', opacity:0});
	//}
	//// End Animation //
}
MeanHomeController.$inject = ["$scope", "$state", "$http", "$mdDialog", "$mdSidenav", "$log", "Authentication"];

'use strict';

angular.module('mean-tutorials')
    .controller('Project1Controller', ['$scope','$document','$timeout','$log','$mdSidenav',
        function($scope, $document, $timeout, $log, $mdSidenav) {
            $scope.snippet = 'angular.module(\'mean-tutorials\')'+
                '.controller(\'Project1Controller\', [\'$scope\',\'$document\',\'$timeout\',\'$log\',\'$mdSidenav\','+
                    'function($scope, $document, $timeout, $log, $mdSidenav) {';
            $scope.toggleLeft = function() {
                $mdSidenav('left').toggle()
                    .then(function(){
                        $log.debug("toggle left is done");
                    });
            };
            $scope.toggleRight = function() {
                $mdSidenav('right').toggle()
                    .then(function(){
                        $log.debug("toggle RIGHT is done");
                    });
            };

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
]).controller('LeftCtrl12', ["$scope", "$timeout", "$mdSidenav", "$log", function($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
            $mdSidenav('left').close()
                .then(function(){
                    $log.debug("close LEFT is done");
                });
        };
    }])
    .controller('RightCtrl11', ["$scope", "$timeout", "$mdSidenav", "$log", function($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
            $mdSidenav('right').close()
                .then(function(){
                    $log.debug("close RIGHT is done");
                });
        };
    }]);;

'use strict';

angular.module('mean-tutorials').controller('Project2Controller', ['$scope',
	function($scope,$rootScope) {
        // Disqus ID
		$scope.id='meanT-project2';

        // Listen event
        $scope.$on('handleEmit', function(event, args) {
            $scope.$broadcast('handleBroadcast', args);
        });

        $scope.password = '';
        $scope.grade = function(){
            var size = $scope.password.length;
            if (size > 8) {
                $scope.strength = 'strong';
            } else if (size > 3) {
                $scope.strength = 'medium';
            } else {
                $scope.strength = 'weak';
            }
        }
	}
]);

'use strict';

angular.module('mean-tutorials').controller('ProjectViewController', ['$scope', '$stateParams', '$state', '$timeout', 'Articles',
	function($scope, $stateParams, $state, $timeout, Articles) {
		$scope.title= 'Project3';
        $scope.body= '';
        $scope.menus = [
            {icon:'', name:'Dashboard', state:'projectview.dashboard'},
            {icon:'', name:'Project', state:'projectview.projects'},
            {icon:'', name:'Article', state:'projectview.articles'},
            {icon:'', name:'Comments', state:'projectview.dashboard'},
            {icon:'', name:'Survey', state:'projectview.dashboard'},
        ];

        $scope.goChildView = function(stateName){
            $state.go(stateName);
        }

        $scope.find = function() {
            $scope.articles = Articles.query();
        };

        $scope.findOne = function() {
            $scope.article = Articles.get({
                articleId: $stateParams.articleId
            });
        };

        $scope.shrinkleftPane = function(){
            TweenLite.to('.leftPane', 1, {x:'-75px'});
            TweenLite.to('.rightPane', 1, {x:'-75px'});
            TweenLite.to('.svgBtnLeftPane', 1, {x:'75px'});

        }
	}
]);

'use strict';

angular.module('mean-tutorials').controller('ProjectviewProjectsController', ['$scope', '$resource', 'Articles',
	function($scope, $resource, Articles) {
        var Projects = $resource('/articles/projects/:docType',
            {docType: '@docType'},
            {
                getProjects: {
                    method: 'GET', isArray: true
                }
            });

        $scope.findProjects = function(type) {
            $scope.resultProjects = Projects.getProjects({docType:type});
            //console.log($scope.result);
        }
        $scope.selectProject = function(index) {
            TweenLite.set('.rightPane', {'margin-left':'72px', position: 'inherit'});
            $scope.selectedProject = $scope.resultProjects[index];
        }
	}
]);

'use strict';

angular.module('mean-tutorials').controller('ProjectviewdashboardController', ['$scope',
    '$window', '$state', '$http', '$q', '$mdDialog', '$mdSidenav', 'configGdrive',
    'Googledrive', 'GooglePlus', 'Products', 'Authentication', 'ProductByUserId','UtCalendar',
    '$timeout', '$mdBottomSheet', //Material Design
    'MeanEvents',
    function ($scope,
              $window, $state, $http, $q, $mdDialog, $mdSidenav, configGdrive,
              Googledrive, GooglePlus, Products, Authentication, ProductByUserId,UtCalendar,
              $timeout, $mdBottomSheet, //material Design
              MeanEvents // mean-events
             ) {
        $scope.authentication = Authentication;

        $scope.foo = 'tbody';

        // Find a list of Mean events
        $scope.findEvents = function() {
            $scope.meanEvents = MeanEvents.query();
        };

        $scope.testCreateFolder = function(){
            //console.log(accessToken);
            Googledrive.createFolder('chulwoo Fuck1', accessToken);
        };

        $scope.testGetGoogleDriveInfo = function() {
            Googledrive.getGoogleDriveInfo();
        }

        //
        var accessToken;
        $scope.permalLink = 'http://drive.google.com/uc?export=view&id=';
        $scope.arrive = false;
        $scope.authName = 'Authorize';
        $scope.isAuth = false;
        $scope.init = function init(){
            window.gapi.load('auth', $scope.authenticateWithGoogle);
            window.gapi.load('picker');
            gapi.client.load('urlshortener', 'v1');
        }
        $scope.authenticateWithGoogle =function authenticateWithGoogle(){
            window.gapi.auth.authorize({
                'client_id': configGdrive.clientId,
                'scope':configGdrive.scopes,
                'immediate': false
            }, handleAuthentication);
        }

        function handleAuthentication(result){
            if(result && !result.error){
                $scope.isAuth = true;
                $scope.authName = 'Deauthorize';
                accessToken = result.access_token;
                //console.log(accessToken);

                /*
                 callGooglePlus();
                 setFilePicker();
                 listFolder();
                 getGoogleDriveInfo();
                 createFolder();
                 */
                createNewAccountFolder();
                setFilePicker(); // singleFile
                //findTargetUriFolder();
            }else{
                console.log(result);
                console.log(result.error);
                console.log('fail to authentication')
            }
            $scope.$digest();
        }

        function listFolder() {
            Googledrive.listFolder()
        }
        /*
         function createFolder(){
         var folderName;
         Googledrive.createFolder(folderName, accessToken);
         }
         */
        function getGoogleDriveInfo(){
            Googledrive.getGoogleDriveInfo();
        }

        /// Custom file Picker Start ----------------------------------------------------------
        /*
         function setFilePicker() {
         var filePicker = document.getElementById('filePicker');

         filePicker.style.display = 'none';

         // Access token has been successfully retrieved, requests can be sent to the API.
         filePicker.style.display = 'block';
         filePicker.onchange = uploadFile;
         }

         function uploadFile(evt) {
         var callback = function(file) {
         console.log('!!File!!');
         console.log(file);
         }
         gapi.client.load('drive', 'v2', function() {
         var file = evt.target.files[0];
         insertFile(file, callback);
         });
         }

         function insertFile(fileData, callback) {
         var boundary = '-------314159265358979323846';
         var delimiter = "\r\n--" + boundary + "\r\n";
         var close_delim = "\r\n--" + boundary + "--";

         var reader = new FileReader();
         reader.readAsBinaryString(fileData);
         reader.onload = function(e) {
         var contentType = fileData.type || 'application/octet-stream';
         var metadata = {
         'title': fileData.name,
         'mimeType': contentType,
         'writersCanShare':true,
         'parents': [{
         'kind': "drive#fileLink",
         'id': "0B8FisuvAYPTfN1o1Q0d4T2JLTk0"
         }]

         };

         var base64Data = btoa(reader.result);
         var multipartRequestBody =
         delimiter +
         'Content-Type: application/json\r\n\r\n' +
         JSON.stringify(metadata) +
         delimiter +
         'Content-Type: ' + contentType + '\r\n' +
         'Content-Transfer-Encoding: base64\r\n' +
         '\r\n' +
         base64Data +
         close_delim;
         console.log(multipartRequestBody);

         var request = gapi.client.request({
         'path': '/upload/drive/v2/files',
         'method': 'POST',
         'params': {'uploadType': 'multipart'},
         'headers': {
         'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
         },
         'body': multipartRequestBody});
         if (!callback) {
         callback = function(file) {
         console.log(file)
         };
         }
         request.execute(callback);
         }
         }
         */
        /// Custom file Picker End ----------------------------------------------------------

        function callGooglePlus(){
            function callback(resp) {
                console.log(resp);
                var heading = document.createElement('h4');
                var image = document.createElement('img');
                image.src = resp.result.image.url;
                heading.appendChild(image);
                heading.appendChild(document.createTextNode(resp.result.displayName));

                document.getElementById('content').appendChild(heading);
            }
            GooglePlus.callGooglePlus(callback);
        }

        // Google PlatForm Service
        $scope.setupPicker = function() {
            function pickerCallback(data) {
                if(data.action == google.picker.Action.PICKED){
                    //do something
                    $scope.files = data.docs;
                    $scope.arrive = true;

                    // make shorten URL
                    var request = gapi.client.urlshortener.url.get({
                        'shortUrl': 'http://goo.gl/fbsS'
                    });
                    request.then(function(response) {
                        appendResults(response.result.longUrl);
                    }, function(reason) {
                        console.log('Error: ' + reason.result.error.message);
                    });

                    //alert('URL: ' + data.docs[0].url);
                    $scope.$digest()
                }else if(data.action ==google.picker.Action.CANCEL){
                    //alert('goodbye');
                }
            }
            Googledrive.setupPicker(accessToken, pickerCallback);
        }

	    $scope.listFolderInformation = function(){
		    Googledrive.listFolder();
	    }

        function createNewAccountFolder(){
            //Pre. Get User Information
            //check if there exists an
            // API /users/me (only allow to have)

            var callback = function(resp){
                console.log(resp.result.items.length);
                if(resp.result.items.length == 0){
                    $http.get('users/me')
                        .success(function(response) {
                            console.log(response);
                            var folderName = 'D2l-'+response._id;
                            //1. Create A New Folder
                            Googledrive.createFolder(folderName, accessToken);
                            //2. Update User Information
                            //$http.get()
                        });
                }
                else{
                    console.log('there is already exist')
                    $scope.rootGdriveFolderID = resp.result.items[0].id
                    $scope.$digest();
                }
            }
            Googledrive.findFolder(callback);
        }

        ////////marterial Design //////////
        $scope.alert = '';
        $scope.showListBottomSheet = function($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'modules/mean-tutorials/template/bottom-sheet-list-template.html',
                controller: 'BottomSheetListCtrl',
                targetEvent: $event
            }).then(function(clickedItem) {
                $scope.alert = clickedItem.name + ' clicked!';
            });
        };
        $scope.showGridBottomSheet = function($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'modules/mean-tutorials/template/bottom-sheet-grid-template.html',
                controller: 'BottomSheetGridCtrl',
                targetEvent: $event
            }).then(function(clickedItem) {
                $scope.alert = clickedItem.name + ' clicked!';
            });
        };
        ////////End Material Design



        //////////DATEPicker/////////////
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        ///////////END//////////////////

    }
])

	.controller('gDriveDashCtrl', ["$scope", "Googledrive", function($scope, Googledrive){
		$scope.googleDrive={info:'gDriveCtrl'};

		$scope.listingFolderInfo = function(){
			$scope.gDocs = 'dd';
			console.log('gDriveDashCtrl');
			$scope.gDocs = Googledrive.listFolder();
			var request = gapi.client.drive.files.get({
				'fileId': "1Q_CJwJftcL-zabVm0USc1px5HDfbpxu6Klav-XYOzNg"
			});
			request.execute(function(resp) {
				if (!resp.error) {
					console.log('Title: ' + resp.title);
					console.log('Description: ' + resp.description);
					console.log('MIME type: ' + resp.mimeType);
					console.log(resp);
					$scope.gDocs = resp;

				} else if (resp.error.code == 401) {
					// Access token might have expired.
					checkAuth();
				} else {
					console.log('An error occured: ' + resp.error.message);
				}
			});
		}
	}])

    .controller('BottomSheetListCtrl', ["$scope", "$mdBottomSheet", function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Upload New Image (Google Drive)', icon: 'share' },
            { name: 'Select Existing Image (Google Drive)', icon: 'upload' },
            { name: 'Product History (Google Sheets)', icon: 'copy' },
            { name: 'Print this page (PDF Printer)', icon: 'print' },
        ];

        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        }
    }])
    .controller('BottomSheetGridCtrl', ["$scope", "$mdBottomSheet", function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Hangout', icon: 'hangout' },
            { name: 'Mail', icon: 'mail' },
            { name: 'Message', icon: 'message' },
            { name: 'Copy', icon: 'copy' },
        ];
        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    }]);

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
            //template: macWindowTpl,
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

angular.module('mean-tutorials').directive('mjHomeAni', [
	function() {
		return {
			templateUrl: 'modules/mean-tutorials/directives/templates/mjHomeAni.tpl.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Animation //
				var title = $('.ani-title');
				var youtubePlayBtn = $('#youtubePlayButton');
				var techIcons = $('.ani-techs');
				var meanTotem = $('#meanTotem');
				var meanTotemDesc = $('#meanTotem-desc');

				scope.clickPlayBtn = function() {
					TweenMax.fromTo(youtubePlayBtn, 1.5, {scale:2}, {scale:0.8, opacity:0});
					TweenMax.to(title, 2.5, {x:-1200});
					TweenMax.to('.ani-techs', 0.1, {opacity:1});
					TweenMax.to([meanTotem,meanTotemDesc], 1.3, {display:'block', height: '100%', opacity:1});
				}

				scope.resetPlayBtn = function() {
					TweenMax.to(youtubePlayBtn, 0.5, {scale:1, opacity:1});
					TweenMax.to(title, 0.5, {x:0});
					TweenMax.to([meanTotem, meanTotemDesc], 1.3, {display:'none', height: '0%', opacity:0});
				}

                scope.aniTrigger = function(){
                    var tl = new TimelineMax();
                    var t1 = TweenMax.to($('#meanTotem'), 1, {yPercent:-45, force3D:true});
                    var t2 = TweenMax.to($('#meanTotem'), 1, {yPercent:0, force3D:true});
                    tl.add(t1).add(t2);
                }
				// End Animation //
			}
		};
	}
]);

'use strict';

angular.module('mean-tutorials').directive('utCalendar', ['UtCalendar',
	function(UtCalendar) {
		return {
			template: '<div class="container" style="margin-top:20px">'+
                        '<table id="calendar" class="meanT-calendar"></table>'+
                      '</div>',
            scope:{

            },
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
                UtCalendar.calendar();

                element.bind('click', function(val){

                    if($('#calSvg').length === 0){
                        var position = $(val.target.parentElement.parentElement).position({of:$(window)})

                        //TweenLite.to(val.target, 1, {x: position.top, y: position.left, transformOrigin:"50% 50%", transformPerspective:500, backgroundColor:'red', scale:2});
                        var width = $(val.target.parentElement.parentElement).width()
                        var height = $(val.target.parentElement.parentElement).height()
                        //var center = $(val.target.parentElement.parentElement).height()

                        var margin = {top: -5, right: -5, bottom: -5, left: -5},
                            width = width - margin.left - margin.right,
                            height = height - margin.top - margin.bottom;

                        var zoom = d3.behavior.zoom()
                            .center([width / 2, height / 2])
                            .scaleExtent([1, 10])
                            .on("zoom", zoomed);

                        scope.svg = d3.select("#calendar").append("svg")
                            .attr("id", 'calSvg')
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                            .style("position","absolute")
                            .style("top", position.top)
                            .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
                            .call(zoom);

                        var container = scope.svg.append("g");

                        container.append("g")
                            .attr("class", "axis")
                            .selectAll("circle")
                            .data(d3.range(10, width, 10))
                            .enter().append("circle")
                            .attr("cx", width / 2)
                            .attr("cy", height / 2)
                            .attr("r", function(d) { return d; });

                        var center = scope.svg.append("circle")
                            .style("fill", "red")
                            .attr("cx", width / 2)
                            .attr("cy", height / 2)
                            .attr("r", 10);

                        var zoomed = function zoomed() {
                            container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
                        }
                    }
                })
			}
		};
	}
]);

'use strict';

angular.module('mean-tutorials').factory('UtCalendar', [
	function() {
		// Ut calendar service logic
		// ...

		// Public API
		return {
			calendar: calendar
		};

        function calendar() {
            //Start Calendar
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
                        return d > 0 ? 'date' : 'empty';
                    })
                    .text(function (d) {
                        return d > 0 ? d : '';
                    });
            });
        }
	}
]);

'use strict';

// Configuring the Articles module
angular.module('payments').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		//Menus.addMenuItem('topbar', 'Payments', 'payments', 'dropdown', '/payments(/create)?');
		//Menus.addSubMenuItem('topbar', 'payments', 'List Payments', 'payments');
		//Menus.addSubMenuItem('topbar', 'payments', 'New Payment', 'payments/create');
	}
]);
'use strict';

//Setting up route
angular.module('payments').config(['$stateProvider',
	function($stateProvider) {
		// Payments state routing
		$stateProvider.
		state('listPayments', {
			url: '/payments',
			templateUrl: 'modules/payments/views/list-payments.client.view.html'
		}).
		state('createPayment', {
			url: '/payments/create',
			templateUrl: 'modules/payments/views/create-payment.client.view.html'
		}).
		state('viewPayment', {
			url: '/payments/:paymentId',
			templateUrl: 'modules/payments/views/view-payment.client.view.html'
		}).
		state('editPayment', {
			url: '/payments/:paymentId/edit',
			templateUrl: 'modules/payments/views/edit-payment.client.view.html'
		});
	}
]);

'use strict';

// Payments controller
angular.module('payments').controller('PaymentsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Payments',
	function($scope, $stateParams, $location, Authentication, Payments ) {
		$scope.authentication = Authentication;

		// Create new Payment
		$scope.create = function() {
			// Create new Payment object
			var payment = new Payments ({
				name: this.name
			});

			// Redirect after save
			payment.$save(function(response) {
				$location.path('payments/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Payment
		$scope.remove = function( payment ) {
			if ( payment ) { payment.$remove();

				for (var i in $scope.payments ) {
					if ($scope.payments [i] === payment ) {
						$scope.payments.splice(i, 1);
					}
				}
			} else {
				$scope.payment.$remove(function() {
					$location.path('payments');
				});
			}
		};

		// Update existing Payment
		$scope.update = function() {
			var payment = $scope.payment ;

			payment.$update(function() {
				$location.path('payments/' + payment._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Payments
		$scope.find = function() {
			$scope.payments = Payments.query();
		};

		// Find existing Payment
		$scope.findOne = function() {
			$scope.payment = Payments.get({ 
				paymentId: $stateParams.paymentId
			});
		};
	}
]);

'use strict';

angular.module('payments').factory('GetPurchaseJWT', ['$resource',
	function($resource) {
		return $resource('purchase/gw_test/:productID/:qty/:optdesc',
			{
				productID: '@_id',
				qty:'@qty',
				optdesc:'@optdesc'
			}, {query: {method:'get', isArray:true}}
		);
	}
]);

'use strict';

//Payments service used to communicate Payments REST endpoints
angular.module('payments').factory('Payments', ['$resource',
	function($resource) {
		return $resource('payments/:paymentId', {
			paymentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('payments').factory('PaymentsBySellerData', ['$resource',
	function($resource) {
		return $resource('payments/:sellerData', {
			sellerData: '@sellerData'
		}, {
		});
	}
]);

'use strict';

//Setting up route
angular.module('products').config(['$stateProvider',
    function($stateProvider) {
        // Products state routing
        $stateProvider.
            state('listProducts', {
                url: '/products',
                templateUrl: 'modules/products/views/list-products.client.view.html'
            }).
            state('listProductsUnderBanner', {
                url: '/products/list/:bannerId',
                templateUrl: 'modules/products/views/list-products-banner.client.view.html'
            }).
            state('createProduct', {
                url: '/products/create/:bannerId',
                templateUrl: 'modules/products/views/create-product.client.view.html'
            }).
            state('viewProduct', {
                url: '/products/:productId',
                templateUrl: 'modules/products/views/view-product.client.view.html'
            }).
            state('editProduct', {
                url: '/products/:productId/edit',
                templateUrl: 'modules/products/views/edit-product.client.view.html'
            });
    }
]);
'use strict';

// Products controller
angular.module('products').controller('ProductsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Products', 'Banners', 'ProductsBanner',
    function($scope, $stateParams, $location, Authentication, Products, Banners, ProductsBanner) {
        $scope.authentication = Authentication;
        $scope.parentId=$stateParams.bannerId;

        // Create new Product
        $scope.create = function() {
        	// Create new Product object
            var product = new Products({
                name: this.name,
                mainimg: this.mainimg,
                imgs: this.imgs,
                price: this.price,
                description: this.description,
                parentId: $scope.parentId // Product record is under banner content
            });

            // Redirect after save
            product.$save(function(response) {
                $location.path('products/' + response._id);
            }, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

            // Clear form fields
            this.name = '';
            this.mainimg ='';
            this.imgs='';
            this.price=0;
            this.description = '';
        };

        // Remove existing Product
        $scope.remove = function(product) {
            if (product) {
                product.$remove();

                for (var i in $scope.products) {
                    if ($scope.products[i] === product) {
                        $scope.products.splice(i, 1);
                    }
                }
            } else {
                $scope.product.$remove(function() {
                    $location.path('products');
                });
            }
        };

        // Update existing Product
        $scope.update = function() {
            var product = $scope.product;

            product.$update(function() {
                $location.path('products/' + product._id);
            }, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
        };

        // Find a list of Products
        $scope.find = function() {
            $scope.products = Products.query();
        };

        $scope.findBanners = function() {
            $scope.banners = Banners.query();
        };

        // Find existing Product
        $scope.findOne = function() {
            $scope.product = Products.get({
                productId: $stateParams.productId
            });
        };

        $scope.findProductUnderBanner = function() {
            console.log('banner id is '+ $scope.parentId);
            $scope.products = ProductsBanner.query({},{bannerId:$scope.parentId});
        }
    }
]);
/**
 * Created by KevinSo on 9/24/2014.
 */

'use strict';

//Products service used to communicate Products REST endpoints
angular.module('products').factory('ProductsBanner', ['$resource', function($resource) {
    return $resource('products/list/:bannerId', {
        bannerId: '@bannerId'
    }, {
        update: {
            method: 'PUT'
        },
        query: {
            method: 'GET',
            isArray: true
        }
    });
}]);

angular.module('products').factory('ProductByUserId', ['$resource', function($resource) {
    return $resource('products/find/:userId', {
        userId: '@userId'
    }, {
        update: {
            method: 'PUT'
        },
        query: {
            method: 'GET',
            isArray: true
        }
    });
}]);
'use strict';

//Products service used to communicate Products REST endpoints
angular.module('products').factory('Products', ['$resource', function($resource) {
    return $resource('products/:productId', {
        productId: '@_id'
    }, {
        update: {
            query: 'GET',
            method: 'PUT'
        }
    });
}]);

'use strict';

//Setting up route
angular.module('seller-interface').config(['$stateProvider',
	function($stateProvider) {
		// Gdriveapps state routing
		$stateProvider.
			state('weather', {
				url: '/weather',
				templateUrl: 'modules/seller-interface/views/weather.client.view.html'
			}).
			state('listGdriveapps', {
				url: '/gdriveapps',
				templateUrl: 'modules/seller-interface/views/list-gdriveapps.client.view.html'
			}).
			state('createGdriveapp', {
				url: '/gdriveapps/create',
				templateUrl: 'modules/seller-interface/views/create-gdriveapp.client.view.html'
			}).
			state('viewGdriveapp', {
				url: '/gdriveapps/:gdriveappId',
				templateUrl: 'modules/seller-interface/views/view-gdriveapp.client.view.html'
			}).
			state('editGdriveapp', {
				url: '/gdriveapps/:gdriveappId/edit',
				templateUrl: 'modules/seller-interface/views/edit-gdriveapp.client.view.html'
			}).
			state('gDrive', {
				url: '/gDrive',
				templateUrl: 'modules/seller-interface/views/gdrive.html'
			}).
			state('gDrive2', {
				abstract: true,
				url: '/gDrive2',
				templateUrl: 'modules/seller-interface/views/storage.html'
			}).
			state('gDrive2.dashboard', {
				url: '/dashboard',
				templateUrl: 'modules/seller-interface/template/gDrive2.dashboard.tmp.html'
			}).
			state('gDrive2.addNewProduct', {
				url: '/addNewProduct',
				templateUrl: 'modules/seller-interface/template/gDrive2.addNewProduct.tmp.html'
			}).
			state('gDrive2.editProduct', {
				url: '/editProduct/:productId',
				templateUrl: 'modules/seller-interface/template/gDrive2.editProduct.tmp.html'
			}).
			state('gDrive2.historyPayment', {
				url: '/historyPayment',
				templateUrl: 'modules/seller-interface/template/gDrive2.historyPayment.tmp.html'
			})
			/*.

			 state('createFile', {
			 url: '/create',
			 templateUrl:'modules/gdriveapps/views/create-doc.client.view.html',
			 controller: 'CreateDocController'
			 }).
			 state('installTodo', {
			 url: '/install',
			 templateUrl:'modules/gdriveapps/views/install-todo.client.view.html',
			 controller: 'InstallTodoController'
			 }).
			 state('todoState',{
			 url:'/todos/:fileId/:filter',
			 templateUrl:'modules/gdriveapps/views/install-todo.client.view.html',
			 controller:'todoController',
			 resolve: {
			 //realtimeDocument: app.loadFile
			 }
			 })*/;
	}
]);

'use strict';

angular.module('seller-interface').controller('DocsController', ['$scope', '$http', 'gdocs',
	function($scope, $http, gdocs) {
		$scope.test = 'test_123';
		$scope.docs = [];

		// Response handler that caches file icons in the filesystem API.
		function successCallbackWithFsCaching(resp, status, headers, config) {
			var docs = [];
			var totalEntries = resp.items.length;
			console.log(totalEntries);
			resp.items.forEach(function(entry, i) {
				var doc = {
					title: entry.title,
					updatedDate: Util.formatDate(entry.modifiedDate),
					updatedDateFull: entry.modifiedDate,
					icon: entry.iconLink,
					alternateLink: entry.alternateLink,
					size: entry.fileSize ? '( ' + entry.fileSize + ' bytes)' : null
				};

				// 'http://gstatic.google.com/doc_icon_128.png' -> 'doc_icon_128.png'
				doc.iconFilename = doc.icon.substring(doc.icon.lastIndexOf('/') + 1);
				console.log(doc.icon);
				// If file exists, it we'll get back a FileEntry for the filesystem URL.
				// Otherwise, the error callback will fire and we need to XHR it in and
				// write it to the FS.
				var fsURL = fs.root.toURL() + FOLDERNAME + '/' + doc.iconFilename;
				window.webkitResolveLocalFileSystemURL(fsURL, function(entry) {
					console.log('Fetched icon from the FS cache');

					doc.icon = entry.toURL(); // should be === to fsURL, but whatevs.

					$scope.docs.push(doc);

					// Only want to sort and call $apply() when we have all entries.
					if (totalEntries - 1 == i) {
						$scope.docs.sort(Util.sortByDate);
						$scope.$apply(function($scope) {}); // Inform angular we made changes.
					}
				}, function(e) {

					$http.get(doc.icon, {responseType: 'blob'}).success(function(blob) {
						console.log('Fetched icon via XHR');

						blob.name = doc.iconFilename; // Add icon filename to blob.

						writeFile(blob); // Write is async, but that's ok.

						doc.icon = window.URL.createObjectURL(blob);

						$scope.docs.push(doc);
						if (totalEntries - 1 == i) {
							$scope.docs.sort(Util.sortByDate);
						}
					});

				});
			});
		}

		$scope.clearDocs = function() {
			$scope.docs = []; // Clear out old results.
		};

		$scope.fetchDocs = function(retry) {
			this.clearDocs();

			if (gdocs.accessToken) {
				var config = {
					params: {'alt': 'json'},
					headers: {
						'Authorization': 'Bearer ' + gdocs.accessToken

					}
				};

				//https://drive.google.com/open?id=0B8FisuvAYPTfampGWFhXQUs5dVU&authuser=0
				$http.get(gdocs.DOCLIST_FEED, config).
					success(successCallbackWithFsCaching).
					error(function(data, status, headers, config) {
						if (status == 401 && retry) {
							gdocs.removeCachedAuthToken(
								gdocs.auth.bind(gdocs, true,
									$scope.fetchDocs.bind($scope, false)));
						}
					});
			}
		};

		// Toggles the authorization state.
		$scope.toggleAuth = function(interactive) {
			if (!gdocs.accessToken) {
				gdocs.auth(interactive, function() {
					$scope.fetchDocs(false);
				});
			} else {
				gdocs.revokeAuthToken(function() {});
				this.clearDocs();
			}
		}

		// Controls the label of the authorize/deauthorize button.
		$scope.authButtonLabel = function() {
			if (gdocs.accessToken)
				return 'Deauthorize';
			else
				return 'Authorize';
		};

		$scope.toggleAuth(false);
	}
]);

/**
 * Created by Kevin on 2014-11-11.
 */

angular.module('seller-interface').controller('AddNewProductController', ['$scope','$stateParams','Authentication', 'Products', 'BannerByUserId',
    function($scope, $stateParams, Authentication, Products, BannerByUserId) {
        $scope.authentication = Authentication;
        $scope.parentId=$stateParams.bannerId;
        // Create new Product
        $scope.create = function() {
            // Create new Product object
            var product = new Products({
                name: this.name,
                mainimg: this.mainimg,
                imgs: this.imgs,
                price: this.price,
                description: this.description,
                parentId: $scope.selectedBanner._id, // Product record is under banner content
                detailDesc: $scope.detailDesc
            });

            // Redirect after save
            product.$save(function(response) {
                alert('Successfully Added');
                $scope.error = '';
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });

            // Clear form fields
            this.name = '';
            this.mainimg ='';
            this.imgs='';
            this.price=0;
            this.description = '';
        };

        // Update existing Product
        $scope.update = function() {
            var product = $scope.product;

            product.$update(function() {
                //$location.path('products/' + product._id);
                alert('updated successfully')
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // Find a list of Products
        $scope.find = function() {
            $scope.products = Products.query();
        };

        $scope.findBanners = function() {
            $scope.banners = Banners.query();
        };

        // Find existing Product
        $scope.findOne = function() {
            Products.get({
                productId: $stateParams.productId
            }).$promise.then(function(result){
                $scope.product = result;
                $scope.selectOption();
            });
        };

        $scope.findProductUnderBanner = function() {
            console.log('banner id is '+ $scope.parentId);
            $scope.products = ProductsBanner.query({},{bannerId:$scope.parentId});
        };

        $scope.getBanners = function() {
            $scope.banners = BannerByUserId.query({userId: Authentication.user._id});
        };

        $scope.selectOption = function(){
            $scope.selectedBanner = $scope.product.parentId;//$scope.product.parentId;
        };
    }
]);


angular.module('seller-interface')
    .controller('gdrive', ['$scope','$state','$http','$q', '$mdDialog', '$mdSidenav','configGdrive', 'Googledrive', 'GooglePlus', 'Products','Authentication','ProductByUserId',
        function ($scope, $state, $http, $q, $mdDialog, $mdSidenav, configGdrive, Googledrive, GooglePlus, Products, Authentication, ProductByUserId) {
            $scope.authentication = Authentication;
            $scope.goChildView = function(stateName){
                $state.go(stateName);
                $mdSidenav('left').close();
            }

            $scope.redirect = function(stateName, param){
                $state.go(stateName, {productId: param});
                $mdSidenav('left').close();
            }

            //$scope.queriedProduct = ProductByUserId.query({userId:$scope.authentication.user._id });

        /*
        google.load('visualization', '1', {
            packages: ['corechart']
        });


         var data = google.visualization.arrayToDataTable([
         ['Year', 'Sales', 'Expenses'],
         ['명이나물', 1000, 400],
         ['더덕나물', 1170, 460],
         ['문어젖갈', 660, 1120],
         ['오징어젖갈', 1030, 540]
         ]);
         var options = {
         title: 'Company Performance'
         };
         var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));

         chart.draw(data, options);
         /**/

        $http({'url': 'http://drive.google.com/uc?export=view&id=0B8FisuvAYPTfZl9VUnEwcGdFdHc', method:"GET", headers: {
            "Content-Type": "image/jpeg"
        }})
            .success(function(data) {
                console.log(data);
            })
        $scope.data = {};
        $scope.data.cb1 = true;
        $scope.data.cb2 = false;

        $scope.user = {
            title:     "Technical Program Manager",
            email:     "ipsum@lorem.com",
            firstName: "Naomi",
            lastName:  "" ,
            company:   "Google" ,
            address:   "1600 Amphitheatre Pkwy" ,
            city:      "Mountain View" ,
            state:     "CA" ,
            country:   "USA" ,
            postalCode : "94043"
        };

        $scope.todos = [
            {
                product_uri : 'http://drive.google.com/uc?export=view&id=0B8FisuvAYPTfaTJnaHRWWmozRUU',
                name: '명이나물',
                who: '명이게이',
                when: '3:08PM',
                notes: "아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요"
            },
            {
                product_uri : 'http://drive.google.com/uc?export=view&id=0B8FisuvAYPTfcDVGYVc3NEtaSEU',
                name: '더덕나물',
                who: '명이게이',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
        ]

        /*
         * */
        var accessToken;
        $scope.permalLink = 'http://drive.google.com/uc?export=view&id=';
        $scope.arrive = false;
        $scope.authName = 'Authorize';
        $scope.isAuth = false;
        $scope.init = function init(){
            window.gapi.load('auth', $scope.authenticateWithGoogle);
            window.gapi.load('picker');
            gapi.client.load('urlshortener', 'v1');
        }
        $scope.authenticateWithGoogle =function authenticateWithGoogle(){
            window.gapi.auth.authorize({
                'client_id': configGdrive.clientId,
                'scope':configGdrive.scopes,
                'immediate': false
            }, handleAuthentication);
        }
        function handleAuthentication(result){
            if(result && !result.error){
                $scope.isAuth = true;
                $scope.authName = 'Deauthorize';
                accessToken = result.access_token;
                //console.log(accessToken);

                /*
                 callGooglePlus();
                 setFilePicker();
                 listFolder();
                 getGoogleDriveInfo();
                 createFolder();
                 */
                createNewAccountFolder();
                setFilePicker(); // singleFile
                //findTargetUriFolder();
            }else{
                console.log(result);
                console.log(result.error);
                console.log('fail to authentication')
            }
            $scope.$digest();
        }

        function listFolder() {
            Googledrive.listFolder()
        }
        /*
         function createFolder(){
         var folderName;
         Googledrive.createFolder(folderName, accessToken);
         }
         */
        function getGoogleDriveInfo(){
            Googledrive.getGoogleDriveInfo();
        }

        /// Custom file Picker Start ----------------------------------------------------------
        /*
         function setFilePicker() {
         var filePicker = document.getElementById('filePicker');

         filePicker.style.display = 'none';

         // Access token has been successfully retrieved, requests can be sent to the API.
         filePicker.style.display = 'block';
         filePicker.onchange = uploadFile;
         }

         function uploadFile(evt) {
         var callback = function(file) {
         console.log('!!File!!');
         console.log(file);
         }
         gapi.client.load('drive', 'v2', function() {
         var file = evt.target.files[0];
         insertFile(file, callback);
         });
         }

         function insertFile(fileData, callback) {
         var boundary = '-------314159265358979323846';
         var delimiter = "\r\n--" + boundary + "\r\n";
         var close_delim = "\r\n--" + boundary + "--";

         var reader = new FileReader();
         reader.readAsBinaryString(fileData);
         reader.onload = function(e) {
         var contentType = fileData.type || 'application/octet-stream';
         var metadata = {
         'title': fileData.name,
         'mimeType': contentType,
         'writersCanShare':true,
         'parents': [{
         'kind': "drive#fileLink",
         'id': "0B8FisuvAYPTfN1o1Q0d4T2JLTk0"
         }]

         };

         var base64Data = btoa(reader.result);
         var multipartRequestBody =
         delimiter +
         'Content-Type: application/json\r\n\r\n' +
         JSON.stringify(metadata) +
         delimiter +
         'Content-Type: ' + contentType + '\r\n' +
         'Content-Transfer-Encoding: base64\r\n' +
         '\r\n' +
         base64Data +
         close_delim;
         console.log(multipartRequestBody);

         var request = gapi.client.request({
         'path': '/upload/drive/v2/files',
         'method': 'POST',
         'params': {'uploadType': 'multipart'},
         'headers': {
         'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
         },
         'body': multipartRequestBody});
         if (!callback) {
         callback = function(file) {
         console.log(file)
         };
         }
         request.execute(callback);
         }
         }
         */
        /// Custom file Picker End ----------------------------------------------------------

        function callGooglePlus(){
            function callback(resp) {
                console.log(resp);
                var heading = document.createElement('h4');
                var image = document.createElement('img');
                image.src = resp.result.image.url;
                heading.appendChild(image);
                heading.appendChild(document.createTextNode(resp.result.displayName));

                document.getElementById('content').appendChild(heading);
            }
            GooglePlus.callGooglePlus(callback);
        }

        // Google PlatForm Service
        $scope.setupPicker = function() {
            function pickerCallback(data) {
                if(data.action == google.picker.Action.PICKED){
                    //do something
                    $scope.files = data.docs;
                    $scope.arrive = true;

                    // make shorten URL
                    var request = gapi.client.urlshortener.url.get({
                        'shortUrl': 'http://goo.gl/fbsS'
                    });
                    request.then(function(response) {
                        appendResults(response.result.longUrl);
                    }, function(reason) {
                        console.log('Error: ' + reason.result.error.message);
                    });

                    //alert('URL: ' + data.docs[0].url);
                    $scope.$digest()
                }else if(data.action ==google.picker.Action.CANCEL){
                    //alert('goodbye');
                }
            }
            Googledrive.setupPicker(accessToken, pickerCallback);
        }

        function createNewAccountFolder(){
            //Pre. Get User Information
            //check if there exists an
            // API /users/me (only allow to have)

            var callback = function(resp){
                console.log(resp.result.items.length);
                if(resp.result.items.length == 0){
                    $http.get('users/me')
                        .success(function(response) {
                            console.log(response);
                            var folderName = 'URI-'+response._id;
                            //1. Create A New Folder
                            Googledrive.createFolder(folderName, accessToken);
                            //2. Update User Information
                            //$http.get()
                        });
                }
                else{
                    console.log('there is already exist')
                    $scope.rootGdriveFolderID = resp.result.items[0].id
                    $scope.$digest();
                }
            }
            Googledrive.findFolder(callback);
        }

        $scope.find = function() {
            $scope.products = ProductByUserId.query({userId:$scope.authentication.user._id });
        };

        $scope.onChangeStatus = function(){
            console.log('sdfsf');
            $scope.$digest();
        };

        $scope.openNewProductDialog = function(ev) {
            //Open Dialog
            $mdDialog.show({
                templateUrl: 'modules/seller-interface/template/newProductTemplate.html',
                targetEvent: ev,
                controller: newProductDialog,
                clickOutsideToClose  : false
            }).then(function() {
                $scope.alert = 'You said "Okay".';
            }, function() {
                $scope.alert = 'You cancelled the dialog.';
            });
        };

        function newProductDialog($scope, $mdDialog){
            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }

        $scope.toggleLeft = function() {
            $mdSidenav('left').open();
        };

        $scope.getPaymentHistory = function() {
            $scope.payments = Payments.query();
        }
    }]
);

angular.module('seller-interface').controller('BottomSheetExample', ["$scope", "$timeout", "$mdBottomSheet", function($scope, $timeout, $mdBottomSheet) {
    $scope.alert = '';

    $scope.showListBottomSheet = function($event) {
        $mdBottomSheet.show({
            templateUrl: 'modules/seller-interface/views/bottom-sheet-list-template.html',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };

    $scope.showGridBottomSheet = function($event) {
        $mdBottomSheet.show({
            templateUrl: 'modules/seller-interface/views/bottom-sheet-grid-template.html',
            controller: 'GridBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };
}])
    .controller('LeftCtrl', ["$scope", "$timeout", "$mdSidenav", function($scope, $timeout, $mdSidenav) {
        $scope.close = function() {
            $mdSidenav('left').close();
        };
    }]);

angular.module('seller-interface').controller('ListBottomSheetCtrl', ["$scope", "$mdBottomSheet", function($scope, $mdBottomSheet) {

    $scope.items = [
        { name: 'Upload New Image (Google Drive)', icon: 'share' },
        { name: 'Select Existing Image (Google Drive)', icon: 'upload' },
        { name: 'Product History (Google Sheets)', icon: 'copy' },
        { name: 'Print this page (PDF Printer)', icon: 'print' },
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
}]);

angular.module('seller-interface').controller('GridBottomSheetCtrl', ["$scope", "$mdBottomSheet", function($scope, $mdBottomSheet) {

    $scope.items = [
        { name: 'Hangout', icon: 'hangout' },
        { name: 'Mail', icon: 'mail' },
        { name: 'Message', icon: 'message' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' },
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
}]);

/*
 Copyright 2012 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Author: Eric Bidelman (ericbidelman@chromium.org)
 */
/*
function onError(e) {
    console.log(e);
}

// FILESYSTEM SUPPORT ----------------------------------------------------------
var fs = null;
var FOLDERNAME = 'test';

function writeFile(blob) {
    if (!fs) {
        return;
    }

    fs.root.getDirectory(FOLDERNAME, {create: true}, function(dirEntry) {
        dirEntry.getFile(blob.name, {create: true, exclusive: false}, function(fileEntry) {
            // Create a FileWriter object for our FileEntry, and write out blob.
            fileEntry.createWriter(function(fileWriter) {
                fileWriter.onerror = onError;
                fileWriter.onwriteend = function(e) {
                    console.log('Write completed.');
                };
                fileWriter.write(blob);
            }, onError);
        }, onError);
    }, onError);
}
// -----------------------------------------------------------------------------

var gDriveApp = angular.module('gDriveApp', []);

gDriveApp.factory('gdocs', function() {
    var gdocs = new GDocs();

    var dnd = new DnDFileController('body', function(files) {
        var $scope = angular.element(this).scope();
        Util.toArray(files).forEach(function(file, i) {
            gdocs.upload(file, function() {
                //$scope.fetchDocs(true);
            }, true);
        });
    });

    return gdocs;
});
//gDriveApp.service('gdocs', GDocs);
//gDriveApp.controller('DocsController', ['$scope', '$http', DocsController]);

// Main Angular controller for app.
function DocsController($scope, $http, gdocs) {
    $scope.docs = [];

    // Response handler that caches file icons in the filesystem API.
    function successCallbackWithFsCaching(resp, status, headers, config) {
        var docs = [];
        var totalEntries = resp.items.length;
        console.log(totalEntries);
        resp.items.forEach(function(entry, i) {
            var doc = {
                title: entry.title,
                updatedDate: Util.formatDate(entry.modifiedDate),
                updatedDateFull: entry.modifiedDate,
                icon: entry.iconLink,
                alternateLink: entry.alternateLink,
                size: entry.fileSize ? '( ' + entry.fileSize + ' bytes)' : null
            };

            // 'http://gstatic.google.com/doc_icon_128.png' -> 'doc_icon_128.png'
            doc.iconFilename = doc.icon.substring(doc.icon.lastIndexOf('/') + 1);
            console.log(doc.icon);
            // If file exists, it we'll get back a FileEntry for the filesystem URL.
            // Otherwise, the error callback will fire and we need to XHR it in and
            // write it to the FS.
            var fsURL = fs.root.toURL() + FOLDERNAME + '/' + doc.iconFilename;
            window.webkitResolveLocalFileSystemURL(fsURL, function(entry) {
                console.log('Fetched icon from the FS cache');

                doc.icon = entry.toURL(); // should be === to fsURL, but whatevs.

                $scope.docs.push(doc);

                // Only want to sort and call $apply() when we have all entries.
                if (totalEntries - 1 == i) {
                    $scope.docs.sort(Util.sortByDate);
                    $scope.$apply(function($scope) {}); // Inform angular we made changes.
                }
            }, function(e) {

                $http.get(doc.icon, {responseType: 'blob'}).success(function(blob) {
                    console.log('Fetched icon via XHR');

                    blob.name = doc.iconFilename; // Add icon filename to blob.

                    writeFile(blob); // Write is async, but that's ok.

                    doc.icon = window.URL.createObjectURL(blob);

                    $scope.docs.push(doc);
                    if (totalEntries - 1 == i) {
                        $scope.docs.sort(Util.sortByDate);
                    }
                });

            });
        });
    }

    $scope.clearDocs = function() {
        $scope.docs = []; // Clear out old results.
    };

    $scope.fetchDocs = function(retry) {
        this.clearDocs();

        if (gdocs.accessToken) {
            var config = {
                params: {'alt': 'json'},
                headers: {
                    'Authorization': 'Bearer ' + gdocs.accessToken

                }
            };

            //https://drive.google.com/open?id=0B8FisuvAYPTfampGWFhXQUs5dVU&authuser=0
            $http.get(gdocs.DOCLIST_FEED, config).
                success(successCallbackWithFsCaching).
                error(function(data, status, headers, config) {
                    if (status == 401 && retry) {
                        gdocs.removeCachedAuthToken(
                            gdocs.auth.bind(gdocs, true,
                                $scope.fetchDocs.bind($scope, false)));
                    }
                });
        }
    };

    // Toggles the authorization state.
    $scope.toggleAuth = function(interactive) {
        if (!gdocs.accessToken) {
            gdocs.auth(interactive, function() {
                $scope.fetchDocs(false);
            });
        } else {
            gdocs.revokeAuthToken(function() {});
            this.clearDocs();
        }
    }

    // Controls the label of the authorize/deauthorize button.
    $scope.authButtonLabel = function() {
        if (gdocs.accessToken)
            return 'Deauthorize';
        else
            return 'Authorize';
    };

    $scope.toggleAuth(false);
}

DocsController.$inject = ['$scope', '$http', 'gdocs']; // For code minifiers.

// Init setup and attach event listeners.
document.addEventListener('DOMContentLoaded', function(e) {

    // FILESYSTEM SUPPORT --------------------------------------------------------
    window.webkitRequestFileSystem(TEMPORARY, 1024 * 1024, function(localFs) {
        fs = localFs;
    }, onError);
    // ---------------------------------------------------------------------------
});
*/
'use strict';

// Gdriveapps controller

angular.module('seller-interface').constant('CONFIG', {
    clientId: '574563539488-pctm7fr21vcetcfpdf9hhaje9q5vepee.apps.googleusercontent.com',
    apiKey: 'AIzaSyAFtN5UMzS3aYUfCgd6JoixOVZRORkM1zw',
    scopes: [
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.install'
    ]
});

angular.module('seller-interface').value('config', {
    clientId: '574563539488-pctm7fr21vcetcfpdf9hhaje9q5vepee.apps.googleusercontent.com',
    apiKey: 'AIzaSyAFtN5UMzS3aYUfCgd6JoixOVZRORkM1zw',
    scopes: [
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.install'
    ]});

angular.module('seller-interface').controller('GdriveappsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Gdriveapps',
	function($scope, $stateParams, $location, Authentication, Gdriveapps ) {
		console.log($scope.authentication);
		// Create new Gdriveapp
		$scope.create = function() {
			// Create new Gdriveapp object
			var gdriveapp = new Gdriveapps ({
				name: this.name
			});

			// Redirect after save
			gdriveapp.$save(function(response) {
				$location.path('gdriveapps/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			// Clear form fields
			this.name = '';
		};

		// Remove existing Gdriveapp
		$scope.remove = function( gdriveapp ) {
			if ( gdriveapp ) { gdriveapp.$remove();

				for (var i in $scope.gdriveapps ) {
					if ($scope.gdriveapps [i] === gdriveapp ) {
						$scope.gdriveapps.splice(i, 1);
					}
				}
			} else {
				$scope.gdriveapp.$remove(function() {
					$location.path('gdriveapps');
				});
			}
		};

		// Update existing Gdriveapp
		$scope.update = function() {
			var gdriveapp = $scope.gdriveapp ;

			gdriveapp.$update(function() {
				$location.path('gdriveapps/' + gdriveapp._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Gdriveapps
		$scope.find = function() {
			$scope.gdriveapps = Gdriveapps.query();
		};

		// Find existing Gdriveapp
		$scope.findOne = function() {
			$scope.gdriveapp = Gdriveapps.get({ 
				gdriveappId: $stateParams.gdriveappId
			});
		};
	}
]);

'use strict';

angular.module('seller-interface').controller('HistoryPaymentController', ['$scope','Authentication','Payments','PaymentsBySellerData',
	function($scope, Authentication, Payments, PaymentsBySellerData) {
		$scope.authentication = Authentication;
		console.log($scope.authentication);

		$scope.getPaymentHistory = function() {
			$scope.payments = PaymentsBySellerData.query({sellerData: Authentication.user._id});
		}
	}
]);

/**
 * Created by KevinSo on 10/2/2014.
 */

'use strict';

var googlePlusUserLoader = (function() {

    var STATE_START=1;
    var STATE_ACQUIRING_AUTHTOKEN=2;
    var STATE_AUTHTOKEN_ACQUIRED=3;

    var state = STATE_START;

    var signin_button, xhr_button, revoke_button, user_info_div;

    function disableButton(button) {
        button.setAttribute('disabled', 'disabled');
    }

    function enableButton(button) {
        button.removeAttribute('disabled');
    }

    function changeState(newState) {
        state = newState;
        switch (state) {
            case STATE_START:
                enableButton(signin_button);
                disableButton(xhr_button);
                disableButton(revoke_button);
                break;
            case STATE_ACQUIRING_AUTHTOKEN:
                sampleSupport.log('Acquiring token...');
                disableButton(signin_button);
                disableButton(xhr_button);
                disableButton(revoke_button);
                break;
            case STATE_AUTHTOKEN_ACQUIRED:
                disableButton(signin_button);
                enableButton(xhr_button);
                enableButton(revoke_button);
                break;
        }
    }

    // @corecode_begin getProtectedData
    function xhrWithAuth(method, url, interactive, callback) {
        var access_token;

        var retry = true;

        getToken();

        function getToken() {
            chrome.identity.getAuthToken({ interactive: interactive }, function(token) {
                if (chrome.runtime.lastError) {
                    callback(chrome.runtime.lastError);
                    return;
                }

                access_token = token;
                requestStart();
            });
        }

        function requestStart() {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
            xhr.onload = requestComplete;
            xhr.send();
        }

        function requestComplete() {
            if (this.status == 401 && retry) {
                retry = false;
                chrome.identity.removeCachedAuthToken({ token: access_token },
                    getToken);
            } else {
                callback(null, this.status, this.response);
            }
        }
    }

    function getUserInfo(interactive) {
        xhrWithAuth('GET',
            'https://www.googleapis.com/plus/v1/people/me',
            interactive,
            onUserInfoFetched);
    }
    // @corecode_end getProtectedData


    // Code updating the user interface, when the user information has been
    // fetched or displaying the error.
    function onUserInfoFetched(error, status, response) {
        if (!error && status == 200) {
            changeState(STATE_AUTHTOKEN_ACQUIRED);
            sampleSupport.log(response);
            var user_info = JSON.parse(response);
            populateUserInfo(user_info);
        } else {
            changeState(STATE_START);
        }
    }

    function populateUserInfo(user_info) {
        user_info_div.innerHTML = "Hello " + user_info.displayName;
        fetchImageBytes(user_info);
    }

    function fetchImageBytes(user_info) {
        if (!user_info || !user_info.image || !user_info.image.url) return;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', user_info.image.url, true);
        xhr.responseType = 'blob';
        xhr.onload = onImageFetched;
        xhr.send();
    }

    function onImageFetched(e) {
        if (this.status != 200) return;
        var imgElem = document.createElement('img');
        var objUrl = window.webkitURL.createObjectURL(this.response);
        imgElem.src = objUrl;
        imgElem.onload = function() {
            window.webkitURL.revokeObjectURL(objUrl);
        }
        user_info_div.insertAdjacentElement("afterbegin", imgElem);
    }

    // OnClick event handlers for the buttons.

    /**
     Retrieves a valid token. Since this is initiated by the user
     clicking in the Sign In button, we want it to be interactive -
     ie, when no token is found, the auth window is presented to the user.

     Observe that the token does not need to be cached by the app.
     Chrome caches tokens and takes care of renewing when it is expired.
     In that sense, getAuthToken only goes to the server if there is
     no cached token or if it is expired. If you want to force a new
     token (for example when user changes the password on the service)
     you need to call removeCachedAuthToken()
     **/
    function interactiveSignIn() {
        changeState(STATE_ACQUIRING_AUTHTOKEN);

        // @corecode_begin getAuthToken
        // @description This is the normal flow for authentication/authorization
        // on Google properties. You need to add the oauth2 client_id and scopes
        // to the app manifest. The interactive param indicates if a new window
        // will be opened when the user is not yet authenticated or not.
        // @see http://developer.chrome.com/apps/app_identity.html
        // @see http://developer.chrome.com/apps/identity.html#method-getAuthToken
        chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
            if (chrome.runtime.lastError) {
                sampleSupport.log(chrome.runtime.lastError);
                changeState(STATE_START);
            } else {
                sampleSupport.log('Token acquired:'+token+
                    '. See chrome://identity-internals for details.');
                changeState(STATE_AUTHTOKEN_ACQUIRED);
            }
        });
        // @corecode_end getAuthToken
    }

    function revokeToken() {
        user_info_div.innerHTML="";
        chrome.identity.getAuthToken({ 'interactive': false },
            function(current_token) {
                if (!chrome.runtime.lastError) {

                    // @corecode_begin removeAndRevokeAuthToken
                    // @corecode_begin removeCachedAuthToken
                    // Remove the local cached token
                    chrome.identity.removeCachedAuthToken({ token: current_token },
                        function() {});
                    // @corecode_end removeCachedAuthToken

                    // Make a request to revoke token in the server
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', 'https://accounts.google.com/o/oauth2/revoke?token=' +
                        current_token);
                    xhr.send();
                    // @corecode_end removeAndRevokeAuthToken

                    // Update the user interface accordingly
                    changeState(STATE_START);
                    sampleSupport.log('Token revoked and removed from cache. '+
                        'Check chrome://identity-internals to confirm.');
                }
            });
    }

    return {
        onload: function () {
            signin_button = document.querySelector('#signin');
            signin_button.addEventListener('click', interactiveSignIn);

            xhr_button = document.querySelector('#getxhr');
            xhr_button.addEventListener('click', getUserInfo.bind(xhr_button, true));

            revoke_button = document.querySelector('#revoke');
            revoke_button.addEventListener('click', revokeToken);

            user_info_div = document.querySelector('#user_info');

            // Trying to get user's info without signing in, it will work if the
            // application was previously authorized by the user.
            getUserInfo(false);
        }
    };

})();




'use strict';

angular.module('seller-interface').factory('gdocs', [
	function() {
		var gdocs = new GDocs();

		/*
		var dnd = new DnDFileController('body', function(files) {
			var $scope = angular.element(this).scope();
			Util.toArray(files).forEach(function(file, i) {
				gdocs.upload(file, function() {
					//$scope.fetchDocs(true);
				}, true);
			});
		});
		*/
		return gdocs;
	}
]);

'use strict';

//Gdriveapps service used to communicate Gdriveapps REST endpoints
angular.module('seller-interface').factory('Gdriveapps', ['$resource',
	function($resource) {
		return $resource('gdriveapps/:gdriveappId', { gdriveappId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

/*
 * Created by Kevin on 2014-10-29.
* */
//
//'use strict';
//
//angular.module('seller-interface').factory('Googledrive', ['configGdrive',
//	function(configGdrive) {
//		return {
//			createFolder: createFolder,
//			findFolder: findFolder,
//			getGoogleDriveInfo: getGoogleDriveInfo,
//			setupPicker: setupPicker,
//			listFolder: listFolder
//		};
//
//		function createFolder(FolderName, accessToken){
//			var request = gapi.client.request({
//				'path': '/drive/v2/files/',
//				'method': 'POST',
//				'headers': {
//					'Content-Type': 'application/json',
//					'Authorization': 'Bearer ' + accessToken
//				},
//				'body':{
//					"title" : FolderName,
//					"mimeType" : "application/vnd.google-apps.folder"
//				}
//			});
//			request.execute(function(resp) {
//				console.log(resp);
//			});
//		}
//
//		// Search Folder
//		function findFolder(callback){
//			gapi.client.load('drive', 'v2').then(function(){
//				var request = gapi.client.drive.files.list({
//					q: "title contains 'URI-'",
//					fields: 'items(id\,title)'
//				});
//				request.then(function(resp){
//					//console.log('result File list');
//					//console.log(resp);
//					callback(resp);
//				});
//			});
//		}
//
//		function getGoogleDriveInfo(){
//			gapi.client.load('drive', 'v2').then(function() {
//				var request = gapi.client.drive.about.get();
//				request.execute(function (resp) {
//					console.log('Current user name: ' + resp.name);
//					console.log('Root folder ID: ' + resp.rootFolderId);
//					console.log('Total quota (bytes): ' + resp.quotaBytesTotal);
//					console.log('Used quota (bytes): ' + resp.quotaBytesUsed);
//				});
//			});
//		}
//
//		//Google File Picker Platform
//		function setupPicker(accessToken, callback){
//			var callbackAfterFindFolder = function(resp){
//				var folderID = resp.result.items[0].id;
//				var picker = new google.picker.PickerBuilder()
//					.setOAuthToken(accessToken)
//					.setDeveloperKey(configGdrive.developerKey)
//					.addView(new google.picker.DocsUploadView().setParent(folderID))
//					.addView(new google.picker.DocsView().setParent(folderID))
//					.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
//					.setLocale('ko')
//					//.enableFeature(google.picker.Feature.NAV_HIDDEN)
//					.setCallback(callback)
//					.build();
//				picker.setVisible(true);
//			}
//			findFolder(callbackAfterFindFolder);
//
//
//		}
//
//		function listFolder(){
//			gapi.client.load('drive', 'v2').then(function() {
//
//				var request = gapi.client.drive.files.list({
//					maxResults:10,
//					fields: 'items(id,owners(displayName,emailAddress,isAuthenticatedUser,kind,permissionId),selfLink)'
//				});
//				request.then(function(resp){
//					console.log('result File list');
//					console.log(resp)
//				});
//
//				var request = gapi.client.drive.files.list({
//					maxResults:10,
//					fields: 'items(id,owners(displayName,emailAddress,isAuthenticatedUser,kind,permissionId),selfLink)'
//				});
//				request.then(function(resp){
//					console.log('result File list');
//					console.log(resp)
//				});
//
//			});
//		}
//	}
//]);

'use strict';

angular.module('seller-interface').factory('GooglePlus', [
	function() {
		return {
			callGooglePlus: callGooglePlus
		};

		function callGooglePlus(callback) {
			gapi.client.load('plus', 'v1').then(function() {
				// Step 5: Assemble the API request
				var request = gapi.client.plus.people.get({
					'userId': 'me'
				});
				// Step 6: Execute the API request
				request.then(callback, function(reason) {
					console.log('Error: ' + reason.result.error.message);
				});
			});
		}
	}
]);

'use strict';

angular.module('size-util').controller('SizeUtil.sizeOfWidthController', ['$scope',
	function($scope) {
        $scope.width = window.innerWidth;

        $('.bottom-sheet-dashboard').width(window.innerWidth - 74);
        $(window).on("resize.doResize", function (){
            $scope.width = window.innerWidth;
            if($scope.width < 600)
                $scope.screen = 'sm size';
            else if($scope.width <  960)
                $scope.screen = 'md size';
            else
                $scope.screen = 'bg size';
            $('.bottom-sheet-dashboard').width(window.innerWidth - 74);
            $scope.$apply(function(){

                //do something to update current scope based on the new innerWidth and let angular update the view.
            });
        });

        $scope.$on("$destroy",function (){
            $(window).off("resize.doResize"); //remove the handler added earlier
        });
	}
]);

'use strict';

angular.module('size-util').directive('colorBorder', [
	function() {
		return {
            scope:{
                color : '@colorBorder'
            },
			link: function postLink(scope, element, attrs) {
                //element.css('border-color', scope.color);
                //element.css('border-style', 'solid');
                //element.css('border-width', '1px');
								//console.log('from colorBorder Directive: '+scope.color);
								TweenLite.set(element.children(), {
                    borderColor: scope.color,
                    borderStyle: 'solid',
                    borderWidth: '1px'
                });
			}
		};
	}
]);

'use strict';

angular.module('size-util').directive('coverResize', ['$window',
    function($window) {
        return {
            restrict: 'A',
            scope:{
                targetElem: "=bindingFoo"
            },
            link: function postLink(scope, element, attrs) {
                //function targetElement() {
                //    console.log(scope.targetElem);
                //    return scope.targetElem;
                //}
                //var targetElem = scope.targetElem;


                var w = angular.element($window);
                w.on('reszie', function(){
                    console.log('resize');
                })
                //console.log(w);
                //scope.$watch(function () {
                //    return {
                //        'h': w.height(),
                //        'w': w.width()
                //    };
                //}, function (newValue, oldValue) {
                //    scope.windowHeight = newValue.h;
                //    scope.windowWidth = newValue.w;
                //
                //    scope.resizeWithOffset = function (offsetH) {
                //
                //        scope.$eval(attr.notifier);
                //
                //        return {
                //            'height': (newValue.h - offsetH) + 'px'
                //            //,'width': (newValue.w - 100) + 'px'
                //        };
                //    };
                //
                //}, true);
                console.log(element);
                element.on("resize", function () {
                    console.log("resized.- element On");
                });
                element.bind('resize', function () {
                    console.log('resize');
                    scope.$apply();
                });
                element.bind('click', function () {
                    console.log('resize');
                    scope.$apply();
                });
            }
        };
    }
])
    .directive('ngSize', ['$window', function($window) {
        return {
            scope: {
                size: '=ngSize'
            },
            link: function(scope, element, attrs) {
                var telem = angular.element(element);
                element.bind("resize",function(e){

                    console.log(" Window resized! ");
                    // Your relevant code here...

                })

                $('#calendar').bind('resize', function(){
                    console.log('resized');
                });

                //
                //$root.ngSizeDimensions  = (angular.isArray($root.ngSizeDimensions)) ? $root.ngSizeDimensions : [];
                //$root.ngSizeWatch       = (angular.isArray($root.ngSizeWatch)) ? $root.ngSizeWatch : [];
                //
                //var handler = function() {
                //    angular.forEach($root.ngSizeWatch, function(el, i) {
                //        console.log(el, i);
                //        // Dimensions Not Equal?
                //        if ($root.ngSizeDimensions[i][0] != el.offsetWidth || $root.ngSizeDimensions[i][1] != el.offsetHeight) {
                //            // Update Them
                //            $root.ngSizeDimensions[i] = [el.offsetWidth, el.offsetHeight];
                //            // Update Scope?
                //            $root.$broadcast('size::changed', i);
                //        }
                //    });
                //};
                //
                //// Add Element to Chain?
                //var exists = false;
                //angular.forEach($root.ngSizeWatch, function(el, i) { if (el === element[0]) exists = i });
                //
                //// Ok.
                //if (exists === false) {
                //    $root.ngSizeWatch.push(element[0]);
                //    $root.ngSizeDimensions.push([element[0].offsetWidth, element[0].offsetHeight]);
                //    exists = $root.ngSizeWatch.length-1;
                //}
                //
                //// Update Scope?
                //$scope.$on('size::changed', function(event, i) {
                //    // Relevant to the element attached to *this* directive
                //    if (i === exists) {
                //        $scope.size = {
                //            width: $root.ngSizeDimensions[i][0],
                //            height: $root.ngSizeDimensions[i][1]
                //        };
                //    }
                //});
                //
                //// Refresh: 100ms
                //if (!window.ngSizeHandler) window.ngSizeHandler = setInterval(handler, 100);
                //
                //// Window Resize?
                //// angular.element(window).on('resize', handler);

            }
        };
    }])
    .directive('testSize', yourDirectiveName);

    function yourDirectiveName($window) {

        var directive = {
            link: link,
            restrict: 'AE',
            scope: {
                data: '=',
                renderer: '='
            }
        };
        return directive;

        function link(scope, element, attributes) {

            var w = angular.element($window);

            // Created a function that can watch the
            // width of the window so we know when
            // boostrap divs will trigger resizing
            scope.getWindowWidth = function () {
                return w.width();
            }

            // Watch for the size of the window changing
            // then switch according to the bootstrap
            // boundaries listed below.
            scope.$watch(scope.getWindowWidth, function (newWidth, oldWidth) {
                if (newWidth != oldWidth) {

                    switch (true) {
                        // xs/ss boundary (My custom boundary)
                        case (newWidth < 600): // Resize every time
                        case (newWidth >= 600 && oldWidth < 600):
                        // ss/sm boundary
                        case (oldWidth >= 768 && newWidth < 768):
                        case (newWidth >= 768 && oldWidth < 768):
                        // sm/md boundary
                        case (oldWidth >= 992 && newWidth < 992):
                        case (newWidth >= 992 && oldWidth < 992):
                        // md/lg boundary
                        case (oldWidth >= 1200 && newWidth < 1200):
                        case (newWidth >= 1200 && oldWidth < 1200):
                            scope.renderChart(element[0], attributes.color);
                            break;
                        default:
                            break;
                    }
                }
            });

            // Capture the window event so we can capture
            // the bootstrap media query boundaries
            w.bind('resize', function () {
                scope.$apply();
            });

            // Watch for the data or chart type changing
            scope.$watchCollection('[data, renderer]', function (newValue, oldValue) {
                if (!newValue[0]) {
                    return;
                }

                scope.renderChart(element[0], attributes.color);
            });

            // Render the D3 chart through Rickshaw
            scope.renderChart = function (element, color) {
                element.innerHTML = '';

                var graph = new Rickshaw.Graph({
                    element: element,
                    series: [{data: scope.data, color: color}],
                    renderer: scope.renderer
                });

                graph.render();
            };
        }
    }
    yourDirectiveName.$inject = ["$window"];

'use strict';

//Setting up route
angular.module('the-clean-cruds').config(['$stateProvider',
	function($stateProvider) {
		// The clean cruds state routing
		$stateProvider.
		state('listTheCleanCruds', {
			url: '/the-clean-cruds',
			templateUrl: 'modules/the-clean-cruds/views/list-the-clean-cruds.client.view.html'
		}).
		state('createTheCleanCrud', {
			url: '/the-clean-cruds/create',
			templateUrl: 'modules/the-clean-cruds/views/create-the-clean-crud.client.view.html'
		}).
		state('viewTheCleanCrud', {
			url: '/the-clean-cruds/:theCleanCrudId',
			templateUrl: 'modules/the-clean-cruds/views/view-the-clean-crud.client.view.html'
		}).
		state('editTheCleanCrud', {
			url: '/the-clean-cruds/:theCleanCrudId/edit',
			templateUrl: 'modules/the-clean-cruds/views/edit-the-clean-crud.client.view.html'
		});
	}
]);
'use strict';

// The clean cruds controller
angular.module('the-clean-cruds').controller('TheCleanCrudsController', ['$scope', '$stateParams', '$location', 'Authentication', 'TheCleanCruds',
	function($scope, $stateParams, $location, Authentication, TheCleanCruds) {
		$scope.authentication = Authentication;


		// Create new The clean crud
		$scope.create = function() {
			// Create new The clean crud object
			var theCleanCrud = new TheCleanCruds ({
				//name: this.name,
				orderDate:this.orderDate,
				deliberyDate: this.deliberyDate,
				Address: this.address,
				numOrder: this.numOrder,
				detailInfo: this.detailInfo
			});

			// Redirect after save
			theCleanCrud.$save(function(response) {
				$location.path('the-clean-cruds/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing The clean crud
		$scope.remove = function(theCleanCrud) {
			if ( theCleanCrud ) { 
				theCleanCrud.$remove();

				for (var i in $scope.theCleanCruds) {
					if ($scope.theCleanCruds [i] === theCleanCrud) {
						$scope.theCleanCruds.splice(i, 1);
					}
				}
			} else {
				$scope.theCleanCrud.$remove(function() {
					$location.path('the-clean-cruds');
				});
			}
		};

		// Update existing The clean crud
		$scope.update = function() {
			var theCleanCrud = $scope.theCleanCrud;

			theCleanCrud.$update(function() {
				$location.path('the-clean-cruds/' + theCleanCrud._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of The clean cruds
		$scope.find = function() {
			$scope.theCleanCruds = TheCleanCruds.query();
		};

		// Find existing The clean crud
		$scope.findOne = function() {
			$scope.theCleanCrud = TheCleanCruds.get({ 
				theCleanCrudId: $stateParams.theCleanCrudId
			});
		};
	}
]);

'use strict';

//The clean cruds service used to communicate The clean cruds REST endpoints
angular.module('the-clean-cruds').factory('TheCleanCruds', ['$resource',
	function($resource) {
		return $resource('the-clean-cruds/:theCleanCrudId', { theCleanCrudId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

//Setting up route
angular.module('the-clean').config(['$stateProvider','$mdIconProvider',
	function($stateProvider,$mdIconProvider) {
		// The clean state routing
		$stateProvider.
		state('tc-order', {
			url: '/tc-order',
			templateUrl: 'modules/the-clean/views/tc-order.client.view.html'
		}).
		state('the-clean', {
			url: '/the-clean',
			templateUrl: 'modules/the-clean/views/the-clean.client.view.html'
		});

		$mdIconProvider.icon('basket', 'modules/the-clean/svg/basket.svg');
		$mdIconProvider.icon('drum', 'modules/the-clean/svg/drum.svg');
	}
]);

'use strict';

angular.module('the-clean').controller('TcOrderController', ['$scope',
	function($scope) {
		// Tc order controller logic
		// ...
	}
]);
'use strict';

angular.module('the-clean').controller('TheCleanController', ['$scope','Authentication',
	function($scope, Authentication) {
		// The clean controller logic
		// ...
        $scope.authentication = Authentication;
        $scope.toppings = [
            { category: 'meat', name: 'Pepperoni' },
            { category: 'meat', name: 'Sausage' },
            { category: 'meat', name: 'Ground Beef' },
            { category: 'meat', name: 'Bacon' },
            { category: 'veg', name: 'Mushrooms' },
            { category: 'veg', name: 'Onion' },
            { category: 'veg', name: 'Green Pepper' },
            { category: 'veg', name: 'Green Olives' },
        ];

        $scope.tcOrder = true;
        $scope.tcStartPage = false;
        $scope.tcPrice = false;
        $scope.tcUserInfo = true;
        $scope.tcProgress = false;

        $scope.toggle = function(targetDirective) {
            return targetDirective = !targetDirective;
        }

        $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {axisLabel: 'Module(s)'},
                yAxis: {axisLabel: 'Complete(%)', axisLabelDistance: 30}
            }
        };

        $scope.data = [
            {
                key: "Cumulative Return",
                values: [
                    {"label" : "User Interface" , "value" : 22},
	                  {"label" : "Backend" , "value" : 5},
                    {"label" : "Start Page" , "value" : 5},
                    {"label" : "Icon Design" , "value" : 5},
                    {"label" : "Complete" , "value" : 100}
                ]
            }
        ]

//        //All code created by Blake Bowen
////Forked from: http://codepen.io/osublake/pen/RNLdpz/
//
//// GRID OPTIONS
//        var rowSize   = 100;
//        var colSize   = 100;
//        var gutter    = 7;     // Spacing between tiles
//        var numTiles  = 25;    // Number of tiles to initially populate the grid with
//        var fixedSize = false; // When true, each tile's colspan will be fixed to 1
//        var oneColumn = false; // When true, grid will only have 1 column and tiles have fixed colspan of 1
//        var threshold = "50%"; // This is amount of overlap between tiles needed to detect a collision
//
//        var $add  = $("#add");
//        var $list = $("#list");
//        var $mode = $("input[name='layout']");
//
//// Live node list of tiles
//        var tiles  = $list[0].getElementsByClassName("tile");
//        var label  = 1;
//        var zIndex = 1000;
//
//        var startWidth  = "100%";
//        var startSize   = colSize;
//        var singleWidth = colSize * 3;
//
//        var colCount   = null;
//        var rowCount   = null;
//        var gutterStep = null;
//
//        var shadow1 = "0 1px 3px  0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.6)";
//        var shadow2 = "0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2)";
//
//        $(window).resize(resize);
//        $add.click(createTile);
//        $mode.change(init);
//
//        init();
//
//// ========================================================================
////  INIT
//// ========================================================================
//        function init() {
//            var width = startWidth;
//
//            // This value is defined when this function
//            // is fired by a radio button change event
//            switch (this.value) {
//                case "mixed":
//                    fixedSize = false;
//                    oneColumn = false;
//                    colSize   = startSize;
//                    break;
//                case "fixed":
//                    fixedSize = true;
//                    oneColumn = false;
//                    colSize   = startSize;
//                    break;
//                case "column":
//                    fixedSize = false;
//                    oneColumn = true;
//                    width     = singleWidth;
//                    colSize   = singleWidth;
//                    break;
//            }
//
//            $(".tile").remove();
//
//            TweenLite.to($list, 0.2, { width: width });
//            TweenLite.delayedCall(0.25, populateBoard);
//
//            function populateBoard() {
//                label = 1;
//                resize();
//                for (var i = 0; i < numTiles; i++) {
//                    createTile();
//                }
//            }
//        }
//
//
//// ========================================================================
////  RESIZE
//// ========================================================================
//        function resize() {
//
//            colCount   = oneColumn ? 1 : Math.floor($list.outerWidth() / (colSize + gutter));
//            gutterStep = colCount == 1 ? gutter : (gutter * (colCount - 1) / colCount);
//            rowCount   = 0;
//
//            layoutInvalidated();
//        }
//
//
//// ========================================================================
////  CHANGE POSITION
//// ========================================================================
//        function changePosition(from, to, rowToUpdate) {
//
//            var $tiles = $(".tile");
//            var insert = from > to ? "insertBefore" : "insertAfter";
//
//            // Change DOM positions
//            $tiles.eq(from)[insert]($tiles.eq(to));
//
//            layoutInvalidated(rowToUpdate);
//        }
//
//// ========================================================================
////  CREATE TILE
//// ========================================================================
//        function createTile() {
//            var colspan = fixedSize || oneColumn ? 1 : Math.floor(Math.random() * 2) + 1;
//            var element = $("<div></div>").addClass("tile").html(label++);
//            var lastX   = 0;
//
//            Draggable.create(element, {
//                onDrag      : onDrag,
//                onClick     : onClick,
//                onPress     : onPress,
//                onRelease   : onRelease,
//                zIndexBoost : false
//            });
//
//            // NOTE: Leave rowspan set to 1 because this demo
//            // doesn't calculate different row heights
//            var tile = {
//                col        : null,
//                colspan    : colspan,
//                element    : element,
//                height     : 0,
//                inBounds   : true,
//                index      : null,
//                isDragging : false,
//                lastIndex  : null,
//                newTile    : true,
//                positioned : false,
//                row        : null,
//                rowspan    : 1,
//                width      : 0,
//                x          : 0,
//                y          : 0
//            };
//
//            // Add tile properties to our element for quick lookup
//            element[0].tile = tile;
//
//            $list.append(element);
//            layoutInvalidated();
//
//            function onClick(){
//                console.log(this.target);
//                //TweenMax.to(this.target, 0.5, {scale:4});
//                console.log('clicked');
//            }
//
//            function onPress() {
//
//                lastX = this.x;
//                tile.isDragging = true;
//                tile.lastIndex  = tile.index;
//
//                TweenLite.to(element, 0.2, {
//                    autoAlpha : 0.75,
//                    boxShadow : shadow2,
//                    scale     : 0.95,
//                    zIndex    : "+=1000"
//                });
//            }
//
//            function onDrag() {
//
//                // Move to end of list if not in bounds
//                if (!this.hitTest($list, 0)) {
//                    tile.inBounds = false;
//                    changePosition(tile.index, tiles.length - 1);
//                    return;
//                }
//
//                tile.inBounds = true;
//
//                for (var i = 0; i < tiles.length; i++) {
//
//                    // Row to update is used for a partial layout update
//                    // Shift left/right checks if the tile is being dragged
//                    // towards the the tile it is testing
//                    var testTile    = tiles[i].tile;
//                    var onSameRow   = (tile.row === testTile.row);
//                    var rowToUpdate = onSameRow ? tile.row : -1;
//                    var shiftLeft   = onSameRow ? (this.x < lastX && tile.index > i) : true;
//                    var shiftRight  = onSameRow ? (this.x > lastX && tile.index < i) : true;
//                    var validMove   = (testTile.positioned && (shiftLeft || shiftRight));
//
//                    if (this.hitTest(tiles[i], threshold) && validMove) {
//                        changePosition(tile.index, i, rowToUpdate);
//                        break;
//                    }
//                }
//
//                lastX = this.x;
//            }
//
//            function onRelease() {
//
//                // Move tile back to last position if released out of bounds
//                this.hitTest($list, 0)
//                    ? layoutInvalidated()
//                    : changePosition(tile.index, tile.lastIndex);
//
//                TweenLite.to(element, 0.2, {
//                    autoAlpha : 1,
//                    boxShadow: shadow1,
//                    scale     : 1,
//                    x         : tile.x,
//                    y         : tile.y,
//                    zIndex    : ++zIndex
//                });
//
//                tile.isDragging = false;
//            }
//        }
//
//// ========================================================================
////  LAYOUT INVALIDATED
//// ========================================================================
//        function layoutInvalidated(rowToUpdate) {
//
//            var timeline = new TimelineMax();
//            var partialLayout = (rowToUpdate > -1);
//
//            var height = 0;
//            var col    = 0;
//            var row    = 0;
//            var time   = 0.35;
//
//            $(".tile").each(function(index, element) {
//
//                var tile    = this.tile;
//                var oldRow  = tile.row;
//                var oldCol  = tile.col;
//                var newTile = tile.newTile;
//
//                // PARTIAL LAYOUT: This condition can only occur while a tile is being
//                // dragged. The purpose of this is to only swap positions within a row,
//                // which will prevent a tile from jumping to another row if a space
//                // is available. Without this, a large tile in column 0 may appear
//                // to be stuck if hit by a smaller tile, and if there is space in the
//                // row above for the smaller tile. When the user stops dragging the
//                // tile, a full layout update will happen, allowing tiles to move to
//                // available spaces in rows above them.
//                if (partialLayout) {
//                    row = tile.row;
//                    if (tile.row !== rowToUpdate) return;
//                }
//
//                // Update trackers when colCount is exceeded
//                if (col + tile.colspan > colCount) {
//                    col = 0; row++;
//                }
//
//                $.extend(tile, {
//                    col    : col,
//                    row    : row,
//                    index  : index,
//                    x      : col * gutterStep + (col * colSize),
//                    y      : row * gutterStep + (row * rowSize),
//                    width  : tile.colspan * colSize + ((tile.colspan - 1) * gutterStep),
//                    height : tile.rowspan * rowSize
//                });
//
//                col += tile.colspan;
//
//                // If the tile being dragged is in bounds, set a new
//                // last index in case it goes out of bounds
//                if (tile.isDragging && tile.inBounds) {
//                    tile.lastIndex = index;
//                }
//
//                if (newTile) {
//
//                    // Clear the new tile flag
//                    tile.newTile = false;
//
//                    var from = {
//                        autoAlpha : 0,
//                        boxShadow : shadow1,
//                        height    : tile.height,
//                        scale     : 0,
//                        width     : tile.width
//                    };
//
//                    var to = {
//                        autoAlpha : 1,
//                        scale     : 1,
//                        zIndex    : zIndex
//                    }
//
//                    timeline.fromTo(element, time, from, to, "reflow");
//                }
//
//                // Don't animate the tile that is being dragged and
//                // only animate the tiles that have changes
//                if (!tile.isDragging && (oldRow !== tile.row || oldCol !== tile.col)) {
//
//                    var duration = newTile ? 0 : time;
//
//                    // Boost the z-index for tiles that will travel over
//                    // another tile due to a row change
//                    if (oldRow !== tile.row) {
//                        timeline.set(element, { zIndex: ++zIndex }, "reflow");
//                    }
//
//                    timeline.to(element, duration, {
//                        x : tile.x,
//                        y : tile.y,
//                        onComplete : function() { tile.positioned = true; },
//                        onStart    : function() { tile.positioned = false; }
//                    }, "reflow");
//                }
//            });
//
//            // If the row count has changed, change the height of the container
//            if (row !== rowCount) {
//                rowCount = row;
//                height   = rowCount * gutterStep + (++row * rowSize);
//                timeline.to($list, 0.2, { height: height }, "reflow");
//            }
//        }

    }
]);

'use strict';

/**
 *  @ngdoc module
 *  @name pbshop.components.select
 */

/*
 [Process Step]

 Check Requirements
 Process payment
 */

/**************************************************************

 ### TODO ###
 **DOCUMENTATION AND DEMOS**

 -[ ] ng-modle with child mdOptions (basic)
 -[ ] ng-modle="foo" ng-model-options="{targetBy: ''}"

 **************************************************************/

angular.module('the-clean')

	.directive('tcOrder',OrderDirective)
	.directive('tcOrderHeader', OrderHeader)
	.directive('tcGetRequires', GetRequires)
	.provider('$tcOrder', SelectProvider);


function OrderDirective($tcOrder, $interpolate, $compile, $parse, $mdToast) {
	return {
		restrict: 'E',
        scope: {
            userInfo: '=userInfo'
        },
		templateUrl: 'modules/the-clean/directives/template/tc-order-ui-tpl.html',
		require: ['tcOrder'],
		compile: compile,
		controller: 'TheCleanCrudsController' //function(){}
	};

	function compile(element, attr){
		console.log(element);
		var labelEl=element.find('tc-order-label').remove();

		return function postLink(scope, element, attr, ctrls){

			scope.orderDate = moment()._d;
			scope.deliberyDate = moment()._d;
			scope.address = 'Not Yet';
			scope.numOrder = 1;
			scope.detailInfo = "빠른베송 부탁 드립니다.";
			scope.price = scope.numOrder * 900;

			scope.getTotal = function(){
				scope.price = scope.numOrder * 900;
			}

			var toastPosition = {
				bottom: true,
				top: false,
				left: false,
				right: true
			};
			var getToastPosition = function() {
				return Object.keys(toastPosition)
					.filter(function(pos) { return toastPosition[pos]; })
					.join(' ');
			};

			scope.createToast = function(){
				$mdToast.show({
					controller: function($scope, $mdToast) {
						$scope.closeToast = function() {
							$mdToast.hide();
						};
					},
					template: '<md-toast> <span flex>Submitted</span> <md-button ng-click="closeToast()">Close </md-button> </md-toast>',
					hideDelay: 6000,
					position: getToastPosition()
				});
			}
		}
	}

    function OrderDirectiveController($scope){
        console.log($scope.authentication);
    }
}
OrderDirective.$inject = ["$tcOrder", "$interpolate", "$compile", "$parse", "$mdToast"];

//SlideShow
function OrderHeader($mdTheming){
	return {
		restrict: 'E',
		link: function($scope, $element, $attr) {
			var progressBar = '<div id="progressBar"></div>';
			$element.append(progressBar);
			var images = $element.find('img');
			var tl = new TimelineMax({
				onReverseComplete:reverseRepeat,
				onReverseCompleteParams:['{self}'],
				onComplete:complete,
				onCompleteParams:['{self}']
			});
			function reverseRepeat(tl){
				tl.reverse(0);
			}
			function complete(tl){
				tl.restart();
				console.log('Complete');
			}

			function prepNext(timeline, slide){
				TweenMax.set(slide, {display:'none'});
			}
			var time = 3.2;
			var init = TweenMax.set(images, {display:"none"});
			var a1 = TweenMax.to(images[0], time,{autoAlpha:0, display:'block'});
			var a2 = TweenMax.to(images[1], time,{autoAlpha:0, display:'block'});
			var a3 = TweenMax.to(images[2], time,{autoAlpha:0, display:'block'});

			var slideTl1 = new TimelineMax({
				onComplete: prepNext,
				onCompleteParams: ["{self}", images[0]]
			});
			slideTl1
				.add(a1)
				.from($('#progressBar'), slideTl1.duration(), {scaleX:0, transformOrigin:"0px 0px", ease:Linear.easeNone}, 0);

			var slideTl2 = new TimelineMax({
				onComplete: prepNext,
				onCompleteParams: ["{self}", images[1]]
			});
			slideTl2
				.add(a2)
				.from($('#progressBar'), slideTl2.duration(), {scaleX:0, transformOrigin:"0px 0px", ease:Linear.easeNone}, 0);

			var slideTl3 = new TimelineMax({
				onComplete: prepNext,
				onCompleteParams: ["{self}", images[2]]
			});
			slideTl3
				.add(a3)
				.from($('#progressBar'), slideTl3.duration(), {scaleX:0, transformOrigin:"0px 0px", ease:Linear.easeNone}, 0);

			tl.set(images, {display:"none"}).add(slideTl1).add(slideTl2).add(slideTl3).play();
			$mdTheming($element);
		}
	};
}
OrderHeader.$inject = ["$mdTheming"];

function GetRequires($parse){
	return{
		restrict: 'E',
		require:['tcGetRequires', '?ngModel'],
		controller: GetRequiresController,
		link:{ pre: preLink }
	};

	function SelectMenuController($scope, $attrs, $element) {
		var self = this;
		self.isMultiple = angular.isDefined($attrs.multiple);
		// selected is an object with keys matching all of the selected options' hashed values
		self.selected = {};
		// options is an object with keys matching every option's hash value,
		// and values matching every option's controller.
		self.options = {};
	}

	function preLink(scope, element, attr, ctrls){
		var selectCtrl = ctrls[0];
		var ngModel = ctrls[1];

		element.on('click');
		element.on('keypress', keyListener);
		if (ngModel) selectCtrl.init(ngModel);
		configureAria();

		function configureAria() {
			element.attr({
				'id': 'select_menu_' + $mdUtil.nextUid(),
				'role': 'listbox',
				'aria-multiselectable': (selectCtrl.isMultiple ? 'true' : 'false')
			});
		}

		function keyListener(e) {
			if (e.keyCode == 13 || e.keyCode == 32) {
				clickListener(e);
			}
		}

		function clickListener(ev) {
			var option = $mdUtil.getClosest(ev.target, 'md-option');
			var optionCtrl = option && angular.element(option).data('$mdOptionController');
			if (!option || !optionCtrl) return;

			var optionHashKey = selectCtrl.hashGetter(optionCtrl.value);
			var isSelected = angular.isDefined(selectCtrl.selected[optionHashKey]);

			scope.$apply(function() {
				if (selectCtrl.isMultiple) {
					if (isSelected) {
						selectCtrl.deselect(optionHashKey);
					} else {
						selectCtrl.select(optionHashKey, optionCtrl.value);
					}
				} else {
					if (!isSelected) {
						selectCtrl.deselect( Object.keys(selectCtrl.selected)[0] );
						selectCtrl.select( optionHashKey, optionCtrl.value );
					}
				}
				selectCtrl.refreshViewValue();
			});
		}
	}
}
GetRequires.$inject = ["$parse"];

function SelectProvider($$interimElementProvider) {
	selectDefaultOptions.$inject = ["$tcOrder", "$mdConstant", "$$rAF", "$mdUtil", "$mdTheming", "$timeout"];
	return $$interimElementProvider('$tcOrder')
		.setDefaults({
			methods: ['target'],
			options: selectDefaultOptions
		});

	/* @ngInject */
	function selectDefaultOptions($tcOrder, $mdConstant, $$rAF, $mdUtil, $mdTheming, $timeout) {
		return {
			parent: 'body',
			onShow: onShow,
			onRemove: onRemove,
			hasBackdrop: true,
			disableParentScroll: $mdUtil.floatingScrollbars(),
			themable: true
		};

		function onShow(scope, element, opts) {
			if (!opts.target) {
				throw new Error('$tcOrder.show() expected a target element in options.target but got ' +
				'"' + opts.target + '"!');
			}

			angular.extend(opts, {
				isRemoved: false,
				target: angular.element(opts.target), //make sure it's not a naked dom node
				parent: angular.element(opts.parent),
				selectEl: element.find('md-select-menu'),
				contentEl: element.find('md-content'),
				backdrop: opts.hasBackdrop && angular.element('<md-backdrop class="md-select-backdrop">')
			});

			configureAria();

			element.removeClass('md-leave');

			var optionNodes = opts.selectEl[0].getElementsByTagName('md-option');

			if (opts.loadingAsync && opts.loadingAsync.then) {
				opts.loadingAsync.then(function() {
					scope.$$loadingAsyncDone = true;
					// Give ourselves two frames for the progress loader to clear out.
					$$rAF(function() {
						$$rAF(function() {
							// Don't go forward if the select has been removed in this time...
							if (opts.isRemoved) return;
							animateSelect(scope, element, opts);
						});
					});
				});
			}

			if (opts.disableParentScroll) {
				opts.disableTarget = opts.parent.find('md-content');
				if (!opts.disableTarget.length) opts.disableTarget = opts.parent;
				opts.lastOverflow = opts.disableTarget.css('overflow');
				opts.disableTarget.css('overflow', 'hidden');
			}
			// Only activate click listeners after a short time to stop accidental double taps/clicks
			// from clicking the wrong item
			$timeout(activateInteraction, 75, false);

			if (opts.backdrop) {
				$mdTheming.inherit(opts.backdrop, opts.parent);
				opts.parent.append(opts.backdrop);
			}
			opts.parent.append(element);

			// Give the select a frame to 'initialize' in the DOM,
			// so we can read its height/width/position
			$$rAF(function() {
				$$rAF(function() {
					if (opts.isRemoved) return;
					animateSelect(scope, element, opts);
				});
			});

			return $mdUtil.transitionEndPromise(opts.selectEl, {timeout: 350});

			function configureAria() {
				opts.selectEl.attr('aria-labelledby', opts.target.attr('id'));
				opts.target.attr('aria-owns', opts.selectEl.attr('id'));
				opts.target.attr('aria-expanded', 'true');
			}

			function activateInteraction() {
				if (opts.isRemoved) return;
				var selectCtrl = opts.selectEl.controller('mdSelectMenu') || {};
				element.addClass('md-clickable');

				opts.backdrop && opts.backdrop.on('click', function(e) {
					e.preventDefault();
					e.stopPropagation();
					opts.restoreFocus = false;
					scope.$apply($tcOrder.cancel);
				});

				// Escape to close
				opts.selectEl.on('keydown', function(ev) {
					switch (ev.keyCode) {
						case $mdConstant.KEY_CODE.SPACE:
						case $mdConstant.KEY_CODE.ENTER:
							var option = $mdUtil.getClosest(ev.target, 'md-option');
							if (option) {
								opts.selectEl.triggerHandler({
									type: 'click',
									target: option
								});
								ev.preventDefault();
							}
							break;
						case $mdConstant.KEY_CODE.TAB:
						case $mdConstant.KEY_CODE.ESCAPE:
							ev.preventDefault();
							opts.restoreFocus = true;
							scope.$apply($tcOrder.cancel);
					}
				});

				// Cycling of options, and closing on enter
				opts.selectEl.on('keydown', function(ev) {
					switch (ev.keyCode) {
						case $mdConstant.KEY_CODE.UP_ARROW: return focusPrevOption();
						case $mdConstant.KEY_CODE.DOWN_ARROW: return focusNextOption();
					}
				});

				function focusOption(direction) {
					var optionsArray = nodesToArray(optionNodes);
					var index = optionsArray.indexOf(opts.focusedNode);
					if (index === -1) {
						// We lost the previously focused element, reset to first option
						index = 0;
					} else if (direction === 'next' && index < optionsArray.length - 1) {
						index++;
					} else if (direction === 'prev' && index > 0) {
						index--;
					}
					var newOption = opts.focusedNode = optionsArray[index];
					newOption && newOption.focus();
				}
				function focusNextOption() {
					focusOption('next');
				}
				function focusPrevOption() {
					focusOption('prev');
				}

				if (!selectCtrl.isMultiple) {
					opts.selectEl.on('click', closeMenu);
					opts.selectEl.on('keydown', function(e) {
						if (e.keyCode == 32 || e.keyCode == 13) {
							closeMenu();
						}
					});
				}
				function closeMenu() {
					opts.restoreFocus = true;
					scope.$evalAsync(function() {
						$tcOrder.hide(selectCtrl.ngModel.$viewValue);
					});
				}
			}
		}

		function onRemove(scope, element, opts) {
			opts.isRemoved = true;
			element.addClass('md-leave')
				.removeClass('md-clickable');
			opts.target.attr('aria-expanded', 'false');

			if (opts.disableParentScroll && $mdUtil.floatingScrollbars()) {
				opts.disableTarget.css('overflow', opts.lastOverflow);
				delete opts.lastOverflow;
				delete opts.disableTarget;
			}

			var mdSelect = opts.selectEl.controller('mdSelect');
			if (mdSelect) {
				mdSelect.setLabelText(opts.selectEl.controller('mdSelectMenu').selectedLabels());
			}

			return $mdUtil.transitionEndPromise(element, { timeout: 350 }).then(function() {
				element.removeClass('md-active');
				opts.parent[0].removeChild(element[0]); // use browser to avoid $destroy event
				opts.backdrop && opts.backdrop.remove();
				if (opts.restoreFocus) opts.target.focus();
			});
		}

		function animateSelect(scope, element, opts) {
			var containerNode = element[0],
				targetNode = opts.target[0],
				parentNode = opts.parent[0],
				selectNode = opts.selectEl[0],
				contentNode = opts.contentEl[0],
				parentRect = parentNode.getBoundingClientRect(),
				targetRect = $mdUtil.clientRect(targetNode, parentNode),
				shouldOpenAroundTarget = false,
				bounds = {
					left: parentNode.scrollLeft + SELECT_EDGE_MARGIN,
					top: parentNode.scrollTop + SELECT_EDGE_MARGIN,
					bottom: parentRect.height + parentNode.scrollTop - SELECT_EDGE_MARGIN,
					right: parentRect.width - SELECT_EDGE_MARGIN
				},
				spaceAvailable = {
					top: targetRect.top - bounds.top,
					left: targetRect.left - bounds.left,
					right: bounds.right - (targetRect.left + targetRect.width),
					bottom: bounds.bottom - (targetRect.top + targetRect.height)
				},
				maxWidth = parentRect.width - SELECT_EDGE_MARGIN * 2,
				isScrollable = contentNode.scrollHeight > contentNode.offsetHeight,
				selectedNode = selectNode.querySelector('md-option[selected]'),
				optionNodes = selectNode.getElementsByTagName('md-option'),
				optgroupNodes = selectNode.getElementsByTagName('md-optgroup');


			var centeredNode;
			// If a selected node, center around that
			if (selectedNode) {
				centeredNode = selectedNode;
				// If there are option groups, center around the first option group
			} else if (optgroupNodes.length) {
				centeredNode = optgroupNodes[0];
				// Otherwise, center around the first optionNode
			} else if (optionNodes.length){
				centeredNode = optionNodes[0];
				// In case there are no options, center on whatever's in there... (eg progress indicator)
			} else {
				centeredNode = contentNode.firstElementChild || contentNode;
			}

			if (contentNode.offsetWidth > maxWidth) {
				contentNode.style['max-width'] = maxWidth + 'px';
			}
			if (shouldOpenAroundTarget) {
				contentNode.style['min-width'] = targetRect.width + 'px';
			}

			// Remove padding before we compute the position of the menu
			if (isScrollable) {
				selectNode.classList.add('md-overflow');
			}

			// Get the selectMenuRect *after* max-width is possibly set above
			var selectMenuRect = selectNode.getBoundingClientRect();
			var centeredRect = getOffsetRect(centeredNode);

			if (centeredNode) {
				var centeredStyle = window.getComputedStyle(centeredNode);
				centeredRect.paddingLeft = parseInt(centeredStyle.paddingLeft, 10) || 0;
				centeredRect.paddingRight = parseInt(centeredStyle.paddingRight, 10) || 0;
			}

			var focusedNode = centeredNode;
			if ((focusedNode.tagName || '').toUpperCase() === 'MD-OPTGROUP') {
				focusedNode = optionNodes[0] || contentNode.firstElementChild || contentNode;
			}
			if (focusedNode) {
				opts.focusedNode = focusedNode;
				focusedNode.focus();
			}

			if (isScrollable) {
				var scrollBuffer = contentNode.offsetHeight / 2;
				contentNode.scrollTop = centeredRect.top + centeredRect.height / 2 - scrollBuffer;

				if (spaceAvailable.top < scrollBuffer) {
					contentNode.scrollTop = Math.min(
						centeredRect.top,
						contentNode.scrollTop + scrollBuffer - spaceAvailable.top
					);
				} else if (spaceAvailable.bottom < scrollBuffer) {
					contentNode.scrollTop = Math.max(
						centeredRect.top + centeredRect.height - selectMenuRect.height,
						contentNode.scrollTop - scrollBuffer + spaceAvailable.bottom
					);
				}
			}

			var left, top, transformOrigin;
			if (shouldOpenAroundTarget) {
				left = targetRect.left;
				top = targetRect.top + targetRect.height;
				transformOrigin = '50% 0';
				if (top + selectMenuRect.height > bounds.bottom) {
					top = targetRect.top - selectMenuRect.height;
					transformOrigin = '50% 100%';
				}
			} else {
				left = targetRect.left + centeredRect.left - centeredRect.paddingLeft;
				top = targetRect.top + targetRect.height / 2 - centeredRect.height / 2 -
				centeredRect.top + contentNode.scrollTop;

				transformOrigin = (centeredRect.left + targetRect.width / 2) + 'px ' +
				(centeredRect.top + centeredRect.height / 2 - contentNode.scrollTop) + 'px 0px';

				containerNode.style.minWidth = targetRect.width + centeredRect.paddingLeft +
				centeredRect.paddingRight + 'px';
			}

			// Keep left and top within the window
			var containerRect = containerNode.getBoundingClientRect();
			containerNode.style.left = clamp(bounds.left, left, bounds.right - containerRect.width) + 'px';
			containerNode.style.top = clamp(bounds.top, top, bounds.bottom - containerRect.height) + 'px';
			selectNode.style[$mdConstant.CSS.TRANSFORM_ORIGIN] = transformOrigin;

			selectNode.style[$mdConstant.CSS.TRANSFORM] = 'scale(' +
			Math.min(targetRect.width / selectMenuRect.width, 1.0) + ',' +
			Math.min(targetRect.height / selectMenuRect.height, 1.0) +
			')';

			$$rAF(function() {
				element.addClass('md-active');
				selectNode.style[$mdConstant.CSS.TRANSFORM] = '';
			});
		}

	}

	function clamp(min, n, max) {
		return Math.min(max, Math.max(n, min));
	}

	function getOffsetRect(node) {
		return node ? {
			left: node.offsetLeft,
			top: node.offsetTop,
			width: node.offsetWidth,
			height: node.offsetHeight
		} : { left: 0, top: 0, width: 0, height: 0 };
	}
}
SelectProvider.$inject = ["$$interimElementProvider"];

'use strict';

// Tinymce module config
angular.module('tinymce').run(['Menus',
	function(Menus) {
		// Config logic
		// ...
	}
]).value('uiTinymceConfig', {
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
    });

'use strict';

angular.module('tinymce').directive('uiTinymce', ['uiTinymceConfig', function(uiTinymceConfig) {
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

//Setting up route
angular.module('tj-hair').config(['$stateProvider',
	function($stateProvider) {
		// Tj hair state routing
		$stateProvider.
		state('tj-main', {
			url: '/tj-main',
			templateUrl: 'modules/tj-hair/views/tj-main.client.view.html'
		});
	}
]);
'use strict';

angular.module('tj-hair').controller('TjMainController', ['$scope','$timeout',
	function($scope, $timeout) {
		// Tj main controller logic
		// ...

		$scope.scrollTo = function (target){
			TweenLite.to(window, 1.5, {scrollTo:{y:$('.'+target).position().top, ease:Power2.easeInOut}});
		}
		$scope.map = { center: { latitude: 44.970697, longitude: -93.2614785 }, zoom:11 };
		$scope.marker = {
			id: 0,
			coords: {
				latitude: 45.007025,
				longitude: -93.3974526
			},
			options: { draggable: false },
			events: {
				dragend: function (marker, eventName, args) {
					$log.log('marker dragend');
					var lat = marker.getPosition().lat();
					var lon = marker.getPosition().lng();
					$log.log(lat);
					$log.log(lon);

					$scope.marker.options = {
						draggable: true,
						labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
						labelAnchor: "100 0",
						labelClass: "marker-labels"
					};
				}
			}
		};

		// add Avatar
		$scope.addSVG = function(parentID, position){
			var parentSvg = Snap('#'+parentID);
			var pin = Snap.load("modules/tj-hair/img/people1.svg", function(data){
				var group = data;
				/*
				var t = new Snap.Matrix();
				t.translate(position.x, position.y);
				t.scale(1);
				group.transform(t);
				group.attr({id:position.id, cursor: 'pointer'});

				var move = function(dx,dy) {
					this.attr({
						transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
					});
				}
				var start = function() {
					this.data('origTransform', this.transform().local );
				}
				var stop = function() {
					console.log('finished dragging');
					console.log(this);
				}
				 */
				//group.drag(move, start, stop);
				//parentSvg.append(group);
				//$scope.addedObject.push(group.node.id);
				$scope.$apply();
			});
		}

		var backSvg = Snap('#frontLogo');
		Snap.load("modules/tj-hair/img/tjB.svg", function(data) {
			backSvg.append(data);
			backSvg.select('svg').attr({
				class:'svgTestClass'
			});
			var circlePinPosition = {x:'443' , y:'299', id:'circlePin1'};
			$scope.addSVG('backGroundSvg', circlePinPosition);
			$timeout(function() {

				//var svgE = backSvg.select('svg');

				TweenLite.to('#p1 #whole', 2, {opacity:1, scale:0.7, x:50, y:50})
				/*
				TweenMax.to('#backGroundSvg', 55, {scrollTo: {y: 0, x: 2000}, ease: Power2.easeInOut});

				var circlePinPosition = {x:98 , y:350, id:'circlePin1'};
				var pinPosition = {x:98 , y:350, id:'pin1'};
				$scope.addCirclePin('backGroundSvg', circlePinPosition);
				$scope.addPin('backGroundSvg', pinPosition);

				var path = Snap('#bikePath');
				var bike = Snap('#bike');
				var len = path.getTotalLength();

				Snap.animate(0, len, function( value ) {
					var movePoint = path.getPointAtLength( value );
					var feetTrans = 't' + parseInt(movePoint.x) + ',' + parseInt( movePoint.y-365) + 'r' + (movePoint.alpha-180);
					//feetTrans2 = 't' + parseInt(movePoint.x - 270) + ',' + parseInt( movePoint.y - 1770) + 'r' + (movePoint.alpha - 90);
					bike.transform(feetTrans);
					//feetG.transform(feetTrans2);
					//console.log(movePoint.alpha);
				}, 55000,mina.easeinout);

				$scope.selectN = false;
				TweenMax.staggerFrom(".frontNavBtn", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
				*/
			},2000);
		});

		var cutSvg = Snap('#cut');
		Snap.load("modules/tj-hair/img/scissors.svg", function(data){
			cutSvg.append(data);
		});
		var permSvg = Snap('#perm');
		Snap.load("modules/tj-hair/img/dryer.svg", function(data){
			permSvg.append(data);
		});
		var colorSvg = Snap('#color');
		Snap.load("modules/tj-hair/img/dye1.svg", function(data){
			colorSvg.append(data);
		});
		var treatmentSvg = Snap("#treatment");
		Snap.load("modules/tj-hair/img/dryer.svg", function(data){
			treatmentSvg.append(data);
		});

		$scope.todos = [
			{
				face : 'http://s3-media3.fl.yelpcdn.com/photo/t2HTD5D02AC1snyOW3V04g/ms.jpg',
				what: 'Brunch this weekend?',
				who: 'CK T',
				when: '8/5/2014',
				where: 'Saint Paul, MN',
				notes: "Before you walk in, you'll notice a donut shop right next door which gives you this awesome sweet smell and when you do step into this salon, you'll notice a charming boutique style decor. The owner is incredibly nice. She is Korean and understands basic English but anything more than that you'll need to substantiate with some pictures. I suggest you bring a previous selfie of the haircut you want. The owner does an excellent job in executing the style of cut. I went in for a simple guy's cut. $20 is what it costed me. I was in and out pretty fast. The owner seemed fully booked throughout the day and she prefers appointments."
			},
			{
				face : 'http://s3-media4.fl.yelpcdn.com/photo/0Ph6jDcneyvz0b_gbe3msA/60s.jpg',
				what: 'Brunch this weekend?',
				who: 'Hannah M.',
				when: '7/28/2014',
				where: 'Minneapolis, MN',
				notes: "TJ is a woman that will stay in your life forever!! It's all run by her. My father and brother go to her as their regular barber. I don't go because she doesn't speak the best English and I need specific things done with my hair. Good for girls that just want highlights and a cut. TJ will help you decide what color fits you best and she will put great products in your hair and becomes your best friend by the end of your hair appointment! Wonderful woman. And her place is right next to a donut shop so you smell that your whole experience! How wonderful is that?"
			},
			{
				face : 'http://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/20983a63ea50/assets/img/default_avatars/user_60_square.png',
				what: 'Brunch this weekend?',
				who: 'Jean Y.',
				when: '6/11/2014',
				where: 'Minneapolis, MN',
				notes: "This is a wonderful salon.  Miss TJ takes so much thought into making you feel great.  I've been coming here for a year now and I've had haircuts, chemical treatments and trims and she always does a great job. My fiance also started going here and has had haircuts and even a perm! She did an amazing job and the perm gave his thin limp hair body and looked like his natural hair."
			},
			{
				face : 'http://s3-media3.fl.yelpcdn.com/photo/7RzyAevLdYNCaLNLXHcTHQ/60s.jpg',
				what: 'Brunch this weekend?',
				who: 'Kenneth L.',
				when: '8/10/2012',
				where: 'Eden Prairie, MN',
				notes: "As mentioned by others, TJ is a very nice Korean lady who does this out of her love for giving people the hair cut/style that they want and suits their face. She is very patient and puts alot of effort in to details. As an Asian, I always feel that western cutting and styles don't suit me (and are pricey) so TJ was exactly who I was looking for since moving here! Spend some time to explain in easier english and TJ will listen, and you won't be disappointed. Or you can bring a picture in of what you want. As with any new person cutting hair, it may take a time for her to get used to what you want/ looking for if you cannot describe it or bring a photo. Prices i thought were very reasonable, but then I haven't really compared with others. Call ahead to make sure they have time for you though as she can get busy! The decor inside is like a little cottage, very homely."
			},
			{
				face : 'http://s3-media1.fl.yelpcdn.com/photo/1ykPjTGWEMTAictqq8HqWA/60s.jpg',
				what: 'Brunch this weekend?',
				who: 'Mon P.',
				when: '7/24/2011',
				where: 'Minneapolis, MN',
				notes: "One word .. AMAZING! TJ's Hair Studio is small hair salon owned and run by a very nice Korean lady named TJ. I know this place from my co-worker that recently got a hair cut here. I dont have one regular hair salon that I will go to get my hair cut or whatever hair-related cos I found that non of the American hair salons that Ive been to can handle my hair. My hair is nothing special, but it's very fine and very thick, it can be a challenge for American hair stylists. After talking to TJ, she told me that she learnt how to cut hair in Korean before moving to the States, and then she also went to the beauty or hair school here in Twin Cities, so she knows how to handle both Asian and Caucasian hair styles. I didnt really have a clear cut of what I wanted. I just wanted a shorter hair cos its been an awfully hot summer. I browsed through the hair mag that she had and pointed at one style and told her i wanted something similar to that. She used the style that I told her as a guide but she also applied her own idea and her own style to get the final hair cut that would suit and compliment the shape of my face. What's so great about TJ? She was very patient and incredibly detailed. She really took her time to get everything right. Lucky for cos she didnt have any customers waiting that day that I went. After a little bit over an hour of cutting, shampooing, and hair styling, she said .. Im sorry the price has increased. I started to get worried a little cos I had no idea how much it would cost. Then she said .. for haircut and shampoo .. it's 26 bucks. Umm .. WHAT??? That much work for only 26 bucks???  What more can I say about TJ. She's absolutely amazing."
			},
			{
				face : 'http://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/20983a63ea50/assets/img/default_avatars/user_60_square.png',
				what: 'Brunch this weekend?',
				who: 'Eun H.',
				when: '4/25/2013',
				where: 'Minneapolis, MN',
				notes: "Tj is a really sweet women, though I had 2 bad experiences with my hair. She over cut my hair even though I told her I wanted it long and thinned it out too much. I went to get my perm fixed and now my hair is falling out. I have a chunk in the front where my hair fell out."
			},
			{
				face : 'http://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/20983a63ea50/assets/img/default_avatars/user_60_square.png',
				what: 'Brunch this weekend?',
				who: 'HJ O.',
				when: '6/27/2011',
				where: 'Minneapolis, MN',
				notes: "TJ was very careful when listening to what I wanted and heard exactly what I was trying to say, even though I was vague, marbles in the mouth and said little that was intelligible.  I just don't speak hair.  As she worked, I couldn't believe that she cut the right amount of the length, overall, and gave shape to my coarse, wavy, dried out and uncontrollable hair.  I was in the chair for 30 minutes and paid $18 plus tip.  What?!?! Yet TJ happened to be busy today.  I had called ahead for an appointment but let her take a regular customer who walked in right before I did.  Another regular customer walked in while I was waiting.  She had to turn him away.  And then, another customer came in.  This customer had an appointment, but TJ seemed to have mixed up her calendar and was taken by surprise.  TJ took the customer after I was done, but she had to wait almost 15 minutes for her turn. TJ, the cut and the price were great, but this spot can be disorganized and messy.  It isn't shiny and no wine will be served.  TJ does have non-Asian customers (the two regulars), but the three Asians (including myself) were there for TJ's skills with Asian hair.  One said that she drives 45 minutes from home to the salon.  Bring cash."
			},
			{
				face : 'http://s3-media1.fl.yelpcdn.com/photo/RJuD3SjXk6WJBK9F4HJ5Nw/60s.jpg',
				what: 'Brunch this weekend?',
				who: 'Mike T.',
				when: '6/28/2010',
				where: 'Dassel, MN     ',
				notes: "Great service. Great haircut. I was looking for a traditional tapered male haircut using clippers. TJ is very pleasant, thorough and diligent. You can tell she really aims to please."
			},
		]
	}
]);

'use strict';

//Setting up route
angular.module('top-hair').config(['$stateProvider',
	function($stateProvider) {
		// Top hair state routing
		$stateProvider.
		state('top-hair-home', {
			url: '/top-hair-home',
			templateUrl: 'modules/top-hair/views/top-hair-home.client.view.html'
		});
	}
]);
'use strict';

angular.module('top-hair').controller('TopHairHomeController', ['$scope','$log',
	function($scope, $log) {
        var productInfo = "Not Ready"
        var tabs = [
            { title: 'All', content: productInfo },
            { title: 'WIG', content: productInfo},
            { title: 'LACE WIG', content: productInfo},
            { title: 'HALF WIG', content: productInfo},
            { title: 'REMY HAIR', content: productInfo},
            { title: 'WEAVES', content: productInfo},
            { title: 'BRAIDS', content: productInfo},
            { title: 'HAIR PIECES', content: productInfo},
            { title: 'HAIR CARE', content: productInfo},
            { title: 'TOOLS', content: productInfo},
            { title: 'MAKE UP', content: productInfo},
            { title: 'ACCESSORIES', content: productInfo}
        ];
        $scope.tabs = tabs;
        $scope.selectedIndex = 2;
        $scope.$watch('selectedIndex', function(current, old){
            if ( old && (old != current)) $log.debug('Goodbye ' + tabs[old].title + '!');
            if ( current )                $log.debug('Hello ' + tabs[current].title + '!');
        });
        $scope.addTab = function (title, view) {
            view = view || title + " Content View";
            tabs.push({ title: title, content: view, disabled: false});
        };
        $scope.removeTab = function (tab) {
            for (var j = 0; j < tabs.length; j++) {
                if (tab.title == tabs[j].title) {
                    $scope.tabs.splice(j, 1);
                    break;
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
			url: '/urimium',
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

angular.module('user-interface').controller('ListingProductController', ['$scope', '$log',
	function($scope, $log) {

        //product has been removed

        
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
'use strict';

angular.module('util').directive('prism', [
	function() {
		return {
            restrict: 'A',
			link: function postLink(scope, element, attrs) {
				element.ready(function(){
                   Prism.highlightElement(element[0]);
                });
			}
		};
	}
]);
