/*
The dynamic nature of objects refers to the ability to modify an object’s structure, 
including adding or removing properties and methods at runtime.
- Add / Remove
- Modify
*/

// Creating an empty object

let person = {}

// Adding properties dynamically 
person.name = "wasif"; 
person.age = 18; 
person.hobby = "Nothing"
console.log(person)

// Removing Property 
delete person.hobby;
console.log("After Deleted ", person)

// Modifying properties 
person.age = 19; 

// Adding a method dynamically 
person.greet = function () {     
    console.log("Hello, my name is " + this.name ); 
}; 
console.log("Adding Method ", person)
person.greet(); 
 