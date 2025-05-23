/**
 * ! Function in JavaScript
 * ? What is a function?
 * * "A function is a block of code that does something.    It’s like a machine — you give it input, it does the work, and gives you back output."
 *
 *
 *
 */
greet();
function greet() {
  console.log("Hello World!");
}
//greet(); //calling of the function

/**
 * ! Resuse the code without rewriting it
 * ! Organize your logic into chunks
 * ! Make your code readable
 * ! Avoid copy pasting like a zombie
 */
/**
 * ! Function Expression:
 *  * When you create a function and store it in a variable
 *
 */
// This is an anonymous function

const hello = function () {
  console.log("Hello World from a variable!");
};
hello();

/**
 * ! Function declaration = hoisted
 * ! Function expression = not hoisted
 */

/**
 * ! Arrow function -  short, modern, and no extra fluff
 *
 */
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(5, 6));

/**
 * ! If the function has single expression, it's implicitly returned.
 */
const square = (n) => n * n;
console.log(square(5));

/**
 * ! Use arrow function for short and clean task
 * ! Use regular function when you need more control
 */

/**
 * ! You can assign function to variables in Js
 * ! Because functions are first class citizen in Js
 */
function sayHi() {
  console.log("Hi THere!");
}
const greeting = sayHi;
greeting();

/**
 * ! Parameters are placeholder you define when creating a function
 * ! Arguments are the actual value you pass in when you call the function
 */
function add(a, b) {
  console.log(a + b);
}
add(5, 60);

// function welcome(name, mood) {
//   console.log(name + " is feeling " + mood);
// }
// welcome("Toaster");

/**
 * ! Default Parameter
 */
function welcome(name, mood = "awesome") {
  console.log(name + " is feeling " + mood);
}
welcome("Toaster", "Angry");

function countAll() {
  console.log(arguments);
}
countAll("One", "Tow", "Three", "Four", "Five", "Six");

/**
 * ! Scope - Where in your code can you access a variable
 * * 1. Global Sccope - Living room
 * * 2. Function Scope - The bedroom
 * * 3. Block Scope - Drawer inside your room
 */
/**
 * ! Global Scope
 */
let snack = "Pizza";
function eat() {
  console.log(snack);
}
eat();
console.log(snack);

/**
 * ! Function Scope
 */
function kitchen() {
  let secretSauce = "mayo";
  console.log(secretSauce);
}
kitchen();
// console.log(secretSauce); // Refrence Error

/**
 * ! Block Scope
 */
if (true) {
  let toast = "buttery";
  const juice = "orange";
  var cereal = "cornflakes";
}
let toast = "buttery";
console.log(toast);
/**
 * ? Why scope matters?
 * *1. it helps keep your variables clean and isolated
 * *2. It prevents accidental overwrite
 * *3. It makes your code earier to read, debug, and trust
 */

function myHeart() {
  let ex = "Riya";
  console.log("Inside function: ", ex);
}
myHeart();
// console.log("Outside finctio: ", ex);
