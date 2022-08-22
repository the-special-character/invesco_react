// hello
// var app = require("./app");
import { a, b, abc } from './app';

const hello =
  'asdfdasasd asdflkasjdf asdkfasdlkfjas alkfads lkajsdf lkasdf';

console.log(hello);

class Animal {
  static makeSound() {
    console.log('bow woe');
  }

  #xValue = 0;

  get #x() {
    return this.#xValue;
  }

  set #x(value) {
    this.#xValue = value;
  }

  #clicked() {
    this.#x++;
  }
}

const greet = name => `Hello, ${name}`;

console.log(greet);

const animal = new Animal();

console.log(animal.makeSound());

console.log(a + b);

console.log(abc());
