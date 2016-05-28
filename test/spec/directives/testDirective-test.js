/**
 * Created by alexkhymenko on 5/28/16.
 */

import mainCtrl from '../../../app/directives/directives';

describe('Main controller', () => {
    let ctrl;
    let scope;

    beforeEach(angular.mock.module('AngularES6App'));
    beforeEach(angular.mock.module('directives'));

    var controller;

    beforeEach(inject(($controller, $rootScope, $compile) => {
        scope = $rootScope.$new();
        var element = $compile('<test-dir></test-dir>')(scope);
        scope.$digest();
        controller = element.controller('testDir');

        console.log(element);
    }));

    it('should set application name on controller', () => {
        expect(2).toEqual(2)
    });

    it('controller should be defined', () => {
        "use strict";
        expect(controller).toBeDefined();

    });
});
