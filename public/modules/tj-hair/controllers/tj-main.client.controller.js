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
