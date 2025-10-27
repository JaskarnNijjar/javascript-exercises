const reverseString = function(inputString) {
    let reversed = "";
    let characters = [];

    for (let i = 0; i < inputString.length; i++) {
        characters.push(inputString[i]);
    }

    for (let m = characters.length - 1; m >= 0; m--) {
        reversed += characters[m];
    }

    return reversed;


};

// Do not edit below this line
module.exports = reverseString;

// # Exercise 07 - Reverse a String

// Pretty simple, write a function called `reverseString` that returns its input, reversed!

// ```javascript
// reverseString('hello there') // returns 'ereht olleh'
// ```

// ## Hints
// Strings in JavaScript are immutable and, therefore, cannot be reversed directly in place. While there is no built-in method for this, several alternative approaches can be used, drawing on the concepts you've been introduced to in the lessons.

