function calculateCartPrize(...num1){    //this is rest operator
    return num1;
};

console.log(calculateCartPrize(200, 300, 400));
function calculateCartPrize2(val1, val2, ...num1){    //this is rest operator
    return `${val1},${val2}, ${num1}`;
};

console.log(calculateCartPrize2(200, 300, 400, 5000, 2000));

// *************************************************************************************************

//Passing Object to Function

const user={
    username: "Faraaz Ashraf",
    id: 1523
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and id is ${anyObject.id}`)
}
handleObject(user)
handleObject({
    username: "Sam",
    id: 2315
})


// *************************************************************************************************************

//Passing Array to the function

const myArr= [22,23,45,567,76,11];
function myArray(anyObject){
    return anyObject[1]
}

console.log(myArr)