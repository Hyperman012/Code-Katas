namespace Default;

public class Game
{
    private int[] rolls = new int[21];
    private int currentRoll = 0;

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
            if (rolls[rollIndex] == 10) //strike
            {
                score += 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
                rollIndex++;
            }
            else if (IsSpare(rollIndex)) // spare
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

    private bool IsSpare(int rollIndex)
    {
        return rolls[rollIndex] + rolls[rollIndex + 1] == 10;
    }
}


