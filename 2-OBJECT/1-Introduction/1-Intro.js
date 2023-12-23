/*
The key-value pairs within an object are called properties, 
where the key is a string (or a Symbol) and the value can be any valid JavaScript data type, including other objects.
*/

// Creating an object //
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    isElectric: false,
    features: ["GPS", "Bluetooth", "Backup Camera"] ,
    start: function() {
        console.log("The car is starting...");
    },
    stop: function() {
        console.log("The car is stopping...");
    }
};

// Accessing object properties //
console.log(`Brand: ${car.brand}`);
console.log("Year: " + car.year);
console.log("Features: " + car.features.join(", "));

// Calling object methods //
car.start();

// Modifying object properties //
car.year = 2023;
car.features.push("Sunroof");

// Adding a new property //
car.color = "Blue";

// Accessing the modified properties //
console.log("Updated Year: " + car.year);
console.log("Updated Features: " + car.features.join(", ")); 
// The join method is used to join all elements of an array into a single string.
console.log("Color: " + car.color);