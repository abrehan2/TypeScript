function addTwo(num: number) {
  return num + 2;
}

addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("rehan");

function signUp(name: string, email: string, isPaid: boolean) {
  // code comes here
}

signUp("Rehan", "abc@gmail.com", false);

// When we don't need to give all the arguments, we can provide default values to parameters
let signUpNow = (name: string, email: string, isPaid: boolean = false) => {
  // code comes here
};

signUpNow("Rehan", "abc@gmail.com");

export {};
