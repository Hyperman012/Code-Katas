import { Shape } from "./Shape";
import { RoundResult } from "./RoundResult";

export class StrategyGuide {
    constructor(private readonly guide: string[][]) {}

    score(): number {
        const opponentInput = this.guide[0][0];
        const ourInput = this.guide[0][1];
        return new StrategyGuideLine()
            .toRound(opponentInput, ourInput)
            .totalScore();
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
