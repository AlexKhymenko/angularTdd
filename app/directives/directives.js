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
                test: '@',
                number: '='
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

        activate();


        function activate() {
            vm.doubleNumber = vm.number * 2;
        }

    }


angular.module('directives').
controller('tddTestController', tddTestController);

function tddTestController() {
    "use strict";
    var vm = this;
    vm.doubleNumber = vm.number * 2;
}
