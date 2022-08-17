

const map = new Map([
    [1, { name: "yagnesh"}],
    [2, { name: "virat"}]
]);

console.log(map.get(2));

const weakMap = new WeakMap();

// const obj = { a: 1}

const arr = [1];
weakMap.set(arr, "adfadsf")

// map.set("yagnesh", {
//     name: "yagnesh",
//     age: 33
// })
// map.set("virat", {
//     name: "virat",
//     age: 35
// })

// // O(1)
// console.log(map.get("yagnesh"));

// o(logN)

for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}

// map.delete("yagnesh")

// console.log(map.get("yagnesh"));



// const a = [1];
// const b = [1];

// console.log(a === b);

// // const arr = [...Array(999999).keys()]

// // // O(logN)
// // arr.indexOf(5);
// const arr = [1,2,3,4,2,4,9];

// console.log([...new Set(arr)]);


// // Primitve type data
// const set = new Set([1,2,3,4]);

// console.log(set);

// for (const iterator of set) {
//     console.log(iterator);
// }

// const weakSet = new WeakSet();
// const obj = { a: 1}

// weakSet.add(obj)

// console.log(weakSet.has(obj));

// weakSet.delete(obj);

// console.log(weakSet.has(obj));





