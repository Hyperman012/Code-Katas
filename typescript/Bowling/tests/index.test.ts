import { describe, expect, it } from "@jest/globals";
import {add} from "../src";

describe("add", () => {
      it("should add number to the given number", () => {
          expect(add(1, 2)).toBe(3);
      })
});
