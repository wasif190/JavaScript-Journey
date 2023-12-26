/*
getter and setter functions are used to define and modify properties of an object in a controlled manner. 
They allow you to perform actions on object properties whenever they are accessed (get) or modified (set). 
*/

class Rectangle {
    constructor(width, height) {
        this.w = width;
        this.h = height;
    }

    // Getter for width
    get width() {
        return this.w;
    }

    // Setter for width 
    set width(newWidth) {
        this.w = newWidth;
    }
}

// create a rectangle
const myRectangle = new Rectangle(5, 9);

console.log(`Width: ${myRectangle.width}`);

myRectangle.width = 10;
console.log(`New Width: ${myRectangle.width}`);

