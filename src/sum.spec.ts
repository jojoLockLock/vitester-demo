import { expect, test } from "vitest";
import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 0 + 0 to equal 0", () => {
  expect(sum(0, 0)).toBe(0);
});

test("adds -1 + -1 to equal -2", () => {
  expect(sum(-1, -1)).toBe(-2);
});

test("adds -1 + 1 to equal 0", () => {
  expect(sum(-1, 1)).toBe(0);
});

test("adds large numbers 1000 + 2000 to equal 3000", () => {
  expect(sum(1000, 2000)).toBe(3000);
});
