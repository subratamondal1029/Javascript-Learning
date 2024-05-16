function findMax(arr){
    // return arr.sort((a, b) => b-a)[0]

    // one more way
    return Math.max(...arr) // using spread oprator (...) the value will pass as numbers one by one
}

console.log(findMax([6]));
console.log(findMax([-2, -4, -7]));
console.log(findMax([2, 4, 7]));