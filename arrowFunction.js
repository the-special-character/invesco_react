// const add = function(a, b) {
//     console.log(this);
//     return a + b;
// }

const add = (a, b) => a + b;

console.log(add(1,2));

const greet = name => `Hello, ${name}`;

console.log(greet("yagnesh"));