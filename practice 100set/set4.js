const types = ['scalene', 'isosceles', 'equilateral']

function checkTriangleType(...values){
    if (values[0] === values[1] && values[1] === values[2]) {
        return types[2]
    }else if(values[0] === values[1] || values[1] === values[2] || values[0] === values[2]){
        return types[1]
    }else{
      return types[0];
    }
}

console.log(checkTriangleType(3, 3, 3))
console.log(checkTriangleType(3, 4, 3))
console.log(checkTriangleType(3, 4, 5))

