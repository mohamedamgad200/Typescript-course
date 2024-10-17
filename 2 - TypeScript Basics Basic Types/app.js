var userInput;
// let userInput: any;
var userName;
userInput = 5;
userInput = "Amgad";
//error if useInput=unkown
//no error if any
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
