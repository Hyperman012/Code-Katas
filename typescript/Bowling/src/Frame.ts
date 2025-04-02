const STRIKE_PIN_COUNT = 10;

export class Frame {
    static gutter: Frame = new Frame(0, 0);
    static strike: Frame = new Frame(10, 0);

    constructor(
        private firstRoll: number,
        private secondRoll: number,
        private thirdRoll: number = 0
    ) {
    }

    totalPinCount(): number {
        return this.totalOfNextTwoRolls() + this.thirdRoll;
    }

    isSpare() {
        return !this.isStrike() && this.totalOfNextTwoRolls() === STRIKE_PIN_COUNT;
    }

    isStrike() {
        return this.firstRoll === STRIKE_PIN_COUNT;
    }

    totalOfNextTwoRolls() {
        return this.firstRoll + this.secondRoll;
    }

    totalOfNextRoll() {
        return this.firstRoll;
    }
}