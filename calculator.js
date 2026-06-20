//correct code
/*function add(a, b) {

    return a + b;

}*/
/*//quality error made purposely
function add(a, b) {
    let result = a + b;

    //  const unused = 100;  //variable defined but not used. This will fail the linting process.

    return result
}*/

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b;
}

function square(a) {
    return a * a
}

function cube(a) {
    return a * a * a
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add, subtract, divide, multiply, square, cube };
}