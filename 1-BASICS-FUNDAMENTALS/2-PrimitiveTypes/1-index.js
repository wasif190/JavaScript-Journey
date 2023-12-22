// NN BB SS U //

// Number - Represents numeric values
let age = 25; // integer
let price = 49.99; // floating-point number


// Null - Represents the intentional absence of any object value.
let nullValue = null;


// Boolean - Represents logical values: true or false
let isStudent = true;
let hasCar = false;


// BigInt - Represents integers of arbitrary precision
const bigIntValue = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
console.log(bigIntValue); // Outputs: 9007199254740992n


// String - Represents sequences of characters
let name = "John Doe";
let message = 'Hello, World!';


// Symbol - Represents a unique identifier in JavaScript
const symbol1 = Symbol('symbol1');
const symbol2 = Symbol('symbol2');

console.log(symbol1 === symbol2); // Outputs: false

const user = {
  name: 'John',
  [symbol1]: 'Secret Data',
};

console.log(user[symbol1]); // Outputs: Secret Data


// Undefined - Represents the absence of a value or an uninitialized variable
let undefinedVar;


