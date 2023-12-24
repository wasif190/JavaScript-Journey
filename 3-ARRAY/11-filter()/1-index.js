// Used to create a new array with elements that pass a certain condition.

const numbers = [1, 2, 3, 4, 5];

// Filtering Odd numbers 
const oddNumbers = numbers.filter(function(num) {
  return num % 2 !== 0;
});
console.log(`Odd numbers are ${oddNumbers}`); 

// Filtering Even numebrs
const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(`Even numbers are ${evenNumbers}`);

