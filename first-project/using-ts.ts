const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}
//! meanning there is never get null i am sure it will return value as كذابحيث يتأكد ان اللي جيلك ده من النوع ده type casting
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
