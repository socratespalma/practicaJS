// @ts-check

// * Variables
/**
 * A random variable with the name of somebody
 * @type {String}
 */
let randomName = "Peter";

/**
 * A random variable with a number
 * @type {Number}
 */
let randomNum = 24;

// * Arrays
/**
 * Random array of numbers
 * @type {Array<Number>}
 */
let numberArray = [23, 24, 25, 26, 27, 28];
numberArray.push(29);
console.log(numberArray);

/**
 * Random array of numbers and strings
 * @type {Array<Number | String>}
 */
let mixedArray = [22, "fsg", 24, "sdg", 26];
mixedArray.push("hfsj");
console.log(mixedArray);

// * Objects
/**
 * Person object one
 * @type {{id: number, firstName: string, lastName: string, age: number}}
 */
const person = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
console.log(person);

/**
 * Person object two, with multiple values that could be accepted
 * @type {{id: number | string, firstName: string, lastName: string, age: number | string}}
 */
const person2 = {
  id: "2",
  firstName: "Jane",
  lastName: "Doe",
  age: "25",
};
console.log(person2);

// * Functions

/**
 * This is a function that sums two numbers
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number} total result
 */
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

/**
 * This is a function that subtracts two values
 * @param {number} a first value
 * @param {number} b second value
 * @returns {string}
 */
const subtract = (a, b) => {
  return `The result is: ${a - b}`;
};
console.log(subtract(1, 2));

// * Custom types
/**
 * User
 * @typedef {Object} User
 * @property {number} id User's ID
 * @property {string} username User's Name
 * @property {string} password User's password
 * @property {boolean} isActive User's state
 */

/**
 * @type {User}
 */
const newUser = {
  id: 1,
  username: "Ryan",
  password: "test1",
  isActive: true,
};

console.log(newUser);

// * Classes
/**
 * A class to create a programmer
 * @example
 * const newProgrammer = new Programmer({fullname: 'Ryan Ray'}, 'JS')
 * newProgrammer.getInfo();
 * @see https://docs.github.com/en/rest/reference/repos
 *
 * @todo Implement missing methods
 */
class Programmer {
  /**
   * @param {Object} user User's information
   * @param {String} language A programming language
   */
  constructor(user, language) {
    this.fullname = user.fullname;
    this.language = language;
  }

  /**
   * Get programmer's information
   * @returns {void}
   */
  getInfo() {
    console.log(
      `I am ${this.fullname} and my favorite language is ${this.language}`
    );
  }
}

/**
 * More information in {@link Programmer}
 */
const programmerOne = new Programmer({ fullname: "Ryan Ray" }, "JS");
const programmerTwo = new Programmer({ fullname: "Joe Ray" }, "TS");

programmerOne.getInfo();
programmerTwo.getInfo();
