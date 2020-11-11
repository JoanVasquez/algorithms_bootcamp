const palindrome = require("../palindrome/palindrome");

test("palindrome function should exists", () => {
  expect(palindrome).toBeDefined();
});

test("Should be palindrome", () => {
  expect(palindrome("Anna")).toEqual(true);
  expect(palindrome("Civic")).toEqual(true);
  expect(palindrome("Kayak")).toEqual(true);
  expect(palindrome("Level")).toEqual(true);
  expect(palindrome("Don't nod")).toEqual(true);
});

test("Should not be palindrome", () => {
  expect(palindrome("javascript")).toEqual(false);
});
