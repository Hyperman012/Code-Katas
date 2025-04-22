namespace Default.Test;

public class DefaultTest
{
    [Fact]
    public void Test1()
    {
        var sut = new Default();
        int result = sut.Add(1, 2);
        Assert.Equal(3, result);
    }
}