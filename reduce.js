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
    {
        name: "taimur",
        age: 08,
        gender: "female",
    },
    {
        name: "anuj",
        age: 24,
        gender: "male",
    },
];

// O(N)
// const hasChildren = users.reduce((p, c) => {
//     if(c.age < 18){
//         return true;
//     }
//     return p;
// }, false);

// console.log(hasChildren);

// const anupRecords = users.reduce((p, c) => {
//     if(c.name === 'anuj') {
//         p.push(c);
//     }
//     return p;
// }, []);

// console.log(anupRecords);

// const index = users.reduce((p, c, index) => {
//     if(c.name === "sachin") {
//         return index;
//     }
//     return p;
// }, -1);

// const rohitInfo = users.reduce((p, c) => {
//     if(c.name === "sachin") {
//         return c;
//     }
//     return p;
// }, undefined);

// console.log(rohitInfo);



// const arr = [1,2,3,4,5,6];

// const sum = arr.reduce((p, c) => p + c, 0)
// console.log(sum);



// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);