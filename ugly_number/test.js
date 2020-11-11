const uglyNumber = require("./ugly_number");

test("Ugly function should exists", () => {
  expect(uglyNumber).toBeDefined();
});

test("Expected to be true", () => {
  expect(uglyNumber(6)).toEqual(true);
  expect(uglyNumber(12)).toEqual(true);
  expect(uglyNumber(24)).toEqual(true);
  expect(uglyNumber(15)).toEqual(true);
});

test("Expected to be false", () => {
  expect(uglyNumber(19)).toEqual(false);
  expect(uglyNumber(23)).toEqual(false);
});
