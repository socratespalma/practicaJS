// const str = "hello world";
// const str2 = new String("args");

// console.log(typeof str);
// console.log(typeof str2);

// console.log();

const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getSummary());
// console.log(book1);
console.log(Object.values(book1));
