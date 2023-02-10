function print<T>(parm: T): T{
    return parm;
}

// print function will work with any parameter
console.log(print("manish"));
console.log(print(5));

export {};