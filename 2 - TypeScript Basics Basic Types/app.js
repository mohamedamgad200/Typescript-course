//retutn type of function inferred by typescript
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is " + num);
}
printResult(add(5, 12));
// function printResult(num: number): undefined {
//   console.log("Result is " + num);
//   return;
// }
//console.log(printResult(add(5, 12)));//undefined
// let somevalue: undefined;
///////////////////////////////////////////////
//Functions as a type
// let combineValues;
// combineValues = add;
// combineValues = 5;
// console.log(combineValues(8, 8));
// let combineValues: Function;
// combineValues = add;
// //combineValues = 5;//error not a function type is number
// console.log(combineValues(8, 8));
// let combineValues: (a: number, b: number) => number;
// combineValues = add;
//combineValues = printResult; not take two prameter and not return number
// console.log(combineValues(8, 8));
//Callback function
function addAndHandle(n1, n2, cd) {
    var result = n1 + n2;
    cd(result);
}
addAndHandle(1, 2, function (result) {
    console.log(result);
});
