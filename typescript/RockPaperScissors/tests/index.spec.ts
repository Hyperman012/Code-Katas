import { expect } from "chai";
import "mocha";
import { Round, Shape } from "../src";

describe("Rock Paper Scissors", () => {
    [
        { score: 3, shape: Shape.Scissors },
        { score: 2, shape: Shape.Paper },
        { score: 1, shape: Shape.Rock },
    ].forEach(({ score, shape }) => {
        it(`returns ${score} for choosing ${shape}`, () => {
            expect(new Round(shape).ourShapeScore()).to.eq(score);
        });
    });
});
