// Combination of 2 or more types of data you can include
// It is same like 'any'
// It is highly recommended to use 'union' when you are not sure what data is going to come in as it might be a string or a number

let score: number | string = 33;
score = 45;
score = "56";

type User = {
    name: string,
    id: number
}

type Admin = {
    userName: string,
    id: number
}

let rehan: User | Admin = {name: "Rehan", id: 334};
rehan = {
    userName: "abrehan_",
    id: 334,
}

function getDbId(id: number | string)
{
    console.log(`${id}`);
}

getDbId(3);
getDbId("3");

const data1: number[] = [1, 2];
const data2: string[] = ["1", "2"];
const data3: (string | number)[] = ["1", 2];

export {}