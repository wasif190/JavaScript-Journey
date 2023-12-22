/*
Prompt the user to enter their full name. Generate a username for them based on their input.
Start username with @, followed by their full name and ending with the fullname length.
eg: user name = "wasif", username should be "@wasif5"
*/

let userName = prompt("Enter Your name:");
let formattedName = userName.replace(/\s/g, '').toLocaleLowerCase()
let userId = `@${formattedName}${userName.length}`
alert(userId);