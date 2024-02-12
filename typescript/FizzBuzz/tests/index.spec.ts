import {  calculate } from '../src';

describe('calculate', () => {

    [1,2,4].forEach(input => {
        it(`returns "${input}" for ${input}`, () => {
            expect(calculate(input)).toEqual(String(input))
        });
    });

    [3,6,9].forEach(input => {
        it(`returns "fizz" for ${input}`, () => {
            expect(calculate(input)).toEqual('fizz')
        });
    });

    [5,10,20].forEach(input => {
        it(`returns "buzz" for ${input}`, () => {
            expect(calculate(input)).toEqual('buzz')
        });
    });
    [15,30,45].forEach(input => {
        it(`returns "fizzbuzz" for ${input}`, () => {
            expect(calculate(input)).toEqual('fizzbuzz')
        });
    });

});
