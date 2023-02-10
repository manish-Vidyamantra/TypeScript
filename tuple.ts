let ourTuple: [number, boolean, string];
ourTuple = [5, true, 'manish'];

ourTuple.push('Hero');
console.log(ourTuple);


// read only tuple

let myTuple: readonly [number, boolean, string] = [5, true, 'roshan']
//myTuple.push("manish");
export {};