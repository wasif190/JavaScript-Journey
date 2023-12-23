// At Specific index 
let arr2 = [1, 2, 3,5]; 
arr2.splice(3,0,4); // Add 4 at index 3, 0 indicate delete 
console.log(arr2)

/*
Consider the following JavaScript array:
let fruits = ['apple', 'orange', 'banana', 'grape'];
How would you use the splice() method to replace the elements at index 1 and 2 with 
the elements 'mango', 'kiwi', and 'melon', 
resulting in the updated array:
['apple', 'mango', 'kiwi', 'melon', 'grape'];
*/

let fruits = ['apple', 'orange', 'banana', 'grape'];

// Using splice to replace and add elements
fruits.splice(1, 2, 'mango', 'kiwi', 'melon');
console.log(fruits);
// Output: ['apple', 'mango', 'kiwi', 'melon', 'grape']


// We start at index 1 ('orange').
// We remove 2 elements ('orange' and 'banana').
// We add three new elements ('mango', 'kiwi', 'melon').
