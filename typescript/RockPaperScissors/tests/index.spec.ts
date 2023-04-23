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
        const paper = new Shape(HandShape.Paper);
        expect(paper.isPaper()).to.be.true;
        expect(paper.isRock()).to.be.false;
    });
    it("is rock shape", () => {
        const rock = new Shape(HandShape.Rock);
        expect(rock.isPaper()).to.be.false;
        expect(rock.isRock()).to.be.true;
    });
    it("is scissors shape", () => {
        const scissors = new Shape(HandShape.Scissors);
        expect(scissors.isPaper()).to.be.false;
        expect(scissors.isRock()).to.be.false;
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
