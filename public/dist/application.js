'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'mean';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils', 'ngMaterial', 'ng-context-menu', 'uiGmapgoogle-maps'];

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

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('banners');
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

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('g-drive');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('img-utility');

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
ApplicationConfiguration.registerModule('sdsumap');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('seller-interface');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('spec-view');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('test123');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('tj-hair');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('user-interface');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('utility');

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

// Configuring the Articles module
angular.module('banners').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Banners', 'banners', 'dropdown', '/banners(/create)?');
		Menus.addSubMenuItem('topbar', 'banners', 'List Banners', 'banners');
		Menus.addSubMenuItem('topbar', 'banners', 'New Banner', 'banners/create');
	}
]);
'use strict';

//Setting up route
angular.module('banners').config(['$stateProvider',
	function($stateProvider) {
		// Banners state routing
		$stateProvider.
		state('listBanners', {
			url: '/banners',
			templateUrl: 'modules/banners/views/list-banners.client.view.html'
		}).
		state('createBanner', {
			url: '/banners/create',
			templateUrl: 'modules/banners/views/create-banner.client.view.html'
		}).
		state('viewBanner', {
			url: '/banners/:bannerId',
			templateUrl: 'modules/banners/views/view-banner.client.view.html'
		}).
		state('editBanner', {
			url: '/banners/:bannerId/edit',
			templateUrl: 'modules/banners/views/edit-banner.client.view.html'
		});
	}
]);
'use strict';

