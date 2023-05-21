import { Shape } from "./Shape";

export class RoundResult {
    constructor(private ourShape: Shape, private opponentShape: Shape) {}

    isTie() {
        return this.ourShape.equals(this.opponentShape);
    }

    weWin() {
        if (this.isRockVsScissors()) return true;
        if (this.isPaperVsRock()) return true;
        return this.isScissorsVsPaper();
    }

    private isScissorsVsPaper() {
        return this.ourShape.isScissors() && this.opponentShape.isPaper();
    }

    private isPaperVsRock() {
        return this.ourShape.isPaper() && this.opponentShape.isRock();
    }

    private isRockVsScissors() {
        return this.ourShape.isRock() && this.opponentShape.isScissors();
    }
}
