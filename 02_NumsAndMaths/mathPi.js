// getOwnPropertyDescriptor() this tells some hidden property of Object

// there is a property called "writable" and "enumerable" which
// you can not change the value of these objec
// same as these function we can also set our value which nobody can change
//by some choice anybody uses our library or our framework

// const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(discriptor);


// for Example:-
const chai={
    name : "Gingher chai",
    price : 250,
    isAvailable : true,

    orderchai: function(){
        console.log("this is not correct way to implemet  for loop on Object")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

//here we are changing some property
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable : true,  //after changing the value of enumerable we cannot iterate on name
    configurable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// we can iterate in Objects by
for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`Keys: ${key} ->  value: ${value}`)
    }else{
        console.log("This is the function inside the object which is not iterable.")
    }
}