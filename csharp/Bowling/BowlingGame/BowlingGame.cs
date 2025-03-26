namespace Default;

public class Game
{
    private int _score;

    public void Roll(int pins)
    {
        _score = 1;
    }

    public int Score()
    {
        if (_score == 1)
        {
            return 1;
        }
        return 0;
    }
}