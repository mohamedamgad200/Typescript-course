// const person: object = {
//   name: "mohamed amgad",
//   age: 22,
// };
// console.log(person.nickname);==>error nickname not property in the object
//console.log(person.name);//errorهو مش عارف مين ده عشان كدة لما تعرف الاوبجيكت اعمل كدة
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "mohamed amgad",
//   age: 22,
// };
// console.log(person.name);
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple
// } = {
//   name: "mohamed amgad",
//   age: 22,
//   hobbies: ["Sports", "Cookong"],
//   role: [2, "author"], //we need that only two
// };
// let favoriteActivities: any[];
// favoriteActivities = ["Sporting",1];
// let favoriteActivities: string[];
// favoriteActivities = ["Sporting"];
// let favoriteActivities: any[];
// favoriteActivities = ["Sporting", 2, true];
//After tuple get error before tuple work
// person.role.push("admin");
// person.role[1] = 10;
// console.log(person.name);
// for (const hoppy of person.hobbies) {
//   console.log(hoppy.toUpperCase()); //support string methods
//   //   console.log(hoppy.map());==>ERROR!! hopy not array is a string
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
//use enum initially number increncremently 0 1 2 ... but we can assign value for each of them like that
// enum Role {
//   ADMIN = "ADMIN", //0
//   READ_ONLY = 0, //1
//   AUTHOR = "AUTHOr", //2
// }
// enum Role {
//   ADMIN, //0
//   READ_ONLY, //1
//   AUTHOR, //2
// }
// const person = {
//   name: "mohamed amgad",
//   age: 22,
//   hobbies: ["Sports", "Cookong"],
//   role: Role.ADMIN, //we need that only two
// };
// if (person.role === Role.ADMIN) {
//   console.log("is admin");
// }
