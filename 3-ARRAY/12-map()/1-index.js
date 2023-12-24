/*
The map() function is used to iterate over each element in an array, 
apply a transformation or operation to each element, and then collect the results into a new array. 
It doesn't modify the original array; instead, it creates a new array with the transformed values.
*/

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]
