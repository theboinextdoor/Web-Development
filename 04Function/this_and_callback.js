function  SetuserName(username){

    this.username = username
    console.log("called")
}

function createUser(userName , email ,password){

    SetuserName.call(this, userName)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);