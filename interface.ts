interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 10,
    width: 20
}

// extends interface

interface ColorRectangle extends Rectangle {
    color: string;
}

const colorRectangle: ColorRectangle = {
    height: 10,
    width: 20,
    color: 'blue'
}

console.log(colorRectangle);
console.log(rectangle);
export {};