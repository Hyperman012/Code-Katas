export class Round {
    constructor(private ourShape: Shape) {}
    private shapeScoreMap = {
        [Shape.Rock]: 1,
        [Shape.Paper]: 2,
        [Shape.Scissors]: 3,
    };
    ourShapeScore(): number {
        return this.shapeScoreMap[this.ourShape];
    }
}

export enum Shape {
    Rock = "Rock",
    Paper = "Paper",
    Scissors = "Scissors",
}
