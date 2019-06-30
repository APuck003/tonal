import { interval, isNamed, note } from "../index";

describe("@tonal/tonal", () => {
  test("isNamed", () => {
    expect(isNamed(note("C4"))).toBe(true);
    expect(isNamed(interval("P4"))).toBe(true);
    expect(isNamed(note("X"))).toBe(true);

    expect(isNamed(undefined)).toBe(false);
    expect(isNamed("")).toBe(false);
  });
});
