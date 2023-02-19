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

    beforeEach(() => {
        bowlingGame = new BowlingGame();
    });

    it('calculates total score of an empty game ', () => {
        expect(bowlingGame.calculateScore()).to.eq(0);
    });
    it('adds simple frame to a game', () => {
        const frame = new Frame(9,0);
        bowlingGame.addFrames(frame);
        expect(bowlingGame.frameSummary()).to.deep.eq([frame])
    });
    it('adds strike frame to a game', () => {
        bowlingGame.addFrames(Frame.strike);
        expect(bowlingGame.frameSummary()).to.deep.eq([Frame.strike])
    });
    it('adds strike frames to a game', () => {
        bowlingGame.addFrames(Frame.strike, Frame.strike);
        expect(bowlingGame.frameSummary()).to.deep.eq([Frame.strike,Frame.strike])
    });
});
