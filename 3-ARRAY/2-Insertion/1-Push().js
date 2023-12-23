// At End  
let arr = [1, 2, 3]; 
arr.push(4); 
console.log(arr); 

/*
Create a JavaScript program that simulates an interactive fruit basket. 
The program should prompt the user to specify the number of fruits they want to add to the basket and
then interactively collect the names of those fruits. Finally, display the updated fruit basket.
*/

// Creating an array of fruits
let fruits = ['apple', 'orange', 'banana'];

// Creating a function to add new fruits to the array
function addFruits() {
    // Get the number of fruits to add
    let numToAdd = prompt('How many fruits do you want to add?');

    // Validate if the input is a valid number
    if (isNaN(numToAdd) || numToAdd <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    // Loop to add the specified number of fruits
    for (let i = 0; i < numToAdd; i++) {
    // Prompt the user for the name of the fruit
    let newFruit = prompt(`Enter the name of fruit ${i + 1}:`);

    // Check if the user entered a valid fruit name
    if (newFruit.trim() === '') {
        alert('Please enter a valid fruit name.');
        i--; // Decrement i to re-prompt for the current iteration
        continue;
    }

    // Add the new fruit to the array using push()
    fruits.push(newFruit);
  }

  // Display the updated array
  console.log('Updated array of fruits:', fruits);
}

// Calling the function to add new fruits
addFruits();