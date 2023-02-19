import { expect } from 'chai';
import 'mocha';

import { BowlingGame, Frame } from '../src/BowlingGame';

describe('Frame', () => {
    it('has a 0 score', () => {
        expect(Frame.gutter.score()).to.eq(0);
    });
    it('has a score with 2 tries', () => {
        const frame = new Frame(1, 1);
        expect(frame.score()).to.eq(2);
    });
    it('has strike score', () => {
        expect(Frame.strike.score()).to.eq(10);
    });
    it('has spare score', () => {
        const frame = new Frame(0, 10);
        expect(frame.score()).to.eq(10);
    });
});

describe('bowling game', () => {
    let bowlingGame: BowlingGame;
    const ninePinFrame = new Frame(9,0);

    beforeEach(() => {
        bowlingGame = new BowlingGame();
    });

    it('calculates total score of an empty game ', () => {
        expect(bowlingGame.calculateScore()).to.eq(0);
    });
    it('calculates total score of an game with all 9 pins ', () => {
        bowlingGame.addFrames(ninePinFrame,ninePinFrame,ninePinFrame,ninePinFrame,ninePinFrame,ninePinFrame,ninePinFrame,ninePinFrame,ninePinFrame,ninePinFrame);
        expect(bowlingGame.calculateScore()).to.eq(90);
    });
    it('adds simple frame to a game', () => {
        bowlingGame.addFrames(ninePinFrame);
        hasExpectedFrames([ninePinFrame]);
    });
    function hasExpectedFrames(expectedFrames: Frame[]) {
        expect(bowlingGame.frameSummary()).to.deep.eq(expectedFrames)
    }
    it('adds strike frame to a game', () => {
        bowlingGame.addFrames(Frame.strike);
        hasExpectedFrames([Frame.strike]);
    });
    it('adds strike frames to a game', () => {
        bowlingGame.addFrames(Frame.strike, Frame.strike);
        hasExpectedFrames([Frame.strike, Frame.strike]);
    });
});
