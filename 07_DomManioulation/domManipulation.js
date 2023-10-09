// let heading = document.getElementById("myHeading");
// heading.innerText= "My Name is Faraaz Ashraf";
//
// let para = document.getElementById("mypara");
// para.innerText= "And you are doing some DOM Manipulation in JavaScript.";


// ------------------------------------------------------------------
console.log(document.getElementById("myHeading"))
console.log(document.getElementById("mypara"))

const thisOne= document.getElementsByName("email ");
console.log(thisOne)


const btn = document.getElementById("mybtn")
btn.style.backgroundColor="red"
btn.style.color="white"
btn.style.height="70px"
btn.style.width="70px"
btn.style.borderRadius= "10px"
btn.style.cursor= "Pointer"
btn.style.padding= "2vmax 4vmax"
btn.style.margin= "2vmax 5vmax"
// btn.style.position= "absolute"

// const newBtn= document.querySelector(".thisone");
// newBtn.innerText= "hey i am me";

const h2= document.createElement("h2");

document.body.append(h2);
h2.innerText= "Hiiii"
document.body.prepend(h2)

function bringmeHeading(){
    const h1= document.createElement("h1");
    h1.innerText= "Yaaaahooooooo";
    document.body.prepend(h1);
}
btn.onclick= bringmeHeading()
// bringmeHeading()


function deleteHeading(){
    const h1= document.querySelector("h1");
    h1.remove()
}


const myBtn= document.querySelectorAll("button")
myBtn[1].onclick= deleteHeading();




