import { getPokemons, getProducts, getShoppingCart } from './async';

/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */

const numbers = [];

const randomNumberGenerator = () => Math.floor(Math.random() * 10);

// * For loop
for (let i = 0; i < 10; i++) {
  numbers.push(randomNumberGenerator());
}
console.log(`This is the original array -> ${numbers}`);

// * Sort method
numbers.sort((a, b) => a - b);
console.log(`This is the sorted array -> ${numbers}`);

// * Filter method
const filteredNums = numbers.filter((number) => number >= 8);

filteredNums.length === 0
  ? console.log('There are no elements greater than 8')
  : console.log(`Filtered array with numbers greater than 8: ${filteredNums}`);

// * Reduce method
const arraySum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(`The sum of the original array is: ${arraySum}`);

// TODO: More complex example

getPokemons();
getProducts();
getShoppingCart();
randomNumberGenerator();
