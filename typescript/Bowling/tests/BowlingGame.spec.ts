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
    it('can have 3 rolls', () => {
        expect(new Frame(9,1,2).totalPinCount()).to.eq(12)
    });

});

describe('bowling game', () => {
    let bowlingGame: BowlingGame;
    const ninePinFrame = new Frame(9, 0);

    beforeEach(() => {
        bowlingGame = new BowlingGame();
    });

    it('adds simple frame to a game', () => {
        bowlingGame.addFrames(ninePinFrame);
        hasExpectedFrames([ninePinFrame]);
    });

    it('adds strike frame to a game', () => {
        bowlingGame.addFrames(Frame.strike);
        hasExpectedFrames([Frame.strike]);
    });

    it('adds strike frames to a game', () => {
        bowlingGame.addFrames(Frame.strike, Frame.strike);
        hasExpectedFrames([Frame.strike, Frame.strike]);
    });

    it('calculates total score of an empty game ', () => {
        expect(bowlingGame.calculateScore()).to.eq(0);
    });
    it('calculates total score of an game with all 9 pins ', () => {
        bowlingGame.addFrames(ninePinFrame, ninePinFrame, ninePinFrame, ninePinFrame, ninePinFrame, ninePinFrame, ninePinFrame, ninePinFrame, ninePinFrame, ninePinFrame);
        expect(bowlingGame.calculateScore()).to.eq(90);
    });

    it('calculates a game with one spare', () => {
        const spareFrame = new Frame(9, 1);
        bowlingGame.addFrames(spareFrame, ninePinFrame)
        const scoreByFrame = (9 + 1 + 9) + 9;
        expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
    });

    it('calculates the final frame with one spare', () => {
        const spareFrame = new Frame(9, 1, 2);
        bowlingGame.addFrames(spareFrame)
        const scoreByFrame = (9 + 1 + 2);
        expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
    });
    it('calculates the final frame with one strike', () => {
        const finalStrikeFrame = new Frame(10,2,2);
        bowlingGame.addFrames(finalStrikeFrame)
        const scoreByFrame = (10 + 2 + 2);
        expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
    });

    it('calculates a game with two spare', () => {
        const spareFrame = new Frame(9, 1);
        bowlingGame.addFrames(spareFrame, spareFrame, ninePinFrame)
        const scoreByFrame = (9 + 1 + 9) + (9 + 1 + 9) + 9;
        expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
    });

    function hasExpectedFrames(expectedFrames: Frame[]) {
        expect(bowlingGame.frameSummary()).to.deep.eq(expectedFrames)
    }

    describe('calculating a game with one strike and ', () => {
        beforeEach(() => {
            bowlingGame.addFrames(Frame.strike);
        });
        it('a frame 9/0', () => {
            bowlingGame.addFrames(ninePinFrame)
            const scoreByFrame = (10 + 9 + 0) + 9;
            expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
        });
        it('a frame of 6/0', () => {
            const sixPinFrame = new Frame(6, 0);
            bowlingGame.addFrames(sixPinFrame)
            const scoreByFrame = (10 + 6 + 0) + 6;
            expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
        });
        it('a frame of 6/1', () => {
            const sixPinFrame = new Frame(6, 1);
            bowlingGame.addFrames(sixPinFrame)
            const scoreByFrame = (10 + 6 + 1) + 7;
            expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
        });
        it('a frame of 0/6', () => {
            const sixPinFrame = new Frame(0, 6);
            bowlingGame.addFrames(sixPinFrame)
            const scoreByFrame = (10 + 0 + 6) + 6;
            expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
        });
        it('a strike and gutter', () => {
            bowlingGame.addFrames(Frame.strike, Frame.gutter)
            const scoreByFrame = (10 + 10 + 0) + (10 + 0 + 0) + 0;
            expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
        });
        it('a strike and 9/0', () => {
            bowlingGame.addFrames(Frame.strike, ninePinFrame)
            const scoreByFrame = (10 + 10 + 9) + (10 + 9 + 0) + (9 + 0);
            expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
        });
        it('2 more strikes and gutter', () => {
            bowlingGame.addFrames(Frame.strike, Frame.strike, Frame.gutter)
            const scoreByFrame = (10 + 10 + 10) + (10 + 10 + 0) + (10);
            expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
        });
        it('a strikes and frame of 6/1', () => {
            bowlingGame.addFrames(Frame.strike, new Frame(6, 1))
            const scoreByFrame = (10 + 10 + 6) + (10 + 6 + 1) + (6 + 1);
            expect(bowlingGame.calculateScore()).to.eq(scoreByFrame)
        });
    });
});
