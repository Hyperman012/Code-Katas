export class Round {
    constructor(private ourPlay: string) {}

    score(): number {
        if (this.ourPlay === "Y") return 2;
        return 1;
    }
}
