const text  = "my name is subrata mondal"

// add a hashtag and make the first letter capital of all word and add in one output #MyNameIsSubrataMondal
if (text.length > 280 || text.trim().length === 0) {
    return false
} else {
    let textArr = text.split(' ')
    // textArr = "#" + textArr
    //                         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    //                         .join('')

textArr = "#" + textArr.map((word) => word.replace(word[0], word[0].toUpperCase())).join('')
console.log(textArr);
}
