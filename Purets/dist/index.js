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
        this.course_count = 1;
        this.email = email;
        this.name = name;
    }
    get myEmail() {
        return this.email;
    }
    get courseCount() {
        return this.course_count;
    }
    set courseCount(courseNum) {
        if (courseNum > 1) {
            this.course_count = courseNum;
        }
        throw new Error("The course count should be more than 1");
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
_User_city = new WeakMap();
const obj = new User("abc.com", "Rehan");
// obj.city = "Toronto";
