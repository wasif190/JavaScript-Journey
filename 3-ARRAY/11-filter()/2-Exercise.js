/* 
Given an array of objects representing people, 
filter out the adults based on the age criterion (age greater than 18). 
Create a new array containing only the adult individuals.
*/

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 16 },
];
  
// Filter out adults
const adults = people.filter((person) => person.age > 18)
console.log(adults)