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

// 3. Write a function that receives a number of voltages and calculate the greatest, smallest, and average voltage
const voltages =(v1,v2,v3,v4,v5)=>{
    let listVoltages = [v1,v2,v3,v4,v5];
    let sumVoltages=0;
    let smallerVoltage=listVoltages[0];
    let greaterVoltage=listVoltages[0];
    for (let i = 0; i < listVoltages.length; i++) {
        sumVoltages += listVoltages[i];
        if (listVoltages[i]>greaterVoltage) {
            greaterVoltage=listVoltages[i];
        } else if (listVoltages[i]<smallerVoltage) {
            smallerVoltage=listVoltages[i];
        }
    }
    let promVoltages = (sumVoltages/4).toFixed(2);
    console.log(`The average voltage is equal to ${promVoltages}, the smallest voltage is ${smallerVoltage}, the greatest voltage is ${greaterVoltage}`);
}

voltages(19,3.6,28.9,7.6,11.2);

// 4. Write a function that calculates the fibonacci serie for the first 15 numbers
const fibonacci =()=>{
    let fibonacciArray = [0,1];
    for (let i = 1; i < 14; i++) {
        let nextNumber = fibonacciArray[i]+fibonacciArray[i-1];
        fibonacciArray.push(nextNumber);
    }
    console.log(`The first 15 numbers of the fibonacci serie are ${fibonacciArray}`);
}

fibonacci();

// 5. Write a function that calculates the factorial of a number

const factNum =(num)=>{
    let number = num;
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log(`The factorial of ${number} is equal to ${factorial}`);
}

factNum(6);

// 6. Given an array of numbers, write a function that follows the next instructions:
//      a) Print the sum of elements
//      b) Print the sum of its squared elements
//      c) Prints the smaller number and its position
//      d) Prints the greater number and its position
//      e) Prints the average value
//      f) Order the numbers ascendent
//      g) Order the numbers descendent
//      h) Calculate the multiplication
//      i) Print the module of the array
