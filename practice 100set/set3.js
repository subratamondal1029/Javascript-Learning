const text = "subratAmondal" // find how much "a" have in this string
let counter = 0

const textArr = Array.from(text.toLowerCase())
// textArr.forEach((letter)=>{
//     if(letter === "a"){
//         counter++
//     }
// })

counter = textArr.reduce((acc, cur) => {
    cur === "a" ? acc++ : acc
   return acc 
}, 0)

console.log(`The Text have ${counter} "a"`)