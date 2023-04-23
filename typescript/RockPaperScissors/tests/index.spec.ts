import { expect } from "chai";
import "mocha";
import { Round, HandShape, Shape } from "../src";

describe("Rock Paper Scissors", () => {
    [
        { score: 3, shape: HandShape.Scissors },
        { score: 2, shape: HandShape.Paper },
        { score: 1, shape: HandShape.Rock },
    ].forEach(({ score, shape }) => {
        it(`returns ${score} for choosing ${shape}`, () => {
            expect(new Shape(shape).score()).to.eq(score);
        });
    });

    it("is paper shape", () => {
        expect(new Shape(HandShape.Paper).isPaper()).to.be.true;
    });

    [
        {
            score: 3,
            ourShape: HandShape.Scissors,
            opponentShape: HandShape.Rock,
        },
        {
            score: 6,
            ourShape: HandShape.Scissors,
            opponentShape: HandShape.Scissors,
        },
        {
            score: 9,
            ourShape: HandShape.Scissors,
            opponentShape: HandShape.Paper,
        },
    ].forEach(({ score, ourShape, opponentShape }) => {
        it(`returns ${score} for choosing ${ourShape} and opponent choosing ${opponentShape}`, () => {
            expect(new Round(ourShape, opponentShape).totalScore()).to.eq(
                score
            );
        });
    });
});
