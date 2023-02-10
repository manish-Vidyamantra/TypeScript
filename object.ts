// const students: {roll: number, name: string} = {
//     roll: 101,
    
// }

// console.log(students);

// will give error like property name is missing
// to avoid this use following code

const students: {roll: number, name?: string} = {
    roll: 101
}

export {};
