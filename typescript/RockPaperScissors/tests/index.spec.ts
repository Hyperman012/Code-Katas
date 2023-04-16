import { expect } from "chai";
import "mocha";
import { Round, Shape } from "../src";

describe("Rock Paper Scissors", () => {
    it("returns 1 for choosing rock", () => {
        expect(new Round(Shape.Rock).score()).to.eq(1);
    });
    it("returns 2 for choosing paper", () => {
        expect(new Round(Shape.Paper).score()).to.eq(2);
    });
});
