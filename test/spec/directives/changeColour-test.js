/**
 * Created by alexkhymenko on 5/28/16.
 */
(function () {
    'use strict';

    describe('ChangeColourDirective',function () {
        var scope, element, changeColour;

        beforeEach(angular.mock.module('directives'));

        beforeEach(inject(($compile, $rootScope) => {
            scope = $rootScope.$new();
            element = $compile('<span tdd-change-colour style="color: red;">I Should change Colour</span>')(scope);
            // scope.$digest();
        }));

        it('should pass', () => {
            expect(2).toBe(2);
        });

        it('the element should be defined', () => {
             expect(element).toBeDefined();
            expect(element.text()).toBe('I Should change Colour');
        });

        it('should have red colour initially1', () => {
            expect(element.css('color')).toBe('red');
        });

        it('should change color on mouceOver', () => {
           element.trigger('mouseenter');
            expect(element.css('color')).toBe('green');
        });
        
        it('should change color back on mouseLeave', () => {
            element.trigger('mouseleave');
            expect(element.css('color')).toBe('red');


        });
    });

})();