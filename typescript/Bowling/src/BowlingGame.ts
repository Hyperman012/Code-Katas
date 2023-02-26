export class Frame {
    static gutter:Frame = new Frame(0,0)
    static strike: Frame = new Frame(10,0);
    constructor(public firstTry: number, private secondTry: number) {

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
      return this.frames.reduce((score, frame, currentIndex) => this.addNextFrame(score,frame,currentIndex), 0)
    }

    private addNextFrame(score: number, frame: Frame, currentIndex:number) {
        const currentFrame = frame.totalPinCount();
        if (frame.isSpare()){
            return score += currentFrame + this.frames[currentIndex +1].firstTry;
        }
        return score += currentFrame;
    }


    addFrames(...frames: Frame[]) {
        this.frames.push(...frames)
    }

    frameSummary(): Frame[] {
        return this.frames
    }
}
