import { Shape } from "./Shape";

export class RoundResult {
    constructor(private ourShape: Shape, private opponentShape: Shape) {}

    isTie() {
        return this.ourShape.equals(this.opponentShape);
    }

    weWin() {
        if (this.opponentShape.isScissors() && this.ourShape.isRock())
            return true;
        if (this.opponentShape.isRock() && this.ourShape.isPaper()) return true;
        return this.opponentShape.isPaper() && this.ourShape.isScissors();
    }
}
