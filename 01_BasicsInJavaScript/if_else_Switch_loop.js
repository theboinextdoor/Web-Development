// let heading = document.getElementById("myHeading");
// heading.innerText= "My Name is Faraaz Ashraf";
//
// let para = document.getElementById("mypara");
// para.innerText= "And you are learning if-else , Switch, Loops in JavaScript.";
//
//
//
// // -----------------------------------------------------------------------------
//
// //If-Else Statement
//
//
// let ice_cream= prompt("Enter a number : ")
//
//
// if(ice_cream === 10){
//     console.log("You can buy Blue Lagoon ");
// }else{
//     console.log("You can buy Belgium choco chips");
// }
//
//
// let age= Number(prompt("Enter a number : "))
// if(age < 18){
//     console.log("You are  child")
// }else if(age >= 18 && age <=50){
//     console.log("You are an adult ")
// }else{
//     console.log("You are a Sineor Citizen ")
//
// }
//
// // -----------------------------------------------------------------------------
//
// //Switch Statement
//
// let num= Number(prompt("Enter a number : "))
// switch (num) {
//     case 10:
//         heading.innerText= "Thanx to buy Cone";
//         break;
//     case 20:
//         heading.innerText= "Thanx to buy BCC";
//         break;
//         case 40:
//         heading.innerText= "Thanx to buy CC";
//         break;
//
//     default:
//         heading.innerText="You can buy nothing.";
//         break;
// }
//
//
// // ---------------------------------------------------------------
//
// // Loops
//
// for(let i=0; i<10 ; i++){
//     console.log(i+1);
// }
//
//
// for(let i = 5; i<51; i+=5){
//     console.log(i)
// }
//
//
// for(let i=50; i>0; i-=5){
//     console.log(i);
// }
//
// for(let i=0; i<=10; i++){
//     console.log(Math.random(0, 10))
// }
//
//
//
// let i=1;
// while(i<=10){
//     console.log(i*5);
//     i++;
// }



// for-in loop works for obect data type
const  person= {
    f_name: "Faraaz",
    l_name : "Ashraf",
    Age: 21
};

for(let x in person){
    console.log(`${x} : ${person[x]}`);
}


const num = [4, 7, 8, 45, 56];
for(let x in num){
    console.log(`${x} : ${num[x]}`)
}




