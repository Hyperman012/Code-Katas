namespace Default.Test;
public class BowlingGameTest
{
    private Game _game;

    public BowlingGameTest()
    {
        _game = new Game();
    }
    
    private void RollSpare()
    {
        _game.Roll(5);
        _game.Roll(5);
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

    [Fact]
    public void Score_With_Spare_Returns16()
    {
        RollSpare();

        _game.Roll(3);

        int result = _game.Score();
        Assert.Equal(16, result);
    }


    [Fact]
    public void Score_With_Spare_With_Four_On_Third_Roll_Returns18()
    {
        RollSpare();

        _game.Roll(4);

        int result = _game.Score();
        Assert.Equal(18, result);
    }
}