// ECMA SCRIPT

// ES5
// vanila javascript

// why new Javascript introduce

// 1. solve old javascript problemts
// 2. added new feature 
// 3. modern syntext
// 4. now we can use javascipt as full flaged enterpirce lever application

const obj = {
    a: 1,
    b: 2,
    c: 3
}

// immutable

// const newObj = Object.assign({}, obj, { d: 4 });
// function add(a,b) {
//     return a + b;
// }

const add = (a, b) => a + b;

console.log(add(1,2));

const newObj = {...obj, d: 4}

console.log(newObj);

const a = 0.1;

const b = 0.2

console.log(a + b);







