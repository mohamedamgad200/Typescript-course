var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
//! meanning there is never get null i am sure it will return value as كذابحيث يتأكد ان اللي جيلك ده من النوع ده type casting
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
