import { Shape } from "./Shape";
import { RoundResult } from "./RoundResult";

export class StrategyGuide {
    constructor(private readonly guide: string[][]) {}

    score(): number {
        let totalScore = 0;
        for (const round of this.guide) {
            const opponentInput = round[0];
            const ourInput = round[1];
            totalScore += new StrategyGuideLine()
                .toRound(opponentInput, ourInput)
                .totalScore();
        }

        return totalScore;
    }
}

interface InputShapeMap {
    [s: string]: Shape;
}

export class StrategyGuideLine {
    private opponentShapeMap: InputShapeMap = {
        A: Shape.Rock,
        B: Shape.Paper,
        C: Shape.Scissors,
    };
    private ourShapeMap: InputShapeMap = {
        X: Shape.Rock,
        Y: Shape.Paper,
        Z: Shape.Scissors,
    };
    toRound(opponentInput: string, ourInput: string) {
        return new Round(
            this.opponentShapeMap[opponentInput],
            this.ourShapeMap[ourInput]
        );
    }
}

export class Round {
    private readonly roundResult = new RoundResult(
        this.opponentShape,
        this.ourShape
    );

    constructor(private opponentShape: Shape, private ourShape: Shape) {}

    totalScore() {
        if (this.roundResult.weWin()) {
            return this.ourShape.score() + 6;
        }

        if (this.roundResult.isTie()) {
            return this.ourShape.score() + 3;
        }
        return this.ourShape.score();
    }
}
