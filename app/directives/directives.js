import angular from 'angular';

angular.module('directives', []);


angular.module('directives')
    .directive('testDir', testDirective);


    function testDirective() {
        "use strict";
        return {
            restrict: 'E',
            bindToController: {

            },
            controllerAs: 'vm',
            controller: testController
        }
    }

    function testController() {
        "use strict";

    }
