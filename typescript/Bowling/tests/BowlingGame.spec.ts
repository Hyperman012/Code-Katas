import { expect } from 'chai';
import 'mocha';

import {  Frame } from '../src/BowlingGame';

describe('Frame', () => {
    it('Holds total score', () => {
        expect(new Frame(0, 0)).to.not.be.null
    });
});
