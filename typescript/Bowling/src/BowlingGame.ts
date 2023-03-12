import base = Mocha.reporters.base;

export class Frame {
    static gutter: Frame = new Frame(0, 0)
    static strike: Frame = new Frame(10, 0);

    constructor(private firstRoll: number, private secondRoll: number, private thirdRoll: number = 0) {
    }

    totalPinCount(): number {
        return this.totalOfNextTwoRolls() + this.thirdRoll;
    }

    isSpare() {
        return !this.isStrike() && this.totalPinCount() === 10;
    }

    isStrike() {
        return this.firstRoll === 10;
    }

    totalOfNextTwoRolls() {
        return this.firstRoll + this.secondRoll;
    }

    totalOfNextRoll() {
        return this.firstRoll;
    }
}

export class BowlingGame {
    private frames: Frame[] = [];

    calculateScore(): number {
        return this.frames.reduce((score, frame, currentIndex) => this.addNextFrame(score, frame, currentIndex), 0)
    }

    private addNextFrame(previousScore: number, currentFrame: Frame, currentIndex: number) {
        const baseNewScore = previousScore + currentFrame.totalPinCount();
        if (this.isFinalFrame(currentIndex)) {
            return baseNewScore
        }

        return baseNewScore + this.bonusScoreFor(currentFrame, currentIndex);
    }

    private isFinalFrame(currentIndex: number) {
        return (currentIndex + 1) === this.frames.length;
    }


    private bonusScoreFor(currentFrame: Frame, currentIndex: number) {
        return this.spareBonusScore(currentFrame, currentIndex) + this.strikeBonusScore(currentFrame, currentIndex);
    }

    private spareBonusScore(frame: Frame, currentIndex: number) {
        if (!frame.isSpare()) {
            return 0;
        }
        return this.frames[currentIndex + 1].totalOfNextRoll();
    }

    private strikeBonusScore(frame: Frame, currentIndex: number): number {
        if (!frame.isStrike()) return 0;

        const nextFrame = this.getFrame(currentIndex + 1);
        if (!nextFrame.isStrike() || this.isFinalFrame(currentIndex + 1)) return nextFrame.totalOfNextTwoRolls()

        const frameAfterNext = this.getFrame(currentIndex + 2);
        return nextFrame.totalPinCount() + frameAfterNext.totalOfNextRoll()
    }

    private getFrame(index: number): Frame {
        return this.frames[index];
    }

    addFrames(...frames: Frame[]) {
        this.frames.push(...frames)
    }

    frameSummary(): Frame[] {
        return this.frames
    }
}
