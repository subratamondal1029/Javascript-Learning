function setUsername(username){
    this.username = username
    // if we send this from another function its set the value to that function this and the we can access from that this
    console.log(this); //createUser { username: 'subrata' } this return createUser function
}

function createUser(username, email, pass){
    // setUsername(username) // this not return username
    setUsername.call(this, username)

    this.email = email
    this.pass = pass
}

const user = new createUser('subrata', "subrata@google.com", "123")
console.log(user);