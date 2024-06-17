class createUser{
    constructor(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
    }

    showUsername(){
        return `The userName is ${this.username}`;
    }

    encryptPass(){
        return `${this.pass}abfdfd`
    }
}

const user = new createUser('subrata', "subrata@email.com", "1245")

class admin extends createUser{
    constructor(name, username){
        super(username) //this is create the user from createUser class that is extends i admin class
        this.name = name
    }

    createId(){
        console.log(`${this.username} id is ${Date.now()}`);
    }

    removeUser(){
        console.log(`User XYZ was removed`);
    }
}

const UserAdmin = new admin('subrata mondal', user.username)
UserAdmin.createId()
UserAdmin.removeUser()


// user.createId() // like as prototype we also cant access this function
// console.log(UserAdmin.showUsername()) //we can access the createUser class's mathods in UserAdmin Because we already give the instance of createUser to UserAdmin

console.log(user === UserAdmin); //false
console.log(user instanceof createUser); //true
console.log(UserAdmin instanceof createUser); //true
console.log(user instanceof admin); //false