// function logValue(x: Date | string) {
//     if(x instanceof Date) {
//         console.log(x.toISOString());
//     } else {
//         console.log(x.toUpperCase())
//     }
// }
// //****************************/
// type Fish = {swim: () => void}
// type Bird = {fly: () => void}
// function isFish(pet: Fish | Bird): pet is Fish { 
//     return (pet as Fish).swim !== undefined;
// }
// function getFood(pet: Fish | Bird) {
//     if(isFish(pet)) { 
//         pet
//         return 'fish food';
//     } else {
//         pet
//         return 'bird food';
//     }
// }
function isString(x) {
    console.log(typeof x === 'string');
    return typeof x === 'string';
}
function revString(x) {
    if (typeof x === 'string') { // here x is of unknown type
        return x.split('').reverse().join(''); // x is of string type
    }
    else if (typeof x === 'number') {
        return ++x;
    }
    return null;
}
console.log(revString(123));
