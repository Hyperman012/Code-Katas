import { expect } from "chai";
import "mocha";
import { Round, Shape, ShapeClass } from "../src";

describe("Rock Paper Scissors", () => {
    [
        { score: 3, shape: Shape.Scissors },
        { score: 2, shape: Shape.Paper },
        { score: 1, shape: Shape.Rock },
    ].forEach(({ score, shape }) => {
        it(`returns ${score} for choosing ${shape}`, () => {
            expect(new ShapeClass(shape).score()).to.eq(score);
        });
    });

    xit("is paper shape", () => {
        expect(new ShapeClass(Shape.Paper).isPaper()).to.be.true;
    });

    [
        { score: 3, ourShape: Shape.Scissors, opponentShape: Shape.Rock },
        { score: 6, ourShape: Shape.Scissors, opponentShape: Shape.Scissors },
        { score: 9, ourShape: Shape.Scissors, opponentShape: Shape.Paper },
    ].forEach(({ score, ourShape, opponentShape }) => {
        it(`returns ${score} for choosing ${ourShape} and opponent choosing ${opponentShape}`, () => {
            expect(new Round(ourShape, opponentShape).totalScore()).to.eq(
                score
            );
        });
    });
});
