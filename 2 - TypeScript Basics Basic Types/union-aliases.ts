//Union type
// //want to make a function if string concate them if number add them togetter
// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }
// const combineAge = combine(30, 29);
// console.log(combineAge); //59
// const combineNames = combine("Mohamed", "Amgad"); //string not number you need
//console.log(combineNames);
/////////////////////////////////////////////////
//Literal type
//want to make a function if string concate them if number add them togetter
// function combine(
//   input1: number | string,
//   input2: number | string,
//   returnConversion: "as-number" | "as-string"
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     returnConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
//   //   if (returnConversion === "as-number") {
//   //     return +result;
//   //   } else {
//   //     return result;
//   //   }
// }
// const combineAge = combine(30, 29, "as-number");
// console.log(combineAge); //59
// const combineStringAge = combine("30", "29", "as-number");
// console.log(combineStringAge); //59
// const combineNames = combine("Mohamed", "Amgad", "as-string"); //string not number you need
// console.log(combineNames);
/////////////////////////////////////////////////
//type alias
type combinable = number | string;
type conversionDescriptor = "as-number" | "as-string";
function combine(
  input1: combinable,
  input2: combinable,
  returnConversion: conversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    returnConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (returnConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result;
  //   }
}
const combineAge = combine(30, 29, "as-number");
console.log(combineAge); //59
const combineStringAge = combine("30", "29", "as-number");
console.log(combineStringAge); //59
const combineNames = combine("Mohamed", "Amgad", "as-string"); //string not number you need
console.log(combineNames);
