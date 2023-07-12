"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "HIII"
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("rehan");
function signUp(name, email, isPaid) {
    // code comes here
}
signUp("Rehan", "abc@gmail.com", false);
// When we don't need to give all the arguments, we can provide default values to parameters
var signUpNow = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // code comes here
};
signUpNow("Rehan", "abc@gmail.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    // return "200 OK";
}
