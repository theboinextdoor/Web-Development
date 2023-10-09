function setusername(username){
    //complex calculation
    this.username= username;
    console.log("called")
}

function createUser(username, email , password){
    // call method holds the value of the function
    //and this function help us to send the value of the username
    setusername.call(this,username)

    this.email = email ;
    this.password = password;
}

const userOne = new createUser("Faraaz" , "cman55245@gmail.com", 12234)
console.log(userOne)
