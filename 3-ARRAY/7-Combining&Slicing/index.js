// Combining using 'concat'
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr); // [ 1, 2, 3, 4, 5, 6 ]

// Slicing
let arr3 = [1, 2, 3, 4, 5];
let slicedArr = arr3.slice(1, 3); // Extracts elements from index 1 up to, but not including, index 3
console.log(slicedArr); // [2, 3]

// Combining arrays using spread operator
let combinedArr1 = [...arr1, ...arr2];
console.log(combinedArr1); // [ 1, 2, 3, 4, 5, 6 ]
