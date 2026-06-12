const { add } = require("./calculator");
const { multiply } = require("./calculator");

test("adds 2+3", () => {
    expect(add(2, 3)).toBe(5);

});

test("adds 3+3", () => {
    expect(add(3, 3)).toBe(6);

});

test("adds 5+3", () => {
    expect(add(5, 3)).toBe(8);

});

test("multiply 2*3", () => {
    expect(multiply(2, 3)).toBe(6);

});

test('multiplies two numbers', () => {
    expect(multiply(3, 3)).toBe(9);
});