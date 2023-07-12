const user = {
  name: "Abdul Rehan",
  email: "rehannajam2@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {
  // CODE HERE
}

let newUser = {
  name: "Rehan",
  isPaid: false,
  email: "abc.com",
};
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "react", price: 210 };
}

// TYPE VALUES -
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function myDetails(user: User): User {
  console.log(user.name);
  return { name: "", email: "", isActive: false };
}

myDetails({ name: "", email: "", isActive: true });

type userData = {
  readonly _id: string; // with readonly, the _id cannot be changed
  name: string;
  email: string;
  isActive: boolean;
  creditCardNumber?: number; // optional detail - if you dont give it then it's fine
};

let myUser: userData = {
  _id: "12345",
  name: "Rehan",
  email: "abc@gmail.com",
  isActive: true,
};

myUser.email = "abc.com";
// myUser._id = "232" - cannot assign a value to _id as it is readonly

type cardNumber = {
  cardNum: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
