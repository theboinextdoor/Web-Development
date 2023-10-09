const heading = document.getElementById('myHeading');
heading.innerText=" Hey My name is Faraaz Ashraf"
heading.style.color="red"

const myPara  = document.getElementById('para');
myPara.innerText= "And you are learning Date and Time in JavaScript"


// ***************************************** Dates **************************************************

let myDate = new Date();
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleTimeString())

let myCreatedDate= new Date(2001, 9, 15);
console.log(myCreatedDate.toDateString());


