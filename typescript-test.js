"use strict";
exports.__esModule = true;
function findEncriptCharacter(alphabets, ch, key) {
    var orgIndex = alphabets.indexOf(ch);
    var rotatedIndex = (orgIndex + key) % 26;
    return alphabets.charAt(rotatedIndex);
}
function encriptMessage(message, key) {
    var alphabets = 'abcdefghijklmnopqrstuvwxyz';
    var encriptedString = "";
    message = message.toLowerCase();
    var messageLength = message.length;
    for (var i = 0; i < messageLength; i++) {
        var ch = message.charAt(i);
        if (ch >= 'a' && ch <= 'z') {
            ch = findEncriptCharacter(alphabets, ch, key);
        }
        encriptedString = encriptedString + ch;
    }
    return encriptedString;
}
console.log(encriptMessage(' rohan.', 4));
// Split a string, using comma as the seprator
function splitByComma(str) {
    var arr = [];
    var strLength = str.length;
    var word = '';
    for (var i = 0; i < strLength; i++) {
        var ch = str.charAt(i);
        if (ch == ',') {
            arr.push(word);
            word = '';
            continue;
        }
        word = word + ch;
    }
    arr.push(word);
    return arr;
}
console.log(splitByComma("Rohan,16,Male,Delhi"));
