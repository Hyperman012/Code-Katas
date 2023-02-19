export class Frame {
    static gutter:Frame = new Frame(0,0)
    static strike: Frame = new Frame(10,0);
    constructor(private firstTry: number, private secondTry: number) {

    }

    score(): number {
        return this.firstTry + this.secondTry;
    }
}
export class BowlingGame {
    private frames: Frame[] = [];
    calculateScore(): number {
        let sum = 0;
        this.frames.forEach(frame => {
            sum += frame.score();
        })
        return sum;
    }

    addFrames(...frames: Frame[]) {
        this.frames.push(...frames)
    }

    frameSummary(): Frame[] {
        return this.frames
    }
}
