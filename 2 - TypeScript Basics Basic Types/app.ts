let useInput: unknown;
// let useInput: any;
let userName: string;

useInput = 5;
useInput = "Amgad";
if (typeof useInput === "string") {
  userName = useInput;
}
//userName = useInput; //error is unkown but not error if any
//never function never return
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
