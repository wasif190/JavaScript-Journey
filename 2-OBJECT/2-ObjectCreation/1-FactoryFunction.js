// A factory function is a function that returns an object. 
// It can be used to create multiple instances of similar objects. 
// Use camelCase for naming factory functions.

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function () {
            console.log(`Hello, My name is ${name} and I am ${age} year old`);
        }
    };
}

const person1 = createPerson('Wasif', 18);
const person2 = createPerson('John', 26);

person1.greet();
person2.greet();
