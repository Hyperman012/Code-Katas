import { expect } from 'chai';
import 'mocha';

import { add } from '../src';

describe('test', () => {
    it('adds 1 + 2', () => {
        expect(add(1, 2)).to.eq(3);
    });
});
