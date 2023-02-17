/**************************************/

type Key = string | number;

let object: Record<Key, string> = {
    11111: 'manish',
    '2manish': 'bikash'
}

console.log(object);

/*************************************/

type Key1 = 'en' | 'hi' | 'fr';

let object1: Record<Key1, string[]> = {
    'en' : ['uk'],
    'hi' : ['india'],
    'fr' : ['france']
}


let data: unknown;


export {};



