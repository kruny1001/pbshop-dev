'use strict';

angular.module('mean-tutorials').controller('ProjectViewController', ['$scope', '$stateParams', '$state', 'Articles',
	function($scope, $stateParams, $state, Articles) {
		$scope.title= 'Project3';
        $scope.body= '';
        $scope.menus = [
            {icon:'', name:'Projects'},
            {icon:'', name:'Articles'},
            {icon:'', name:'Comments'},
            {icon:'', name:'Survey'},
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
	}
]);
