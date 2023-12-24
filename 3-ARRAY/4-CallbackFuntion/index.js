/*
A callback function is a function passed into another function as an argument, 
which is then invoked (call) inside the outer function to complete some kind of action. 
*/

let arr = [
  { no: 1, name: 'Tony' },
  { no: 2, name: 'Iron Man' }
];

// Searching object using the find method and callback function
let dummy = arr.find(function (element) {
  return element.name == 'Tony';
});

console.log(dummy);

/*
// Arrow Function
let dummy = arr.find(dummy => dummy.name == 'Tony'); 
console.log(dummy)
*/
