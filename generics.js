"use strict";
exports.__esModule = true;
function print(parm) {
    return parm;
}
// print function will work with any parameter
console.log(print("manish"));
console.log(print(5));
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function loggingIdentity1(arg) {
    //console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function processData(data) {
    console.log(data);
}
processData(500);
console.log(loggingIdentity([1, 2, 3]));
