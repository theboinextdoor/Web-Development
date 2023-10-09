
// *********************** FILTER****************************************************

// const nums= [1,2,3,4,5,6,7,8,9,10];

// using filter with return function
// const mynewArray= nums.filter( (num)=>{
//     return num>4;
// })
// console.log(mynewArray)
//

// using filter without return function
// const mynewArray= nums.filter( (num)=> num>4);
// console.log(mynewArray)


// using forEach loop
// const mynewArr= [];
// mynewArray.forEach((num
// )=>{
//     if(num> 4){
//         mynewArr.push(num);
//     }
// })
// console.log(mynewArr);


// using filter with object inside the array
// const books = [
//
//     {title :'Book One', genre : 'fiction' , publish: '1998', edition: 2003},
//     {title :'Book two', genre : 'romantic' , publish: '1999', edition: 2000},
//     {title :'Book three', genre : 'non-fiction', publish: '1997', edition: 2001},
//     {title :'Book four', genre : 'history' , publish: '1995', edition: 2002},
//     {title :'Book five', genre : 'history' , publish: '1993', edition: 2008},
//
// ];
// // 1
// const userBooks = books.filter( (bk)=> bk.genre === 'history')
// console.log(userBooks)
//
// // 2
//
// const userBooks2 = books.filter( (bk)=> {
//     return bk.edition >= 2001;
// })
// console.log(userBooks2)
//
// // 3
// const userBooks3 = books.filter( (bk)=>{
//     return bk.publish > 1992 && bk.publish <1999;
// })
// console.log(userBooks3)
//
// // 4
// const userBooks4 = books.filter( (bk)=> bk.publish>1995 && bk.edition < 2001 )
// console.log(userBooks4)


// *********************** MAP ****************************************************

const number= [1,2,3,4,5,6,7,8,9,10]

// const ans = number.map( (num) =>{
//                 return num+10;
// })
//
// console.log(ans)
//
//
// const newAns = number.map( (num) =>{
//         if(num > 5){
//             return num+10;
//         }
//     else{
//         return num + 5
//     }
// });


// const newnum= number
//     .map((n) => n*10)
//     .map((n)=> n*10).filter((n)=> n>=500)
//
// console.log(newnum)


// *********************** REDUCE  ****************************************************

const array1= [1,2,3];

// without arrow function
// const myTotal  = array1.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval:  ${currval}`)
//     return acc + currval
// }, 0)
// console.log(myTotal)


// with arrow->function
const myTotal= array1.reduce( (acc, val)=>{
    return acc+val;
}, 0)
console.log(myTotal)
