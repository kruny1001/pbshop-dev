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
    }])
	.controller('MeanHomeController',
        ['$scope','$state', '$http','$mdDialog','$timeout', '$mdSidenav', '$log', 'Authentication',
	    function($scope,$state,$http,$mdDialog,$timeout, $mdSidenav, $log, Authentication) {
            $scope.Auth = Authentication;
            console.log($scope.Auth);
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
                    templateUrl: 'modules/mean-tutorials/template/MD/home-dialog.tpl.html',
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
