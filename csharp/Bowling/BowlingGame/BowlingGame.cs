namespace Default;

public class Game
{
    private int _applesauce;

    public void roll(int pins)
    {
        _applesauce = 1;
    }

    public int score()
    {
        if (_applesauce == 1)
        {
            return 1;
        }
        return 0;
    }
}