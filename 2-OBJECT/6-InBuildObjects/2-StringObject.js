// Already we covered about string and its method in --> 1-BASICS-FUNDAMENTALS/6-Strings //

// Primitive String
let firstName = 'Tony';
console.log(typeof(firstName)); // Output: String

// String Object
let lastName = new String('Stark'); // [String: 'Stark']
console.log(lastName)
console.log(typeof(lastName)); // Output: Object

// Strings in JavaScript are immutable, meaning their values cannot be changed once they are created.


// Mutable Example (Array): //
let mutableArray = [1, 2, 3, 4];
// Mutable operation: Changing the value at a specific index
mutableArray[2] = 10;
console.log("Mutable Array:", mutableArray); // Output: [1, 2, 10, 4]


// Immutable Example (String): //
let originalString = "Hello";
// Immutable operation: Creating a new string with a modified value
let modifiedString = originalString.replace("e", "a");
console.log("Original String:", originalString);   // Output: Hello
console.log("Modified String:", modifiedString);   // Output: Hallo

