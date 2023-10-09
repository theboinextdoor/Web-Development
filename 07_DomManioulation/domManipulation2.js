let heading = document.getElementById("myHeading");
heading.innerText = "Hey my name is Faraaz ";

let para = document.getElementById("mypara");
para.innerText="and you are learning DOM Manipulation in JavaScript";


// ----------------------------------------------------------------------

// console.log(document.documentElement)    // w=we will get whole html elem.
// console.log(document.body.firstChild)    // we will get some text
// console.log(document.body.firstElementChild)   //this will give the heading tag
// console.log(document.body.childNodes)   //it will give all its children including the text space between al the tags.
// console.log(document.body.children);    // it will give childrewn only


// -------------------------------------------------


// these are not array but we can convert it into the array
// const arr= document.body.children;
//
// const newArr= Array.from(arr);
// console.log(newArr.length)
// console.log(newArr);
//
// for(let i = 0; i<newArr.length; i++){
//     console.log(newArr[i]);
// }


// --------------------------------------------------------------------------------

// console.log(document.getElementById("secondOne"))
// console.log(document.getElementsByClassName("thirdClass"))
//
// const classe= document.getElementsByClassName("thirdClass");
// console.log(classe[0])
// console.log(classe[1])
//


// ------------------------------------------------------------------------

// const thisOne = document.getElementsByName("myInput");
// console.log(thisOne);



// ---------------------------------------------------------------------------------

const thisOne = document.getElementsByTagName("span")
console.log(thisOne)

thisOne[0].innerText ="This is a new Content"

const button= document.getElementById("mybtn");
button.innerText="Click here to know about you "
button.style.backgroundColor = "red"
button.style.color = "white"
button.style.cursor= "pointer"
button.style.width="100px"
button.style.heigth="190px"
button.style.padding= "2vmax"
button.style.margin= "2vmax"
button.style.borderRadius= "2vmax"

// ------------------------------------------------------------------------
function bringMeHeading(){
    const h2 = document.createElement("h2");
    h2.innerText="you are a dick "
    document.body.prepend(h2);
}

function deleteHeading(){
    const h2 = document.querySelector("h2");
    h2.remove();
}


const button2= document.querySelectorAll("button");
button2[1].innerText= "oops delete it please"

button.onclick= bringMeHeading;
button2[1].onclick= deleteHeading







