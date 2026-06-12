//correct code
/*function add(a, b) {

    return a + b;

}*/
//quality error made purposely
function add(a, b) {
    let result = a + b;

    //  const unused = 100;  //variable defined but not used. This will fail the linting process.

    return result
}
module.exports = { add };