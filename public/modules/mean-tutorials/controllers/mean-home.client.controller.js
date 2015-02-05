"use strict";

angular.module('mean-tutorials')
	.controller('MeanLoginCtrl', ['$scope', 'Authentication','$mdDialog',function($scope, Authentication){
        $scope.Auth = Authentication;
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
        //console.log($scope.Auth);
    }])
	//.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
	//	$scope.close = function() {
	//		$mdSidenav('left').close()
	//	};
	//})
	//.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
	//	$scope.close = function() {
	//		$mdSidenav('right').close()
	//	};
	//})
	.controller('MeanHomeController', ['$scope','$state','$mdDialog','$timeout', '$mdSidenav', '$log',
	function($scope,$state,$mdDialog,$timeout, $mdSidenav, $log) {

        $scope.close = function() {
            $mdSidenav('left').close();
        };

        $scope.gotoState = function(state) {
            $state.go(state);
        }

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
            $mdDialog.show({
                controller: 'MeanLoginCtrl',
                templateUrl: 'modules/mean-tutorials/template/MD/home-dialog.tmp.html',
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
