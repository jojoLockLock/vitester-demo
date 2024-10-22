import { describe, it, expect } from "vitest";
import { reverseString } from "./reverse-string";

describe("reverseString", () => {
  it("should reverse a regular string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("should return an empty string when input is empty", () => {
    expect(reverseString("")).toBe("");
  });

  it("should return the same string when input is a single character", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("should handle strings with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  it("should handle strings with special characters", () => {
    expect(reverseString("!@#")).toBe("#@!");
  });
});
