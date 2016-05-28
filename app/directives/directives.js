import angular from 'angular';

angular.module('directives', []);


angular.module('directives')
    .directive('testDir', testDirective);


    function testDirective() {
        "use strict";
        return {
            scope: true,
            restrict: 'E',
            bindToController: {
                test: '@'
            },
            controller: testController,
            // templateUrl: 'directives/testDir.html',
            template: '<div>nice Im here   {{vm.test}}</div>',
            controllerAs: 'vm',
        }
    }

    function testController() {
        "use strict";
        var vm = this;
        vm.test = 34534;
        }
