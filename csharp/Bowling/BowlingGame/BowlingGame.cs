namespace Default;

public class Game
{
    List<int> _rolls = new();

    public void Roll(int pins)
    {
        _rolls.Add(pins);

    }

    public int Score()
    {
        return _rolls.Sum();

    }
}