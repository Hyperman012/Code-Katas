import { expect } from 'chai';
import 'mocha';

import {  Frame } from '../src/BowlingGame';

describe('Frame', () => {
    it('calculates total score', () => {
        const frame = new Frame(0, 0);
        expect(frame.score()).to.eq(0);
    });
});
