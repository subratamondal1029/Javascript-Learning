class User {
    constructor(username){
        this.username = username
    }


    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        console.log(`id is ${Date.now()}`);
    }
}

const subrata = new User('subrata')
// subrata.createId()



class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const chaiaurCode = new teacher("chai", "chai@aurCode.com")
chaiaurCode.logMe()
// chaiaurCode.createId()