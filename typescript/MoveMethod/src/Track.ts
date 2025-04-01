import {Duration} from "./Duration";

export class Track {

    private readonly _duration:Duration;

    constructor(artist: string, title: string, album: string, duration: Duration) {
        this._duration = duration;

    }

    public duration(): Duration {
        return this._duration;
    }
}