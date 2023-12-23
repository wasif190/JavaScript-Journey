/*
A constructor function is a blueprint for creating objects with the ‘new’ keyword. 
It sets up the object’s properties and methods using the ‘this' keyword
- new --> For creating objects
- this --> For Creating Properties and methods for an object
- Use PascalCase (also known as UpperCamelCase) for naming constructor functions.
*/

// Constructor Function
function Person(name, age) {
    // Properties
    this.name = name;
    this.age = age;

    // Method
    this.greet = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    };
}

// Creating Instances using the Constructor
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

// Using the Methods
person1.greet();  // Outputs: Hello, my name is Alice and I am 25 years old.
person2.greet();  // Outputs: Hello, my name is Bob and I am 30 years old.
