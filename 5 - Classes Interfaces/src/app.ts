// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
// let user1: Person;
// user1 = {
//   name: "Amgad",
//   age: 23,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };
// user1.greet("Hi there - I am");
// interface Greetable {
//     reaconly name: string;
//     greet(phrase: string): void;
//   }
interface Named {
  readonly name?: string;
  outputName?: string; //optional
}
interface Greetable extends Named {
  greet(phrase: string): void;
}
class Person implements Greetable {
  name?: string;
  age: number = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}
// let user1: Person;
let user1: Greetable;
user1 = new Person("Amgad");
user1.greet("Hi there - I am");
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = function (a: number, b: number) {
  return a + b;
};
