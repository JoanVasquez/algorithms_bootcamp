const countUnique = require("./count_unique");

test("countUnique function should exists", () => {
    expect(countUnique).toBeDefined();
});

test("Should count unique values", () => {
    expect(countUnique([2,2,2,3,5,9,100,5])).toEqual(5);
    expect(countUnique([8,6,9,8])).toEqual(3);
})
