// interface Rectangle {
//     height: number,
//     width: number
// }

// const rectangle: Rectangle = {
//     height: 10,
//     width: 20
// }

// // extends interface

// interface ColorRectangle extends Rectangle {
//     color: string;
// }

// const colorRectangle: ColorRectangle = {
//     height: 10,
//     width: 20,
//     color: 'blue'
// }

// console.log(colorRectangle);
// console.log(rectangle);

interface Calculation {
    (num1: number, num2: number): number;
}

let add: Calculation;

add = function (num1: number, num2: number) {
    return num1 + num2;
}

console.log(add(4, 10));



export {};