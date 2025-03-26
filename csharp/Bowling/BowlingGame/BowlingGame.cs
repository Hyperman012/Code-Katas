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
        if (_rolls.Count == 3)
        {
            return _rolls.Sum() + _rolls.Last();
        }
        return _rolls.Sum();

    }
}