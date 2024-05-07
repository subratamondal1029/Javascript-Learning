//for loop
// for (let i = 0; i <= 10; i++) {
//     console.log(i);    
// }

// execution of for loop
 // 1. variable declaration let i = 0
 // 2. condition i <= 10 | if thsi condition match the will execute and go to the third option that is
 // 3. increment i++ |  it will increes the value by adding "1" now i = 1

// As per name it will play continuously if the condition don't match (i greater then 10) it will stop the looping;


// some keywords (continue, break) of loop in js 


// continue 
// it will skip the current iteration and go to the next iteration
// console.log("continue");
// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// // break
// // it will stop the loop and come out of the loop
// console.log("break");
// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// practical scenario loop with array
// const fruits = ["apple", "mango", "grapes", "banana", "orange"];
// for (let i = 0; i < fruits.length; i++) {

//     // using continue and and break
//     // if (fruits[i] === "grapes") {
//     //     break;
//     // }

//     if (fruits[i] === "grapes") {
//         continue;
//     }
//      console.log(fruits[i]);
// }


// while and do while loop

// while loop
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// same as for loop

// do while loop
// let i = 0;
//     do {
//         console.log(i);
//         i++;
//     } while (i <= 10);

// its work same as while loop but it do first and then check the condition

//difference between while and do while
// let whileNum = 0
// let dowhileNum = 0

// whileloop() //=> 0 to 10
// console.log("do while loop 1 starts here");
// dowhileloop() //=> 0 to 10

// function whileloop(){
//     while(whileNum <= 10){
//         console.log(whileNum);
//         whileNum++;
//     }
// }

// function dowhileloop() {
//     do{
//         console.log(dowhileNum);
//         dowhileNum++;
//     }while(dowhileNum <= 10)
// }

// whileNum = 11
// console.log("while loop 2 starts here");
// whileloop() //=> nothing will happans

// dowhileNum = 11
// console.log("do while loop 2 starts here");
// dowhileloop() //=>11 | beacause its do first so it print 11 and then match the condition (false)



// Array base loops

// for of loop
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// for (const num of numbers) {
//     console.log(num);
// }

// const programeName = {
//     name: "javascript",
//     version: 1.0,
//     language: "javascript",
//     year: 1995,
// }

// for (const key of programeName) {
//     console.log(key);
// }

// this loop dont take condition or increment it will automaticaly do that so we mostly use this kind of loop for print data  | for of loop does not work with object
// This is use in array 

// for in loop
// const person = {
//     name: "John",
//     age: 22,
//     gender: "male",
//     city: "delhi"
// }

// for (const key in person) {
//     console.log(key +" is "+ person[key]);
// }

// as for of loop it also dont take any condition or increment | but there is a catch for of loop give the value but for in loop give the key{object} or index [array]
// This is use in object mostly


// There is more loop that already come with array
//forEach()

// numbers.forEach((num) =>{
//     console.log(num);
// })

// Explain => forEach is a mathod of array [].forEach() | its take a callback(function ()) [].forEach((response) =>{ executional code })

// we can also pass a function in forEach

// numbers.forEach(printVal) //dont execute this function only give the reference its automatically pass the argument

// function printVal(val){
//     console.log(val);
// }


// for give some more value (item, index, fullArray)
// numbers.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

// This is also work without any condition and increement | we mostly use this loop to get data from array


// lets talk about some more array
