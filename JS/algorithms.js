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
      let area = PI * (Math.pow(diameter, 2) / 4);
      let perimeter = PI * diameter;
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

mean = sum / grades.length;
console.log(`This student has ${mean} as mean`);
