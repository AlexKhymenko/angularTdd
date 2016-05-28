/**
 * Created by alexkhymenko on 5/28/16.
 */

import mainCtrl from '../../../app/directives/directives';

describe('Directive', () => {
    let ctrl;
    let scope;

/*
    beforeEach(angular.mock.module('AngularES6App'));
*/
    beforeEach(angular.mock.module('directives'));

    var controller, element;

    beforeEach(inject(($controller, $rootScope, $compile) => {
        scope = $rootScope.$new();
        var testArray = [];
        scope.test = [];
        scope.nice = 'green1';
        scope.number = 2;
        scope.vm = {
          test: 'nice'
        };
        element = $compile('<test-dir test="{{nice}}" number="number"></test-dir>')(scope);

        scope.$apply();

/*
        scope.$digest();
*/
        console.log(ctrl);
        // controller = element.controller('testDir', {}, {test: []});
/*
        controller = element.controller('testDir');
*/
        var data = {
            number: 2,
            nice: 'green1',
            test: []
        };
        controller = $controller('tddTestController', {}, data)
    }));

    it('should set application name on controller', () => {
        expect(2).toEqual(2)
    });

    it('controller should be defined', () => {
        "use strict";
        console.log('controller', controller);
        expect(controller).toBeDefined();
     /*   expect(element.text()).toBe('453345345');
        expect(controller).not.toBeNull();*/
        // expect(element.scope().vm.test).toBe('green');
        expect(controller.test).toBeDefined();


    });

    it('testArray should be defined', () => {
        "use strict";
        console.log('controller1', controller.test);
        console.log('controller1');
        expect(controller.test).toBeDefined();
    });

    it('controller test isolate property should be green', () => {
        "use strict";
        expect(controller.nice).toBe('green1');
    });

    it('number should be defined', () => {
        "use strict";
        expect(controller.number).toBeDefined();
    });

    it('number should be 2', () => {
        "use strict";
        expect(controller.number).toBe(2);
    });

    it('double number should be defined', () => {
        "use strict";
        expect(controller.doubleNumber).toBeDefined();
    });

    it('double number should be 4', () => {
        "use strict";
        expect(controller.doubleNumber).toBe(4);
    });

});
