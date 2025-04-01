import {Duration} from "./Duration";
import {Track} from "./Track";

export class Playlist {
    readonly tracks: Track[] = [];

    get duration(): Duration {
        let total = new Duration(0, 0);

        this.tracks.forEach(track => {
            const trackDuration = track.duration();
            let totalSeconds = total.minutes * 60 + total.seconds;
            const durationSeconds = trackDuration.minutes * 60 + trackDuration.seconds

            totalSeconds += durationSeconds;

            total = new Duration(Math.floor(totalSeconds / 60), totalSeconds % 60);

        })
        return total;
    }

    addTrack(newTrack: Track) {
        this.tracks.push(newTrack);
    }
}