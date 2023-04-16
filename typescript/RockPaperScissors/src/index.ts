export class Round {
    constructor(private ourPlay: string, private ourShape: Shape) {}

    score(): number {
        if (this.ourPlay === "Y") return 2;
        return 1;
    }
}

export enum Shape {
    Rock,
    Paper,
}
