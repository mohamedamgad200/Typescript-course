// function add(n1: number, n2: number) {
//   // if (typeof n1 !== "number" || typeof n2 !== "number") {
//   //   throw new Error("Incorrect input");
//   // }
//   return n1 + n2;
// }
// const number1 = 5;
// const number2 = 2.8;
// const result = add(number1, number2);
// console.log(result);
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   let result = n1 + n2;
//   if (showResult) {
//     console.log(phrase + result);
//   } else {
//     return result;
//   }
// }
// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = "Result is : ";
// add(number1, number2, true, resultPhrase);
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  let result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is : ";
add(number1, number2, true, resultPhrase);
