import { expect } from "chai";
import "mocha";

import {
    firstRow,
    generateTriangle,
    Triangle,
    secondRow,
    createNextRow,
} from "../src";

describe("Pascal's Triangle", () => {
    describe("createNextRow", () => {
        it("creates 4th row from 3rd", () => {
            expect(createNextRow([1, 2, 1])).to.deep.eq([1, 3, 3, 1]);
        });

        it("creates 3rd row from 2nd", () => {
            expect(createNextRow([1, 1])).to.deep.eq([1, 2, 1]);
        });
    });
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
