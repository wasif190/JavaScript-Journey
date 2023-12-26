/*
The code that might cause an error is placed inside the 'try' block.
In our case, it's the divison 'x/y'.

The 'catch' block is executed when an exception occurs in the 'try' block.
*/

function divide(x,y) {
    try {
        // Attempting the divison
        if (y === 0) {
            throw new Error("Cannot divide by zero");
        }
        return x / y;
    } catch (error) {
        console.error("Error:", error.message)
        return undefined; // or any default value
    }
}

console.log(divide(10,2));
console.log(divide(8,0))