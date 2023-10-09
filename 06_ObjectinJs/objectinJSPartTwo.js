const heading = document.getElementById('myHeading');
heading.innerText=" Hey My name is Faraaz Ashraf"
heading.style.color="red"

const myPara  = document.getElementById('para');
myPara.innerText= "And you are learning Objects in JavaScript"

// // ************************************************************************************
//
// // const tinderUser= new Object()
// const regularUser= {
//     email: "sum@gmail.com",
//     fulname:{
//         userFullName: {
//             firstName:"Damon ",
//             secondname: "Slavatore"
//         }
//     }
// }
//
//
// console.log(regularUser.fulname.userFullName.firstName)
//
// console.log(regularUser.fulname.userFullName.secondname)
// // *****************************************************************************************************
//
//
// //Merge Two Object Class
//
// const obj1= {1:"a", 2:"b"}
//
// const obj2= {3:"a", 4:"b"}
// const  obj3= Object.assign({},obj1, obj2);
// console.log(obj3)
// //Another way to merger two Array
//
// const obj4= {...obj1, ...obj2}
//
// console.log(obj4);
// // *******************************************************************************
//
// //data that comes from the database
//
// const users=[
//     {
//         id: 1,
//         email: "far@gmail.com"
//     },
//     {
//         id: 2,
//         email: "cman@gmail.com"
//     }
// ]
// // console.log(user[1])
//
//
// console.log("Tinder User")
// const tinderUser ={};
// tinderUser.name= "Faraz";
// tinderUser.email = "farazashraf@gmail.com";
// tinderUser.isLoggedIn = false;
//
// console.log(tinderUser);
//
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //checking if this property exsist or not