const repeatString = function(string, num) {
    let newString = "";

    if (num < 0) { 
        return "ERROR";
    }

    for (let i = 0; i < num; i++) {
        newString = newString + string;

    }

    return newString;

};

// Do not edit below this line
module.exports = repeatString;

// Write a function that simply repeats the string a given number of times:

// ```javascript

// repeatString('hey', 3) // returns 'heyheyhey'
// ```

// This function will take two arguments, `string` and `num`.

// Use loops to implement `repeatString` rather than using the builtin `String.prototype.repeat` which has the same behaviour.

// *Note:* The exercises after this one will not have arguments provided as this one does - you will need to provide them yourself from now on. So read each exercise's README carefully to see what kinds of arguments will be expected.