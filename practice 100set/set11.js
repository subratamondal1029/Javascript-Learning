// find equal array
function findequal(arr1, arr2){
    let isTrue = false
    if (arr1.length === arr2.length) {
        if (arr1.length === 0) {
            return true
        }else {
            for (let i = 0; i < arr1.length; i++) {
                const firstArr = arr1[i];
                const secondArr = arr2[i];

             if(firstArr === secondArr) isTrue = true 
             else return false
                
            }
        }
    }else return false

    return isTrue
}

console.log(findequal([1, 2, 3], [1, 2, 3])) //true
console.log(findequal([1, 2, 3], [1, 2, 3, 4])) //false
console.log(findequal([1, 2, 3], [1, 2, 4])) //false
console.log(findequal([1, 2, 3], [1, 3, 2])) //false
console.log(findequal([], [])) // true