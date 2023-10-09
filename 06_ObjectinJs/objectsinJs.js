const heading = document.getElementById('myHeading');
heading.innerText=" Hey My name is Faraaz Ashraf"
heading.style.color="red"

const myPara  = document.getElementById('para');
myPara.innerText= "And you are learning Objects in JavaScript"

// **************************************************************************************

//singleton
// object luterals


const mySym = Symbol("key1");
const jsUser= {
    name : "Faraz",
    age: 18,
    [mySym]:  "myKeys",     //symbol data Type
    location: "Delhi",
    email: "cman55245@gmail.com",
    isLOggedIn: false,
    lastLogInDays: ["Monday" , "Tuesday", "Friday"]  //array data type
}

console.log(jsUser["name"])
console.log(jsUser["email"])
console.log(jsUser["lastLogInDays"])
console.log(jsUser[mySym])

//changing values of object
// const newEmail = jsUser.email= "farazashraf1523@gmial.com"
console.log(jsUser.email)
// console.log(newEmail)



// **************************************************************************

//freezing the objects :- after freezing the object element their value cannot be changed by the user
// Object.freeze(jsUser);
jsUser.email="cman55245@gmail.com"
console.log(jsUser)


// *******************************************************************************************************************************


jsUser.greeting = function (){
    console.log("Hello JS user");
}
jsUser.greetingtwo =  function (){
    console.log(`Hello JS user ${this.name}`);
}

console.log(jsUser.greeting())
console.log(g)
