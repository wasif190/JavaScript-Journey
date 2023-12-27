/*
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
Sample numbers : 0, -1, 4
Output : 4, 0, -1
*/

let num1 = 4;
let num2 = 0;
let num3 = -1;

let result;

if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        result = `${num1}, ${num2}, ${num3}`;
    } else {
        result = `${num1}, ${num3}, ${num2}`;
    }
}
else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        result = `${num2}, ${num1}, ${num3}`;
    } else {
        result = `${num2}, ${num3}, ${num1}`;
    }
}
else {
    if (num1 >= num2) {
        result = `${num3}, ${num1}, ${num2}`;
    } else {
        result = `${num3}, ${num2}, ${num1}`;
    }
}

// Display the result in an alert box
alert(`Sorted numbers in descending order: ${result}`);