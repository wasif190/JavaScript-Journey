/*
Write a JavaScript conditional statement to find the sign of the product of three numbers. 
Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is -
*/

let x = 3;
let y = -7;
let z = 2;

let product = x*y*z;
console.log("The Product is ", product);

if (product > 0) {
    alert("The sign is +");
} 
else if (product < 0) {
    alert("The sign is -");
}
else {
    alert("The sign is 0");
}