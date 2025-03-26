namespace Default.Test;
public class BowlingGameTest
{
    [Fact]
    public void NewGameHasScoreOf0()
    {
        var game = new Game();
        int result = game.score();
        Assert.Equal(0, result);
    }

    [Fact]
    public void RollOfOneHasScoreOf1()
    {
        var game = new Game();

        game.roll(1);

        int result = game.score();
        Assert.Equal(1, result);
    }
}