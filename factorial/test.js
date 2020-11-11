const factorial = require("./factorial");

test("factorial function should exists", () => {
    expect(factorial).toBeDefined();
});

test("Should be factorial", () => {
    expect(factorial(4)).toEqual(24);
    expect(factorial(6)).toEqual(720);
})
