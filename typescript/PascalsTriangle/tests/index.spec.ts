import { expect } from "chai";
import "mocha";

import { firstRow, generateTriangle } from "../src";

describe("Pascal's Triangle", () => {
    it("Produces an empty list for 0", () => {
        expect(generateTriangle(0)).to.deep.eq([]);
    });
    it("Produces first row for number of rows 1", () => {
        expect(generateTriangle(1)).to.deep.eq([firstRow]);
    });
    it("produces expected rows for input of 2", () => {
        expect(generateTriangle(2)).to.deep.eq([firstRow, [1, 1]]);
    });
});
