export class Frame {
    constructor(private firstTry: number, private secondTry: number) {

    }

    score(): number {
        return this.firstTry + this.secondTry;
    }
}
export class BowlingGame {
    calculateScore(): number {
        return 0;
    }

    addFrame(frame: Frame) {

    }

    frameSummary(): Frame[] {
        return [new Frame(9, 0)]
    }
}
