export class Frame {
    constructor(private firstTry: number, private secondTry: number) {

    }

    score(): number {
        return this.firstTry + this.secondTry;
    }
}
export class BowlingGame {
    private frames: Frame[] = [];
    calculateScore(): number {
        return 0;
    }

    addFrame(frame: Frame) {
        this.frames.push(frame)
    }

    frameSummary(): Frame[] {
        return this.frames
    }
}
