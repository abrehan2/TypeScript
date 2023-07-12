"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Abdul Rehan",
    email: "rehannajam2@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    // CODE HERE
}
var newUser = {
    name: "Rehan",
    isPaid: false,
    email: "abc.com",
};
createUser(newUser);
function createCourse() {
    return { name: "react", price: 210 };
}
function myDetails(user) {
    console.log(user.name);
    return { name: "", email: "", isActive: false };
}
myDetails({ name: "", email: "", isActive: true });
var myUser = {
    _id: "12345",
    name: "Rehan",
    email: "abc@gmail.com",
    isActive: true,
};
myUser.email = "abc.com";
