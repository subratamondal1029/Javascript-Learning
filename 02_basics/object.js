let myObj = {                       // object's key and values are always string
    name: "subrata",
    title: "mondal",
    "full name": "subrata Mondal",
    age:17,
    work: "web development"
}

console.log(myObj); // => { name: 'subrata', title: 'mondal', age: 17, work: 'web development' }

// access values with key 
// console.log("name is " + myObj.name) // => name is subrata
// console.log("title is " + myObj.title) // => title is mondal
// console.log("age is " + myObj.age) // => age is 17
// console.log("work is " + myObj.work) // => work is web development

// to access full name 
// console.log(myObj["full name"]); // we cant access this key with above code  because this is have a space  and "." mathod dont aprove space or string


//change the value
// myObj.name = "subrata1"
// myObj.title = "mondal1"
// myObj.age = 18
// myObj.work = "programer"

// console.log(myObj); // => { name: 'subrata1', title: 'mondal1', age: 18, work: 'programer' }

//we can also stop changing the values in object like this
// Object.freeze(myObj);
// myObj.name = "subrata2"
// console.log(myObj.name); // => subrata

// how to use a variable or symbol as a key in object
let mysymbol = Symbol("symbol")
let variable = "how are you"
let SymbObj = {
    [mysymbol] : "symbol Value",
    question : {variable}

}

// console.log(SymbObj); // => { [Symbol(symbol)]: 'symbol Value' }
// console.log(SymbObj["question"]); // => { variable: 'how are you' }

// we can also add a function in a object
// SymbObj.greting = function() {
//     console.log("hello world!");
// }

// console.log(SymbObj.greting()); // we have to use '()' to access the function


//+++++++++++++++++++++++++++++++++++++ part 3 ++++++++++++++++++++++++++++++++

//Object Object de-structuring
console.log(myObj.name);
//       ||(same)
const myName = myObj["full name"];
console.log(myName);
//       ||(same)
const { name: Objname } = myObj; // its use in react js
console.log(Objname);

// Lets talk about Json Object 
//sample of JSON
/* 
{
  "login": "subratamondal1029",
  "id": 164600228,
  "node_id": "U_kgDOCc-ZpA",
  "avatar_url": "https://avatars.githubusercontent.com/u/164600228?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/subratamondal1029",
  "html_url": "https://github.com/subratamondal1029",
  "followers_url": "https://api.github.com/users/subratamondal1029/followers",
  "following_url": "https://api.github.com/users/subratamondal1029/following{/other_user}",
  "gists_url": "https://api.github.com/users/subratamondal1029/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/subratamondal1029/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/subratamondal1029/subscriptions",
  "organizations_url": "https://api.github.com/users/subratamondal1029/orgs",
  "repos_url": "https://api.github.com/users/subratamondal1029/repos",
  "events_url": "https://api.github.com/users/subratamondal1029/events{/privacy}",
  "received_events_url": "https://api.github.com/users/subratamondal1029/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Subrata Mondal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-03-23T04:25:52Z",
  "updated_at": "2024-04-14T03:09:08Z"
}

*/

//one more example
/* 
[
    {}'
    {}'
    {}'
    {}
]
*/


// json same as object but object have to be a name we will learn about more later on fetch api topic