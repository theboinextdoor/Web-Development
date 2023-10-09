 //ES6

 class User{
    constructor(username , email , password ) {
        this.username = username ;
        this.email = email;
        this.password = password;
    }

    encryptPaassword(){
        return `${this.password}abs`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
 }

 const newUser = new User("Damon", "big.vampire@gmail.com", "@#@#@#123445")
 console.log(newUser.encryptPaassword())
 console.log(newUser)
 console.log(newUser.changeUserName())
