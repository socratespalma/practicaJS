// 1. Write a function that receives the grade of a student and prints a message related to it
const grades = (name, grade) => {
    const letters = ["A","B","C","D","E","F"];
    if (grade>=0 && grade <=100) {
        if (grade>=90) {
            console.log(`The student ${name} got ${letters[0]}`);
        } else if (grade>=80 && grade<90){
            console.log(`The student ${name} got ${letters[1]}`);
        } else if (grade>=70 && grade<80){
            console.log(`The student ${name} got ${letters[2]}`);
        } else if (grade>=65 && grade<70){
            console.log(`The student ${name} got ${letters[3]}`)
        } else if (grade>=60 && grade<65) {
            console.log(`The student ${name} got ${letters[4]}`)
        } else {
            console.log(`The student ${name} got ${letters[5]}`)
        }
    } 
     else {
         console.log("Write a grade between 0-100")
    }

}

grades('Socrates', 9);

// 2. Rewrite the last function so that you store names with grades from 3 tests in an object, then calculate the mean and tell if the student is allowed for a scholarship depending on the score

const gradesFull =(name1, grade1, grade2, grade3)=>{
    let student = {"name":name1, "calculus":grade1, "physics": grade2, "statistics": grade3};
    let mean = ((student.calculus + student.physics + student.statistics)/3).toFixed(2);
    const scholarships = {"academic":"A", "culture":"B", "sports":"C"};
    if (mean>=90) {
        console.log(`The student ${student.name} has a mean of ${mean} and could apply to scholarship ${scholarships.academic}`);
    } else if(mean<90 && mean>=80){
        console.log(`The student ${student.name} has a mean of ${mean} and could apply to scholarship ${scholarships.culture}`);
    } else {
        console.log(`The student ${student.name} has a mean of ${mean} and could apply to scholarship ${scholarships.sports}`);
    }
}

gradesFull("Socrates",60,70,97);