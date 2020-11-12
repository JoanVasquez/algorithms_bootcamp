const fibonacci = require("./fibonacci");

test("Fibonacci function should exists", () => {
    expect(fibonacci).toBeDefined();
});

test("Calculating fibonacci", () => {
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(6)).toEqual(8);
});
