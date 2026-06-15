
const { multiplication } = require("./calculator");
const { addition } = require("./calculator");


test("multiplies 2*3", () => {
    expect(multiplication(2, 3)).toBe(6);

});

test('multiplies two numbers', () => {
    expect(multiplication(3, 3)).toBe(9);
});

test("adds 2+3", () => {
    expect(addition(2, 3)).toBe(5);

});