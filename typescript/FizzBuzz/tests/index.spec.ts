import {  calculate } from '../src';

describe('calculate', () => {
    it('returns string of 1', () => {
        expect(calculate(1)).toEqual('1')
    });
    it('returns string of 2', () => {
        expect(calculate(2)).toEqual('2')
    });
    it('returns fizz for 3', () => {
        expect(calculate(3)).toEqual('fizz')
    });


});
