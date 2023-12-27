/*
Write a JavaScript program to construct the following pattern, using a nested for loop.
*  
* *  
* * *  
* * * *  
* * * * *
*/

// Set the number of rows for the pattern
const numberOfRows = 5;

// Outer loop for rows
for (let i = 1; i <= numberOfRows; i++) {
  // Inner loop for printing '*' based on the current row number
  for (let j = 1; j <= i; j++) {
    document.write('* ');
  }
  // Move to the next line after each row is printed
  document.write('<br>');
}
