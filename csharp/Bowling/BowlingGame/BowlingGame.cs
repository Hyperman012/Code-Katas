namespace Default;

public class Game
{
    private int[] rolls = new int[21];
    private int currentRoll;

    public void Roll(int pins)
    {
        rolls[currentRoll++] = pins;
    }

    public int Score()
    {
        var score = 0;
        int rollIndex = 0;
        for (var frame = 0; frame < 10 ; frame++)
        {
            if (IsStrike(rollIndex))
            {
                score += 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
                rollIndex++;
            }
            else if (IsSpare(rollIndex))
            {
                score += 10 + rolls[rollIndex + 2];
                rollIndex += 2;
            }
            else
            {
                score += rolls[rollIndex] + rolls[rollIndex + 1];
                rollIndex += 2;
            }

        }

        return score;
    }

    private bool IsStrike(int rollIndex)
    {
        return rolls[rollIndex] == 10;
    }

    private bool IsSpare(int rollIndex)
    {
        return rolls[rollIndex] + rolls[rollIndex + 1] == 10;
    }
}


