export class Round {
    constructor(private ourShape: Shape) {}

    score(): number {
        if (this.ourShape === Shape.Scissors) return 3;
        if (this.ourShape === Shape.Paper) return 2;
        return 1;
    }
}

export enum Shape {
    Rock,
    Paper,
    Scissors,
}
