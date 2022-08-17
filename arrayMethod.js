
// primitive type of data
const arr =  [1,2,3,4,5];


console.log(arr.indexOf(6));


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

//   O(logN)
// return boolean
  const haveChild = users.some(x => x.age < 18);

//   O(N)
// return boolean
  const isEveryAdult = users.every(x => x.age > 18);

  console.log(haveChild);

  console.log(isEveryAdult);

//   O(N)
  const updatedUsers = users.filter(x => x.name !== 'anuj');

  console.log(updatedUsers);

//   O(logN)
// const index = users.findIndex(x => x.name === 'anuj');

// const updatedUsers = [
//     ...users.slice(0, index),
//     ...users.slice(index + 1)
// ]

// console.log(updatedUsers);

//   O(logN)
// if record found then return >= 0
// not found then return -1
  const anujIndex = users.findIndex(user => user.name === "anuj");

  //   O(logN)
  // if record found then return data
//   not found then return undefined
  const anujInfo = users.find(user => user.name === "anuj");

  console.log(anujIndex);

  console.log(anujInfo);

//   O(N)
// if record found then return array of data
// not found then return []
  const allAnuj = users.filter(user => user.name === 'anuj');

  console.log(allAnuj);





// findIndex
// find
// filter
// some
// every
// map
// reduce




//   const [,,, ...rest] = users;

//   console.log(rest);

//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
//   console.log(f);