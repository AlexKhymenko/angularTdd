import angular from 'angular';

angular.module('directives', []);


angular.module('directives')
    .directive('testDir', testDirective)
    .controller('tddTestController', tddTestController);


    function testDirective() {
        "use strict";
        return {
            scope: true,
            restrict: 'E',
            bindToController: {
                test: '@',
                number: '='
            },
            controller: 'tddTestController',
            // templateUrl: 'directives/testDir.html',
            template: '<div>nice Im here   {{vm.test}}</div>',
            controllerAs: 'vm'
        }
    }

    function tddTestController() {
        "use strict";
        var vm = this;
        vm.doubleNumber = vm.number * 2;
    }


angular.module('directives')
    .directive('tddChangeColour', tddChangeColour);

    function tddChangeColour() {
        "use strict";
        return {
            restrict: 'A',
            link: function(scope, element, attrs, controller, transclude) {
                element.on('mouseenter', function() {
                    element.css('color', 'green');
                });
                element.on('mouseleave', function() {
                    element.css('color', 'red');
                })
            }
        }
    }
