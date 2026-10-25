// javascript >> js is a programming language. we use it to give instructions to the computer.
// 
// input(code) >> commputer >> output

// our first code >>>
// console.log >> is used to log(print) a message to the console.

console.log("Suraj Kumar :");

// variable in javascript;
// variables are containers for data.

// Variable rules 
// 1. variable names are case sensitive; "a" and "A" are diffrenet
// 2. only letters, digits, underscore(_) or $ is allowed (not even space)
// 3. only a letter,underscore(_) or $ should be 1st character
// reserved words cannot be variable names.

// let, const, & var 
// var : variable can be re-declared & update. A global scope variable.
// let : Variable cannot be re-declared but can be updated. A block scope variable.
// const : Variable cannot be re-declared or updated. A block scope variable.

// datatypes in javascript;
// Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol

// question of javascript.
// Qs1. Create a const object called “product” to store information shown in the picture.

const product = {
    title : "ball pen",
    rating : 4.5,
    price : 99,
    offer : 4
};

console.log(product);


// Qs2. Create a const object called “profile” to store information shown in the picture.

const profile = {
    username : "ethereal_suraj",
    name : "unbothered",
    bio : "simplicity speaks",
    Followers : 122,
    is_follow : false,
    following : 19,
    posts : 8,
}
console.log(profile);