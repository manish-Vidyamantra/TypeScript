// type Point = { x: number; y: number };
// type P = keyof Point;

// let val: P;
// //Behavier will be like following 
// // val : 'x' | y
// //val = 5 will give error
// val =  'y';
// console.log(val);

// export {};

// template litral types

type World = "world";
type Greeting = `hello ${World}`;

let val: World = 'world'
console.log(val);
let greeting: Greeting = 'hello world'
console.log(greeting);

export {}