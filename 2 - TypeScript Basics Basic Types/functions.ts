//typescribt know that that return number but you can make that manual
// function add(num1: number, num2: number):number {
//     return num1 + num2;
//   }
//typescribt know that that return string but you can make that manual
// function add(num1: number, num2: number) {
//   return num1.toString() + num2.toString();
// }
function add(num1: number, num2: number) {
  return num1 + num2;
}
function printResult(num: number): void {
  console.log("Reult " + num);
}
// function printResult(num: number): void {
//   console.log("Reult " + num);
//   return;
// }
// function printResult(num: number): undefined {
//   console.log("Reult " + num);
//   return;
// }
printResult(add(5, 12));
// let someValue: undefined;
//let combineValues; //initially any type اي حاجة شغال
// let combineValues: Function;
//انت هنا بتقوله انت يامعلم هتاخد برامتر 2 وهيكون نوعهم numberوكمان الفنكشن دي هترجع number
let combineValues: (a: number, b: number) => number;
combineValues = add;
//combineValues = printResult; //هنا قبل اي فنكشن لا طب كدة هيطلعلي undefinedلان دي مش بتاخد اي برامتير عايز اقوله شكل الفنكشن ايه وبتقبل برامتر نوعه ايه
//combineValues = 5;//after type function get error
//لما خليت combineValues = 5;هتضرب ايرور كدة عشان كدة خلوا في نوع اسمه Function
console.log(combineValues(10, 2)); //12
function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
addAndHandler(1, 2, (result) => {
  console.log(result);
});
