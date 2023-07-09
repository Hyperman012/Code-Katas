import { Round } from "./round";
import { Shape } from "./Shape";

import { determineShape } from "./determineShape";

interface InputShapeMap {
    [s: string]: Shape;
}

interface InputRequestResultMap {
    [s: string]: RequestResult;
}

export enum RequestResult {
    Win,
    Lose,
    Draw,
}
interface StrategyGuideLine {
    toRound(opponentInput: string, ourInput: string): Round;
}

export class UltraTopSecretStrategyGuideLine implements StrategyGuideLine {
    private ourShapeMap: InputRequestResultMap = {
        X: RequestResult.Lose,
        Y: RequestResult.Draw,
        Z: RequestResult.Win,
    };

    toRound(opponentInput: string, ourInput: string): Round {
        const opponentShape = getOpponentShape(opponentInput);
        const ourShape = determineShape(
            opponentShape,
            this.ourShapeMap[ourInput]
        );

        return new Round(opponentShape, ourShape);
    }
}

export class SecretStrategyGuideLine implements StrategyGuideLine {
    private ourShapeMap: InputShapeMap = {
        X: Shape.Rock,
        Y: Shape.Paper,
        Z: Shape.Scissors,
    };

    toRound(opponentInput: string, ourInput: string) {
        return new Round(
            getOpponentShape(opponentInput),
            this.ourShapeMap[ourInput]
        );
    }
}

const opponentShapeMap: InputShapeMap = {
    A: Shape.Rock,
    B: Shape.Paper,
    C: Shape.Scissors,
};

function getOpponentShape(opponentInput: string) {
    return opponentShapeMap[opponentInput];
}
