const superHeros: string[] = []; // superhero is a type of string array but empty array

// SECOND WAY:
const superPower: Array<number> = [];

superHeros.push("Batman");

type User = {
  name: string;
  isActive?: boolean;
};

const allUsers: User[] = [];
allUsers.push({ name: "Rehan" });
