import { describe, expect, it } from "@jest/globals";
import { calculateFizzBuzzNumber } from "../src";
/*
 * write something when given a number,
 * returns a string of that number unless:
 * the input is a multiple of 3, in which case return Fizz
 * or
 * the input is a multiple of 5, in which case return Buzz
 * or
 * the input is a multiple of 3 and 5, in which case return FizzBuzz
 */
describe("FizzBuzz", () => {
  it('should return value of "1" when given input 1', () => {
    const result = calculateFizzBuzzNumber(1);
    expect(result).toEqual("1");
  });

  it('should return value of "4" when given input 4', () => {
    const result = calculateFizzBuzzNumber(4);
    expect(result).toEqual("4");
  });

  it('should return value of "Fizz" when given input 3', () => {
    const result = calculateFizzBuzzNumber(3);
    expect(result).toEqual("Fizz");
  });

  it('should return value of "Fizz" when given input 6', () => {
    const result = calculateFizzBuzzNumber(6);
    expect(result).toEqual("Fizz");
  });
});
