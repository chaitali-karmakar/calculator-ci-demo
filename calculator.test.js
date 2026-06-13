
const { multiplication } = require("./calculator");


test("multiplies 2*3", () => {
    expect(multiplication(2, 3)).toBe(6);

});

test('multiplies two numbers', () => {
    expect(multiplication(3, 3)).toBe(9);
});