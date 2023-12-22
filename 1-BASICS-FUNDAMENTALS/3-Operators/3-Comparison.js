// Equal (==) - Checks if two values are equal
console.log(5 == '5'); // Outputs: true

// Strict Equal (===) - Checks if two values are equal and of the same type
console.log(5 === '5'); // Outputs: false

// Not Equal (!=) - Checks if two values are not equal
console.log(5 != '5'); // Outputs: false

// Strict Not Equal (!==) - Checks if two values are not equal or not of the same type
console.log(5 !== '5'); // Outputs: true

// Greater Than (>) - Checks if the left operand is greater than the right operand
console.log(10 > 5); // Outputs: true

// Less Than (<) - Checks if the left operand is less than the right operand
console.log(5 < 10); // Outputs: true

// Greater Than or Equal To (>=) - Checks if the left operand is greater than or equal to the right operand
console.log(10 >= 10); // Outputs: true

// Less Than or Equal To (<=) - Checks if the left operand is less than or equal to the right operand
console.log(5 <= 10); // Outputs: true


// Ternary Operator (? :) //

// A shorthand for the if-else statement, providing a concise way to write conditional expressions
// Syntax: condition ? expressionIfTrue : expressionIfFalse
let age = 25;
let message = (age >= 18) ? 'Adult' : 'Minor';
console.log(message); // Outputs: Adult
