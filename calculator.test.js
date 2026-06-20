
const { add } = require("./calculator");
const { subtract } = require("./calculator");
const { multiply } = require("./calculator");
const { divide } = require("./calculator");
const { square } = require("./calculator");
const { cube } = require("./calculator");


test("multiplies 2*3", () => {
    expect(multiply(2, 3)).toBe(6);

});

test('multiplies negative numbers', () => {
    expect(multiply(-3, -3)).toBe(9);
});

test('multiplies negative and positive numbers', () => {
    expect(multiply(-3, 3)).toBe(-9);
});

test('multiplies zero with any number', () => {
    expect(multiply(0, 3)).toBe(0);
});

test("adds 2+3", () => {
    expect(add(2, 3)).toBe(5);

});

test("add negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
})

test("subtracts 2-3", () => {
    expect(subtract(2, 3)).toBe(-1);

});

test("substracts two numbers", () => {
    expect(subtract(3, 3)).toBe(0);
});

test("substracts negative numbers", () => {
    expect(subtract(-3, -3)).toBe(0);
})

test("divides 2/3", () => {
    expect(divide(2, 3)).toBeCloseTo(0.6666666666666666);
});

test("divides two numbers", () => {
    expect(divide(3, 3)).toBe(1);
});

test("divide zero by anything", () => {
    expect(divide(0, 2)).toBe(0);
});

test('divide by zero', () => {
    expect(divide(10, 0)).toBe(Infinity);
})

test("squares 2", () => {
    expect(square(2)).toBe(4);
});

test("cubes 2", () => {
    expect(cube(2)).toBe(8);
});

test("calculatescube of 3", () => {
    expect(cube(3)).toBe(27);
});

