export class Frame {
    static gutter:Frame = new Frame(0,0)
    static strike: Frame = new Frame(10,0);
    constructor(private firstTry: number, private secondTry: number) {

    }

    score(): number {
        return this.firstTry + this.secondTry;
    }

    isSpare() {
        return !this.isStrike() && this.score() === 10;
    }

    private isStrike() {
        return this.firstTry === 10;
    }
}
export class BowlingGame {
    private frames: Frame[] = [];
    calculateScore(): number {
      return this.frames.reduce((score:number, frame:Frame) => score+=frame.score(), 0)
    }

    addFrames(...frames: Frame[]) {
        this.frames.push(...frames)
    }

    frameSummary(): Frame[] {
        return this.frames
    }
}
