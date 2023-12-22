// 1 - var is globally scoped while let & const are block scoped

// Example with var (globally scoped)
if (true) {
    var globalVar = "I am globally scoped";
}
console.log(globalVar); // Outputs: "I am globally scoped"
  

// Example with let (block scoped)
if (true) {
    let blockLet = "I am block scoped";
    console.log(blockLet); // Outputs: "I am block scoped"
}
// Uncommenting the next line will result in an error
// console.log(blockLet); // ReferenceError: blockLet is not defined
  

// Example with const (block scoped)
if (true) {
    const blockConst = "I am block scoped constant";
    console.log(blockConst); // Outputs: "I am block scoped constant"
}
// Uncommenting the next line will result in an error
// blockConst = "Trying to reassign"; // TypeError: Assignment to constant variable



// 2 - var can be updated & re-declared within its scope

if (true) {
    var globalVar = "I can be updated and re-declared";
    console.log(globalVar); // Outputs: "I can be updated and re-declared"
    
    // var can be re-declared within the same scope
    var globalVar = "I am re-declared";
    console.log(globalVar); // Outputs: "I am re-declared"
}

// var can also be updated outside the block
globalVar = "I am updated outside the block";
console.log(globalVar); // Outputs: "I am updated outside the block"
  


// 3 - let can be updated but not re-declared
// Example with let (block scoped)
if (true) {
    let blockLet = "I can be updated but not re-declared";
    console.log(blockLet); // Outputs: "I can be updated but not re-declared"
    
    // let can be updated within the same scope
    blockLet = "I am updated";
    console.log(blockLet); // Outputs: "I am updated"
    
    // Uncommenting the next line will result in an error
    // let blockLet = "I am re-declared"; // SyntaxError: Identifier 'blockLet' has already been declared
}
  
// Outside the block, let can be updated
blockLet = "I am updated outside the block";
console.log(blockLet); // Outputs: "I am updated outside the block"
  

// 4 - const can neither be upadted nor be re-declared - Because it's constant