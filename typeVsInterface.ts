
// Difference 1


// type can not be redecleared
// interface can be redcleared


// // Creating a interface
// type Geeks = {
//   name: string;
//   age: number
// }
 
// type Geeks = {
//   email: string;
// }
 
// // Using the merged interface
// const gfg: Geeks = {
//   name: " kgowda",
//   age: 20,
//   email: " kgowda@gmail.com"
// };
 
// console.log(gfg);

// export {};


// Difference 2

// when a class implements a type it have to 
// initialize all properties
// when a class implemets a interface it have to 
// declare all properties that is in interface


// type Person = {
//     name: string;
//     age: number;
// }


// class Manager implements Person {
//     name: string = 'john';
//     age: number = 55;

//     size:string = 'm'
// }

// interface Person1 {
//     name: string;
//     age: number;
// }

// class Manager1 implements Person1 {
//     name;
//     age;

//     size:string = 'm';

// }




// Difference 3
//interface extend syntax is different to types

// type user = {
//     name: string,
//     age: number
// }

// type userWithAddress = user & {
//     name: number
//     address: string;
// }

// let user1: userWithAddress = {
//     name: 101,
//     age: 27,
//     address: 'bihar'

// }

// //interface

// interface Person {
//     name: string,
//     age: number
// }

// interface userWithAddresss extends Person {
//     name: number;
//     address: string;
// }




//Difference_4 
//Interfaces cannot extend a primative

// type myName = string;

// interface myName1 extends string {

// }


//Difference 5
//Types can create unions, while interfaces cannot




// type userId = string | number;
// type name = string;

// type userNameAndId = userId & name;

// interface user {
//     name: string;
// }

// interface newUser extends user {
//     rollNum: number;
// }

// type user = {
//     name: string;
// }

// type newUser = user & {
//     name: number;
// }

// let person1: newUser;
// person1 = {
//     name: 123
// }
