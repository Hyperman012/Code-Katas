import { Shape } from "./Shape";
import { RoundResult } from "./RoundResult";

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
