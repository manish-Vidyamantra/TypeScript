function findEncriptCharacter(alphabets, ch, key) {
    let orgIndex = alphabets.indexOf(ch);
    let rotatedIndex = (orgIndex + key) % 26;
    return alphabets.charAt(rotatedIndex);
}



function encriptMessage(message, key) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let encriptedString = "";
    message = message.toLowerCase();
    let messageLength = message.length;
    for(let i = 0; i < messageLength; i++) {
        let ch = message.charAt(i);
        if(ch >= 'a' && ch <= 'z') {
            ch = findEncriptCharacter(alphabets, ch, key);
        }
        encriptedString = encriptedString + ch;
    }
    
    return encriptedString;
}

console.log(encriptMessage('rohan.', 4));




// Split a string, using comma as the seprator

function splitByComma(str) {
    let arr: string[] = [];
    let strLength = str.length;
    let word = '';
    for(let i = 0; i < strLength; i++) {
        let ch = str.charAt(i);
        if(ch == ',') {
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






export {};