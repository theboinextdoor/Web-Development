// // Object Literals
//
// const user= {
//     username : "Faraaz Ashraf",
//     followers: 800,
//     signedIn: true,
//     frirnds: ["Rishi", "Imran", "Arib", "Shobit"],
//
//     greeting: function(){
//         console.log("Hey i am from Darbhanga")
//         console.log(`Username: ${this.username}`)
//         console.log(`Folowers: ${this.followers}`)
//         console.log(this)
//     }
//
//
// }
// console.log(user.followers)
// console.log(user.frirnds)
// console.log(user.greeting())
//


// ***********************************************************

//this is a constructor function.
function user(username , loginCount , isLoggedIn){
    this.usernamesername=  username;
    this.loginCount= loginCount;
    this.isLOggedIn = isLoggedIn;

    //this is a constructor
    this.greeting = function(){
        console.log(`$Welcome : ${this.username}`)
    }



    //we don't need to return the value
    //but it is good practice of coding to return
    return this;
}


//we are not using any new keyword that's why everytime the user object is overridding the previus value.
// the new keyword  created a new space in memory and help us to avoid the method OverRidding.
//that's why we should use new keyword everytime we create new object.
const userThree = new user("Aysha", 1000, true)
const userTwo=  new user("Aiman", 19, false);
const userOne=  new user("Faraaz", 10, true)
console.log(userOne)
console.log(userTwo)
console.log(userThree)

//you can also call the constructor by the constructor keyword
console.log(userOne.constructor)
