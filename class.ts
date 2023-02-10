// class Student {
//     //name = 'Manish Kumar Prasad';
//     name;
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         console.log(this.name);
//     }
// }

// let student1 = new Student("manish");
// student1.getName();

// export {};

class Parent {
    state;
    constructor(state: string) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

class Chield extends Parent {


}

let p1 = new Parent("Bihar");
let c1 = new Chield("Bihar");

console.log(c1.getState());

export {};