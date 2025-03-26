namespace Default.Test;
public class BowlingGameTest
{
    [Fact]
    public void NewGameHasScoreOf0()
    {
        var game = new Game();
        int result = game.Score();
        Assert.Equal(0, result);
    }

    [Fact]
    public void RollOfOneHasScoreOf1()
    {
        var game = new Game();

        game.Roll(1);

        int result = game.Score();
        Assert.Equal(1, result);
    }
}