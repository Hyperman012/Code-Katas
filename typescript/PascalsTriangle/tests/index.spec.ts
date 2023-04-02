import { expect } from "chai";
import "mocha";

import { firstRow, generateTriangle, Triangle, secondRow } from "../src";

describe("Pascal's Triangle", () => {
    it("Produces an empty list for 0", () => {
        expectCorrectTriangle(0, []);
    });

    it("Produces first row for number of rows 1", () => {
        expectCorrectTriangle(1, [firstRow]);
    });

    it("produces expected rows for input of 2", () => {
        expectCorrectTriangle(2, [firstRow, secondRow]);
    });

    it("produces third row", () => {
        expectCorrectTriangle(3, [firstRow, secondRow, [1, 2, 1]]);
    });

    it("produces fourth row", () => {
        expectCorrectTriangle(4, [
            firstRow,
            secondRow,
            [1, 2, 1],
            [1, 3, 3, 1],
        ]);
    });
});

function expectCorrectTriangle(rowCount: number, expectedTriangle: Triangle) {
    expect(generateTriangle(rowCount)).to.deep.eq(expectedTriangle);
}
