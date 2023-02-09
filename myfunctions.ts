function addTwo(num: number) {
    //num.toUpperCase() such thing will be avoided
    return num + 2;
}

addTwo(5);


// suppose we want to return only number then

function addThree(num: number): number {
    // return "manish"; // this will give error
    return num + 3;
}

addThree(5);


// if you do not know type of return value then
// then write code as follow

function response(val: string) {
    if(val === 'ok') {
        return 200;
    }

    return "some error"
}

let res = response("ok");

//handling multiple parameter
function loginUser(email: string, password: string) {
    return true;
}

loginUser('m@gmail.com', '1234');

export {};