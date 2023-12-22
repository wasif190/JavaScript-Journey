/* 
When we assign a primitive value to a variable,a copy of that value is created and stored in the variable. 
Any changes made to the original value won't affect the copied value, and vice versa
*/

let x = 5;
let y = x;
console.log(`y is ${y}`); // Output: 5
x = 10;
console.log(`x is now ${x}`); // Output: 10

