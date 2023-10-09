const heading = document.getElementById('myHeading');
heading.innerText=" Hey My name is Faraaz Ashraf"
heading.style.color="red"

const myPara  = document.getElementById('para');
myPara.innerText= "And you are learning Number and Maths"




const score = 400;
const balance = Number(400);   //this is object of number type.

console.log(typeof score);
console.log(typeof balance);

console.log(score);
console.log(balance);

//number to String
console.log(balance.toString());
console.log(typeof balance.toString());

//to fixed method

console.log(balance.toFixed(2))   //it will give floating value with 2 dacimal point

const otherNumber= 234.890
console.log(otherNumber.toPrecision(3)) //it gives persise value

const anotherNumber = 1000000;
console.log(anotherNumber.toLocaleString())   // it changes the number into money format of US
console.log(anotherNumber.toLocaleString('en-In'))   // it changes the number into money format of India
//How amazing it is

// **************************** Maths ****************************************

console.log(`Maximum value is : ${Math.max(91, 92)}`);
console.log(`Minimum value is : ${Math.min(91, 92)}`);
console.log(`Absolute value is : ${Math.abs(91, 92)}`);
console.log(`Square Root of 4  is : ${Math.sqrt(4)}`);
console.log(`Top value of 4.2  is : ${Math.ceil(4.2)}`);
console.log(`Round number of 4.1  is : ${Math.round(4.1)}`);
console.log(`floor value of 4.5  is : ${Math.floor(4.5)}`);
console.log(`Random number between of 1 to 10  is : ${Math.round(Math.random(1,2,3,4,5,6,7,8,9,10))}`)






