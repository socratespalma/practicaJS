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