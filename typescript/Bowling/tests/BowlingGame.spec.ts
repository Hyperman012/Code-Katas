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

    it('spare is a spare', () => {
        const frame = new Frame(0, 10);
        expect(frame.isSpare()).to.be.true;
    });
    it('strike is a not spare', () => {
        expect(Frame.strike.isSpare()).to.be.false;
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

    xit('calculates a game with one spare', () => {
        const spareFrame = new Frame(9,1);
        bowlingGame.addFrames(spareFrame, ninePinFrame)
        const scoreByFrame = (9+1+9)+9;
        expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
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
