export class Frame {
    static gutter:Frame = new Frame(0,0)
    static strike: Frame = new Frame(10,0);
    constructor(private firstTry: number, private secondTry: number) {

    }

    totalPinCount(): number {
        return this.firstTry + this.secondTry;
    }

    isSpare() {
        return !this.isStrike() && this.totalPinCount() === 10;
    }

    private isStrike() {
        return this.firstTry === 10;
    }
}
export class BowlingGame {
    private frames: Frame[] = [];
    calculateScore(): number {
      return this.frames.reduce(this.addNextFrame, 0)
    }

    private addNextFrame(score: number, frame: Frame, currentIndex:number) {
        return score += frame.totalPinCount();
    }

    addFrames(...frames: Frame[]) {
        this.frames.push(...frames)
    }

    frameSummary(): Frame[] {
        return this.frames
    }
}
