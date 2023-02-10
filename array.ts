let numbers: number[] = [];
numbers.push(5);
// numbers.push('manish'); // l

let names: readonly string[] = ['manish', 'bikash'];
//names.push('roshan');

// Type inference

const nums = [1, 2, 3];
nums.push(4);
// nums.push('manish');  error | because nums is infer to number 

export {};