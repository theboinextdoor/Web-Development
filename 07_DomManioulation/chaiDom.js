// const myul = document.querySelector('ul');
// console.log(myul);
//
// const turnningColor= document.querySelector('li');
// turnningColor.style.backgroundColor= "green";
// turnningColor.style.padding= "2px";
// turnningColor.style.margin= "2px";
// turnningColor.style.borderRadius= "10px";
// turnningColor.style.cursor= "pointer";
// turnningColor.innerText= "I am a green box"
//
//
// const myul2= document.querySelectorAll('li');
// console.log(myul2);
//
// myul2.forEach(function (l, index){
//     if(index%2==0){
//         l.style.backgroundColor="red";
//     }else{
//         l.style.backgroundColor="blue";
//     }
// });



// -------------------------------------------------------------------------------

const myListClass = document.getElementsByClassName('list-tem')
console.log(myListClass);

//this is HTML collection ans thats's why we cannot just apply for loop on it
// so we have to convert it into the array function .
const myClassArr= Array.from(myListClass);
console.log(myClassArr)

myClassArr.forEach(function (li, index){
   if(index == 0 || index== 1){
       li.style.backgroundColor= 'orange';
   }else if(index == 2){
       li.style.backgroundColor= 'white';
   }else{
       li.style.backgroundColor= 'green';
   }
});





