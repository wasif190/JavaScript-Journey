// Using indexOf 
let arr = [1, 2, 3, 4]; 
let index = arr.indexOf(3);  
console.log(index);


/*
Given an array of book objects representing titles and authors, 
how can you find the index of a book with the title '1984' using the indexOf() method?
*/

// Example array of books
let books = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

// Find the index of the book with the title '1984'
let indexOf1984 = books.findIndex(book => book.title === '1984');

console.log(indexOf1984); // Output: 2
