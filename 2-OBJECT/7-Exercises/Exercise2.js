/*
Write a JavaScript program to delete the rollno property from the following object. 
Also print the object before or after deleting the property.
*/

let student = {
    name: 'John',
    class: 'VI',
    rollno: 12
}

console.log(student);

delete student.rollno;

console.log(student)