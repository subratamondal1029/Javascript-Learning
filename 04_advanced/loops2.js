let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Lets talk about some more loops (map, reduce, filter)

// there is a problem in forEach() loop
// const loopVal = arr.forEach((num) =>{
//     console.log(num);
//     return num
// })

// console.log(loopVal); //=> undefined forEach loop don't return any value


// to solve it we can use for loop but there is a better one 
// we use a filter mathod that actualy is a loop
let loopVal = arr.filter((num) => num) // => it will return full array

loopVal = arr.filter((num) => num > 5) // => it will return a array with values that greater then 5

// loopVal = arr.filter((num) =>{
//     console.log(num);
//     return num > 5
// }) // its also work as forEach loop but it can return values

// console.log(loopVal); 

// its use to filter some value and return the value 

// practical work 

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishYear: 1925,
    price: 749, // INR
    type: "Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishYear: 1960,
    price: 937, // INR
    type: "Fiction",
  },
  {
    title: "1984",
    author: "George Orwell",
    publishYear: 1949,
    price: 674, // INR
    type: "Dystopian",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishYear: 1951,
    price: 769, // INR
    type: "Fiction",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    publishYear: 1997,
    price: 599, // INR
    type: "Fantasy",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishYear: 1937,
    price: 879, // INR
    type: "Fantasy",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishYear: 1813,
    price: 349, // INR
    type: "Romance",
  },
];


// let filteredBooks = books.filter((book) => {
//     if(book.type == "Fiction"){
//         console.log(`Book name is "${book.title}", Author "${book.author}" Buy it in "${book.price}"`);
//     }
// })

//map() => .map() is use to do some performance we can also do this with forEach() But map can return value but forEach can't we have to push values in an empty array
// let addedNum = arr.map((num) => num + 10)
// console.log(addedNum); // => [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//reduce() => This is a reducer it is use to add prices of shopping cart to add all the prices and give a single value its not return any array its return only one value
// const initialValue = 0
// let sum = arr.reduce( function(accumulator, currentValue){
//   return accumulator + currentValue;
// }, initialValue); // we can directly use "0" here


// Explain => this is take a callback function and its automatically take two arguments(accumulator, currentValue) and we want to add all the numbers from cart so its a loop so in currentValue it will save the item and in accumulator at the first time the initialValue will transfer and after the process end of first loop when the second loop proccess will start at this moment its not take initialValue it already the first result then its redo the process

// arrow function
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // => 55

// Here is the practical Project In index.html