export class Round {
    constructor(
        private ourShape: HandShape,
        private opponentShape: HandShape
    ) {}
    private shapeScoreMap = {
        [HandShape.Rock]: 1,
        [HandShape.Paper]: 2,
        [HandShape.Scissors]: 3,
    };
    ourShapeScore(): number {
        return this.shapeScoreMap[this.ourShape];
    }

    totalScore() {
        if (
            this.opponentShape === HandShape.Paper &&
            this.ourShape === HandShape.Scissors
        ) {
            return 9;
        }

        if (this.opponentShape === this.ourShape) {
            return this.ourShapeScore() + 3;
        }
        return this.ourShapeScore();
    }
}

export enum HandShape {
    Rock = "Rock",
    Paper = "Paper",
    Scissors = "Scissors",
}

export class Shape {
    private shapeScoreMap = {
        [HandShape.Rock]: 1,
        [HandShape.Paper]: 2,
        [HandShape.Scissors]: 3,
    };
    static scissors = new Shape(HandShape.Scissors);
    static rock = new Shape(HandShape.Rock);
    static paper = new Shape(HandShape.Paper);

    constructor(private shape: HandShape) {}

    score() {
        return this.shapeScoreMap[this.shape];
    }

    isPaper() {
        return this.shape === HandShape.Paper;
    }

    isRock() {
        return this.shape === HandShape.Rock;
    }

    isScissors() {
        return this.shape === HandShape.Scissors;
    }
}
