// ALLOWS TO REUSE COMPONENTS
const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

// identityFour<Bootle>({})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getSearchProducts<T>(products: Array<T>): T {
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(Products: T[]): T => {
  const myIndex = 4;
  return Products[myIndex];
};

// <T,> - The comma represents a syntax for generics

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valueOne: T, valueTwo: U) {
  return {
    valueOne,
    valueTwo,
  };
}

// anotherFunction(3, {})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface Quiz {
  name: string;
}

interface Course {
  author: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

export {};
