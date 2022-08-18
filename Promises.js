// javascript is single threaded sync language.

// task1 -> 0.1ms
// task2 -> 0.1ms

// task4 -> 0.1ms
// task5 -> 0.1ms
// -----------------
//          0.4ms

// Mircro QUE
// task3 -> 5 min

// ---------------
//            5min

// V8 engine

// setTimeout(() => { first }, second)

// document.addEventListener("click", () => {

// }})

// setTimeout(() => { console.log("a0") }, 0);
// console.log("s1");
// setTimeout(() => { console.log("a1") }, 100);
// console.log("s2");
// setTimeout(() => { console.log("a2") }, 80);
// console.log("s3");
// setTimeout(() => { console.log("a3") }, 120);

// console.log("start")

// // Macro Task
// setTimeout(() => {
//     console.log("settimeout")
//  }, 0)

// //  MicroTask (highest Prioir)
//  Promise.resolve("Promise")
//  .then((val)=> {
//     console.log(val)
//  })

//  console.log("end");

// 3 ways achieve async programing

// 1. Callback
// 2. Promise

// document.addEventListener("mousemove", () => {

// })


const ls = () => new Promise((resolve, reject) => {
    setTimeout(() => { 
        reject("ls reject")
     }, 2000)
})

const ms = () => new Promise((resolve, reject) => {
    setTimeout(() => { 
        reject("ms reject")
     }, 3000)
})

const rs = () => new Promise((resolve, reject) => {
    setTimeout(() => { 
        reject("rs reject")
     }, 1000)
})

const loadData = async () => {
    try {
        console.time("promise")
        // const productsRes = await fetch("http://localhost:3000/products");
        // const cartRes = await fetch("http://localhost:3000/cart");
        // const todoListRes = await fetch("http://localhost:3000/todoList");
        // const productsJson = await productsRes.json()
        // const cartJson = await cartRes.json()
        // const todoListJson = await todoListRes.json()
        // console.log(productsJson);
        // console.log(cartJson);
        // console.log(todoListJson);

        // const res = await Promise.all(
        //     [
        //         fetch("http://localhost:3000/products"),
        //         fetch("http://localhost:3000/cart"),
        //         fetch("http://localhost:3000/todoList"),
        //     ]
        // )
        // const json = await Promise.all(
        //     [
        //         res[0].json(),
        //         res[1].json(),
        //         res[2].json(),
        //     ]
        // );

        // console.log(json);

        const res = await Promise.any([
            ls(),
            ms(),
            rs()
        ]);
        console.log(res);
        // const lsRes = await ls();
        // console.log(lsRes);
        // const msRes = await ms();
        // console.log(msRes);
        // const rsRes = await rs();
        // console.log(rsRes);
        console.timeEnd("promise")
    } catch (error) {
        console.log(error);
    }
}

loadData();


// const login = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("token");
//     }, 2000);
//   });
// };

// const products = (token) => {
//   return new Promise((resolve, reject) => {
//     if (!token) {
//       reject("token is not available");
//     } else {
//       setTimeout(() => {
//         resolve("products");
//       }, 1000);
//     }
//   });
// };

// function hello() {
//     return "hello"
// }

// const loadData = async () => {
//   try {
//     console.time("process")
//     const loginRes = await fetch("http://localhost:3000/login", {
//       method: "POST",
//       body: JSON.stringify({
//         email: "yagnesh.modh@gmail.com",
//         password: "abcd1234",
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const greet = hello();
//     console.log(greet);
//     const loginJson = await loginRes.json();
//     const productsRes = await fetch("http://localhost:3000/660/products", {
//       headers: {
//         Authorization: `Bearer ${loginJson.accessToken}`,
//       },
//     });
//     const productsJson = await productsRes.json();
//     if(!productsRes.ok) {
//         throw new Error(productsJson);
//     }
//     console.log(productsJson);
//     console.timeEnd("process")
//   } catch (error) {

//     console.log(error.message);
//   } finally {

//   }
// };

// loadData();

// fetch('http://localhost:3000/login', {
//     method: "POST",
//     body: JSON.stringify({
//         "email": "yagnesh.modh@gmail.com",
//         "password": "abcd1234"
//     }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
// .then(val => val.json())
// .then(json => {
//     console.log(json);
//     fetch('http://localhost:3000/660/products', {
//         headers: {
//             Authorization: `Bearer ${json.accessToken}`
//         }
//     })
//     .then(data => data.json())
//     .then(products => console.log(products))
//     .catch(err => {
//         console.log(err);
//     })
// })
// .catch(err => {
//     console.log(err);
// })

// login()
// .then((val) => {
//     console.log(val);
//     products(val)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })
// .catch(err => {

// })

// setTimeout(() => {
//     console.log('hello');
//  }, 0)

// const p1 = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("p1 success")
//          }, 2000)
//         // server call
//         //
//         // resove("data")
//         // reject("server down")
//     })
// }

// p1()
// .then((val) => {
//     console.log(val);
// })
// .catch(error => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("finally");
// })
