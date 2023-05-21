import { Shape } from "./Shape";

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

export class RoundResult {
    constructor(private ourShape: Shape, private opponentShape: Shape) {}

    isTie() {
        return this.ourShape.equals(this.opponentShape);
    }

    weWin() {
        if (this.opponentShape.isRock() && this.ourShape.isPaper()) return true;
        return this.opponentShape.isPaper() && this.ourShape.isScissors();
    }
}
