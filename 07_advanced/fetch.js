// fetch is use to send network request like xhr
// fetch always give a promise as a response
fetch('https://jsonplaceholder.typicode.com/users/3')
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))


// with async await 
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/6");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();


