import { expect } from "chai";
import "mocha";
import { add } from "../src";

describe("default", () => {
    it("adds", () => {
        expect(add(1, 1)).to.eq(2);
    });
});
