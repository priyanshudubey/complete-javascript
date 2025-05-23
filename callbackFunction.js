/**
 * ! Callback Function:
 * * A callback function is just a function that's passed as an argument to another function, and it gets called later on(not immediately)
 */
// function callLater(callback) {
//   console.log("I'll call you back...");
//   callback();
// }
// function cryAlone() {
//   console.log("... Still waiting for call");
// }
// callLater(cryAlone);
// callLater(cryAlone());
/**
 * ?1. Timing
 * ?2. Reusability
 * ?3. Control
 */

/**
 * ! SetTimeout()
 */
// function breakupText() {
//   console.log("Hey... it's not you, it's me.");
// }
// setTimeout(breakupText, 3000);

// function moveOn() {
//   console.log("Finally moved on after 2 seconds");
// }
// console.log("Still thinking about her");
// setTimeout(moveOn, 5000);

/**
 * ! Custom callback use
 */
function processBreakup(exName, callback) {
  console.log("Thinking about " + exName + "...");
  callback();
}
function cry() {
  console.log("Crying mode activated...");
}
processBreakup("Sarah", cry);

/**
 * ! Mistakes in Callback:
 * *1. Calling the callback instead of passing it
 * *2. Forgetting to use a function as a callback
 * *3. Assuming all callbacks run immediately
 * ! Do not nest callbacks without plan
 */

// console.log("Hi");
// setTimeout(() => {
//   console.log("Done writing inside");
// }, 3000);
// console.log("Bye");

function step1(cb) {
  console.log("Step 1 done");
  cb();
}
function step2(cb) {
  console.log("Step 2 done");
  cb();
}
function step3() {
  console.log("Step 3 done");
}
//Callback hell
step1(() => {
  step2(() => {
    step3();
  });
});

/**
 * ! Difference between regular function vs callback
 * !. Regular -
 */

function reachout(message, callback) {
  console.log("Texted ex: ", message);
  callback();
}
function regret() {
  console.log("Now questioning my life...");
}
reachout("Hey...", regret);
