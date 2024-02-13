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
    it('returns fizz for 9', () => {
        expect(calculate(9)).toEqual('fizz')
    });
    it('returns buzz for 5', () => {
        expect(calculate(5)).toEqual('buzz')
    });
    it('returns buzz for 10', () => {
        expect(calculate(10)).toEqual('buzz')
    });
    it('returns fizzbuzz for 15', () => {
        expect(calculate(15)).toEqual('fizzbuzz')
    });
    it('returns fizzbuzz for 45', () => {
        expect(calculate(45)).toEqual('fizzbuzz')
    });

});
