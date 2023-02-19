import { expect } from 'chai';
import 'mocha';

import { BowlingGame, Frame } from '../src/BowlingGame';

describe('Frame', () => {
    it('has a 0 score', () => {
        const frame = new Frame(0, 0);
        expect(frame.score()).to.eq(0);
    });
    it('has a score with 2 tries', () => {
        const frame = new Frame(1, 1);
        expect(frame.score()).to.eq(2);
    });
    it('has strike score', () => {
        const frame = new Frame(10, 0);
        expect(frame.score()).to.eq(10);
    });
    it('has spare score', () => {
        const frame = new Frame(0, 10);
        expect(frame.score()).to.eq(10);
    });
});



describe('bowling game', () => {
    it('calculates total score of game of all misses', () => {
        const bowlingGame = new BowlingGame();
        expect(bowlingGame.calculateScore()).to.eq(0);
    });
});
