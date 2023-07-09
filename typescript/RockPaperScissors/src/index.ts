import { Round } from "./round";
import {
    SecretStrategyGuideLine,
    StrategyGuideLine,
    UltraTopSecretStrategyGuideLine,
} from "./secretStrategyGuideLine";

export class StrategyGuide {
    constructor(
        private readonly guide: string[][],
        private strategyGuideLine: StrategyGuideLine = new SecretStrategyGuideLine()
    ) {}

    static from(
        guideAsString: string,
        strategyGuideLine: StrategyGuideLine = new SecretStrategyGuideLine()
    ) {
        const guide = guideAsString
            .split("\n")
            .filter((string) => string !== "")
            .map((roundAsString) => roundAsString.split(" "));

        return new StrategyGuide(guide, strategyGuideLine);
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
        return this.strategyGuideLine.toRound(opponentInput, ourInput);
    }
}
