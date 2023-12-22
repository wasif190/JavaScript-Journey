// For-In Loop:
// It's used to iterate over the countable properties of an object
const person = {
  name: 'John',
  age: 30,
  job: 'Developer',
};

for (let key in person) {
  console.log(`For-In Loop: ${key} - ${person[key]}`);
}

// For-Of Loop:
// It's used to iterate over iterable objects such as arrays, strings, map, sets, etc..
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(`For-Of Loop: ${num}`);
}

// ForEach Loop:
// It's is build-in method for arrays that executes a provided function once for each array element
const colors = ['red', 'green', 'blue'];

colors.forEach((color, index) => {
  console.log(`ForEach Loop: Index ${index} - ${color}`);
});
