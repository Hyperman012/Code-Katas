import { Shape } from "./Shape";
import { RoundResult } from "./RoundResult";
export class AwesomeAppleSauce {
    toRound(opponentInput: string, ourInput: string) {
        if (opponentInput === "B") return new Round(Shape.Paper, Shape.Rock);
        return new Round(Shape.Rock, Shape.Paper);
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
