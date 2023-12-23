/*
Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/

let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}

// Function to list properties of an object
function listProperties(obj) {
    // Check if the input is an object
    if (typeof obj !== 'object' || obj === null) {
      console.log('Invalid input. Please provide a valid object.');
      return;
    }
  
    // Get the object's keys (properties)
    let properties = Object.keys(obj);
  
    // Print the properties as a comma-separated string
    console.log(properties.join(','));
}

// Call the function with the sample object
listProperties(student);



