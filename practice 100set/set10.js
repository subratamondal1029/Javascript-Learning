// calculate avarage from array
function avarage(arr){
    return arr.reduce((acc, cur) => acc + cur,0)/arr.length
}

console.log(avarage([10, 20, 35, 25, 5]))
console.log(avarage([6, 20, 67, 35, 87]))
console.log(avarage([1, 2, 3, 4, 5]));
console.log(avarage([100, 200, 300, 400, 500]));
console.log(avarage([1000, 2000, 3000, 4000, 5000]));