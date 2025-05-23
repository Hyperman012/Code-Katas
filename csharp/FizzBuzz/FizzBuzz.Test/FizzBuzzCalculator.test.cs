namespace FizzBuzz.Test;
/*
* write something when given a number,
* returns a string of that number unless:
* the input is a multiple of 3, in which case return Fizz
* or
* the input is a multiple of 5, in which case return Buzz
* or
* the input is a multiple of 3 and 5, in which case return FizzBuzz
*/
public class FizzBuzzCalculatorTest
{
    [Fact]
    public void Test1()
    {
        var sut = new FizzBuzzCalculator();
        int result = sut.Add(1, 2);
        Assert.Equal(3, result);
    }
}