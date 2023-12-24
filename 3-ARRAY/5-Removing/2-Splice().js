// array.splice(start, deleteCount, item1, item2, ...); //
// start: The index at which to start changing the array.If negative, it will begin that many elements from the end.
// deleteCount: The number of elements to remove
// item1, item2, ...: The elements to add to the array, beginning from the start index.

let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Remove 'orange' from the array
fruits.splice(2, 1);
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'kiwi']

// Replace 'banana' with 'mango' and 'kiwi' with 'pineapple'
fruits.splice(1, 1, 'mango', 'pineapple');
console.log(fruits); // Output: ['apple', 'mango', 'grape', 'pineapple']

// Add 'peach' and 'lemon' after 'mango'
fruits.splice(2, 0, 'peach', 'lemon');
console.log(fruits); // Output: ['apple', 'mango', 'peach', 'lemon', 'grape', 'pineapple']

// Remove the last two elements
fruits.splice(-2);
console.log(fruits); // Output: ['apple', 'mango', 'peach', 'lemon']
