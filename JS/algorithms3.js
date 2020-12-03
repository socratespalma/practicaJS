// 1. Write a function that receives the grade of a student and prints a message related to it
const grades = (name, grade) => {
    const letters = ["A","B","C","D","E","F"];
    if (grade>=0 && grade <=100) {
        if (grade>=90) {
            console.log(`The student ${name} has an ${letters[0]}`);
        } else if (grade>=80 && grade<90){
            console.log(`The student ${name} has a ${letters[1]}`);
        } else if (grade>=70 && grade<80){
            console.log(`The student ${name} has a ${letters[2]}`);
        } else if (grade>=65 && grade<70){
            console.log(`The student ${name} has a ${letters[3]}`)
        } else if (grade>=60 && grade<65) {
            console.log(`The student ${name} has an ${letters[4]}`)
        } else {
            console.log(`The student ${name} has a ${letters[5]}`)
        }
    } else {
        console.log("Write a grade between 0-100")
    }
}

grades('Socrates', 90);

// 2. Rewrite the last function so that you store names with grades from 3 tests in an object, then calculate the mean and tell if the student is allowed for a scholarship depending on the score