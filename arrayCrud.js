const users = [
  {
    name: "yagnesh",
    age: 33,
    gender: "male",
  },
  {
    name: "anuj",
    age: 22,
    gender: "male",
  },
  {
    name: "rohit",
    age: 32,
    gender: "male",
  },
  {
    name: "sejal",
    age: 20,
    gender: "female",
  },
];

const index = 1;

const newArr = [
    ...users.slice(0, 1),
    ...users.slice(index + 1)
]

console.log(newArr);

// const index = 2;

// const newArr = [
//     ...users.slice(0, index),
//     { name: "virat", age: 30, gender: "male"},
//     ...users.slice(index)
// ]

// console.log(newArr);

// const newUsers = [{
//     name: "rohit",
//     age: 32,
//     gender: 'male'
// }, ...users, ]

// console.log(newUsers);

// console.log(users[1]);

// users.splice(1, 1, {
//     ...users[1],
//     age: 21
// });

// console.log(users);

// const arr = [1,2,3,4,5,6];

// // mutable
// arr.push(8)

// console.log(arr);

// arr.pop();

// console.log(arr);

// // dont use this 1
// arr.unshift(0);

// console.log(arr);

// arr.shift();

// console.log(arr);

// // arr.splice(3,0, 8, 9, 10)

// arr.splice(3, 2)

// console.log(arr);

// immutable
