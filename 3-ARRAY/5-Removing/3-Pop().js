// Remove the last element from an array and returns that element.

let fruits = ['apple', 'banana', 'orange', 'grape'];
let removedFruit = fruits.pop();

console.log('Removed Fruit:', removedFruit); // Output: 'grape'
console.log('Updated Array:', fruits); // Output: ['apple', 'banana', 'orange']

// Simulation of a stack using an array
let stack = [];

// Push elements onto the stack
stack.push('Task 1');
stack.push('Task 2');
stack.push('Task 3');

console.log('Original Stack:', stack); // Output: ['Task 1', 'Task 2', 'Task 3']

// Perform tasks and pop them off the stack
let currentTask = stack.pop();
console.log('Current Task:', currentTask); // Output: 'Task 3'
console.log('Updated Stack:', stack); // Output: ['Task 1', 'Task 2']

// Perform more tasks
stack.push('Task 4');
stack.push('Task 5');

console.log('Updated Stack:', stack); // Output: ['Task 1', 'Task 2', 'Task 4', 'Task 5']
