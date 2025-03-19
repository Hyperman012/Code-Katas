import { describe, expect, it } from "@jest/globals";
import {Game} from "../src/Game";

describe("Game", () => {
    it('should return 0', () => {
        expect(new Game().score()).toBe(0);
    });
});
