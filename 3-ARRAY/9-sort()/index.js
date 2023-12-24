// Used to sort the elements of an array in place

const fruits = ['banana', 'apple', 'orange', 'kiwi'];
fruits.sort(); // sorting the elements alphabetically --> a, b, c,...
console.log(fruits); // Output: ['apple', 'banana', 'kiwi', 'orange']

const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 72 },
  { name: 'Charlie', score: 95 },
  { name: 'David', score: 64 }
];

// Sorting students based on their scores in descending order
students.sort((a, b) => b.score - a.score);
console.log(students);

/* 
Explanation of b.score - a.score  :

If the result is a negative number, 
it means that b.score is smaller than a.score, so b should come before a in the sorted order.

If the result is a positive number, 
it means that b.score is larger than a.score, so b should come after a in the sorted order.

If the result is 0, it means that the scores are equal, and the order doesn't change.
*/

 
/*
a: { name: 'Alice', score: 85 }
b: { name: 'Bob', score: 72 }
result = 72 - 85 = -13
*/

/*
In this case, we are sorting the students array based on the score property in descending order 
(from highest to lowest). 
The result will be:
[
  { name: 'Charlie', score: 95 },
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 72 },
  { name: 'David', score: 64 }
]
*/