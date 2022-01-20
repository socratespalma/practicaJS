// ES6 classes

/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magazine subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate magazine
const mag1 = new Magazine('Mag one', 'John Doe', '2022', 'Jan');

console.log(mag1);
