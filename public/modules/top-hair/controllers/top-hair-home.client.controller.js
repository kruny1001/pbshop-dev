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
