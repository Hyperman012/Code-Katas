import { expect } from "chai";
import "mocha";
import { Round } from "../src";
import { HandShape, Shape } from "../src/Shape";
import { RoundResult } from "../src/RoundResult";

describe("Rock Paper Scissors", () => {
    describe("Shape", () => {
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
            const paper = Shape.Paper;
            expect(paper.isPaper()).to.be.true;
            expect(paper.isRock()).to.be.false;
            expect(paper.isScissors()).to.be.false;
        });
        it("is rock shape", () => {
            const rock = Shape.Rock;
            expect(rock.isPaper()).to.be.false;
            expect(rock.isRock()).to.be.true;
            expect(rock.isScissors()).to.be.false;
        });
        it("is scissors shape", () => {
            const scissors = Shape.Scissors;
            expect(scissors.isPaper()).to.be.false;
            expect(scissors.isRock()).to.be.false;
            expect(scissors.isScissors()).to.be.true;
        });
        it("determines equality", () => {
            expect(Shape.Rock.equals(Shape.Rock)).to.be.true;
            expect(Shape.Rock.equals(Shape.Paper)).to.be.false;
            expect(Shape.Rock.equals(Shape.Scissors)).to.be.false;
        });
    });

    [
        {
            score: 0 + 3,
            ourShape: Shape.Scissors,
            opponentShape: Shape.Rock,
        },
        {
            score: 3 + 3,
            ourShape: Shape.Scissors,
            opponentShape: Shape.Scissors,
        },
        {
            score: 6 + 3,
            ourShape: Shape.Scissors,
            opponentShape: Shape.Paper,
        },
        {
            score: 6 + 2,
            ourShape: Shape.Paper,
            opponentShape: Shape.Rock,
        },
    ].forEach(({ score, ourShape, opponentShape }) => {
        it(`returns ${score} for choosing ${ourShape} and opponent choosing ${opponentShape}`, () => {
            expect(new Round(ourShape, opponentShape).totalScore()).to.eq(
                score
            );
        });
    });

    describe("Round Result", () => {
        it("determines tie", () => {
            expect(new RoundResult(Shape.Scissors, Shape.Scissors).isTie()).to
                .be.true;
        });
        it("determines winner for Paper vs Rock", () => {
            expect(new RoundResult(Shape.Paper, Shape.Rock).weWin()).to.be.true;
        });
        it("determines winner for Scissors vs Paper", () => {
            const weWin = new RoundResult(Shape.Scissors, Shape.Paper).weWin();
            expect(weWin).to.be.true;
        });
        it("determines loser for Scissors vs Rock", () => {
            const weWin = new RoundResult(Shape.Scissors, Shape.Rock).weWin();
            expect(weWin).to.be.false;
        });
    });
});
