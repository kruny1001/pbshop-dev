'use strict';

angular.module('core')
  .run(function ($rootScope) {

  })
  .controller('CoreHeadController', ['$scope','$rootScope','$state',
    function($scope, $rootScope, $state) {
        $scope.title = "Open Board";
        $scope.subTitle = "";
        $scope.link = "";
        $scope.goTo = function(name){
            $state.go(name);
        };
        $scope.currentState = function(){};
        $scope.onchangeRoute = function(){};

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            console.log('closed');
            if(toState.name === "openboard"){
                $scope.title = "Getting Started"
                $scope.subTitle = "Tutorial"
            }
            else if(toState.name === "mean-home")
            {
                $scope.title = "Open Board";
                $scope.subTitle = "";
            }
        });

    }
]);
