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
        return new SecretStrategyGuideLine().toRound(opponentInput, ourInput);
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

function determineWinningShape(opponentShape: Shape) {
    if (opponentShape.isPaper()) return Shape.Scissors;
    if (opponentShape.isScissors()) return Shape.Rock;
    return Shape.Paper;
}

function determineLosingShape(opponentShape: Shape) {
    if (opponentShape.isRock()) return Shape.Scissors;
    if (opponentShape.isScissors()) return Shape.Paper;
    return Shape.Rock;
}

function determineDrawShape(opponentShape: Shape) {
    return opponentShape;
}

export function determineShape(
    opponentShape: Shape,
    requestedResult: RequestResult
): Shape {
    if (requestedResult === RequestResult.Win)
        return determineWinningShape(opponentShape);

    if (requestedResult === RequestResult.Lose)
        return determineLosingShape(opponentShape);

    return determineDrawShape(opponentShape);
}

export class SecretStrategyGuideLine {
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
