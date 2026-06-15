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

function multiplication(a, b) {
    return a * b; // NEW MULTIPLICATION FEATURE
}
function addition(a, b) {
    return a + b; // NEW ADDITION FEATURE
}

module.exports = { multiplication, addition };