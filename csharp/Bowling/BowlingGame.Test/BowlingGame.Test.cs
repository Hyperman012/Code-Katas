namespace Default.Test;
public class BowlingGameTest
{
    private Game _game;

    public BowlingGameTest()
    {
        _game = new Game();
    }

    [Fact]
    public void NewGameHasScoreOf0()
    {
        int result = _game.Score();
        Assert.Equal(0, result);
    }

    [Fact]
    public void RollOfOneHasScoreOf1()
    {
        _game.Roll(1);

        int result = _game.Score();
        Assert.Equal(1, result);
    }

    [Fact]
    public void RollOfTwoHasScoreOf2()
    {
        _game.Roll(2);
        int result = _game.Score();
        Assert.Equal(2, result);
    }
}