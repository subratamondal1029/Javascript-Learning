// getter seter using class

class createUser{
    constructor(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
    }
    
    set pass(value){
        this._pass = value + "encrypted"
    }

    get pass(){
        return this._pass
    }

}

const user = new createUser('subrata', "subrata@email.com", "123456")
console.log(user.pass);


// getter and setter using Object
const createUser2 = {
    set name(value){
        this._name = value.toUpperCase()
    },

    get name(){
        return this._name
    }
}

const user2 = Object.create(createUser2)
user2.name = "Subrata"
console.log(user2.name);