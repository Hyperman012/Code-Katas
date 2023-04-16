export class Round {
    constructor(private ourPlay: string, private ourShape: Shape) {}

    score(): number {
        if (this.ourShape === Shape.Paper) return 2;
        return 1;
    }
}

export enum Shape {
    Rock,
    Paper,
}
