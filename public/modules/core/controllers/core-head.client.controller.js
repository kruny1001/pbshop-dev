'use strict';

angular.module('core')
  .run(function ($rootScope) {

  })
  .controller('CoreHeadController', ['$scope','$rootScope','$log','$mdSidenav','$location','$state', '$timeout', 'D2lClassesOwnership',
    function($scope, $rootScope,$log,$mdSidenav, $location, $state, $timeout, D2lClassesOwnership) {
      $scope.title = "Open Board";
      $scope.subTitle = "";
      $scope.link = "";
      $scope.classroom = false;
      $scope.goTo = function(name){
        $state.go(name);
      };
      $scope.currentState = function(){};
      $scope.onchangeRoute = function(){};

      $scope.toggleLeft = function() {
        $mdSidenav('left').toggle()
          .then(function(){
            $log.debug("toggle left is done");
          });
      };
      $scope.toggleRight = function() {
        //TweenMax.from($('#menuBtn'),2.5, {x:50, ease:Bounce.easeOut});
        $mdSidenav('right').toggle()
          .then(function(){
            $log.debug("toggle RIGHT is done");
            //TweenMax.set($("md-backdrop"),{position:'fixed'});
          });
      };
      var scrollTo = function(){
        console.log('scrollTo funciton');
      };

      $scope.change = function(){
        console.log("changed");
        if(user._id !== undefined){
          $location.path('/d2l-classes/'+user._id);
        }
      };

      $scope.loadUsers = function() {

        return $timeout(function() {
          $scope.users = D2lClassesOwnership.query();
        }, 650);
      }

      $scope.tiles = buildGridModel({
        icon : "avatar:svg-",
        title: "Svg-",
        background: ""
      });
      function buildGridModel(tileTmpl){
        var it, results = [ ];
        for (var j=0; j<6; j++) {
          it = angular.extend({},tileTmpl);
          it.icon  = it.icon + (j+1);
          //it.title = it.title + (j+1);
          it.span  = { row : "1", col : "1" };
          switch(j+1) {
            case 1:
              it.background = "red";
              it.title = "Profile";
              it.span.row = it.span.col = 2;
              break;
            case 2: it.background = "green";  it.span.col = 2;  it.title = "Your Classes";     break;
            case 3: it.background = "darkBlue";  it.span.col = 2; it.title = "All Classes";   break;
            case 4:
              it.title = "Tutorial";
              it.background = "blue";
              it.span.col = 2;
              break;
            case 5:
              it.background = "yellow";
              it.span.row = it.span.col = 1;
              break;
            case 6: it.background = "pink";          break;
          }
          results.push(it);
        }
        return results;
      }

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            console.log('closed');
            if(toState.name === "openboard"){
                $scope.title = "Getting Started";
                $scope.subTitle = "Tutorial";
            }
            else if(toState.name === "mean-home")
            {
                $scope.title = "Open Board";
                $scope.subTitle = " ";
            }
            else if(toState.name ==="d2l-home"){
              $scope.title = "Classroom";
              $scope.subTitle = " ";
            }
            else if(toState.name ==="listD2lClasses"){
              $scope.title = "Class List";
              $scope.subTitle = "Select a Class";
            }
            else if(toState.name ==='profile'){
              $scope.title = "Profile";
              $scope.subTitle = "Edit Profile";
            }

        });

      $scope.sliderNavEvent = function(name){
        $mdSidenav('left').close()
          .then(function(){
            $log.debug("close LEFT is done");
            //console.log(target);
            //TweenMax.to($window, 1.2, {scrollTo:{y:target}, ease:Power4.easeOut});
          });
        console.log(name);
        if(name === 'Your Classes'){
          $state.go('listD2lClasses');
        }
        else if(name ==='Profile'){
          $state.go('profile');
        }
        else if(name ==='Tutorial'){
          $state.go('openboard');
        }
        else if(name ==='All Classes'){
          $state.go('listD2lClassesAll');
        }
      }

    }
]);
