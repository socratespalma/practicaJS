// 1. Write a function that receives 3 numbers and then analyze the next rules:
// if numbers > 10 sum them, if numbers > 100 subtract them, if numbers > 1000 multiply them, else divide them

const numbers = (a, b, c) => {
  if (a > 0 && a <= 10 && b > 0 && b <= 10 && c > 0 && c <= 10) {
    console.log(a + b + c);
  } else if (a > 10 && a <= 100 && b > 10 && b <= 100 && c > 10 && c <= 100) {
    console.log(a - b - c);
  } else if (
    a > 100 &&
    a <= 1000 &&
    b > 100 &&
    b <= 1000 &&
    c > 100 &&
    c <= 1000
  ) {
    console.log(a / b / c);
  } else {
    console.log(a * b * c);
  }
};

numbers(81, 61, 11);

// 2. Write a function that describes if a number is even or odd

const num = (a) => {
  a % 2 === 0
    ? console.log(`The number ${a} is even`)
    : console.log(`The number ${a} is odd`);
};

num(5);

// 3. Write a function that prints a multiplication chart
const multip = (a) => {
  for (let i = 0; i <= 12; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
  }
};

multip(13);

// 4. Write a function that receive the radius of a circunference and calculates area, diameter and perimeter

const PI = Math.PI;

const circumference = (a) => {
  switch (a) {
    case 0:
      console.log("Radius cannot be zero");
      break;
    default:
      let diameter = Math.pow(a, 2);
      let area = (PI * (Math.pow(diameter, 2) / 4)).toFixed(2);
      let perimeter = (PI * diameter).toFixed(2);
      console.log(
        `The diameter of a circumference is ${diameter} , the area is ${area} , and perimeter is ${perimeter}`
      );
  }
};

circumference(3);

// 5. Given an array of grades from a student calculate the mean and specify the score

const grades = [83, 62, 92, 100, 53, 87, 77];
let sum = 0;
let mean = 0;

for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}

mean = (sum / grades.length).toFixed(2);
console.log(`This student has ${mean} as mean`);

// 6. Write a function that receives two values and tell if they are equal, greater or less

const comparison = (a, b) => {
  a > b
    ? console.log(`${a} is greater than ${b}`)
    : a < b
    ? console.log(`${a} is less than ${b}`)
    : console.log(`${a} and ${b} are equal`);
};

comparison(1, 2);

// 7. Write a function that convert Celsius to Fahrenheit

const temperature = (a) => {
  let tempFar = a * 1.8 + 32;
  console.log(`${a} Celsius is equal to ${tempFar} Fahrenheit`);
};

temperature(33);

// YDKJS challenge #1
// Write a program to calculate the total price of your phone purchase.
// You will keep purchasing phones (hint: loop!) until you
// run out of money in your bank account. You’ll also buy accessories
// for each phone as long as your purchase amount is below
// your mental spending threshold.

// • After you’ve calculated your purchase amount, add in the tax,
// then print out the calculated purchase amount, properly formatted.

// • Finally, check the amount against your bank account balance to
// see if you can afford it or not.

// • You should set up some constants for the “tax rate,” “phone
// price,” “accessory price,” and “spending threshold,” as well as a
// variable for your “bank account balance.”

// • You should define functions for calculating the tax and for formatting
// the price with a “$” and rounding to two decimal
// places.

// • Bonus Challenge: Try to incorporate input into this program,
// perhaps with the prompt(..) covered in “Input” on page 6. You
// may prompt the user for their bank account balance, for example.
// Have fun and be creative!

// const TAXRATE = 0.08;
// const PHONEPRICE = 99.99;
// const ACCESORYPRICE = 9.99;
// const SPENDINGTHRESHOLD = 200;
// let bankBalance = 303.91;
// let amount = 0;

// const calculateTax=(amount)=>{
//   return amount*TAXRATE;
// }

// const formatAmount = (amount)=>{
//   return "$" + amount.toFixed(2);
// }

// while(amount < bankBalance){
//   amount+=PHONEPRICE;

//   if(amount<SPENDINGTHRESHOLD){
//     amount+=ACCESORYPRICE;
//   }
// }

// amount+=calculateTax(amount);

// console.log("Your purchase: " + formatAmount(amount));

// if(amount>bankBalance){
//   console.log("You can't afford this purchase. :(");
// }


