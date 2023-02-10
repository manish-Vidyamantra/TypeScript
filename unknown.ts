let data: unknown;
data = 56;
let item: string;
// item = data; will give error
//then how to assign value

if(typeof data === 'string') {
    item = data;
}

export {};