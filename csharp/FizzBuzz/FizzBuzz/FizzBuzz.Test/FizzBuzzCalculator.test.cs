namespace FizzBuzz.Test;

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