// const arr = [1,2,3,4,5,6]

// let result  = false;

// 10000



// for
// while
// dowhile
// foreach

const arr = [...Array(100000000).keys()];
console.time("for");
for (let i = 0; i < arr.length; i++) {
}
console.timeEnd("for");

console.time("while");
let j = 0
while (j < arr.length) {
    j++
}
console.timeEnd("while");

console.time("dowhile");
let k = 0;
do {
    k++
} while (k < arr.length);
console.timeEnd("dowhile");

console.time("forEach");
arr.forEach(element => {
    
});
console.timeEnd("forEach");



// O(N)
// O(logN) 
// O(1)


// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
//     if(element === 4) {
//         result = true;
//         break;
//     }
// }

// console.log(result);