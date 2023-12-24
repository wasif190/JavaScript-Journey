/*
Given an array of student objects, implement a function called curveGrades 
that takes the student array as a parameter and returns a new array with curved grades. T
he grading curve involves adding 5 to each student's grade.
*/

const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 80 },
    { name: 'Charlie', grade: 95 }
];

const curvedGrades = students.map(
    (student) => ({name: student.name, curvedGrade: student.grade+5})
)

console.log(curvedGrades);