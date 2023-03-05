export class Frame {
    static gutter:Frame = new Frame(0,0)
    static strike: Frame = new Frame(10,0);
    constructor(public firstRoll: number, private secondRoll: number) {

    }

    totalPinCount(): number {
        return this.firstRoll + this.secondRoll;
    }

    isSpare() {
        return !this.isStrike() && this.totalPinCount() === 10;
    }

    isStrike() {
        return this.firstRoll === 10;
    }
}
export class BowlingGame {
    private frames: Frame[] = [];
    calculateScore(): number {
      return this.frames.reduce((score, frame, currentIndex) => this.addNextFrame(score,frame,currentIndex), 0)
    }

    private addNextFrame(previousScore: number, currentFrame: Frame, currentIndex:number) {
        const baseNewScore = previousScore + currentFrame.totalPinCount();
        return baseNewScore + this.bonusScoreFor(currentFrame, currentIndex);
    }


    private bonusScoreFor(currentFrame: Frame, currentIndex: number) {
        return this.spareBonusScore(currentFrame, currentIndex) + this.strikeBonusScore(currentFrame, currentIndex);
    }

    private spareBonusScore(frame: Frame, currentIndex: number) {
        if (!frame.isSpare()) {
            return 0;
        }
        return this.frames[currentIndex + 1].firstRoll;
    }

    private strikeBonusScore(frame: Frame, currentIndex: number): number {
        if(!frame.isStrike()) {
            return 0;
        }
        const nextFrame = this.frames[currentIndex + 1];
        return nextFrame.totalPinCount() + this.strikeBonusScore(nextFrame, currentIndex + 1);
    }

    addFrames(...frames: Frame[]) {
        this.frames.push(...frames)
    }

    frameSummary(): Frame[] {
        return this.frames
    }
}
