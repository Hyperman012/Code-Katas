import { Shape } from "./Shape";
import { RequestResult } from "./secretStrategyGuideLine";
export function determineShape(
    opponentShape: Shape,
    requestedResult: RequestResult
): Shape {
    if (requestedResult === RequestResult.Win)
        return determineWinningShape(opponentShape);

    if (requestedResult === RequestResult.Lose)
        return determineLosingShape(opponentShape);

    return determineDrawShape(opponentShape);
}

function determineWinningShape(opponentShape: Shape) {
    if (opponentShape.isPaper()) return Shape.Scissors;
    if (opponentShape.isScissors()) return Shape.Rock;
    return Shape.Paper;
}

function determineLosingShape(opponentShape: Shape) {
    if (opponentShape.isRock()) return Shape.Scissors;
    if (opponentShape.isScissors()) return Shape.Paper;
    return Shape.Rock;
}

function determineDrawShape(opponentShape: Shape) {
    return opponentShape;
}
