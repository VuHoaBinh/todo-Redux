import { produce } from "immer";

const a = {
  name: "binh",
  age: 22,
  company: { country: "Canada", city: "HCM" },
};
const b = Object.assign({}, a, { age: 21 });

console.log(b);
const test = produce(a, (event) => {
  event.name = "vu hoa binh";
});

console.log(test);
// add
const c = [10, 20, 30, 40, 50];
const index = c.indexOf(30);
const addedNumbers = [...c.slice(0, index), 50, ...c.slice(index)];
// 10 20 50 30 40 50

// update
const update = c.map((a) => {
  a == 40 ? 80 : a;
});

// remove
const remove = c.filter((a) => a !== 30);
console.log(remove);

// exercise
const book = {
  author: "Robert Kiyosaki",
  book: {
    name: "Rich Dad Poor Dad",
    price: "$8",
    rating: 4.7,
  },
};

// const arrayOfBooks = ["Book1", "Book2"];
const copyBook = {
  ...book,
  books: { ...book.book, price: "$10", rating: 4.8 },
};

console.log(copyBook);
