// const userName = "Amgad";
// console.log(userName);
// const ahmed: string = "ahmed";
// console.log(ahmed);
// const btn = document.querySelector("button")!;
// btn.addEventListener("click", () => {
//   console.log("Clicked me");
// });
const btn = document.querySelector("button");
let username;
// function clickHandeler(message: string, age: number) {
//   let user;
//   console.log("Clicked" + message);
// }
function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}
function clickHandeler(message: string) {
  console.log("Clicked" + message);
}
if (btn) {
  btn.addEventListener("click", clickHandeler.bind(null, "Hello"));
}
// if (btn) {
//   btn.addEventListener("click", () => {
//     console.log("Clicked me");
//   });
// }
