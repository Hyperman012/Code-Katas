import { Shape } from "./Shape";
import { RoundResult } from "./RoundResult";
export class AwesomeAppleSauce {
    toRound(opponentInput: string, ourInput: string) {
        if (opponentInput === "B") return new Round(Shape.Rock, Shape.Paper);
        return new Round(Shape.Paper, Shape.Rock);
    }
}

export class Round {
    private readonly roundResult = new RoundResult(
        this.ourShape,
        this.opponentShape
    );

    constructor(private ourShape: Shape, private opponentShape: Shape) {}

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
