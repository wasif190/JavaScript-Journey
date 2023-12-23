// Object to be cloned
let originalObj = { value: 10 };

// Cloning using Object.assign()
let clonedObj = Object.assign({}, originalObj);

console.log("Cloned Object", clonedObj);  // Output: { value: 10 }

// Modifying the original object
originalObj.value++;

console.log(originalObj); // Output: { value: 11 }
console.log(clonedObj);   // Output: { value: 10 }
