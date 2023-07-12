function addTwo(num: number): number {
  return num + 2;
  // return "HIII"
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

// function getValue(myVal: number): boolean {
//   if(myVal > 5)
//   {
//     return true;
//   }

//   // return "200 OK";
//   return false;
// }

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `${hero}`;
});

function consoleError(err: string): void {
  console.log(err);
}

// NEVER - A function never returns a value. The never type represents values which are never observed. In a return type, this means that a function throws an exception or terminates execution of the program.

function handleError(err: string): never {
  throw new Error(err);
}

export {};
