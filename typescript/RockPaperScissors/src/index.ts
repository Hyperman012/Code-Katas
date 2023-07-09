import { Round } from "./round";
import { SecretStrategyGuideLine } from "./secretStrategyGuideLine";

export class StrategyGuide {
    constructor(private readonly guide: string[][]) {}

    static from(guideAsString: string) {
        return new StrategyGuide(
            guideAsString
                .split("\n")
                .filter((string) => string !== "")
                .map((roundAsString) => roundAsString.split(" "))
        );
    }

    score(): number {
        let totalScore = 0;
        for (const round of this.guide) {
            totalScore += this.getRound(round).totalScore();
        }

        return totalScore;
    }

    private getRound(round: string[]): Round {
        const opponentInput = round[0];
        const ourInput = round[1];
        return new SecretStrategyGuideLine().toRound(opponentInput, ourInput);
    }
}
