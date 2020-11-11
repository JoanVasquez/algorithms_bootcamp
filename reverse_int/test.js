const reverseInt = require("../reverse_int/reverseInt");

test("Reverse Int function should exists", () => {
  expect(reverseInt).toBeDefined();
});

test("Reverse should be 0", () => {
  expect(reverseInt(0)).toEqual(0);
});

test("Reverse should be 321", () => {
  expect(reverseInt(123)).toEqual(321);
});

test("Reverse should be -4785", () => {
  expect(reverseInt(-5874)).toEqual(-4785);
});

test("Reverse should be false", () => {
  expect(reverseInt(5874)).not.toEqual(-47856);
});
