"use strict";
// const userName = "Amgad";
//userName='Ahmed'//error constant cant assign to it new value
// let age = 30;
// age = 20;
// var result;
// let result;
//function decleration
// function add(a: number, b: number) {
//   //   var result;
//   let result;
//   result = a + b;
//   return result;
// }
//console.log(result); //error function scope
// if (age > 20) {
//   var isOld = true;
// }
// console.log(isOld);
//function expression
// const add = function (a: number, b: number) {
//   return a + b;
// };
//Arrow function
// const add = (a: number, b: number) => console.log(a + b);
// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);
// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }
//Default parameter
// const add = (a: number, b: number = 1) => console.log(a + b);
// add(5);
//Spread operator
// const hobbies = ["sports", "cooking"];
// const activeHobbies = ["Hiking", ...hobbies];
// //activeHobbies.push(...hobbies);
// const person = {
//   name: "amgad",
//   age: 23,
// };
// //const copyPerson=person copy refrence
// const copyPerson = { ...person };
//Spread operator
// const add = (...numbers: number[]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };
// const addNumbers = add(5, 10, 2, 3.7);
// console.log(addNumbers);
//can be tuple but you should kniw number of prameter
// const add = (...numbers: [number, number, number]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };
// const addNumbers = add(5, 10, 2);
// console.log(addNumbers);
//Destructing
//Destruct array
// const hobbies = ["sports", "cooking"];
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
// console.log(hobby1, hobby2);
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);
// const [hobby1, hobby2,...remaining hobbies] = hobbies;
//Destruct object
// const person = {
//   name: "amgad",
//   age: 23,
// };
// const { name: firstName, age } = person;
// console.log(firstName, age);
