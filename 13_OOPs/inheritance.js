// class User{
//     constructor(username) {
//         this.username = username ;
//     }
//
//     logme(){
//         console.log(`Username is:  ${this.username}`)
//     }
//
// }
//
//
// //with the help of extends
// // keyword we can inherit all the
// // feature of the parent class
// class teacher extends User {
//     constructor(username, email, password) {
//         super(username)
//         this.email = email;
//         this.password = password;
//     }
//
//     addcourse(){
//         console.log(`New course  was added by ${this.username}`)
//     }
// }
//
// const newUser= new teacher("Damon", "damn@gmail.com", "0123")
// console.log(newUser.addcourse())
//
// const newbie= new User("Faraz")
// newbie.logme()
//
//
// //both are not equal
// console.log(newUser=== newbie)
// console.log(newUser instanceof teacher)  //yes it is an instance of teacher
// console.log(newUser instanceof User)  //yes it is an instance opf User
//

// ************************ STATIC ******************************
class User{
    constructor(username) {
        this.username= username;
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    cretaeID(){
        return '123';
    }
}
