"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ALLOWS TO REUSE COMPONENTS
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (Products) => {
    const myIndex = 4;
    return Products[myIndex];
};
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
