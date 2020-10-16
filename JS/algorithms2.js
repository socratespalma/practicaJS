// 1. Write a function that calculates the area of a rectangle and prints it's base, area and height

const rectangle =(base, height)=>{
    console.log(`The area of the rectangle is ${(base*height).toFixed(2)}, base = ${base}, height = ${height}`);
}

rectangle(9,4);

// 2. Write a function that calculates the cubic root of a number

const cubicRoot = (number)=>{
    console.log(Math.cbrt(number).toFixed(2)); 
}

cubicRoot(8);

// 3. Write a function that converts kilos to pounds

const kilos2Pounds = (weight)=>{
    console.log(`${(weight*2.2).toFixed(2)} lbs`);
}

kilos2Pounds(3);