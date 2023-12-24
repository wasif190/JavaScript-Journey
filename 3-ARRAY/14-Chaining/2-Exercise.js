/*
You are given an array of words. Perform the following operations using array methods and string manipulation:

1. Filter out words with a length greater than 5.
2. Convert each remaining word to uppercase.
3. Sort the uppercase words alphabetically.
4. Concatenate the sorted words with hyphens ("-").

Use chaining to achieve this transformation and store the final result in the variable 'result'
*/

const words = ['apple', 'banana', 'cherry', 'date'];

const result = words
    .filter((word) => word.length > 5) 
    .map((word) => word.toUpperCase())
    .sort()
    .reduce((concatenated, word) => (`${concatenated} - ${word}`))

console.log(result);