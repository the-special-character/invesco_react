
const arr = [1,2,3,4,5,6,7];

// using map method only update possible

// O(N)
const newArr = arr.map(item => {
    if(item % 2 === 0) {
        return item * 2
    }
    return item
})

console.log(newArr);

const users = [
    {
      name: "yagnesh",
      age: 33,
      gender: "male",
      occupation: 'trainer'
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

  const newUsers = users.map(x => ({ ...x, occupation: 'trainer'}));

  console.log(newUsers);


//   const newUsers = users.map(item => {
//     if(item.name === "rohit") {
//         return {...item, age: 35}
//     }
//     return item
//   });

//   console.log(newUsers);






