const grades = [40, 50, 45, 40, 30];

const gradesSum = grades.reduce((total, current) => (total += current), 0);
const avg = gradesSum / grades.length;
const percentage = (gradesSum / 250) * 100;
let grade;

// Check for grade
if (percentage >= 91 && percentage <= 100) grade = "A";
else if (percentage >= 81) grade = "B";
else if (percentage >= 71) grade = "C";
else if (grade >= 0) grade = "D";

console.log("Grades Sum: ", gradesSum);
console.log("Average: ", avg);
console.log("Grade: ", grade, "Grade");
