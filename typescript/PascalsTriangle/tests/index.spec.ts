import { expect } from "chai";
import "mocha";

import { generateTriangle } from "../src";

describe("Pascal's Triangle", () => {
    it("Produces an empty list for 0", () => {
        expect(generateTriangle(0)).to.deep.eq([]);
    });
});
