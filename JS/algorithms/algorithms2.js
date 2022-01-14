// 1. Write a function that calculates the area of a rectangle and prints it's base, area and height

const rectangle =(base, height)=>{
    console.log(`The area of the rectangle is ${(base*height).toFixed(2)}, base = ${base}, height = ${height}`);
}

rectangle(9,4);

// 2. Write a function that calculates the cubic root of a number

const cubicRoot = (number)=>{
    console.log(`${Math.cbrt(number).toFixed(2)} is the cubic root of ${number}`); 
}

cubicRoot(8);

// 3. Write a function that converts kilos to pounds

const kilos2Pounds = (weight)=>{
    console.log(`${weight} kilos are equivalent to ${(weight*2.2).toFixed(2)} lbs`);
}

kilos2Pounds(3);

// 4. Write a function that calculates the area of a triangle given the sides

const triangle =(s1,s2,s3)=>{
    if (s1>0 && s2>0 && s3>0) {
    // using Heron's formula
        let p=((s1+s2+s3)/2);
        let area=(Math.sqrt(p*(p-s1)*(p-s2)*(p-s3))).toFixed(2);
        console.log(`The area of the triangle is equivalent to ${area} u^2`);
    } else {
        console.log("Not a triangle, sides cannot be negative or equal to zero");
    }

}

triangle(4,3,5);

// 5. Write a function that calculates the cosine of an X value

const cosine = (num)=>{
    console.log(`The cosine of ${num} is ${Math.cos(num)}`);
}

cosine(0);

// 6. Write a function that works as a unit converter

const unitconverter = (conversion, value)=>{
    let unitcalc=0;
    if (conversion <=0 || conversion > 12) {
        console.log("You need to write a number in the range of 1-12")
    } else {
        switch (conversion) {
            case 1:
                // Convert yards to feet
                unitcalc = (value * 3).toFixed(2);
                console.log(`${value} yards is equivalent to ${unitcalc} feet`);
                break;
            case 2:
                // Convert yards to inches
                unitcalc = (value * 36).toFixed(2);
                console.log(`${value} yards is equivalent to ${unitcalc} inches`);
                break;  
            case 3:
                // Convert yards to cm
                unitcalc = (value * 91.44).toFixed(2);
                console.log(`${value} yards is equivalent to ${unitcalc} cm`);
                break;
            case 4:
                // Convert feet to yards
                unitcalc = (value/3).toFixed(2);
                console.log(`${value} feet is equivalent to ${unitcalc} yards`);
                break;
            case 5:
                // Convert feet to inches
                unitcalc = (value * 12).toFixed(2);
                console.log(`${value} feet is equivalent to ${unitcalc} inches`);
                break;  
            case 6:
                // Convert feet to cm
                unitcalc = (value * 30.48).toFixed(2);
                console.log(`${value} feet is equivalent to ${unitcalc} cm`);
                break;  
            case 7:
                // Convert inches to feet
                unitcalc = (value/12).toFixed(2);
                console.log(`${value} inches is equivalent to ${unitcalc} feet`);
                break;
            case 8:
                // Convert inches to yards
                unitcalc = (value/36).toFixed(2);
                console.log(`${value} inches is equivalent to ${unitcalc} yards`);
                break;  
            case 9:
                // Convert inches to cm
                unitcalc = (value * 2.54).toFixed(2);
                console.log(`${value} inches is equivalent to ${unitcalc} cm`);
                break;
            case 10:
                // Convert cm to yards
                unitcalc = (value/91.44).toFixed(2);
                console.log(`${value} cm is equivalent to ${unitcalc} yards`);
                break;
            case 11:
                // Convert cm to inches
                unitcalc = (value/2.54).toFixed(2);
                console.log(`${value} cm is equivalent to ${unitcalc} inches`);
                break;  
            case 12:
                // Convert cm to feet
                unitcalc = (value/30.48).toFixed(2);
                console.log(`${value} cm is equivalent to ${unitcalc} feet`);
                break;                              
            default:
                break;
        }
    }
}


unitconverter(12,1);

// 7. Write a function that reads a word and returns it reversed

const reverse = (str)=>{
    let reversedstring ='';
    for (let i = str.length-1; i >= 0; i--) {
        reversedstring+=str[i];
        
    }
    console.log(reversedstring);
}

reverse('Hola');