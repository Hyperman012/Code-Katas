import { Shape } from "./Shape";

export class Round {
    constructor(private ourShape: Shape, private opponentShape: Shape) {}

    totalScore() {
        if (this.weWin()) {
            return this.ourShape.score() + 6;
        }

        if (this.isTie()) {
            return this.ourShape.score() + 3;
        }
        return this.ourShape.score();
    }

    private weWin() {
        if (this.opponentShape.isRock() && this.ourShape.isPaper()) return true;
        return this.opponentShape.isPaper() && this.ourShape.isScissors();
    }

    private isTie() {
        return new RoundRules(this.ourShape, this.opponentShape).isTie();
    }
}

export class RoundRules {
    constructor(private ourShape: Shape, private opponentShape: Shape) {}

    isTie() {
        return this.ourShape.equals(this.opponentShape);
    }

    weWin() {}
}
