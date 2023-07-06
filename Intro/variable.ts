// STRING -
let greetings : string = "Hello, Rehan.";
greetings.toLowerCase();
console.log(greetings);

// NUMBER - JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number
let userId : number = 201333;

// BOOLEAN -
let isLoggedIn : boolean = false;

// TYPE INFERENCE - Automatic detection of the type being used

// ANY - When you don't know what type a variable will hold, you will use this. It turns off the type checking for a particular value. It is not good practice to use it as you are avoiding all the strictness that TypeScript brings to your code.

// NOTE: Use the compiler flag noImplicitAny to flag any implicit any as an error.

let hero;

function getHero(){
    return "Thor";
}

hero = getHero();
console.log(hero)


export {}