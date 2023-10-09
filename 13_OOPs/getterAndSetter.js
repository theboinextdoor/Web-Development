class User{
    constructor(email, password) {
        this.email= email
        this.password = password
    }

    // suppose you don't wanna give accessa of password outside the class
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}

const me = new  User("far@gmail.com", 1234);
console.log(me.password)