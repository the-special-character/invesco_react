// const a = 5;

const obj = {
    a: 1,
    b: 2,
    c: 3,
}

// const { b, c, ...rest } = obj;

// console.log(rest);

// console.log(obj);


// const { b, ...rest } = obj;

// console.log(rest);


const key = `c`;

console.log(obj[key]);

// object Destructuring

// const {a: objA, [key]: asdf} = obj;

// console.log(a);
// console.log(objA);
// console.log(b);
// console.log(asdf);


// console.log(obj.a);
// console.log(obj.b);


// delete obj.b;

// console.log(obj);

// console.log(Object.assign({}, obj, {b: 4}));

// spread operator
console.time("spread")
const newObj = {...obj, d: 3, b: 4};
console.timeEnd("spread")

// console.log(newObj);

// dot notation
// console.log(obj.a);

// array notation
// console.log(obj['b']);

// object Destructuring

// CRUD 

// Mutable

console.time("Mutable")
obj.l = 4;
console.timeEnd("Mutable")

// console.log(obj);


// console.log(obj);

// Immutable
// console.time("Immutable")
// const newObj = Object.assign({}, obj, { l: 4 }, { f: 10})
// console.timeEnd("Immutable")





// console.log(obj);






