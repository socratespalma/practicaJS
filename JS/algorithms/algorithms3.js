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
//      c) Prints the smallest number and its position
//      d) Prints the greatest number and its position
//      e) Prints the average value
//      f) Order the numbers ascendent
//      g) Order the numbers descendent
//      h) Calculate the product operator
//      i) Print the module of the array
//      j) Filter prime and composite numbers in the array

const arraysFunc =(opt, n1, n2, n3, n4, n5, n6, n7)=>{
    let tempArray = [n1,n2,n3,n4,n5,n6,n7];
    switch (opt) {
        // Print the sum of elements
        case 'a':
            // Using reduce iterator
            const tempSum = tempArray.reduce((total,number)=> total + number,0);
            console.log(`The sum of the elements in the array is equal to ${tempSum}`);
            break;

            // let tempSum = 0;
            // using the old school for loop
            // for (let i = 0; i < tempArray.length; i++) {
            //     tempSum += tempArray[i];
            // }

        // Print the sum of its squared elements
        case 'b':
            // Using reduce iterator
            const tempSquaredSum = tempArray.reduce((total, squared)=> total + (Math.pow(squared,2)),0);

            // let tempSquaredSum = 0;
            // Experimenting with foreach loop
            // tempArray.forEach(nums => {
            //     tempSquaredSum += Math.pow(nums,2)
            // });
            console.log(`The squared sum of this array is equal to ${tempSquaredSum}`);
            break;

        // Print the smallest number and its position
        case 'c':
            let tempSmallestNum = tempArray[0];
            let positionArr = 0;
            // Experimenting with foreach loop
            tempArray.forEach((nums,indexArr) =>{
                if (tempArray[indexArr]<tempSmallestNum) {
                    tempSmallestNum=tempArray[indexArr];
                    positionArr=indexArr;
                }
            });
            console.log(`The smallest number is ${tempSmallestNum} and its position is ${positionArr}`)
            break;

        // Print the greatest number and its position
        case 'd':
            let tempGreatestNum = tempArray[0];
            let positionArr2 =0;
            tempArray.forEach((nums2, indexArr2) =>{
                if (tempArray[indexArr2]>tempGreatestNum) {
                    tempGreatestNum = tempArray[indexArr2];
                    positionArr2=indexArr2;
                }
            })
            console.log(`The greatest number is ${tempGreatestNum} and its position is ${positionArr2}`)
            break;

        // Print average value
        case 'e':
            let avgSumValArr = 0;
            let avgVal=0;
            // Experimenting with map 
            tempArray.map((nums3) =>{
                avgSumValArr += nums3; 
            })
            avgVal=(avgSumValArr/tempArray.length).toFixed(2);

            console.log(`The average value of the array is ${avgVal}`);

            break;

        // Print the array in ascendent order
        case 'f':
            const ascOrder = tempArray.sort((a,b)=>a-b);
            console.log(`The ascendent array is equal to ${ascOrder}`);
            break;

        // Print the array in descendent order
        case 'g':
            const descOrder = tempArray.sort((a,b)=>b-a);
            console.log(`The descendent array is equal to ${descOrder}`);
            break;

        // Calculate the product operator of the array
        case 'h':
            let tempMult = 1;
            tempArray.forEach(num5 => tempMult *= num5);
            console.log(`The product operator of the array is ${tempMult}`);
            break;
        
        // Print the remainder operator of the array
        case 'i':
            let tempRem = tempArray[0];
            for (let i = 1; i < tempArray.length; i++) {
                tempRem %= tempArray[i];
            }
            console.log(`The remainder operator of the array is ${tempRem}`);
            break;

        // Filter prime and composite numbers
        case 'j':
            let primeArr = [];
            let compositeArr = [];

            const isPrime =(num)=>{
                if (num<2){
                    return false;
                }
                for (let i = 2; i < num; i++) {
                    if (num%i===0) {
                        return false;
                    } 
                }
                return true;
            }

            const isComposite =(num2)=>{
                if (num2<2){
                    return false;
                }
                for (let i = 2; i < num2; i++) {
                    if (num2%i!==0) {
                        return true;
                    }
                }
                return true;
            }

            for (let i = 0; i < tempArray.length; i++) {
                if (isPrime(tempArray[i])) {
                    primeArr.push(tempArray[i]);
                } else if(isComposite(tempArray[i])){
                    compositeArr.push(tempArray[i]);
                }
            }
            console.log(`The array ${tempArray} has prime numbers as ${primeArr} and composite numbers as ${compositeArr}`);
            break;

        default:
            break;
    }
}

arraysFunc('j',2,18,11,32,23,68,41);