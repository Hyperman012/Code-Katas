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
        const paper = Shape.paper;
        expect(paper.isPaper()).to.be.true;
        expect(paper.isRock()).to.be.false;
        expect(paper.isScissors()).to.be.false;
    });
    it("is rock shape", () => {
        const rock = Shape.rock;
        expect(rock.isPaper()).to.be.false;
        expect(rock.isRock()).to.be.true;
        expect(rock.isScissors()).to.be.false;
    });
    it("is scissors shape", () => {
        const scissors = Shape.scissors;
        expect(scissors.isPaper()).to.be.false;
        expect(scissors.isRock()).to.be.false;
        expect(scissors.isScissors()).to.be.true;
    });
    it("determines equality", () => {
        expect(Shape.rock.equals(Shape.rock)).to.be.true;
        expect(Shape.rock.equals(Shape.paper)).to.be.false;
        expect(Shape.rock.equals(Shape.scissors)).to.be.false;
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
            expect(
                new Round(
                    ourShape,
                    opponentShape,
                    new Shape(ourShape),
                    new Shape(opponentShape)
                ).totalScore()
            ).to.eq(score);
        });
    });
});
