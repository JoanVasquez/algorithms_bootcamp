const maxChar = require("./max_char");

test("maxChar function should exists", () => {
  expect(maxChar).toBeDefined();
});

test("Finding the max char", () => {
  expect(maxChar("aaaaakslkdddd")).toEqual("a");
  expect(maxChar("expert")).toEqual("e");
  expect(maxChar("javascript")).toEqual("a");
});
