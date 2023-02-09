"use strict";
exports.__esModule = true;
function addTwo(num) {
    //num.toUpperCase() such thing will be avoided
    return num + 2;
}
addTwo(5);
// suppose we want to return only number then
function addThree(num) {
    // return "manish"; // this will give error
    return num + 3;
}
addThree(5);
// if you do not know type of return value then
// then write code as follow
function response(val) {
    if (val === 'ok') {
        return 200;
    }
    return "some error";
}
var res = response("ok");
//handling multiple parameter
function loginUser(email, password) {
    return true;
}
loginUser('m@gmail.com', '1234');
