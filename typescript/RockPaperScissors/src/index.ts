export class Round {
    constructor(private ourShape: Shape, private opponentShape: Shape) {}
    private shapeScoreMap = {
        [Shape.Rock]: 1,
        [Shape.Paper]: 2,
        [Shape.Scissors]: 3,
    };
    ourShapeScore(): number {
        return this.shapeScoreMap[this.ourShape];
    }

    totalScore() {
        if (
            this.opponentShape === Shape.Paper &&
            this.ourShape === Shape.Scissors
        ) {
            return 9;
        }

        if (this.opponentShape === this.ourShape) {
            return this.ourShapeScore() + 3;
        }
        return this.ourShapeScore();
    }
}

export enum Shape {
    Rock = "Rock",
    Paper = "Paper",
    Scissors = "Scissors",
}

export class ShapeClass {
    private shapeScoreMap = {
        [Shape.Rock]: 1,
        [Shape.Paper]: 2,
        [Shape.Scissors]: 3,
    };

    constructor(private shape: Shape) {}

    score() {
        return this.shapeScoreMap[this.shape];
    }
}
