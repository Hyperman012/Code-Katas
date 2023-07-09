import { expect } from "chai";
import "mocha";
import { StrategyGuideLine, Round, StrategyGuide } from "../src";
import { HandShape, Shape } from "../src/Shape";
import { RoundResult } from "../src/RoundResult";
import { aocInput } from "../src/adventOfCodeInput";

function determineShape(roundAsArray: string[]): Shape {
    return Shape.Scissors;
}

describe("Determine the correct play based on strategy", () => {
    it("loses with X", () => {
        const shapeToPlay = determineShape(["A X"]);
        expect(shapeToPlay).to.eq(Shape.Scissors);
    });

    it("draw with Y", () => {});
    it("win with Z", () => {});
});

describe("StrategyGuide", () => {
    const eightPointGame = ["A", "Y"];
    const onePointGame = ["B", "X"];

    it("scores one round A Y", () => {
        const score = new StrategyGuide([eightPointGame]).score();
        expect(score).to.eq(8);
    });
    it("scores one round B X", () => {
        const score = new StrategyGuide([onePointGame]).score();
        expect(score).to.eq(1);
    });

    it("scores two rounds", () => {
        const score = new StrategyGuide([
            eightPointGame,
            eightPointGame,
        ]).score();
        expect(score).to.eq(16);
    });

    it("scores three rounds", () => {
        const score = new StrategyGuide([
            onePointGame,
            onePointGame,
            onePointGame,
        ]).score();
        expect(score).to.eq(3);
    });

    it("creates Strategy guide from input", () => {
        const input = "A X";
        const guide = StrategyGuide.from(input);
        expect(guide).to.deep.eq(new StrategyGuide([["A", "X"]]));
    });
    it("creates Strategy guide from input", () => {
        const input = "A X\nA X";
        const guide = StrategyGuide.from(input);
        expect(guide).to.deep.eq(
            new StrategyGuide([
                ["A", "X"],
                ["A", "X"],
            ])
        );
    });
    it("filters out empty lines from input", () => {
        const input = "A X\nA X\n";
        const guide = StrategyGuide.from(input);
        expect(guide).to.deep.eq(
            new StrategyGuide([
                ["A", "X"],
                ["A", "X"],
            ])
        );
    });

    it("creates Strategy from AoC input", () => {
        const guide = StrategyGuide.from(aocInput);
        expect(guide.score()).to.eq(13484);
    });
});

describe("StrategyGuideLine", () => {
    it("creates round object", () => {
        const strategyGuideLine = new StrategyGuideLine();

        expect(strategyGuideLine.toRound("A", "Y")).to.deep.eq(
            new Round(Shape.Rock, Shape.Paper)
        );
    });

    it("creates round object 2", () => {
        const strategyGuideLine = new StrategyGuideLine();

        expect(strategyGuideLine.toRound("B", "X")).to.deep.eq(
            new Round(Shape.Paper, Shape.Rock)
        );
    });

    it("creates round object 3", () => {
        const strategyGuideLine = new StrategyGuideLine();

        expect(strategyGuideLine.toRound("C", "Z")).to.deep.eq(
            new Round(Shape.Scissors, Shape.Scissors)
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
            expect(new Round(opponentShape, ourShape).totalScore()).to.eq(
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
            expect(new RoundResult(Shape.Rock, Shape.Paper).weWin()).to.be.true;
        });
        it("for Scissors vs Paper", () => {
            const weWin = new RoundResult(Shape.Paper, Shape.Scissors).weWin();
            expect(weWin).to.be.true;
        });
        it("for Rock vs Scissors", () => {
            const weWin = new RoundResult(Shape.Scissors, Shape.Rock).weWin();
            expect(weWin).to.be.true;
        });
    });
    describe("losing", () => {
        it("for Scissors vs Rock", () => {
            const weWin = new RoundResult(Shape.Rock, Shape.Scissors).weWin();
            expect(weWin).to.be.false;
        });
        it("for Rock vs Paper", () => {
            const weWin = new RoundResult(Shape.Paper, Shape.Rock).weWin();
            expect(weWin).to.be.false;
        });
        it("for Paper vs Scissors", () => {
            const weWin = new RoundResult(Shape.Scissors, Shape.Paper).weWin();
            expect(weWin).to.be.false;
        });
    });
});
