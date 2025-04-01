import {describe, expect, it} from "@jest/globals";
import {Playlist} from "../src/Playlist";
import {Duration} from "../src/Duration";
import {Track} from "../src/Track";

describe("Playlist", () => {
    it("Should has zero duration when empty", () => {
        const playlist = new Playlist();
        const duration:Duration = playlist.duration;

        expect(duration).toEqual(Duration.Zero);

    })

    it("Should have an equal duration to the single song in playlist", () => {
        const track = new Track("artist", "title", "album", new Duration(5,0));
        const playlist = new Playlist();
        playlist.addTrack(track);
        const duration = playlist.duration

        expect(duration).toEqual(new Duration(5,0));

    })

    it('should sum duration of all tracks', () => {
        const firstTrack = new Track("a", "b", "c", new Duration(1, 0));
        const secondTrack = new Track("b", "a", "d", new Duration(2, 20));

        var playlist =  new Playlist();
        playlist.addTrack(firstTrack);
        playlist.addTrack(secondTrack);

        const duration = playlist.duration;
        expect(duration).toEqual(new Duration(3,20));
    });


});
