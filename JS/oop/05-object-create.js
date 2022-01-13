// Object of protos
const bookProtos = {
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// Create object
// const book1 = Object.create(bookProtos);
// book1.title = "Book one";
// book1.author = "John Doe";
// book1.year = "2013";

const book1 = Object.create(bookProtos, {
  title: { value: "Book one" },
  author: { value: "John Doe" },
  year: { value: "2020" },
});

console.log(book1);
