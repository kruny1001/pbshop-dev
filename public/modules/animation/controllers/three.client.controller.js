"use strict";

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
