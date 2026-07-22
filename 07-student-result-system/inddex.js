// Output
/**
 * user can see name
 * total marks
 * average marks
 * grad
 */

let student={
    name:"Nadim",
    marks: [85, 90, 78, 88, 95]
}
console.log("Student Name :",student.name);
let studentTotalMarks=0
for(let totalMarks of student.marks){
    studentTotalMarks+=totalMarks;
}
console.log("Total Marks : ",studentTotalMarks);
let averageNumber=studentTotalMarks/student.marks.length;
console.log("Average Marks :",averageNumber);
switch(true){
    case averageNumber>80:
        console.log("Grade: A+");
        break;
    case averageNumber>=70 && averageNumber<80:
        console.log("Grade: A");
        break;
    case averageNumber>=60 && averageNumber<70:
        console.log("Grade: A-");
        break;
    case averageNumber>80:
        console.log("Grade: B");
        break;
    case averageNumber>=50 && averageNumber<60:
        console.log("Grade:C");
        break;
        default:
        console.log("Fail");
}
