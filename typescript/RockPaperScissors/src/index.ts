export class Round {
    constructor(private ourShape: Shape, private opponentShape: Shape) {}

    totalScore() {
        if (this.opponentShape.isPaper() && this.ourShape.isScissors()) {
            return 9;
        }

        if (this.isTie()) {
            return this.ourShape.score() + 3;
        }
        return this.ourShape.score();
    }

    private isTie() {
        return this.opponentShape.equals(this.ourShape);
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
    static Scissors = new Shape(HandShape.Scissors);
    static Rock = new Shape(HandShape.Rock);
    static Paper = new Shape(HandShape.Paper);

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

    equals(otherShape: Shape) {
        return this.shape === otherShape.shape;
    }

    toString(): string {
        return this.shape;
    }
}
