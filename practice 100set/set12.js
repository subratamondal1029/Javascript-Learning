const arr = ['subrata', "subr", "mondal", "mon", "raja", "hey", "hi", "how are you"]

function checkMatch(matchVal){
    return filteredArr = arr.filter((item) => item.match(matchVal))
}

console.log(checkMatch("h"));
console.log(checkMatch("s"));
console.log(checkMatch("m"));
console.log(checkMatch("j"));
console.log(checkMatch("u"));