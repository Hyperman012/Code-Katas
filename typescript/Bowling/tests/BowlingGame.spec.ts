import { expect } from 'chai';
import 'mocha';

import {  Frame } from '../src/BowlingGame';

describe('Frame', () => {
    it('calculates a 0 score', () => {
        const frame = new Frame(0, 0);
        expect(frame.score()).to.eq(0);
    });
    it('calculates a score with 2 tries', () => {
        const frame = new Frame(1, 1);
        expect(frame.score()).to.eq(2);
    });
});
