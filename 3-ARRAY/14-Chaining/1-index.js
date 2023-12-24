/*
The practice of calling multiple methods on an object or the result of a method, 
one after the other, in a single line of code.
*/

const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(num => num % 2 === 0)   // Filter even numbers --> [2, 4]
  .map(num => num * 2)            // Double each remaining number --> [4, 8]
  .reduce((sum, num) => sum + num, 0);  // Sum the doubled numbers --> 4 + 8 = 12

console.log(result); // Outputs: 12
