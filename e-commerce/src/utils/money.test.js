import { it, expect, describe } from "vitest";
import { formatMoney } from "./money";

//test suite
describe("formatMoney", () => {
  it("formats 1999 cents as $19.99", () => {
    expect(formatMoney(19999999999)).toBe("$199999999.99");
  });

  it("displays two decimals", () => {
    expect(formatMoney(1090)).toBe("$10.90");
    expect(formatMoney(100)).toBe("$1.00");
  });
});
