function findMax(arr){
    return arr.sort((a, b) => b-a)[0]
}

console.log(findMax([6]));
console.log(findMax([-2, -4, -7]));
console.log(findMax([2, 4, 7]));