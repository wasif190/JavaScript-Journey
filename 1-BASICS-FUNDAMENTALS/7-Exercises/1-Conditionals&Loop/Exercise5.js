/*
Write a JavaScript program that computes the average marks of the following students. 
Then, this average is used to determine the corresponding grade.

Student Name	Marks
David	         80
Vinoth	         77
Divya	         88
Ishitha	         95
Thomas	         68

Range	      Grade
<60	            F
<70          	D
<80	            C
<90	            B
<100	        A
*/

// Student data
const students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 }
];

// Calculate the average marks
let totalMarks = 0;
for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].marks;
    // 0 + 80 = 80 + 77 = 157 + 88 = 245 + 95 = 340 + 68 = 408 (Total Marks)
    console.log(totalMarks) 
}

const averageMarks = totalMarks / students.length;
console.log(averageMarks) // 81.6

// Determine the corresponding grade
let grade;
if (averageMarks < 60) {
    grade = 'F';
} else if (averageMarks < 70) {
    grade = 'D';
} else if (averageMarks < 80) {
    grade = 'C';
} else if (averageMarks < 90) {
    grade = 'B';
} else {
    grade = 'A';
}

// Display the results
console.log(`Average Marks: ${averageMarks}`);
console.log(`Grade: ${grade}`);