const palindromeNum = require("../palindrome_num/palindrome_num");

test("PalindromeNum function should exists", () => {
  expect(palindromeNum).toBeDefined();
});

test("Should be palindrome", () => {
  expect(palindromeNum(787)).toEqual(true);
  expect(palindromeNum(2332)).toEqual(true);
  expect(palindromeNum(353)).toEqual(true);
});

test("Should not be palindrome", () => {
  expect(palindromeNum(-121)).toEqual(false);
  expect(palindromeNum(-101)).toEqual(false);
});
