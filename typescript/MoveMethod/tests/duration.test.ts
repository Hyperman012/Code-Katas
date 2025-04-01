import {describe, expect, it} from "@jest/globals";
import {Duration} from "../src/Duration";

describe("Duration", () => {
    describe("Two Durations", () => {
        it('Should be equal when empty/default', () => {
            expect(Duration.Zero).toEqual(new Duration(0,0));
        });

        it('Should be different when minutes are different', () => {
            expect(Duration.Zero).not.toEqual(new Duration(1,0));
        });

        it('Should be different when seconds are different', () => {
            expect(new Duration(0,40)).not.toEqual(new Duration(0,30))
        });

        it('Should be same in all combinations', () => {

            const twentySecond = new Duration(0,20);
            const oneMinute = new Duration(1,0);
            const oneMinuteTenSeconds = new Duration(1,10);
            expect(twentySecond).toEqual(new Duration(0,20));
            expect(oneMinute).toEqual(new Duration(1,0));
            expect(oneMinuteTenSeconds).toEqual(new Duration(1,10));
        });

    })
    it("should present a readable format", () => {
        const duration = new Duration(5, 32).toString();
        expect("Duration(5 minutes, 32 seconds)").toEqual(duration);

    })

});
