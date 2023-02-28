// generic function

// function echo<T>(val: T): T {
//     return val;
// }

// console.log(echo('manish'));



/********** classes *************/


// class Person {
//     // private name: string;

//     // public constructor(name: string) {
//     //     this.name = name;
//     // }

//     public constructor(private name: string) {};
    
//     public getName(): string {
//         return this.name;
//     }
//     public setName(name: string): void {
//         this.name = name;
//     }
// }

// const person = new Person("manish");
// //person.setName('bikash');
// console.log(person.getName());

/******** inheritance - implements*****************/

// interface Shape {
//     getArea: () => number;
// }

// class Rectangle implements Shape {
//     public constructor(protected readonly width, protected readonly height: number) {}

//     public getArea(): number {
//         return this.width * this.height;
//     }
// }

// let rectangle = new Rectangle(10, 20);
// console.log(rectangle.getArea());


//---------------//

// class NamedValue<T> {
//     private value: T | undefined;

//     constructor(private name: string) {}

//     public setValue(value: T) {
//         this.value = value;
//     }

//     public getValue(): T | undefined {
//         return this.value;
//     }

//     public toString(): string {
//         return `${this.name}: ${this.value}`;
//     }
// }

// let value = new NamedValue<number>('myNumber');e
// export {};


//**************************************/

// function fun<S extends string>(val1: S): S {
//     return val1;
// }

// console.log(fun<number>(1));


//----------------------/

// type Name = {
//     name: string;
// }

// type Roll = {
//     roll: number;
// }

// //union
// type NameOrRoll = Name | Roll;
// //intersection
// type NameAndRoll = Name & Roll;


// let record1: NameOrRoll = {
//     name: 'manish',
//     roll: 121
// }

// let record2: NameAndRoll = {
//     name: "manish",
//     roll: 123
// }

// console.log(record1);



//**********arrow function in type script********/

// let sum = (x: number, y: number): number => {
//     return x + y;
// }

// console.log(sum(10, 20)); //returns 30


//****** Index signature syntax **************/

// interface  Object {
//     [Key: string] : string;
//     [Key: number] : string;
// }

// let object: Object =  {
//     name: 'manish',
//     121: 'roll',
//     true: 'true'
// }

// let name = 'manish';
// console.log(name);




/***** Duck Typeing ***************/


// class Dog {  
//     sound = "barking";  
// }  
// class Lion {  
//     sound = "roaring";  
// }  
// class Goat {  
//     sound = "bleat";  
//     swim(){  
//         console.log("Cannot Swim!");  
//     }  
// }  
// let lion: Lion = new Dog(); // substitutes  
// let dog: Dog = new Lion(); // substitutes  
// let lionTwo: Lion = new Goat();  
// //let goat: Goat = new Lion(); // IDE & compiler error  
// console.log("Lion Sound: "+lion.sound);  
// console.log("Dog sound: "+dog.sound);  
// console.log("Lion sound: "+lionTwo.sound);  


// interface HasAge {
//     age: number;
// }
// function getOldest(people: HasAge[]) {
//     return people.sort((a,b) => b.age - a.age)[0]
// }
// const people = [{age: 30}, {age: 40}, {age: 50}];

// interface Player {
//     name: string;
//     age: number;
// }

// const players: Player[] = [
//     {name: 'john', age: 30},
//     {name: 'bikash', age: 20}
// ]

// console.log(getOldest(people).age);
//console.log(getOldest(players).name);
// error because returning type is HasAge


// Assertion is not good habbit
// let person = getOldest(players) as Player;
// console.log(person.name)


// interface User {
//     name: string;
// }

// interface NewUser extends User {
//     age: number;
// }

// let newUser: NewUser = {
//     name: 'bikash',
//     age: 20
// }


// console.log(newUser);

// type User1 = {
//     name: string;
// }
// type NewUser1 = User1 & {
//     age: number;
// }
// let newUser1: NewUser1 = {
//     name : 'roshan',
//     age : 24
// }
// console.log(newUser1);




//question-1
// const a: string[] = ['a', 'b', 'c'];
// const b = a[5]; //on hover it  is show string
// console.log(b); //


//question-2

// interface Obj1 {
//     [key: string]: string;
// }

// interface Obj2 extends Obj1 {
//     [key:string]: string;
// }

// let obj: Obj2 = {
//     name: 'string'
// }
// console.log(obj);


//question-3 : Generate dynamic key with fixed prefix          

// interface MyObject {
//     [k: `a${number}`]: number;
//     [k: `b${number}`]: string;
//     [k: `c${number}`]: boolean;
// }


// let myObject: MyObject = {
//     a1: 123,
//     a2: 354,
//     a3: 789,
//     b1: 'manish',
//     b2: 'bikash',
//     b3: 'roshan',      
//     c1: false,
//     c2: true,
//     c3: false,
// }

// console.log(myObject);


//question-3: difference between ! operator and ? operator

// function liveDangerously(x?: number | null) {
//     // No error at compilt time

//    //give error at runtime if
//    // x is null or undefined
//     //console.log(x!.toFixed());
    
//     //not give error at compile time and run time
//     ///but give undefined if x is null
//     console.log(x); // null
//     console.log(x?.toFixed()); // undefined
// }
// liveDangerously(null);


// let a: string[] = ['a', 'b','c'];
// let val = a[5];
// console.log(val);



interface  Person {
    name?: {
        firstName: string,
        lastName: string,
    };
    age: number;
    getName(): string;
    setName(val: string): void;
}

let person1: Person = {
    // name:'bikash',
    age: 22,
    setName(val) {
        this.name = val;
    },
    getName() {
        return `${this.name}`
    }
}


console.log(person1.name?.firstName);

console.log("this is manish here");

// person1.setName('manish');
// console.log(person1.getName());






export {};