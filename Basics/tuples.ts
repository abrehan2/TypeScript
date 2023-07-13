// TUPLES ARE ALL ABOUT RESTRICTING YOU, SO YOU CAN HAVE AN ORDER OF DATA

let user: [string, number, boolean];
user = ["hc", 3, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];
const newUser: User = [112, "Rehan"];
newUser[1] = "gce";


export {}