// const promOne = new Promise( function(resolve, reject){
//     // do an acync task:-
//     // such as DB calls, cryptography, network
//
//     setTimeout(function (){
//         console.log("Async task is complete.")
//         resolve();
//     }, 1000)
// });
//
// promOne.then( function (){
//     console.log("Promise 1 resolved ")
// })
//



// promise 2
// new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2 is completed now")
//         resolve();
//     },1000)
// }).then(function (){
//     console.log("Promise 2 resolved")
// })


// promise 3
// new Promise(function(resolve, reject){
//     setTimeout(function (){
//         resolve({user: "Damon",  email: "farazashraf1523@gmail.com"} )
//     },1000)
// }).then(function (user){
//     console.log(user.email)
//     console.log(user.user)
// })


//Promise
// new Promise(function (resolve, reject){
//     setTimeout(function (){
//         let error = true;
//         if(!error){
//             resolve({username: "Faraaz", password: "123"});
//         }else{
//             reject("ERROR: something went wrong. ")
//         }
//     },1000)
// })
//     .then( (user)=>{
//     console.log(user);
//     return user.username
// })
//     .then( (username)=> {
//     console.log(username)
// })
//     .catch((error)=>{
//     console.log(error)
// })
//     .finally(()=>{
//         console.log("The Promise is either resolved or rejected. ")
//     })


//promise 5
//
// const promise5= new Promise( (resolve, reject)=> {
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username: "JavaScript", password: "12345"})
//         }else{
//             reject("Error: Something is wrong with the Script");
//         }
//     }, 1000)
// })


// promises through async
// async function consumePromiseFive(){
//     try{
//         const response= await promise5;
//         console.log(response)
//     }catch(errr){
//         console.log(error)
//     }
//
// }
//
// consumePromiseFive()


// async function getAllusers(){
//     try{
//         const response=  await  fetch('http://localhost')
//         console.log(response)
//         const data = await response.json();
//         console.log(data)
//     }catch (error){
//         console.log("E: ", error )
//     }
// }
// getAllusers()


fetch("https://api.github.com/theboinextdoor")
    .then((response)=>{
        return response.json()
    }).then((data)=>{
    console.log(data);
})
    .catch((error)=> console.log(error))


