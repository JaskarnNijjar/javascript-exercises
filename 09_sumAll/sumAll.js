const sumAll = function(int1, int2) {
    let numbers = [];
    let sum = 0;

    if (int1 < 0 || int2 < 0) return "ERROR";

    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";

    if (int1 > int2) {
        [int1, int2] = [int2, int1]
    }

    for (let i = int1; i <= int2; i++) {
        numbers.push(i);

    }

    for (let m = 0; m < numbers.length; m++) {
        sum+= numbers[m];

    }

    return sum;



};

// Do not edit below this line
module.exports = sumAll;


// # Exercise 09 - sumAll

// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```


// ## Hints

// - How will you ensure you're summing all integers within the correct range, no matter the order of the inputs?

// - Think about your sum's starting value. Then, how can you make sure every single number from the smaller input to the larger one (including both) gets added to it?