/**
 * ! Variable is a way to store data
 *
 *
 * ! var, let and const
 */
// var socks = "blue";
// console.log(socks);

// let a = 10;
// console.log(a);

// const x = 100;
// console.log(x);

/**
 * ! var = tell JS you are creating a box(variable)
 * ! socks = the name of the box
 * ! "blue" = the thing your are putting inside the box
 *
 *
 *
 *  ? 1000 lines of code and you need number 77 multiple times,
 *  ? you can put the var favoritre_number = 77 in a box(variable) and use it multiple times
 *
 *
 *
 *  ! Variables make your code:
 * ? 1. Organized
 * ? 2. Reusable
 * ? 3. Easy to understand
 *
 *
 * ! we can store almost anything:-
 * ?1. Numbers
 * ?2. Text (string)
 * ?3. True/False (boolean)
 * ?4. Objects (group of information)
 * ?5. Arrays(list of things)
 * ?6. Functions (code that does something)
 *
 */

// let age = "25";
// console.log("AGE: ", age);
// let names = "Toaster Code";
// console.log("NAME: ", names);
// let isCodeWorking = false;
// console.log("CODE WORKING: ", isCodeWorking);
// let color = ["red", "blue", "green", 100000];
// console.log("COLOR: ", color);
// let person = { car: "BMW", speed: 240 };
// console.log("PERSON: ", person);

/**
 * !. Variables names should contains only:
 * ? 1. Letters
 * ? 2. Numbers
 * ? 3. Underscore _
 * ? 4. Dollar sign $
 * !. It should not contain spaces
 * !. It should not contain any reserved keywords like:
 * ? 1. let
 * ? 2. const
 * ? 3. var
 * ? 4. function
 * ? 5. class
 * ? and so on......
 *
 *
 */
/**
 * ? Loosely typed language
 */

/**
 * ! Back in 1995 we had only VAR - old school flip phone
 * ? ES6 - 2015ECMAScript
 * ! Js is based on this standard ECMAScript
 * ! This new 2015 update introduced let and const - smart phone
 */

/**
 * ! VAR
 */
var school = "Home School";
var school = "No Schooling";
console.log("SCHOOL: ", school);

/**
 * ! LET
 */
let name = "Toaster Code";
name = "dhfbsj";
console.log("NAME: ", name);

/**
 * ! CONST
 */
const PI = 3.14;
console.log("PI: ", PI);
const person = { car: "BMW", speed: 240 };
person.car = "Jaguar";
console.log(person);

var ex = "Riya";
var ex = "Priya";
console.log("EX: ", ex);

let crush = "Diya";
crush = "Siya";
console.log("CRUSH: ", crush);

const soulmate = "Anaya";
console.log("SOULMATE: ", soulmate);

/**
 * ! use const by default
 * !. use let only if you you you will change the value
 * !. avoid var - it's old and messy
 */

/**
 * ! Undefined, not defined and null
 */

/**
 * ! Undefined -
 */
let train;
console.log(train);

/**
 * ! Not defined-
 */
// console.log(god);

/**
 * ! NULL
 */
let girlfriend = null;
console.log(girlfriend);
