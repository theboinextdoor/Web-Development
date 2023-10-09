(function db1(){
    console.log(`DB1 now connected`);
})();  //semicolon(;) is must in order to exeute the next line of codes

(function db1(){
    console.log("DB2 is now connected.")
})();

(function db3(){
    console.log("DB3 is now connected.")
})();

(function (name){
    console.log(`${name} is now Connected to the server.`)
})('Faraz')


//Immediately Invoked: This part is easy to explain
// and demonstrate. This type of function is called
// immediately invoked as these functions are executed
// as soon as they are mounted to the stack, it requires
// no explicit call to invoke the function. If we look at
// the syntax itself we have two pairs of closed
// parentheses, the first one contains the logic
// to be executed and the second one is generally
// what we include when we invoke a function, the
// second parenthesis is responsible to tell the
// compiler that the function expression has to be e
// xecuted immediately.