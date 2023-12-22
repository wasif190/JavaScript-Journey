// String is a sequence of character used to represent text //

let str = "Hello Wasif";

console.log(str.length); // 11

console.log(str[0], str[9]) // H i

// Template Literals
let obj = {
    item: "pen",
    price: 10,
}

// console.log("The cost of", obj.item, " is ", obj.price, " rupees");
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output)