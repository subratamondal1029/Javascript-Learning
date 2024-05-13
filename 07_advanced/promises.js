// creating a new promise
const myPromise = new Promise(function (resolved, reject) {
  setTimeout(() => {
    // console.log("complete");
    resolved("task complete");
  }, 1000);

}).then((response) => {
  // console.log("success", response);
}); //we can write then() here or with variable



myPromise.then((response)=>{
    // console.log("success", response);
}) // then is directly connected with resolved in a promise


const myPromiseTwo = new Promise((resolved, reject)=>{
  setTimeout(() => {
    let error = false
    if (!error) {
      resolved({username: "subrata", pass: 123456})
    }else{
      reject("something Wrong")
    }

  }, 2000);
})

// myPromiseTwo.then((res) => res.username).then((username) => console.log(username))
            // .catch((err) => console.log(err))
            // .finally(() => console.log("the Promise in complete"))

const promiseThree = new Promise((res, rej) =>{
    setTimeout(() => {
    let error = false
    if (!error) {
      res({username: "subrata2", pass: 123456})
      console.log("complete");
    }else{
      rej("something Wrong 2")
    }

  }, 2000);
});

(async()=>{
  try {
    const response = await promiseThree;
    console.log("Your response", response);
  } catch (error) {
    console.log(error);
  }
})()