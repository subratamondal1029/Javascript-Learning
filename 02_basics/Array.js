let array = [1, 2, 3, 4, 5];
console.log("Origial Array", array);

//properties
// console.log(array.length);

//Array Mathods

//push()
// array.push(6); // it will add a new element in end of the array
// console.log("Push Mathod", array);

//pop()
// array.pop();  // it will remove a element from end of the array
// console.log("Pop Mathod", array);
// console.log("Origial Array", array);

//shift()
// array.shift(); // it will remove a element from start of the array
// console.log("Shift Mathod", array);
// console.log("Origial Array", array);

//unshift()
// array.unshift(1); // it will add a new element in start of the array
// console.log("Unshift Mathod", array);
// console.log("Origial Array", array);

//slice()
// let slicearr = array.slice(1, 3); // it will return new array with defiend index element | it does not take the last index element that you defined | it can't change the original array
// console.log("Slice Mathod", slicearr);
// console.log("Origial Array", array);

//splice()
// let splicearr = array.splice(1, 3); // it will return new array with defiend index element | it does take the last index element that you defined | it can change the original array
// console.log("Splice Mathod", splicearr);
// console.log("Origial Array", array);

//join()
// let joinArray = array.join(" or ") // it will give an string  => 1 or 2 or 3 or 4 or 5 depanted on (" or ")
// console.log(joinArray);

//toString()
// let stringArr = array.toString(); // it will return an string => 1,2,3,4,5
// console.log(stringArr);

// concat()
// let array2 = [6,7,8,9];
// let concatArray = array.concat(array2)
// console.log(concatArray);

//includes()
// console.log(array);
// console.log(array.includes(3));


//spread operator
// let margearray = [...array, ...array2] // same as concat
// console.log(margearray);


//flat()
// let unuseablearray = [1,2,3,4,[5,6,7,8], "subrata", [6,24,5,[1,9,7,5]]];
// ?How to marge this array in an new array 
// let useablearray = unuseablearray.flat(3) // how much array do you want to flat there 3 array; 
// console.log(useablearray);

//sometimes we dont know how many has inside on a array so that we can use infinity
// let useablearray = unuseablearray.flat(Infinity)
// console.log(useablearray); //same as above


//Array.isArray()
let string = "subrata";
// console.log(Array.isArray(array)) //true
// console.log(Array.isArray(string)) //false

//Array.from()
console.log(Array.from(string)); // [ 's', 'u', 'b', 'r', 'a', 't', 'a'] | its not support multiple values


//Array.of()
// let string2 = "subrata2";
// let string3 = "subrata3";
// console.log(Array.of(string, string2, string3, "hi")); // [ 'subrata', 'subrata2', 'subrata3', "hi" ] | its does support multiple values


