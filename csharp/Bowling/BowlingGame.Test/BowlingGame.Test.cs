namespace Default.Test;
public class BowlingGameTest
{
    private Game _game;

    public BowlingGameTest()
    {
        _game = new Game();
    }

    [Fact]
    public void Score_ForNewGame_Returns0()
    {
        int result = _game.Score();
        Assert.Equal(0, result);
    }

    [Fact]
    public void Score_withRollOfOne_Returns1()
    {
        _game.Roll(1);

        int result = _game.Score();
        Assert.Equal(1, result);
    }

    [Fact]
    public void Score_withRollOfTwo_Returns2()
    {
        _game.Roll(2);
        int result = _game.Score();
        Assert.Equal(2, result);
    }

    [Fact]
    public void Score_WithARollOfOneAndARollOfTwo_Returns3()
    {
        _game.Roll(1);
        _game.Roll(2);

        int result = _game.Score();
        Assert.Equal(3, result);
    }
}