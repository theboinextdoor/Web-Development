let heading = document.getElementById("myHeading");
heading.innerText= "My Name is Faraaz Ashraf";

let para = document.getElementById("mypara");
para.innerText= "And you are learning Array and Object in JavaScript.";


// ------------------------------------------------------------

// Array



// let arr= [12,4,5,6,7,78,9];
// console.log(arr);
//
// for(let x in arr){
//     console.log(arr[x])
// }
//
//
//
// console.log("Mix up array: ")
// let arr1= [1, 5,"Faraaz", "Ashraf", arr]    /* An Array consist of different kind of data and array itself.*/
// console.log(arr1)
// for(let x in arr1){
//     console.log(arr1[x])
// }
//
//
// let arr2= [];
// arr2[0]= 23;
// arr2[1]= 1123;
// arr2[2]= 22;
// arr2[3]= 21;
// arr2[4]= 211;
// console.log(arr2);
//
//
//
// let arr3= new Array(9);
// console.log(arr3.length)
//
//
// let arr4= [];
// arr4.push(723);      /* it pushes the value inside the array to the end */
// arr4.push(238);
// arr4.push(263);
// arr4.push(623);
// arr4.push(123);
//
// console.log(arr4)
//
// arr4.pop()     /* it pops the value form the end */
// arr4.pop()     /* it pops the value form the end */
// arr4.pop()     /* it pops the value form the end */
// console.log(arr4)
//
//
//
//
//
// let arr5 = [7,9,4,5,8,2,3,10,11,100,188,14,];
// console.log(arr5)
//
// arr5.shift()    /* it removes the elemets form the beginning */
// arr5.shift()    /* it removes the elemets form the beginning */
// arr5.shift()    /* it removes the elemets form the beginning */
// console.log(arr5)
//
//
// arr5.unshift(55);  /* it adds the elem to the beginning*/
// console.log(arr5);
//
// arr5.splice(2,4);
// console.log(arr5);
//
//
// console.log(arr5.reverse())    /* it reverse the array.*/
// console.log(arr5.slice(2,4))
//
// console.log(arr5.includes(100))
//
//
//
// let arr6 = [];
// for(let i=0; i<5; i++){
//     if(i%2==0){
//         arr6[i]="Faraaz"
//     }
//     else{
//         arr6[i]="Aiman"
//     }
// }
// console.log(arr6)


// -----------------------------------------------------------------------------------------------------


// Object


const myObj= {
    name : "Faraaz",
    suranme : "Ashraf",
    income : 2000000,
    male: true,
};

for(let x in myObj){
    console.log(`${x} : ${myObj[x]}`)
}

myObj.Age = 21;
for(let x in myObj){
    console.log(`${x} : ${myObj[x]}`)
}







