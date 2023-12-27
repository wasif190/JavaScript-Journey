/* Write a JavaScript program that displays the largest integer among two integers. */

// Function to find largest number
function findLargestInt(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let firstNumber = parseInt(prompt("Enter the first number:"));
let secondNumber = parseInt(prompt("Enter the second number:"));

let result = findLargestInt(firstNumber, secondNumber);
alert(`The largest numbers is ${result}`);
console.log("End")