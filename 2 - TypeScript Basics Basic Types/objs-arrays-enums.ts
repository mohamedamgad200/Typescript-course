//Objects
// const person = {
//   name: "Mohamed Amgad",
//   age: 23,
// };
// // //error nickname does not exist
// // // console.log(person.nickname);
// console.log(person.name);
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
//   name: "Mohamed Amgad",
//   age: 23,
//   hobbies: ["Sports", "cooking"],
// };
// //error nickname does not exist
// console.log(person.name);
/////////////////////////////////////////////////
//Arrays
// const person = {
//   name: "Mohamed Amgad",
//   age: 23,
//   hobbies: ["Sports", "cooking"],
// };
// console.log(person.name);
// let favoriteActivities: string[];
// favoriteActivities = ["sports"];
// //error array of string not mixed array to make this make any array any[]
// // let favoriteActivities: any[];
// // favoriteActivities = ["sports", 1];
// for (const hobby of person.hobbies) {
//   console.log(hobby);
//   console.log(hobby.toUpperCase()); //can access string functions because knoe this is arry of string and each one in this is string can access string functions;
//   //console.log(hobby.map())//error can acess the map is function for array not string
// }
/////////////////////////////////////////////////
//tuples
//not knowing this a tuple is array can contain number or string
// const person = {
//   name: "Mohamed Amgad",
//   age: 23,
//   hobbies: ["Sports", "cooking"],
//   role: [2, "author"],
// };
// person.role.push("admin");
// person.role[1] = 10;
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Mohamed Amgad",
//   age: 23,
//   hobbies: ["Sports", "cooking"],
//   role: [2, "author"],
// };
//person.role.push("admin"); //not error because push work in tuple but this bug
//person.role[1] = 10; error because the seconf should be string
//person.role = [10, "admin"]; //ok modification
//person.role=[10,'admin','author']//error should be size 2 and first should be number ,string
/////////////////////////////////////////////////
//enums
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
// const person = {
//   name: "Mohamed Amgad",
//   age: 23,
//   hobbies: ["Sports", "cooking"],
//   role: "Read only user",
// };
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: "Mohamed Amgad",
  age: 23,
  hobbies: ["Sports", "cooking"],
  role: Role.ADMIN,
};
//naming deffiernt this is will make bugs
// if (person.role === "Read_Only_User") {
//   console.log("READ ONLY");
// }
// if (person.role === ADMIN) {
//   console.log("is Admin");
// }
if (person.role === Role.ADMIN) {
  console.log("is Admin");
}
