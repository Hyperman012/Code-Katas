import { expect } from "chai";
import "mocha";
import { Round } from "../src";

describe("default", () => {
    it("returns 1 for choosing rock", () => {
        expect(new Round().score()).to.eq(1);
    });
});
