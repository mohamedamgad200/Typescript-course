// console.log("sending data.........");
// console.log("i am here haaaaaaaaaa");
//error declear type to parameter
// function sendAnalytics(data) {
//   console.log(data);
// }
// sendAnalytics("This is data");
let logged;
function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
}
sendAnalytics("This is data");
