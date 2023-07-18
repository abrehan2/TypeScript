function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }

  return val + 3;
}

// WHAT NARROWING THE TYPES LOOK LIKE:

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }

  id.toLowerCase();
}

// IN OPERATOR IS USED TO NARROW DOWN THE TYPES of for interface

interface User {
  myName: string;
  myEmail: string;
}

interface Admin {
  myName: string;
  myEmail: string;
  isAdmin: boolean;
}

function isAdmin(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }

  return false;
}

export {};
