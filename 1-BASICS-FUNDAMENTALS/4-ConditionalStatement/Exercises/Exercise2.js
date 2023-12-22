// Write a code which can give grades to students according to their scored:
// 80 - 100, A
// 70 - 89, B
// 60 - 69, C
// 50 - 59, D
// 0 - 49, F

let score = prompt("Enter your score:")

if (score >= 0 && score<=49) {
    alert("F Grade")
}
else if (score >= 50 && score <= 59) {
    alert("D Grade")
}  
else if (score >= 60 && score <= 69) {
    alert("C Grade")
} 
else if (score >= 70 && score <= 89) {
    alert("B Grade")
} 
else if (score >= 80 && score <= 100) {
    alert("A Grade")
} 
else {
    alert("Enter a valid score :)")
}