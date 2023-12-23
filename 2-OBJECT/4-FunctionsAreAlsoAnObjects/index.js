/*
In JavaScript, functions are considered first-class citizens, 
which means they can be treated like any other variable. 
This implies that functions can be:
- assigned to variables, 
- passed as arguments to other functions, and 
- returned from functions just like objects. 
*/

// Function assigned to a variable
const add = function(a, b) {
    return a + b;
};

// Function passed as an argument to another function
function manipulate(a, b, operation) {
    return operation(a, b);
}

// Function returned from another function
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

// Using the example
const sum = manipulate(3, 4, add);
console.log(sum); // Output: 7

const double = createMultiplier(2);
const result = double(5);
console.log(result); // Output: 10
