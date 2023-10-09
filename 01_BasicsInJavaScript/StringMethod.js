let a= 56;
console.log(a);
console.log(typeof a);
console.log(typeof String(a));

let b=45;
console.log(b);
console.log(typeof b);
b= b.toString();
console.log(typeof b);



// ------------------------------------------------------------

let s= "My name is Faraaz Ashraf";


//indexOf method :-
console.log(s.indexOf("y"))
console.log(s.indexOf("Fa"))

// lastIndexOf method
console.log(s.lastIndexOf("a"))

// charAt method
console.log(s.charAt(8))

// endsWith
console.log(s.endsWith("Ashraf"))

// includes
console.log(s.includes("Farazz"))

//substring
console.log(s.substring(0, 11))

//slice
console.log(s.slice(0, 4))

// split
console.log(s.split(" "))

//replace
console.log(s.replace("is", "is always will be"))
console.log(s.replace("Faraaz", "Aiman"))

//length
console.log(s.length)

// tolowerCase and toUppercase
console.log(s.toLowerCase())
console.log(s.toUpperCase())

// substr
console.log(s.substr(4, 17))

// -------------------------------------------------------------------

//DOM on String

let y = "my name is Damon Salvatore.";
let heading = document.getElementById("myHeading");
heading.innerText= y;

let para = document.getElementById("mypara");
para.innerText= "And You are watching The Vampires Diaries";

heading.style.backgroundColor= "red";
para.style.backgroundColor= "blue";








