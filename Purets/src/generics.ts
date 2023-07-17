// ALLOWS TO REUSE COMPONENTS 
const score: Array <number> = []
const names: Array <string> = []

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}