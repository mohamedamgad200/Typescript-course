"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi");
        }
    }
}
// let user1: Person;
let user1;
user1 = new Person("Amgad");
user1.greet("Hi there - I am");
let add;
add = function (a, b) {
    return a + b;
};
//# sourceMappingURL=app.js.map