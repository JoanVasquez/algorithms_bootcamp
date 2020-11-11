const reverseOne = require("./reverseStr").reverseStrOne;
const reverseTwo = require("./reverseStr").reverseStrTwo;

test("Reverse function one should exists", () => {
  expect(reverseOne).toBeDefined();
});

test("Reverse function two should exists", () => {
  expect(reverseTwo).toBeDefined();
});

test("Reverse should be olleh", () => {
  expect(reverseOne("hello")).toEqual("olleh");
});

test("Reverse should be olleh", () => {
  expect(reverseTwo("hello")).toEqual("olleh");
});

test("Reverse should be erawtfos", () => {
  expect(reverseOne("software")).toEqual("erawtfos");
});

test("Reverse should be erawtfos", () => {
  expect(reverseTwo("software")).toEqual("erawtfos");
});

test("Reverse should be false", () => {
  expect(reverseOne("software")).not.toEqual("erawtf");
});

test("Reverse should be false", () => {
  expect(reverseTwo("software")).not.toEqual("erawtf");
});
