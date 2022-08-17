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

const age = 33;

const ageGroup = Math.floor(33/10);

console.log(`${ageGroup}0-${ageGroup}9`);

// {
//     "00-09": [],
//     "20-29": [],
//     "30-39": []
// }



// const obj = {
//     a: 1,
//     b: 2
// }

// if(!obj['c']) {
//     obj['c'] = 3;
// }


// console.log(obj);
// const data = undefined;

// console.log(!data);

const groupByGender = users.reduce((p, c)  => {
    const key = c['gender'];
    if(!p[key]) {
        p[key] = []
    }
    p[key].push(c);
    return p
}, {});

console.log(groupByGender);

const groupByAge = users.reduce((p, c)  => {
    const ageGroup = Math.floor(c.age/10);
    const key = `${ageGroup}0-${ageGroup}9`;
    if(!p[key]) {
        p[key] = []
    }
    p[key].push(c);
    return p
}, {});

console.log(groupByAge);

// const obj = {
//     a: 1,
//     b: 2
// }

// console.log(obj['c']);

// {
//     male: [],
//     female: []
// }