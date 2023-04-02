import { expect } from "chai";
import "mocha";

import { firstRow, generateTriangle, secondRow } from "../src";

function expectCorrectTriangle(rowCount: number, expectedTriangle: number[][]) {
    expect(generateTriangle(rowCount)).to.deep.eq(expectedTriangle);
}

describe("Pascal's Triangle", () => {
    it("Produces an empty list for 0", () => {
        expect(generateTriangle(0)).to.deep.eq([]);
    });
    it("Produces first row for number of rows 1", () => {
        expect(generateTriangle(1)).to.deep.eq([firstRow]);
    });
    it("produces expected rows for input of 2", () => {
        expectCorrectTriangle(2, [firstRow, secondRow]);
    });
});
