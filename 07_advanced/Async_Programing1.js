// javascript is a syncronyus programing language
// it means that it will execute the code line by line
//  and it will wait for the previous line to be executed before moving to the next line

// so if we want make any task after some time 
// we can use the setTimeout function
// console.log("First Function Is Run")

// setTimeout(() =>{
//     console.log("Second Function Is Run");
// }, 2000) // This Execude the code after 2000ms/2s

const timeOut = setTimeout(() =>{
    console.log("Second Function Is Run");
}, 2000)
// console.log("Third Function Is Run") // Its Does not stop the execution of next line

// if want to stop the setTimeout we can use clearTimeout
// clearTimeout(id) // id is the id of the setTimeout function
clearTimeout(timeOut)



// sometimes we need to execute some code between sometime again and again
// for that we can use setInterval

// setInterval(() =>{
//     console.log("This is a setInterval Function");
// }, 1000)

const interVal = setInterval(() =>{
    console.log("This is a setInterval Function");
}, 1000)

// we can also stop The interVal using clearInterVal
// clearInterval(id) // id is the id of the setInterval function

clearInterval(interVal)

// Project Link:- https://stackblitz.com/edit/dom-project-chaiaurcode-grxzoe?file=index.html (project 6)