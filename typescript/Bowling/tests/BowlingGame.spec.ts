import { expect } from 'chai';
import 'mocha';

import { BowlingGame, Frame } from '../src/BowlingGame';

describe('Frame', () => {
    it('has a 0 score', () => {
        expect(Frame.gutter.totalPinCount()).to.eq(0);
    });
    it('has a score with 2 tries', () => {
        const frame = new Frame(1, 1);
        expect(frame.totalPinCount()).to.eq(2);
    });
    it('has strike score', () => {
        expect(Frame.strike.totalPinCount()).to.eq(10);
    });
    it('has spare score', () => {
        const frame = new Frame(0, 10);
        expect(frame.totalPinCount()).to.eq(10);
    });

    it('spare is a spare', () => {
        const frame = new Frame(0, 10);
        expect(frame.isSpare()).to.be.true;
    });
    it('strike is a not spare', () => {
        expect(Frame.strike.isSpare()).to.be.false;
    });
    it('gutter is not a spare', () => {
        expect(Frame.gutter.isSpare()).to.be.false;
    });
    it('strike is a strike', () => {
        expect(Frame.strike.isStrike()).to.be.true;
    });
    it('spare is not a strike', () => {
        const frame = new Frame(0, 10);
        expect(frame.isStrike()).to.be.false;
    });
    it('gutter is not a strike', () => {
        expect(Frame.gutter.isStrike()).to.be.false;
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

    it('calculates a game with one spare', () => {
        const spareFrame = new Frame(9,1);
        bowlingGame.addFrames(spareFrame, ninePinFrame)
        const scoreByFrame = (9+1+9)+9;
        expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
    });

    it('calculates a game with two spare', () => {
        const spareFrame = new Frame(9,1);
        bowlingGame.addFrames(spareFrame, spareFrame, ninePinFrame)
        const scoreByFrame = (9+1+9) + (9+1+9) + 9;
        expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
    });

    it('calculates a game with one strike', () => {
        bowlingGame.addFrames(Frame.strike, ninePinFrame)
        const scoreByFrame = (10+9+0) + 9;
        expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
    });

    it('calculates a game with one strike and a frame of 6', () => {
        const sixPinFrame = new Frame(6, 0);
        bowlingGame.addFrames(Frame.strike, sixPinFrame)
        const scoreByFrame = (10+6+0) + 6;
        expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
    });
    it('calculates a game with one strike and a frame of 6/1', () => {
        const sixPinFrame = new Frame(6, 1);
        bowlingGame.addFrames(Frame.strike, sixPinFrame)
        const scoreByFrame = (10+6+1) + 7;
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
