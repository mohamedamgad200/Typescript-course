// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: "as-number" | "as-text"
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   //   if (resultConversion === "as-number") {
//   //     return +result;
//   //   } else {
//   //     return result.toString();
//   //   }
//   return result;
// }
// const combineAges = combine(30, 29, "as-number");
// console.log(combineAges);
// const combineStringAges = combine("30", "29", "as-number");
// console.log(combineStringAges);
// const combineNames = combine("Mohamed", "Amgad", "as-text");
// console.log(combineNames);
//type aliases
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combineAges = combine(30, 29, "as-number");
console.log(combineAges);
const combineStringAges = combine("30", "29", "as-number");
console.log(combineStringAges);
const combineNames = combine("Mohamed", "Amgad", "as-text");
console.log(combineNames);
