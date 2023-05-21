import { expect } from "chai";
import "mocha";
import { AwesomeAppleSauce, Round } from "../src";
import { HandShape, Shape } from "../src/Shape";
import { RoundResult } from "../src/RoundResult";

describe("AwesomeApplesause", () => {
    it("creates round object", () => {
        const testObj = new AwesomeAppleSauce();

        expect(testObj.toRound("A", "Y")).to.deep.eq(
            new Round(Shape.Paper, Shape.Rock)
        );
    });
});

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
describe("Rock Paper Scissors", () => {
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
});
describe("Round Result", () => {
    it("ties", () => {
        expect(new RoundResult(Shape.Scissors, Shape.Scissors).isTie()).to.be
            .true;
    });
    describe("winning", () => {
        it("for Paper vs Rock", () => {
            expect(new RoundResult(Shape.Paper, Shape.Rock).weWin()).to.be.true;
        });
        it("for Scissors vs Paper", () => {
            const weWin = new RoundResult(Shape.Scissors, Shape.Paper).weWin();
            expect(weWin).to.be.true;
        });
        it("for Rock vs Scissors", () => {
            const weWin = new RoundResult(Shape.Rock, Shape.Scissors).weWin();
            expect(weWin).to.be.true;
        });
    });
    describe("losing", () => {
        it("for Scissors vs Rock", () => {
            const weWin = new RoundResult(Shape.Scissors, Shape.Rock).weWin();
            expect(weWin).to.be.false;
        });
        it("for Rock vs Paper", () => {
            const weWin = new RoundResult(Shape.Rock, Shape.Paper).weWin();
            expect(weWin).to.be.false;
        });
        it("for Paper vs Scissors", () => {
            const weWin = new RoundResult(Shape.Paper, Shape.Scissors).weWin();
            expect(weWin).to.be.false;
        });
    });
});
