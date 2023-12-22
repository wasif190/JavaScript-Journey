/*
When we assign a reference type (like an object or an array) to a variable,
we actually creates a reference to the memory location where the object is stored.
as a result, chnages made to the original object will reflect in all references pointing to that memory location.
*/

let obj1 = {value: 5};
let obj2 = obj1;
// Here, 'obj2' references the same memory location as 'obj1'
obj1.value = 10;
console.log(obj2.value); // Output: 10