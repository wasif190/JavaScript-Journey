// At Begin 
let arr1 = [2,3,4]; 
arr1.unshift(1); 
console.log(arr1)

/* 
Add a new book, { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }, 
to the beginning of the books array using the unshift() method and display the modified array.
*/

// Array of books
let books = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' }
];

// New book to add
let newBook = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' };

// Using unshift to add the new book to the beginning of the array
books.unshift(newBook);

// Displaying the modified array
console.log(books);
