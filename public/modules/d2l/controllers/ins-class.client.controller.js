'use strict';

angular.module('d2l').controller('InsClassController', ['$scope','$http',
	function($scope,$http) {
        TweenMax.set($('#fileCreator'), {alpha:0, yPercent:-150});
        $scope.assignments = [];
        //$scope.isOpen=false;
		//$scope.createFile = function(){
		//	//$http.get('/createFile').success(function(data, status, headers, config){
     //        //       $scope.fileResult = data;
		//	//	//console.log('data', data);
		//	//	//console.log('status', status);
		//	//	//console.log('headers', headers);
		//	//	//console.log('config', config);
		//	//});
     //       $scope.isOpen = !$scope.isOpen;
     //       if($scope.isOpen){
     //           console.log("open");
     //           TweenMax.to($('#fileCreator'), 1, {alpha:1, yPercent:0, display:"block",   ease: Power2.easeOut, paused:false});
     //           //TweenMax.to($('#createFileBtn'), 0.6,{boxShadow:"inset 0 0 25px #05fe65, 0px 0px 30px 12px #12ea9b", repeat:-1, yoyo:true, ease:Linear.easeNone});
     //           //TweenMax.to($('#fileCreator'),1, {yPercent:-150, transformOrigin:"0 0 0", ease:Back.easeOut});
     //       }
		//
     //       else{
     //           console.log("close");
     //           TweenMax.to($('#fileCreator'), 1, {alpha:0, yPercent:-150, display:"none", ease: Power2.easeOut, paused:false});
     //           //TweenMax.to($('#createFileBtn'), 0.6,{boxShadow:"inset 0 0 0px #05fe65, 0px 0px 0px 0px #12ea9b", repeat:-1, yoyo:true, ease:Linear.easeNone});
     //           //TweenMax.to($('#fileCreator'),1, {height:'100%', transformOrigin:"0 0 0", ease:Back.easeOut});
     //       }
		//
     //       $scope.assignment = '';
		//}
		$scope.listGPlus = function(){
			$http.get('/gs').success(function(data, status, headers, config){
				$scope.userInfo = data;
				console.log('data', data);
				console.log('status', status);
				console.log('headers', headers);
				console.log('config', config);
			});
		}

        $scope.neighborhoods = ['Chelsea', 'Financial District', 'Midtown', 'West Village', 'Williamsburg'];


	}
]);
