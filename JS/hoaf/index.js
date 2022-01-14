import { getPokemons, getProducts, getShoppingCart } from "./async.js";

let numbers = [];

const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 10);
};

// * For loop
for (let i = 0; i < 10; i++) {
  numbers.push(randomNumberGenerator());
}
console.log(`This is the original array -> ${numbers}`);

// * Sort method
numbers.sort((a, b) => a - b);
console.log(`This is the sorted array -> ${numbers}`);

// * Filter method
let filteredNums = numbers.filter((number) => {
  return number >= 8;
});

filteredNums.length === 0
  ? console.log("There are no elements greater than 8")
  : console.log(
      `These is the filtered array with numbers greater than 8: ${filteredNums}`
    );

// * Reduce method
let arraySum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(`The sum of the original array is: ${arraySum}`);

// TODO: More complex example

getPokemons();
getProducts();
getShoppingCart();
randomNumberGenerator();
