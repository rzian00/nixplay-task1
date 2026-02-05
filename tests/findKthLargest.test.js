const { findKthLargest } = require("../modules/findKthLargest");

describe("findKthLargest", () => {
  test("finds the 2nd largest number value", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  test("works with duplicates and finds the 4th largest number value", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });

  test("works with negative numbers and finds the 1st largest number value", () => {
    expect(findKthLargest([-1, -2, -3, -4, -5], 1)).toBe(-1);
  });

  test("k equals to nums' array length (to display smallest)", () => {
    expect(findKthLargest([7, 10, 4, 3, 20, 15], 6)).toBe(3);
  });

  test("array with one element", () => {
    expect(findKthLargest([42], 1)).toBe(42);
  });

  test("throws if k is exceed to the length of nums", () => {
    expect(() => findKthLargest([1, 2], 3)).toThrow();
  });

  test("throws if k is zero", () => {
    expect(() => findKthLargest([1, 2], 0)).toThrow();
  });

  test("throws if nums is not array", () => {
    expect(() => findKthLargest("abc", 1)).toThrow();
  });

  test("throws if nums is empty array", () => {
    expect(() => findKthLargest([], 1)).toThrow();
  });
});