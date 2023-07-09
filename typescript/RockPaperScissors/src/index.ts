import { Shape } from "./Shape";
import { RoundResult } from "./RoundResult";

export class StrategyGuide {
    constructor(private readonly guide: string[][]) {}

    static from(guideAsString: string) {
        return new StrategyGuide(
            guideAsString
                .split("\n")
                .filter((string) => string !== "")
                .map((roundAsString) => roundAsString.split(" "))
        );
    }

    score(): number {
        let totalScore = 0;
        for (const round of this.guide) {
            totalScore += this.getRound(round).totalScore();
        }

        return totalScore;
    }

    private getRound(round: string[]): Round {
        const opponentInput = round[0];
        const ourInput = round[1];
        return new StrategyGuideLine().toRound(opponentInput, ourInput);
    }
}

interface InputShapeMap {
    [s: string]: Shape;
}

export enum RequestResult {
    Win,
    Lose,
    Draw,
}

export function determineShape(
    opponentShape: Shape,
    requestedResult: RequestResult
): Shape {
    if (requestedResult === RequestResult.Win) {
        if (opponentShape.isPaper()) return Shape.Scissors;
        return Shape.Paper;
    }

    if (requestedResult === RequestResult.Draw) {
        return opponentShape;
    }

    if (opponentShape.isRock() && requestedResult === RequestResult.Lose) {
        return Shape.Scissors;
    }
    if (opponentShape.isScissors()) return Shape.Paper;
    return Shape.Rock;
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
