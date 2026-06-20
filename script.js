document.addEventListener("DOMContentLoaded", () => {
    const { add, subtract, multiply, divide, square, cube } = typeof require !== 'undefined'
        ? require('./calculator')
        : window;// calling the global 'add' function from calculator.js

    const num1Input = document.getElementById("num1"); // getting the value of num1 input
    const num2Input = document.getElementById("num2"); // getting the value of num2 input
    const resultInput = document.getElementById("result"); // getting the value of result input

    const btnAdd = document.getElementById("btn-add"); // getting the value of add button
    const btnSubtract = document.getElementById("btn-subtract"); // getting the value of subtract button
    const btnMultiply = document.getElementById("btn-multiply"); // getting the value of multiply button
    const btnSquare = document.getElementById("btn-square"); // getting the value of square button
    const btnCube = document.getElementById("btn-cube"); // getting the value of cube button
    const btnDivide = document.getElementById("btn-divide"); // getting the value of divide button

    // Helper function to get input values as numbers
    function getInputs(requireSecond = true) {
        const val1 = parseFloat(num1Input.value); // converting the value of num1 input to a number
        const val2 = parseFloat(num2Input.value); // converting the value of num2 input to a number

        if (isNaN(val1)) { // checking if the value of num1 input is not a number
            resultInput.value = "Error: Input 1 must be a number";
            return null;
        }

        if (requireSecond && isNaN(val2)) { // checking if the value of num2 input is not a number

            resultInput.value = "Error: Input 2 must be a number";
            return null;
        }

        return { val1, val2 };
    }

    // Add event listeners for each calculation button
    btnAdd.addEventListener("click", () => {
        const inputs = getInputs(true);
        if (inputs) {
            // calling the global 'add' function from calculator.js
            resultInput.value = add(inputs.val1, inputs.val2);
        }
    });

    btnSubtract.addEventListener("click", () => {
        const inputs = getInputs(true);
        if (inputs) {
            // calling the global 'subtract' function from calculator.js
            resultInput.value = subtract(inputs.val1, inputs.val2);
        }
    });

    btnMultiply.addEventListener("click", () => {
        const inputs = getInputs(true);
        if (inputs) {
            // calling the global 'multiply' function from calculator.js
            resultInput.value = multiply(inputs.val1, inputs.val2);
        }
    });

    btnSquare.addEventListener("click", () => {
        const inputs = getInputs(false);
        if (inputs) {
            // calling the global 'square' function from calculator.js
            resultInput.value = square(inputs.val1);
        }
    });

    btnCube.addEventListener("click", () => {
        const inputs = getInputs(false);
        if (inputs) {
            // calling the global 'cube' function from calculator.js
            resultInput.value = cube(inputs.val1);
        }
    });

    btnDivide.addEventListener("click", () => {
        const inputs = getInputs(true);
        if (inputs) {
            // calling the global 'divide' function from calculator.js
            const res = divide(inputs.val1, inputs.val2);
            if (res === Infinity || res === -Infinity) {
                resultInput.value = "Cannot divide by zero";
            } else {
                resultInput.value = res;
            }
        }
    });
});
