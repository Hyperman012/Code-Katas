namespace Default.Test;
public class BowlingGameTest
{
    [Fact]
    public void Test1()
    {
        var sut = new Game();
        int result = sut.score();
        Assert.Equal(0, result);
    }
}