// Banners controller
angular.module('banners').controller('BannersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Banners', 'Products', 'ProductsBanner',
	function($scope, $stateParams, $location, Authentication, Banners, Products, ProductsBanner) {
		$scope.authentication = Authentication;

		// Create new Banner
		$scope.create = function() {
			// Create new Banner object
			var banner = new Banners ({
				name: this.name,
                bannerTag: this.bannerTag
			});

			// Redirect after save
			banner.$save(function(response) {
				$location.path('banners/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			// Clear form fields
			this.name = '';
            this.bannerTag = '';
		};

		// Remove existing Banner
		$scope.remove = function( banner ) {
			if ( banner ) { banner.$remove();

				for (var i in $scope.banners ) {
					if ($scope.banners [i] === banner ) {
						$scope.banners.splice(i, 1);
					}
				}
			} else {
				$scope.banner.$remove(function() {
					$location.path('banners');
				});
			}
		};

		// Update existing Banner
		$scope.update = function() {
			var banner = $scope.banner ;

			banner.$update(function() {
				$location.path('banners/' + banner._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Banners
		$scope.find = function() {
			$scope.banners = Banners.query();
		};

		// Find existing Banner
		$scope.findOne = function() {
			$scope.banner = Banners.get({ 
				bannerId: $stateParams.bannerId
			});
		};

        $scope.findProductOne = function(){
            $scope.banner = Banners.get({
                bannerId: $stateParams.bannerId
            });

            $scope.products= Products.query({
                bannerId: $stateParams.bannerId
            });
        };

        $scope.toCreateProduct = function(){
            $location.path('products/create/'+$stateParams.bannerId);
        };

        // should be changed
        $scope.toEditPoduct = function(){
            $location.path('products/list/'+$stateParams.bannerId);
        };

        $scope.findProductUnderBanner = function() {
            console.log('banner id is '+ $stateParams.bannerId);
            $scope.products = ProductsBanner.query({},{bannerId:$stateParams.bannerId});
        }



	}
]);
'use strict';

//Banners service used to communicate Banners REST endpoints
angular.module('banners').factory('Banners', ['$resource',
	function($resource) {
		return $resource('banners/:bannerId', {
            bannerId: '@_id'
		}, {
			update: {
				method: 'PUT'
			},
            query:  {
                method:'GET',
                isArray:true
            }
		});
	}
]);

angular.module('banners').factory('BannerByUserId', ['$resource', function($resource) {
	return $resource('banners/find/:userId', {
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

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');
		// Home state routing
		$stateProvider.
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

var CONFIG = {
	clientId: '574563539488-n0vrevgjp3606l20hfk4rqfk1dc8j3qb.apps.googleusercontent.com',
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

/*
 * Created by Kevin on 2014-10-29.
* */

'use strict';

angular.module('g-drive').factory('Googledrive', ['configGdrive',
	function(configGdrive) {
		return {
			createFolder: createFolder,
			findFolder: findFolder,
			getGoogleDriveInfo: getGoogleDriveInfo,
			setupPicker: setupPicker,
			listFolder: listFolder
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
			gapi.client.load('drive', 'v2').then(function(){
				var request = gapi.client.drive.files.list({
					q: "title contains 'URI-'",
					fields: 'items(id\,title)'
				});
				request.then(function(resp){
					//console.log('result File list');
					//console.log(resp);
					callback(resp);
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
			var callbackAfterFindFolder = function(resp){
				var folderID = resp.result.items[0].id;
				var picker = new google.picker.PickerBuilder()
					.setOAuthToken(accessToken)
					.setDeveloperKey(configGdrive.developerKey)
					.addView(new google.picker.DocsUploadView().setParent(folderID))
					.addView(new google.picker.DocsView().setParent(folderID))
					.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
					.setLocale('ko')
					//.enableFeature(google.picker.Feature.NAV_HIDDEN)
					.setCallback(callback)
					.build();
				picker.setVisible(true);
			}
			findFolder(callbackAfterFindFolder);


		}

		function listFolder(){
			gapi.client.load('drive', 'v2').then(function() {

				var request = gapi.client.drive.files.list({
					maxResults:10,
					fields: 'items(id,owners(displayName,emailAddress,isAuthenticatedUser,kind,permissionId),selfLink)'
				});
				request.then(function(resp){
					console.log('result File list');
					console.log(resp)
				});

				var request = gapi.client.drive.files.list({
					maxResults:10,
					fields: 'items(id,owners(displayName,emailAddress,isAuthenticatedUser,kind,permissionId),selfLink)'
				});
				request.then(function(resp){
					console.log('result File list');
					console.log(resp)
				});

			});
		}
	}
]);

'use strict';

angular.module('img-utility').directive(
	"lazyImg",['$window', '$document',
	function( $window, $document ) {


		// I manage all the images that are currently being
		// monitored on the page for lazy loading.
		var lazyLoader = (function() {
			// I maintain a list of images that lazy-loading
			// and have yet to be rendered.
			var images = [];

			// I define the render timer for the lazy loading
			// images to that the DOM-querying (for offsets)
			// is chunked in groups.
			var renderTimer = null;
			var renderDelay = 100;

			// I cache the window element as a jQuery reference.
			var win = $( $window );

			// I cache the document document height so that
			// we can respond to changes in the height due to
			// dynamic content.
			var doc = $document;
			var documentHeight = doc.height();
			var documentTimer = null;
			var documentDelay = 2000;

			// I determine if the window dimension events
			// (ie. resize, scroll) are currenlty being
			// monitored for changes.
			var isWatchingWindow = false;


			// ---
			// PUBLIC METHODS.
			// ---


			// I start monitoring the given image for visibility
			// and then render it when necessary.
			function addImage( image ) {

				images.push( image );

				if ( ! renderTimer ) {

					startRenderTimer();

				}

				if ( ! isWatchingWindow ) {

					startWatchingWindow();

				}

			}


			// I remove the given image from the render queue.
			function removeImage( image ) {

				// Remove the given image from the render queue.
				for ( var i = 0 ; i < images.length ; i++ ) {

					if ( images[ i ] === image ) {

						images.splice( i, 1 );
						break;

					}

				}

				// If removing the given image has cleared the
				// render queue, then we can stop monitoring
				// the window and the image queue.
				if ( ! images.length ) {

					clearRenderTimer();

					stopWatchingWindow();

				}

			}


			// ---
			// PRIVATE METHODS.
			// ---


			// I check the document height to see if it's changed.
			function checkDocumentHeight() {

				// If the render time is currently active, then
				// don't bother getting the document height -
				// it won't actually do anything.
				if ( renderTimer ) {

					return;

				}

				var currentDocumentHeight = doc.height();

				// If the height has not changed, then ignore -
				// no more images could have come into view.
				if ( currentDocumentHeight === documentHeight ) {

					return;

				}

				// Cache the new document height.
				documentHeight = currentDocumentHeight;

				startRenderTimer();

			}


			// I check the lazy-load images that have yet to
			// be rendered.
			function checkImages() {

				// Log here so we can see how often this
				// gets called during page activity.
				console.log( "Checking for visible images..." );

				var visible = [];
				var hidden = [];

				// Determine the window dimensions.
				var windowHeight = win.height();
				var scrollTop = win.scrollTop();

				// Calculate the viewport offsets.
				var topFoldOffset = scrollTop;
				var bottomFoldOffset = ( topFoldOffset + windowHeight );

				// Query the DOM for layout and seperate the
				// images into two different categories: those
				// that are now in the viewport and those that
				// still remain hidden.
				for ( var i = 0 ; i < images.length ; i++ ) {

					var image = images[ i ];

					if ( image.isVisible( topFoldOffset, bottomFoldOffset ) ) {

						visible.push( image );

					} else {

						hidden.push( image );

					}

				}

				// Update the DOM with new image source values.
				for ( var i = 0 ; i < visible.length ; i++ ) {

					visible[ i ].render();

				}

				// Keep the still-hidden images as the new
				// image queue to be monitored.
				images = hidden;

				// Clear the render timer so that it can be set
				// again in response to window changes.
				clearRenderTimer();

				// If we've rendered all the images, then stop
				// monitoring the window for changes.
				if ( ! images.length ) {

					stopWatchingWindow();

				}

			}


			// I clear the render timer so that we can easily
			// check to see if the timer is running.
			function clearRenderTimer() {

				clearTimeout( renderTimer );

				renderTimer = null;

			}


			// I start the render time, allowing more images to
			// be added to the images queue before the render
			// action is executed.
			function startRenderTimer() {

				renderTimer = setTimeout( checkImages, renderDelay );

			}


			// I start watching the window for changes in dimension.
			function startWatchingWindow() {

				isWatchingWindow = true;

				// Listen for window changes.
				win.on( "resize.bnLazySrc", windowChanged );
				win.on( "scroll.bnLazySrc", windowChanged );

				// Set up a timer to watch for document-height changes.
				documentTimer = setInterval( checkDocumentHeight, documentDelay );

			}


			// I stop watching the window for changes in dimension.
			function stopWatchingWindow() {

				isWatchingWindow = false;

				// Stop watching for window changes.
				win.off( "resize.bnLazySrc" );
				win.off( "scroll.bnLazySrc" );

				// Stop watching for document changes.
				clearInterval( documentTimer );

			}


			// I start the render time if the window changes.
			function windowChanged() {

				if ( ! renderTimer ) {

					startRenderTimer();

				}

			}


			// Return the public API.
			return({
				addImage: addImage,
				removeImage: removeImage
			});

		})();


		// ------------------------------------------ //
		// ------------------------------------------ //


		// I represent a single lazy-load image.
		function LazyImage( element ) {

			// I am the interpolated LAZY SRC attribute of
			// the image as reported by AngularJS.
			var source = null;

			// I determine if the image has already been
			// rendered (ie, that it has been exposed to the
			// viewport and the source had been loaded).
			var isRendered = false;

			// I am the cached height of the element. We are
			// going to assume that the image doesn't change
			// height over time.
			var height = null;


			// ---
			// PUBLIC METHODS.
			// ---


			// I determine if the element is above the given
			// fold of the page.
			function isVisible( topFoldOffset, bottomFoldOffset ) {

				// If the element is not visible because it
				// is hidden, don't bother testing it.
				if ( ! element.is( ":visible" ) ) {

					return( false );

				}

				// If the height has not yet been calculated,
				// the cache it for the duration of the page.
				if ( height === null ) {

					height = element.height();

				}

				// Update the dimensions of the element.
				var top = element.offset().top;
				var bottom = ( top + height );

				// Return true if the element is:
				// 1. The top offset is in view.
				// 2. The bottom offset is in view.
				// 3. The element is overlapping the viewport.
				return(
				(
				( top <= bottomFoldOffset ) &&
				( top >= topFoldOffset )
				)
				||
				(
				( bottom <= bottomFoldOffset ) &&
				( bottom >= topFoldOffset )
				)
				||
				(
				( top <= topFoldOffset ) &&
				( bottom >= bottomFoldOffset )
				)
				);

			}


			// I move the cached source into the live source.
			function render() {

				isRendered = true;

				renderSource();

			}


			// I set the interpolated source value reported
			// by the directive / AngularJS.
			function setSource( newSource ) {

				source = newSource;

				if ( isRendered ) {

					renderSource();

				}

			}


			// ---
			// PRIVATE METHODS.
			// ---


			// I load the lazy source value into the actual
			// source value of the image element.
			function renderSource() {

				element[ 0 ].src = source;

			}


			// Return the public API.
			return({
				isVisible: isVisible,
				render: render,
				setSource: setSource
			});

		}


		// ------------------------------------------ //
		// ------------------------------------------ //


		// I bind the UI events to the scope.
		function link( $scope, element, attributes ) {

			var lazyImage = new LazyImage( element );

			// Start watching the image for changes in its
			// visibility.
			lazyLoader.addImage( lazyImage );


			// Since the lazy-src will likely need some sort
			// of string interpolation, we don't want to
			attributes.$observe(
				"lazyImg",
				function( newSource ) {

					lazyImage.setSource( newSource );

				}
			);


			// When the scope is destroyed, we need to remove
			// the image from the render queue.
			$scope.$on(
				"$destroy",
				function() {

					lazyLoader.removeImage( lazyImage );

				}
			);

		}


		// Return the directive configuration.
		return({
			link: link,
			restrict: "A"
		});

	}]
);

'use strict';

//Setting up route
angular.module('mean-tutorials').config(['$stateProvider',
	function($stateProvider) {
		// Mean tutorials state routing
		$stateProvider.
		state('mean-home', {
			url: '/mean-home',
			templateUrl: 'modules/mean-tutorials/views/mean-home.client.view.html'
		});
	}
]);
'use strict';

angular.module('mean-tutorials').controller('MeanHomeController', ['$scope',
	function($scope) {

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
angular.module('sdsumap').config(['$stateProvider','uiGmapGoogleMapApiProvider',
	function($stateProvider,uiGmapGoogleMapApiProvider) {
		// Sdsumap state routing
		$stateProvider.
		state('sdsumap-main', {
			url: '/sdsumap-main',
			templateUrl: 'modules/sdsumap/views/sdsumap-main.client.view.html'
		});

		uiGmapGoogleMapApiProvider.configure({
			key: 'AIzaSyBEGA9BOSoo0DF69RNRh9MsMKDxaVlnT_U',
			v: '3.17',
			libraries: 'weather,geometry,visualization'
		});
	}
]);

'use strict';

angular.module('sdsumap').controller('SdsumapmainController', ['$scope','uiGmapGoogleMapApi',
	function($scope, uiGmapGoogleMapApi) {
		// Sdsumap main controller logic
		// ...
		uiGmapGoogleMapApi.then(function(maps) {
			console.log('Google Map is ready');
		});
		//44.3101729,-96.7831942,15z
		$scope.map = { center: { latitude: 44.3101729, longitude: -96.7831942 }, zoom: 15 };
	}
]);

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

'use strict';

angular.module('seller-interface').factory('Googledrive', ['configGdrive',
	function(configGdrive) {
		return {
			createFolder: createFolder,
			findFolder: findFolder,
			getGoogleDriveInfo: getGoogleDriveInfo,
			setupPicker: setupPicker,
			listFolder: listFolder
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
			gapi.client.load('drive', 'v2').then(function(){
				var request = gapi.client.drive.files.list({
					q: "title contains 'URI-'",
					fields: 'items(id\,title)'
				});
				request.then(function(resp){
					//console.log('result File list');
					//console.log(resp);
					callback(resp);
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
			var callbackAfterFindFolder = function(resp){
				var folderID = resp.result.items[0].id;
				var picker = new google.picker.PickerBuilder()
					.setOAuthToken(accessToken)
					.setDeveloperKey(configGdrive.developerKey)
					.addView(new google.picker.DocsUploadView().setParent(folderID))
					.addView(new google.picker.DocsView().setParent(folderID))
					.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
					.setLocale('ko')
					//.enableFeature(google.picker.Feature.NAV_HIDDEN)
					.setCallback(callback)
					.build();
				picker.setVisible(true);
			}
			findFolder(callbackAfterFindFolder);


		}

		function listFolder(){
			gapi.client.load('drive', 'v2').then(function() {

				var request = gapi.client.drive.files.list({
					maxResults:10,
					fields: 'items(id,owners(displayName,emailAddress,isAuthenticatedUser,kind,permissionId),selfLink)'
				});
				request.then(function(resp){
					console.log('result File list');
					console.log(resp)
				});

				var request = gapi.client.drive.files.list({
					maxResults:10,
					fields: 'items(id,owners(displayName,emailAddress,isAuthenticatedUser,kind,permissionId),selfLink)'
				});
				request.then(function(resp){
					console.log('result File list');
					console.log(resp)
				});

			});
		}
	}
]);

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

//Setting up route
angular.module('spec-view').config(['$stateProvider',
	function($stateProvider) {
		// Spec view state routing
		$stateProvider.
		state('jarvis', {
			url: '/jarvis',
			templateUrl: 'modules/spec-view/views/jarvis.client.view.html'
		}).
		state('spec-home', {
			url: '/spec-home',
			templateUrl: 'modules/spec-view/views/spec-home.client.view.html'
		});
	}
]);
'use strict';

angular.module('spec-view').controller('JarvisController', ['$scope','$timeout',
	function($scope, $timeout) {
		//Load Background SVG
		var backSvg = Snap('#backGroundSvg');
		var s = Snap("#smallMapSvg");
		var g = s.group();
		var l = Snap.load("modules/spec-view/img/traval/background2.svg", onSVGLoaded ) ;
		var customPart = Snap.load("modules/spec-view/img/traval/customPart.svg", onSVGLoaded2 )
		var avatar = Snap.load("modules/spec-view/img/traval/avatar1.svg", onSVGLoaded2 )

		$scope.position = {};

		$scope.addedObject = [];

		function onSVGLoaded2(data){
			var group = data.select("g");
			group.drag();
			g.append(group);

		}

		function onSVGLoaded( data ){
			//s.attr({id:'smallMap'});
			//s.append( data );
			g.append(data);
			//TweenLite.set('#smallMapSvg', {scale:'0.5'});
		}

		$scope.addAvatar = function(parentID, position){
			var parentSvg = Snap('#'+parentID);
			var pin = Snap.load("modules/spec-view/img/traval/avata1.svg", function(data){
				var group = data.select("g");

				var t = new Snap.Matrix();
				t.translate(position.x-150, position.y-150);
				t.scale(0.4);
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
				group.drag(move, start, stop);
				parentSvg.group().append(group);
				$scope.addedObject.push(group.node.id);
				$scope.$apply();
			});
		}


		$scope.addPin = function(parentID, position){
			var parentSvg = Snap('#'+parentID);
			var pin = Snap.load("modules/spec-view/img/traval/pin.svg", function(data){
				var group = data.select("g");

				var t = new Snap.Matrix();
				t.translate(position.x-150, position.y-150);
				t.scale(0.4);
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
				group.drag(move, start, stop);
				parentSvg.group().append(group);
				$scope.addedObject.push(group.node.id);
				$scope.$apply();
			});
		}

		$scope.addCirclePin = function(parentID, position){
			var parentSvg = Snap('#'+parentID);
			var pin = Snap.load("modules/spec-view/img/traval/circlePin.svg", function(data){
				var group = data.select("g");
				var t = new Snap.Matrix();
				t.translate(position.x-150, position.y-150);
				t.scale(0.4);
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
				group.drag(move, start, stop);
				parentSvg.group().append(group);
				$scope.addedObject.push(group.node.id);
				$scope.$apply();
			});
		}

		Snap.load("modules/spec-view/img/traval/background2.svg", function(data) {
			backSvg.append(data);

			$timeout(function() {
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
			},1500);
		});


		$scope.stories = [
			{
				num: '1',
				name: '부산 -> 시모노세키',
				totalNum: 3
			},
			{
				num: '2',
				name: '시모노세키 -> 호후'
			},
			{
				num: '3',
				name: '부산 -> 시모노세키'
			},
			{
				num: '4',
				name: '시모노세키 -> 호후'
			},
			{
				num: '5',
				name: '부산 -> 시모노세키'
			},
			{
				num: '6',
				name: '시모노세키 -> 호후'
			},
			{
				num: '7',
				name: '부산 -> 시모노세키'
			},
			{
				num: '8',
				name: '시모노세키 -> 호후'
			},
			{
				num: '9',
				name: '부산 -> 시모노세키'
			},
			{
				num: '10',
				name: '시모노세키 -> 호후'
			},
			{
				num: '11',
				name: '부산 -> 시모노세키'
			},
			{
				num: '12',
				name: '시모노세키 -> 호후'
			},
			{
				num: '13',
				name: '부산 -> 시모노세키'
			},
			{
				num: '14',
				name: '시모노세키 -> 호후'
			}
		];

		$scope.targetDescription = $scope.stories[0];
		$scope.crntPage = 1;

		$scope.start = function(){
			var navClickEvent = new TimelineMax();
			navClickEvent
				.staggerTo(".frontNavBtn", 0.5, {opacity:0, y:-100, ease:Back.easeIn})
				.staggerTo("#nSelect", 0.5, {opacity:0, y:-100, display:'none', ease:Back.easeIn}, "+=0.5")
				.to("#nSelect", 1, {display:'none'},1, "+=1")
				.to("#nSelect2", 1, {width:'90%', maxWidth:'900px', height:'90%', display:'block'}, "+=0.5")
				//.to("#testC", 3, {width:'0%', height:'0%'})
				.to("#storyMenu", 1, {display:'-webkit-inline-box'});
		};

		$scope.mapLoad = function(){
			var mapSvg = Snap('#progressStory');
			Snap.load("modules/spec-view/img/japanmap.svg", function(data){
				mapSvg.attr({ "viewBox": "0 0 300 300", fill:"white"});
				var group = data.select('g');
				mapSvg.append(group);

				$timeout(function(){

					TweenMax.to('#progressStory', 0.5, {display:'block'});
					TweenMax.to('#progressStoryName', 0.5, {display:'block'});

				},1500);
			})
		}

		$scope.startStory = function(storyNum){
			//display:none MapSVG

			TweenLite.to('#progressStory', 0.5, {scale:0.5, x:'80%', position:'absolute'});

			var startSvg = 's'+storyNum;

			var mainSvg = Snap('#mainStory');
			Snap.load("modules/spec-view/img/traval/"+startSvg+"s1.svg", function(data){
				mainSvg.attr({ "viewBox": "0 0 300 300", fill:"white"});
				var group = data.select('g');
				mainSvg.append(group);

				$timeout(function(){
					//$scope.crntPage++;
					TweenLite.set('#mainStory', {display:'block'});
					TweenLite.set('#progressStoryName',{display:'none'});
					TweenLite.to('#storyController', 0.5, {display:'block'});

				},1500);
			})

			console.log(storyNum);
		}

		$scope.nextStory = function(current, totalNum){

			var next = $scope.crntPage+1;

			console.log(next);

			if(next <= totalNum) {
				console.log(next + 'is executed');
				var mainSvg = Snap('#mainStory');
				Snap.load("modules/spec-view/img/traval/s1s"+next+".svg", function(data){
					mainSvg.select('g').remove();
					mainSvg.attr({ "viewBox": "0 0 300 300", fill:"white"});
					var group = data.select('g');
					mainSvg.append(group);

					$timeout(function(){
						$scope.crntPage++;
						TweenLite.to('#progressStory', 0.5, {opacity:0, display:'none'});
						TweenLite.to('#mainStory', 0.5, {display:'block'});
						TweenLite.set('#progressStoryName',{display:'none'});
					},1500);
				})
			} else{
				//finish Season
			}

		}

	}
]);

'use strict';

angular.module('spec-view').controller('SpecHomeController', ['$scope','$timeout','$compile','Project1',//'eduTimeline',
	function($scope, $timeout, $compile, Project1) {

		// when page is load
		angular.element(document).ready(function () {
			$timeout(function(){
				console.log('ready and + 1');
				TweenLite.to(window, 0.1, {scrollTo:{y:0, ease:Power2.easeInOut}});
				TweenMax.fromTo('#buttonsTool', 1, {y:-50,autoAlpha:0},{y:10,autoAlpha:1});
				TweenMax.fromTo('#frontLogo_Title', 1, {x:-300},{x:0, display:'block'});
			},1500)
		});

		var removefrontLogo = function(){
			console.log('dd');
			TweenLite.set("#frontLogo", {autoAlpha: 0, display:'none'});
			TweenLite.set(window,{scrollTo:{y:0, x:0}});
			//TweenLite.to($('#mydiv') , 0.3, {autoAlpha: 1, display:'block'});
		}

		$scope.toMain = function(){
			//specToolbar
			TweenLite.to(window, 1.5, {scrollTo:{y:$('#specToolbar').position().top, ease:Power2.easeInOut}, onComplete:removefrontLogo});
		}

		$scope.schoolInfo = [
			{name: "SDSU", year:"2008-2010", major:"Computer Science", position:'Undergrad'},
			{name: "TTU", year:"2011-2012", major:"Computer Science", position:'Researcher'},
			{name: "SDSU", year:"2013-2014", major:"Computer Science", position:'Grad'}
		];

		$scope.projectInfo = [
			{name:'Runway Incursion System', duration: '1year', tech:['JavaScript', 'HTML', 'MySQL']},
			{name:'Non-profit Organization Website CMS', duration: '1year', tech:['JavaScript', 'HTML', 'MySQL', 'Drupal(CMS)']},
			{name:'Virtualization Multi-core Processor', duration: '1year', tech:['VMware', 'centOS', 'Red Hat(Linux)']},
		]

		$scope.insts = [
			{desc:'1. SVG Animation provides more efficient presenting information' },
			{desc:'2. Like AngularJS framework, it makes possible to build an wep app with Modular based development' },
			{desc:'3. Cloud virtual service gives unlimited scalability' }]

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

		var logoSvg = Snap('.main');
		//var logoSvg = Snap('#frontLogo');
			Snap.load("modules/animation/img/svg/Urimium-Logo1.svg", function(data) {
				logoSvg.append(data);
				logoSvg.attr({
					width: window.innerWidth,
					height: window.innerHeight
				});

				var afterLogo = function(){
					$scope.afterLogo = true;
				}
				var wholeSvg=$('.main');
				var logo_r = $('#logo-r');
				var logo_u = $('#logo-u');
				var logoTimeLine = new TimelineMax({paused:true, onComplete: afterLogo});
				logoTimeLine.set([logo_r, logo_u],{opacity:0})
					.fromTo([logo_r, logo_u], 2.5, {x:0, scale:0.5, opacity:0},{scale:1, opacity:1})
					.fromTo(logo_r, 1.5, {scale:0.7, ease:Circ.easeOut},{scale:1, rotation: 360, transformOrigin: "50% 50%"});

				$scope.replay = function(){
					logoTimeLine.restart();
				}

				$timeout(function(){
					logoTimeLine.play();
				},1500);
			});

			$scope.clickEducationTimeLine = function(){
				console.log('Education Time Line');
				//var educationSvg = Snap('.main');
				var educationSvg = Snap('#frontLogo');
				Snap.load("modules/spec-view/img/e-timeline1.svg", function(data){

					var previousSvg = logoSvg.select('#logo-ur');
					previousSvg.attr({display:"none"});

					if($("#e-timeline").length == 0)
						educationSvg.append(data);

					educationSvg.attr({
						width: window.innerWidth,
						height: window.innerHeight,
						viewBox: "0 0 960 560"
					});

					//var educationSvg = Snap('.main');
					var d1 = educationSvg.select('#desc1');
					var d2 = educationSvg.select('#time2');
					var d3 = educationSvg.select('#desc3');

					Project1.getTransfromOrigin('e-timeline');

					/*
					var transFromResult1 = Project1.getTransfromOrigin(d1, 'e-timeline');
					var transFromResult2 = Project1.getTransfromOrigin(d2, 'e-timeline');
					var transFromResult3 = Project1.getTransfromOrigin(d3, 'e-timeline');

					Snap('#e-timeline').rect(transFromResult1.x, transFromResult1.y, 5, 5).attr({fill:'blue'});
					Snap('#e-timeline').rect(transFromResult2.x, transFromResult2.y, 5, 5);
					Snap('#e-timeline').rect(transFromResult3.x, transFromResult3.y, 5, 5);

					console.log('new TransformOrigin')
					console.log(transFromResult1.x +' '+transFromResult1.y);
					console.log(transFromResult2.x +' '+transFromResult2.y);
					console.log(transFromResult3.x +' '+transFromResult3.y);

					var d1Transfrom1 = d1.getBBox().cx + " " +d1.getBBox().cy;
					var d1Transfrom2 = d2.getBBox().cx + " " +d2.getBBox().cy;
					var d1Transfrom3 = d3.getBBox().cx + " " +d3.getBBox().cy;
					console.log('old TransformOrigin')
					console.log(d1Transfrom1);
					console.log(d1Transfrom2);
					console.log(d1Transfrom3);
					*/

					/*
					var newTransform = new Snap.Matrix().translate(transFromResult2.x,transFromResult2.y);
					newTransform.scale(1.3,1.3,transFromResult2.containerW / 2 -transFromResult2.x,transFromResult2.containerH / 2 -transFromResult2.y);

					Snap('#entireGroup').animate({
						//transform: new Snap.Matrix().scale(s).translate(tx, ty).toTransformString();
						transform: newTransform.toTransformString()
					}, 1400, mina.backout);
					*/
					/*
					var effectTimeLine = new TimelineMax();

					effectTimeLine
						.to('#entireGroup', 1, {scale:1.9, transformOrigin:transFromResult1.x +' '+transFromResult1})
						.to('#entireGroup', 1, {scale:1, delay:3})
						.to('#entireGroup', 1, {scale:1.9, transformOrigin:transFromResult2.x +' '+transFromResult2.y})
						.to('#entireGroup', 1, {scale:1, delay:3})
						.to('#entireGroup', 1, {scale:1.9, transformOrigin:transFromResult3.x +' '+transFromResult3.y})
						.to('#entireGroup', 1, {scale:1, delay:3})
						.to('#entireGroup', 1, {scale:1.9, transformOrigin:"bottom left"})
						.to('#entireGroup', 1, {scale:1, delay:3});
					*/
					$timeout(function(){
						Snap('#d1t').attr({'ng-bind':'schoolInfo[0].name'});
						$compile(angular.element('#d1t'))($scope);

						Snap('#d2t').attr({'ng-bind':'schoolInfo[1].name'});
						$compile(angular.element('#d2t'))($scope);

						Snap('#d3t').attr({'ng-bind':'schoolInfo[2].name'});
						$compile(angular.element('#d3t'))($scope);

						Snap()
					},100);
			})
		};

		$scope.clickCarrierTimeLine = function(){
			//TweenLite.to("#IornMan", .5, {css:{transform:"translateX(-5px) translateY(10px)"}, ease:Power2.easeOut});
			var educationSvg = Snap('#e-timeline');
			Snap.load("modules/spec-view/img/ironman.svg", function(data){
				var group = data.select('#IornMan');
				//group.attr({transform:'top, right'});
				if($("#IornMan").length == 0)
					group.appendTo(educationSvg);

				//var transformString = "t" + (Snap('#e-timeline').getBBox().width - Snap('#IornMan').getBBox().width).toString() +","+ (Snap('#e-timeline').getBBox().height - Snap('#IornMan').getBBox().height).toString();
				/*
				 console.log(Snap('#e-timeline').getBBox().width);
				 console.log(Snap('#IornMan').getBBox().width);
				 console.log(Snap('#e-timeline').getBBox().height);
				 console.log(Snap('#IornMan').getBBox().height);
				 console.log(transformString);
				 */

				/*
				 group.attr({
				 transform: transformString
				 })
				 */
				TweenLite.to("#IornMan", .5, {css:{transform:"translateX("+ (Snap('#e-timeline').getBBox().width - Snap('#IornMan').getBBox().width).toString() +"px)"+
				" translateY("+ (Snap('#e-timeline').getBBox().height - Snap('#IornMan').getBBox().height).toString()+"px)"}, ease:Power2.easeOut});
			});
		};

	}
]);

'use strict';

angular.module('spec-view').directive('resize', ['$window',
	function($window) {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
				var w= angular.element($window);
				scope.getWindowDimensions = function () {
					return {
						'h': w.height(),
						'w': w.width()
					};
				};
				scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
					console.log('size is changed');
					scope.windowHeight = newValue.h;
					scope.windowWidth = newValue.w;

					scope.style = function () {
						return {
							'height': (newValue.h) + 'px',
							'width': (newValue.w) + 'px'
						};
					};
				}, true);

				w.bind('resize', function () {
					scope.$apply();
				});

			}
		};
	}
]);

'use strict';

angular.module('spec-view').directive('srcCheck', [
	function() {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
				var URL_RE = /^http:\/\/[^\/]*/;
				var HTTP_RE = /^(http|https):\/\//;

				var context = {url: attrs.src.match(URL_RE)[0]};
				context.domain = context.url.replace(HTTP_RE, '');
				var templateFn = _.template('<a href="<%= url %>" target="_blank">Photo courtesy of <%= domain %></a>');
				element.after(templateFn(context));

			}
		};
	}
]);

'use strict';

angular.module('spec-view').factory('Project1', [
	function() {
		return {
			getTransfromOrigin: function(container) {
				var d1 = Snap('#desc1');
				var d2 = Snap('#desc2');
				var d3 = Snap('#desc3');

				var getTxTy = function(SnapElem, scale){

					var t = Snap();
					t = SnapElem;
					var centerX         = t.getBBox().cx;
					var centerY         = t.getBBox().cy;
					var width           = t.getBBox().width;
					var height          = t.getBBox().height;// width = height = radius
					var containerW      = 1158//$('#'+container).width();
					var containerH      = 450//$('#'+container).height();

					var sX = containerW / width;
					var sY = containerH / height;
					var s = sX < sY ? sX : sY;

					s=scale;

					var tx = -centerX + containerW / 2;
					var ty = -centerY + containerH / 2;

					var newTransform = new Snap.Matrix().translate(tx,ty);
					newTransform.scale(s,s,containerW / 2 -tx, containerH / 2 -ty);
					return newTransform;
				}
				var next = function() {
					console.log('next');
					console.log(getTxTy(d2,2).toTransformString());
					Snap('#entireGroup').animate({
						//transform: new Snap.Matrix().scale(s).translate(tx, ty).toTransformString();
						transform: getTxTy(d2,2).toTransformString()
					}, 1400, mina.backout, next2);
				};

				var next2 = function() {
					console.log('next');
					//TweenMax.from('#time2', 2, {rotation: 360, transformOrigin: "50% 50%", repeat:-1});

					Snap('#entireGroup').animate({
						//transform: new Snap.Matrix().scale(s).translate(tx, ty).toTransformString();
						transform: getTxTy(d3,2).toTransformString()
					}, 1400, mina.backout, next3);
				};

				var next3 = function() {
					console.log('next');
					Snap('#entireGroup').animate({
						//transform: new Snap.Matrix().scale(s).translate(tx, ty).toTransformString();
						transform: 'S1'
					}, 1400, mina.backout);
				};
				Snap('#entireGroup').animate({
					//transform: new Snap.Matrix().scale(s).translate(tx, ty).toTransformString();
					transform: getTxTy(d1, 2).toTransformString()
				}, 1400, mina.backout, next);
			}
		};
	}
]);

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
				parentSvg.append(group);
				//$scope.addedObject.push(group.node.id);
				$scope.$apply();
			});
		}

		var backSvg = Snap('#backGroundSvg');
		Snap.load("modules/tj-hair/img/building1.svg", function(data) {
			backSvg.append(data);
			var circlePinPosition = {x:'443' , y:'299', id:'circlePin1'};
			$scope.addSVG('backGroundSvg', circlePinPosition);
			$timeout(function() {

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
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
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

//Setting up route
angular.module('utility').config(['$stateProvider',
	function($stateProvider) {
		// Utility state routing
		$stateProvider.
		state('test-page-generator', {
			url: '/test-page-generator',
			templateUrl: 'modules/utility/views/test-page-generator.client.view.html'
		});
	}
]);
'use strict';

angular.module('utility').controller('TestpageGeneratorController', ['$scope',
	function($scope) {
		$scope.pageSrc = '<h1>Hello World2</h1>';
		// Test page generator controller logic
		// ...
	}
]);

'use strict';

angular.module('utility').directive('pageFormatCreation', [
	function() {
		return {
			templateUrl: 'modules/utility/directives/template/default-format.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
			}
		};
	}
]);

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
