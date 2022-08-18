


function* xyz() {
    try {
      const data = yield 5;

      console.log(data);

      yield data * 2;
    //   yield 3;
    //   yield 4;
    //   return "completed";
    } catch (error) {
      console.log(error);
    }
  }

const gen = xyz();
const res =  gen.next()
console.log(gen.next(res.value)); 
  
//   class Auth {
//     #login() {
  
//       console.log("login");
//       return "token"
//     }
  
//     #logout() {
//       console.log("logout");
//       return "logout"
//     }
  
//     *authFlow(data) {
//       try {
//        console.log(data);
//         yield this.#login();
//         yield this.#logout();
//       } catch (error) {
//           console.log(error);
//       }
//     }
//   }
  
//   const auth = new Auth();
//   const gen = auth.authFlow();
  
//   console.log(gen.next());
//   gen.throw(new Error("not valid code"))
  
  
//   const gen1 = auth.authFlow();
  
//   gen1.next("data")
//   gen1.next()
  
  
//   // const gen = xyz();
  
//   // console.log(gen.next());
//   // console.log(gen.next());
//   // gen.throw(new Error("something wrong"))
//   // console.log(gen.next());
  