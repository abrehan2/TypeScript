// tsc.cmd --init
// tsc.cmd -w

console.log("THIS IS REHAN");
console.log("IM WORKING!!");

// CLASSES -
class User {
  email: string;
  name: string;
  readonly city: string = "LA";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const obj = new User("abc.com", "Rehan");
// obj.city = "Toronto";
