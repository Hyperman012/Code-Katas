namespace Default.Test;
public class BowlingGameTest
{
    private Game _game = new();

    [Fact]
    public void Score_GameStart_ReturnsZero()
    {
        int result = _game.Score();
        Assert.Equal(0, result);
    }
    
    [Fact]
    public void Score_FirstRollOfOne_ReturnsOne()
    {
        _game.Roll(1);
        int result = _game.Score();
        Assert.Equal(1, result);
    }

    [Fact]
    public void Score_FirstRollOfTwo_ReturnsTwo()
    {
        _game.Roll(2);
        int result = _game.Score();
        Assert.Equal(2, result);
    }
    
    [Fact]
    public void Score_FirstRollOfThree_ReturnsThree()
    {
        _game.Roll(3);
        int result = _game.Score();
        Assert.Equal(3, result);
    }

    [Fact]
    public void Score_RollsOfOneAndTwo_ReturnsThree()
    {
        _game.Roll(1);
        _game.Roll(2);
        int result = _game.Score();
        Assert.Equal(3, result);
    }
 
    [Fact]
    public void Score_WithSpare_Returns16()
    {
        _game.Roll(5);
        _game.Roll(5); // spare
        _game.Roll(3);
        int result = _game.Score();
        Assert.Equal(16, result);
    }

    [Fact]
    public void Score_WithStrike_returns17()
    {
        _game.Roll(10);
        _game.Roll(4); // spare
        _game.Roll(3);
        int result = _game.Score();
        Assert.Equal(24, result);
    } 
    
    [Fact]
    public void Score_PerfectGame_Returns300()
    {
        RollMany(10, 20);
        int result = _game.Score();
        Assert.Equal(300, result);
    }

    private void RollMany(int pinCount, int howMany)
    {
        for (int i = 0; i < howMany; i++)
        {
            _game.Roll(pinCount);
        }
    }
}