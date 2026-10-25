// COMMENTS 
// Part of Code which is not executed

// double slash to singlee line comment.
/* is a multi line comment like > */ 


// Used to perform some operation on data.

// (arithmatic operator) >> 

// + >> addition
// - >> substraction
// asterisk (*) >> for multiplication 
// / >> for divide
// Modulus >> for remainder > (%)
// Exponentiation >> for power(**)
// Increment >> ++variable and variable++
// Decrement >> --variable and variable--

// 1. Addition (+)

let A = 10;
let B = 5;
console.log(A + B);


// 2. Subtraction (-)

let C = 10;
let D = 5;
console.log(C - D);


// 3. Multiplication (*)

let E = 10;
let F = 5;
console.log(E * F);


// 4. Division (/)

let g = 10;
let h = 5;
console.log(g / h);


// 5. Modulus (%) >> Remainder

let i = 10;
let j = 3;
console.log(i % j);


// 6. Exponentiation (**) >> Power

let k = 2;
let l = 3;
console.log(k ** l);


// 7. Pre-increment (++variable)

let m = 5;
console.log(++m);


// 8. Post-increment (variable++)

let n = 5;
console.log(n++);
console.log(n);


// 9. Pre-decrement (--variable)

let o = 5;
console.log(--o);


// 10. Post-decrement (variable--)

let p = 5;
console.log(p--);
console.log(p);

// (assignment operator)

// (+)
// (+=)
// (-=)
// (*=)
// (/=)
// (**=)

// 1. = (Assignment Operator)

let a = 10;
console.log(a);

// 2. += (Addition Assignment)

let b = 10;
b += 5;
console.log(b);

// 3. -= (Subtraction Assignment)

let c = 10;
c -= 3;
console.log(c);

// 4. *= (Multiplication Assignment)

let d = 10;
d *= 2;
console.log(d);

// 5. /= (Division Assignment)

let e = 10;
e /= 2;
console.log(e);

// 6. **= (Exponentiation Assignment)

let f = 2;
f **= 3;
console.log(f);

// (comaparsion operator)

// (==) >> is check only value but not  check the datatypes
// (===) >> is check value and datatypes both
// (!=) >> is check not equal to the value 
// (!==) >> is check both value and datatypes

// 1. Equal to (==)
// Sirf value compare karta hai, zaroorat padne par type conversion karta hai.

console.log(5 == "5");


// 2. Strict Equal to (===)
// Value aur datatype dono check karta hai.

console.log(5 === "5");


// 3. Not Equal to (!=)
// Value equal nahi hai, to true return karta hai.

console.log(5 != 10);


// 4. Strict Not Equal to (!==)
// Value ya datatype mein difference ho, to true return karta hai.

console.log(5 !== "5");


// (logical operator)

// and (&&)
// or (||)
// not (!)

// 1. AND (&&)
// Dono conditions true honi chahiye.

let age = 20;
console.log(age > 18 && age < 25);


// 2. OR (||)
// Koi ek condition true honi chahiye.

let marks = 80;
console.log(marks > 90 || marks > 70);


// 3. NOT (!)
// True ko false aur false ko true karta hai.

let isStudent = true;
console.log(!isStudent);

// (conditional statement :)
// To implement some condition in the code

// if
// else if
// else

// Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.

let Number = 15;

if (Number % 5 == 0) {
    console.log("divisible by 5")
}
else {
    console.log("it is not divisible by 5")
}

// Qs2. Write a code which can give grades to students according to their scores:

let Marks = 58;

if (Marks >= 90 && Marks <=100) {
    console.log("Grade A",",", "Marks :" , Marks)
}
else if (Marks <= 89 && Marks >= 70) {
    console.log("Grade B",",", "Marks :", Marks)
}
else if (Marks <= 69 && Marks >= 40) {
    console.log("Grade C","," ,"Marks :", Marks)
}
else if (Marks >= 0 && Marks <= 39) {
    console.log("Fail",",", "Marks :", Marks)
}
else{
    console.log("Invalid number")
}

// q3 check a nummber, negative or positive

let num = -5;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// q4. check person to can vote or not >

let Age = 17;

if (Age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}