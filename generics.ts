function print<T>(parm: T): T{
    return parm;
}

// print function will work with any parameter
console.log(print("manish"));
console.log(print(5));

function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}

function loggingIdentity1<Type>(arg: Type): Type {
    //console.log(arg.length); // Array has a .length, so no more error
    return arg;
}

function processData<T>(data: T) {
    console.log(data);
}

processData<number>(500);


console.log(loggingIdentity([1, 2, 3]));




export {};