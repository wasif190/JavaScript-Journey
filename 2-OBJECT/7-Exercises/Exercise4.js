/*
Write a JavaScript program to display the reading status
(i.e. display book name, author name and reading status) of the following books.
*/

let library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false
    }
];
  
// Function to display reading status
function displayReadingStatus(books) {
    for (let book of books) {
      let status = book.readingStatus ? 'already read' : 'not read yet';
      console.log(`Book Title: ${book.title}, Author: ${book.author}, Reading Status: ${status}`);
    }
}
  
// Call the function with the library array
displayReadingStatus(library);
  