import {Frame} from "./Frame";

export class FrameCollection {
    constructor(private frames: Frame[]) {
    }

    addFrames(...frames: Frame[]) {
        this.frames.push(...frames);
    }

    isFinalFrame(currentIndex: number) {
        return currentIndex + 1 === this.frames.length;
    }

    get(index: number): Frame {
        return this.frames[index];
    }

    aggregateScore(
        callback: (score: number, frame: Frame, currentIndex: number) => number
    ) {
        return this.frames.reduce(callback, 0);
    }
}