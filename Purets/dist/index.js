"use strict";
// tsc.cmd --init
// tsc.cmd -w
var _User_city;
console.log("THIS IS REHAN");
console.log("IM WORKING!!");
// CLASSES -
// class User {
//  public email: string;
//   name: string;
//   readonly #city: string = "LA";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     ;
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        _User_city.set(this, "LA");
        this.email = email;
        this.name = name;
    }
}
_User_city = new WeakMap();
const obj = new User("abc.com", "Rehan");
// obj.city = "Toronto";
