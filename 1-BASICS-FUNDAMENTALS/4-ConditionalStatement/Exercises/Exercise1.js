// Get user to input a number using promt("Enter a number:"). Check if the number is a multiple of 5 or not

let num = prompt("Enter a number:");

if(num % 5 === 0) {
    alert(`${num} is divisible by 5`)
}
else {
    alert(`${num} is not divisible by 5`)
}