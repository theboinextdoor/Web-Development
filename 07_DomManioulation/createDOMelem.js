// const parent = document.querySelector('.parent');
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[1].innerText)


// for (let i=0; i<parent.children.length; i++){
//     console.log(parent.children[i].innerHTML)
// }

// parent.children[1].style.color= 'orange'
// parent.children[1].style.color= 'orange'
// console.log(parent.firstElementChild.innerHTML)
// console.log(parent.lastElementChild.innerHTML)
//
//
// const day1= document.querySelector('.day');
// console.log(day1)
//
// console.log(day1.parentElement)
// console.log(day1.nextElementSibling)


// console.log("Nodes : ", parent.childNodes)


// ***************************************************************************************************

const  div = document.createElement('div')
// console.log(div)
// div.className= "main";
// div.id="myId"
div.setAttribute("class", "mainclass myOwnClass")
div.setAttribute("id", "myId")
div.setAttribute("title", "generateTitle")
div.style.backgroundColor="orange"
div.style.padding= "12px";
div.style.margin= "12px";
// div.innerHTML="Chai aur code."
const addText= document.createTextNode("Chai aur code")
div.appendChild(addText);
document.body.appendChild(div)
// console.log(div)

div.append()

