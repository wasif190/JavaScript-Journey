/* Getting Date Components: The Date object provides methods to get various components of a date. */

let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth(); // 0-indexed (0 fr Januaryo, 11 for December)
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log(`Year: ${year}, Month: ${month + 1}, Day: ${day}`);
console.log(`Time: ${hours}:${minutes}:${seconds}`);