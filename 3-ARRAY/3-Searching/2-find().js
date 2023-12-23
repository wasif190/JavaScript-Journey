// Using find (find method also use to searching in object) 
let arr1 = [1, 2, 3, 4]; 
let search = arr1.find(element => element > 3); 
console.log(search);

/*
Given an array of book objects with properties like title, author, and publication year, 
how can you use the find() method in JavaScript to locate the first book published after the year 2000? 
Provide an example using an array of books, and explain the role of the testing function within the find() method.
*/

// Array of book objects
let books = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
  { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', year: 1997 },
  { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
];

// Using find to get the first book published after the year 2000
let recentBook = books.find(book => book.year > 2000);

console.log(recentBook);
// Output: { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 }
