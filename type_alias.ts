

// let a: string | number | undefined = 10;
// let b: string | number | undefined = 20;
// let c: string | number | undefined = undefined;

// here it will create redudancy
// so avoide this use type alias 

type varType = string | number | undefined;

let a: varType = 10;
let b: varType = 20;
let c: varType = undefined;


a = undefined;

export {};
