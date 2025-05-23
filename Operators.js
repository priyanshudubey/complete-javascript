/**
 * ! Operators
 */
// let a = 10;
// let b = 20;
// /**
//  * !Arithemetic Operators
//  */
// //Addition
// console.log(a + b);
// //substraction
// console.log(a - b);
// //multiplication
// console.log(a * b);
// //Division
// console.log(b / a);
// //Remainder
// console.log(a % b);
// //Exponention
// console.log(a ** b);

/**
 * ! Assignment Operators
 */
let x = 5;
x += 2;
x -= 2;
x *= 2;
x /= 2;
x **= 2;
console.log(x);

/**
 * ! Comparison Operators
 */
let a = 5;
let b = "5";
let c = 10;

console.log(a == b); //true
console.log(a === b); //false
console.log(a !== b); //true
console.log(a != b); //false
console.log(a > c); //false
console.log(a > b); //false //type coercion
console.log(a <= b); //true

let yourLove = "Sarah";
let newCrush = "JavaScript";
console.log(yourLove === newCrush);

/**
 * ! Logical Operators - And, or, not
 */
//logical and (&&)
let isOnline = true;
let hasReplied = false;

if (isOnline && hasReplied) {
  console.log("She's interested in you!");
} else {
  console.log("She is ignoring you, Move On!");
}

//Logical or(||)
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("Let's do netflix and Chill");
}

//Logical not(!)
let isSingle = false;
if (!isSingle) {
  console.log("Install Tinder");
} else {
  console.log("Uninstall Tinder");
}

let textedBack = false;
let stillCare = true;

if (!textedBack && stillCare) {
  console.log("Time to unfollow!");
}
//&& has heigher priorty than ||
if (true || (false && false)) {
  console.log("Wait...what??? Are you high?");
} else {
  console.log("Bro, just leave coding!");
}
