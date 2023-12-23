// In JavaScript, object cloning involves creating a copy of an existing object. 
/*
 Object cloning using iteration involves manually iterating over the properties of an object 
and creating a copy of each property in a new object. 
*/

// Object to be cloned
let originalObj = { value: 10 };

// Cloning using iteration
let clonedObj = {};

for (let key in originalObj) {
    clonedObj[key] = originalObj[key];
}

console.log("Cloned Object ", clonedObj);  // Output: { value: 10 }

// Modifying the original object
originalObj.value++;

console.log("Original - ", originalObj); // Output: { value: 11 }
console.log("Cloned - ", clonedObj);   // Output: { value: 10 }
