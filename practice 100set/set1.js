const text = "Myself Subrata Mondal i am a web developer"


// const sortArr = textArr.sort((a, b) => b.length - a.length)
// console.log(sortArr[0]);

const textArr = text.split(' ')
const longWord = textArr.reduce((acc, item) => item.length > acc.length ? item : acc,"")
console.log(longWord);

// const numbers = [0, 5, 2, 7, 4, 1, 6, 9, 8, 3]
// const lowToHeight = numbers.sort()
// const heightToLow = numbers.sort((a, b) => b - a)
// console.log(lowToHeight, heightToLow);