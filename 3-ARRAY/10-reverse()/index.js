/*
Used to reverse the elements of an array. It modifies the array in place, 
meaning it changes the order of the elements in the original array without creating a new array.
The first element becomes the last, the second becomes the second-to-last, and so on.
*/

const fruits = ['apple', 'banana', 'cherry'];
fruits.reverse();
console.log(fruits); // Outputs: ['cherry', 'banana', 'apple']
