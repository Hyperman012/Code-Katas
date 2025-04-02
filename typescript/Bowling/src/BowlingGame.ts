import {Frame} from "./Frame";
import {FrameCollection} from "./FrameCollection";
export class BowlingGame {
  private frames: FrameCollection = new FrameCollection([]);

  calculateScore(): number {
    return this.frames.aggregateScore((score, frame, currentIndex) =>
      this.addNextFrame(score, frame, currentIndex)
    );
  }

  private addNextFrame(
    previousScore: number,
    currentFrame: Frame,
    currentIndex: number
  ) {
    const baseNewScore = previousScore + currentFrame.totalPinCount();
    if (this.isFinalFrame(currentIndex)) return baseNewScore;

    return baseNewScore + this.bonusScoreFor(currentFrame, currentIndex);
  }

  private isFinalFrame(currentIndex: number) {
    return this.frames.isFinalFrame(currentIndex);
  }

  private bonusScoreFor(currentFrame: Frame, currentIndex: number) {
    return (
      this.spareBonusScore(currentFrame, currentIndex) +
      this.strikeBonusScore(currentFrame, currentIndex)
    );
  }

  private spareBonusScore(frame: Frame, currentIndex: number) {
    if (!frame.isSpare()) return 0;

    return this.getFrame(currentIndex + 1).totalOfNextRoll();
  }

  private strikeBonusScore(frame: Frame, currentIndex: number): number {
    if (!frame.isStrike()) return 0;

    const nextFrame = this.getFrame(currentIndex + 1);
    if (!nextFrame.isStrike() || this.isFinalFrame(currentIndex + 1))
      return nextFrame.totalOfNextTwoRolls();

    const frameAfterNext = this.getFrame(currentIndex + 2);
    return nextFrame.totalPinCount() + frameAfterNext.totalOfNextRoll();
  }

  private getFrame(index: number): Frame {
    return this.frames.get(index);
  }

  addFrames(...frames: Frame[]) {
    this.frames.addFrames(...frames);
  }
}
