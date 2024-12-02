// type Admin = {
//   name: string;
//   privileges: string[];
// };
// type Employee = {
//   name: string;
//   startDate: Date;
// };
// type ElevatedEmployee = Admin & Employee;
// const e1: ElevatedEmployee = {
//   name: "Amgad",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };
// interface Admin {
//   name: string;
//   privileges: string[];
// }
// interface Employee {
//   name: string;
//   startDate: Date;
// }
// interface ElevatedEmployee extends Admin, Employee {}
// type Combinable = string | number;
// type Numeric = number | boolean;
// type Universal = Combinable & Numeric;

// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" && typeof b === "string") {
//     return a.toString() + b.toString();
//   } else if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }
//   return "error";
// }
// const e2: Admin = {
//   name: "Amgad",
//   privileges: ["create-server"],
// };
// const e3: Employee = {
//   name: "Amgad",
//   startDate: new Date(),
// };
// type unKnownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: unKnownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("privileges " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("start date " + emp.startDate);
//   }
// }
// printEmployeeInformation(e1);
// printEmployeeInformation(e2);
// printEmployeeInformation(e3);
// class Car {
//   drive() {
//     console.log("Driving....");
//   }
// }
// class Truck {
//   drive() {
//     console.log("Driving truck....");
//   }
//   loadCargo(amount: number) {
//     console.log("loadcargo....." + amount);
//   }
// }
// type Vechicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVechicle(vechicle: Vechicle) {
//   vechicle.drive();
//   if (vechicle instanceof Truck) {
//     vechicle.loadCargo(10000);
//   }
// }
// useVechicle(v1);
// useVechicle(v2);
// //discreminated union
// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }
// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving speed is " + speed);
// }
// moveAnimal({ type: "bird", flyingSpeed: 200 });
// moveAnimal({ type: "horse", runningSpeed: 100 });
//const paragraph = document.querySelector("p"); //HTMLParagraphElement | null
// const paragraph = document.getElementById("paragraph"); // paragraph: HTMLElement | null
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// const userInput = document.getElementById("user-input")! as HTMLInputElement;
// const userInput = document.getElementById("user-input") as HTMLInputElement;
// userInput.value = "Hi there!";
// const userInput = document.getElementById("user-input");
// if (userInput) {
//   (userInput as HTMLInputElement).value = "Hi there!";
// }
// interface ErrorContainer {
//   [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   userName: "Must start with a capital character!",
// };
//overloading
// type Combinable = string | number;
// type Numeric = number | boolean;
// type Universal = Combinable & Numeric;
// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" && typeof b === "string") {
//     return a.toString() + b.toString();
//   } else if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }
//   return a.toString() + b.toString();
// }
// // const result = add("Max", "shmental") as string;
// const result = add("Max", "shmental");
// result.split(" ");
//optional chaining
// const featchedUserData = {
//   id: "u1",
//   name: "Max",
//   job: { title: "CEO", decription: "My own company" },
// };
// console.log(featchedUserData?.job?.title);
//Nullish coalescing
// const input = "";
// const stored = input ?? "Default";
// console.log(stored);
