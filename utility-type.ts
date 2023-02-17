// interface value {
//     num1: number,
//     num2: number,
// }

// const myinfo: Partial<value> = {
//     num1: 10
// }

// myinfo.num2 = 20;
// console.log(myinfo);


// interface value {
//     num1: number,
//     num2: number,
//     num3?: number
// }
// const myNum: Required<value> = {
//     num1: 30,
//     num2: 40,
//     num3: 50
// }
// console.log(myNum);


//******* Readonly *********************/

// interface Todo {
//     title: string;
// }
// const todo: Readonly<Todo> = {
//     title: 'do some coding'
// }

// // todo.title = "not do coding"



//*** Record<Keys, Type> **********/
// interface CatInfo {
//     age: number;
//     breed: string;
// }

// type CatName = "miffy" | "boris" | "mordred";

// const cats: Record<CatName, CatInfo> = {
//     miffy: { age: 10, breed: "Persian" },
//     boris: { age: 5, breed: "Maine Coon" },
//     mordred: { age: 16, breed: "British Shorthair" },

// };

// console.log(cats.boris)



//**************** Omit<Type, Keys>  **********************/

// type User = {
//     id: string;
//     email: string;
//     postsCount: number;
// }

// // let user: User = {
// //     id: '101',
// //     email: 'm@gmial.com',
// //     postsCount: 201
// // }

// let userWithoutpostsCount: Omit<User, 'postsCount'> = {
//     id: '101',
//     email: 'm@gmail.com'
// }


// console.log(userWithoutpostsCount);



//*************** Pick<Type, Keys> *************************/
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }


// const todo: Pick<Todo, "title" | "completed"> = {
//     title: "clean room",
//     completed: false
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// //   const todo: TodoPreview = {
// //     title: "Clean room",
// //     completed: false,
// //   };

// //   todo;
// console.log(todo);
// export { };


//********* use of Uppercase<StringType> *******************/

// type NameInUpper UpperCase<>