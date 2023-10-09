let heading = document.getElementById("myHeading");
heading.innerText= "My Name is Faraaz Ashraf";

let para = document.getElementById("mypara");
para.innerText= "And you are studying some advance array  in JavaScript.";




// simple function
const myfunc= function(a, b){
    console.log(a+b);
};
myfunc(1,2)


//arraow function
const myfunct = (a,b)=>{
    console.log(a+b);
};

myfunct(7, 3)



// ------------------------------------------------------------------------------------


const arr= [2,3,4,5,6,7,8];



// const myarr= arr.find((value, index)=> {
//     //find function returns only one number in return
//    if(value > 3){
//        return value;
//    }
// })
// console.log(myarr);




// const result =  arr.filter((value, index)=>{
//     //if we want whole array in return we will use the filter function
//     if(value > 4){
//         return value ;
//     }
// });
//
// console.log(result);


// const result2 = arr.every((value , index )=>{
//     //every function return true or false
//     return value > 3
// });
// console.log(result2)


// const result3 = arr.some((value , index )=>{
//     //every function return true or false
//     return value > 0
// });
//
// console.log(result3)

// for(const elem of arr){
//     console.log(elem)
// }
//
// for(let value of arr){
//     value+=3
//     console.log(value )
// }

console.log(arr);


console.log("Element inside the array is : ")
let totalSum = 0
const result4= arr.forEach((value , index)=>{
    totalSum+=value
    console.log(`${value} : ${index}`);
    return totalSum;
});

console.log(totalSum);


const res= arr.map((value , index )=>{
    return value+20
});

console.log(res);