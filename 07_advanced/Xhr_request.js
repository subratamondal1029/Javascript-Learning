// xhr is a old mathod to get Data from api
// xhr is not work in node js invironment its work in browser (This file link with api.html)

const apiUrl = "https://api.github.com/users/subratamondal1029";

const xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText) // we have to convert data to a json object because this is comes as string string
        console.log(data);
  }
};

document.querySelector('button').addEventListener('click', () => xhr.send())
// we can directly call xhr.send()

// Project in project.html and https://github.com/subratamondal1029/Project_host/blob/main/xhr_Project.html
