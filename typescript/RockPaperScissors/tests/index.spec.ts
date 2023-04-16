import { expect } from "chai";
import "mocha";
import { Round } from "../src";

describe("Rock Paper Scissors", () => {
    it("returns 1 for choosing rock", () => {
        expect(new Round("X").score()).to.eq(1);
    });
    it("returns 2 for choosing paper", () => {
        expect(new Round("Y").score()).to.eq(2);
    });
});
