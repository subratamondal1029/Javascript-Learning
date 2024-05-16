// word palindrom test 
function checkPalindrom(str){
    str = str.toLowerCase().trim().replace(/\W/g, "")
    console.log(str);

        let reverseStr = Array.from(str).reverse().join('')
        // console.log(reverseStr);
      return str === reverseStr ? true : false
}

// console.log(checkPalindrom("Racecar"))
console.log(checkPalindrom("A man, A plan, a canal, panama"))

// replace(/\W/g, "") This will replace non word[a-zA-Z] to a blank string