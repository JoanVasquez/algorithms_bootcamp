const anagrams = require("./anagrams");

test("anagrams function should exists", () => {
  expect(anagrams).toBeDefined();
});

test("Should be anagrams", () => {
  expect(anagrams("Tar", "Rat")).toEqual(true);
  expect(anagrams("Arc", "Car")).toEqual(true);
  expect(anagrams("Elbow", "Below")).toEqual(true);
  expect(anagrams("State", "Taste")).toEqual(true);
  expect(anagrams("Cider", "Cried")).toEqual(true);
});

test("Should not be anagrams", () => {
  expect(anagrams("test", "abcd")).toEqual(false);
});
