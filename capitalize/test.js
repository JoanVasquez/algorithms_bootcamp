const capitalize = require("./capitalize");

test("Capitalize function should exists", () => {
  expect(capitalize).toBeDefined();
});

test("Should be capitalized", () => {
  expect(
    capitalize(
      "lorem ipsum is simply dummy text of the printing and typesetting industry"
    )
  ).toEqual(
    "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry"
  );
});
