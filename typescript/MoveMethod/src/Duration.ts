export class Duration {
    private readonly _minutes: number;
    private readonly _seconds: number;
    public static readonly Zero = new Duration(0, 0);

    constructor(minutes: number, seconds: number) {
        this._minutes = minutes;
        this._seconds = seconds;

    }

    public get minutes() {
        return this._minutes;
    }
    public get seconds() {
        return this._seconds;
    }

    public toString():string {
        return "Duration(" + this.minutes + " minutes, " + this.seconds + " seconds)";
    }

}