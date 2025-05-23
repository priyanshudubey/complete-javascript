/**
 * ! Array
 * * An array is a special variable that can hold multiple values
 */
let ex = "Riya";
let ex2 = "Diya";
let ex3 = "Siya";
let ex4 = "sarah";
ex4 = "Maddy";
console.log(ex4);

//Declare an array []
let exList = ["Riya", "Priya", "Sarah", "Diya"];
console.log(exList[4]);
//Modify an array element
// exList[0] = "Anaya";
console.log(exList);

//length
console.log(exList.length);

//Array Porperties
//.push() - Adds to end
let snacks = ["Toast", "Butter"];
console.log(snacks);
snacks.push("coffee");
console.log(snacks);

//.pop() - removes from the end
snacks.pop();
console.log(snacks);

//.shift() - removes from the start
snacks.shift();
console.log(snacks);

//unshift() - adds at start
snacks.unshift("banana");
console.log(snacks);

//slice() - takes a portion
let emotions = ["happy", "sad", "anxious", "joyful"];
console.log(emotions);
let selected = emotions.slice(1, 3);
console.log(selected);
console.log(emotions);

//splice- removes or replaces items
let vibes = ["good", "meh", "bad"];
console.log(vibes);
vibes.splice(1, 1, "excellent");
console.log(vibes);

//indexof()
console.log(vibes.indexOf("excellent"));

//includes()
console.log(vibes.includes("good"));

//forEach() -
//let exList = ["Riya", "Priya", "Sarah", "Diya"];
exList.forEach(function (name) {
  console.log("Trying to forget: " + name);
});

//map()
let marks = [50, 60, 70];
console.log(marks);
let curve = marks.map(function (score) {
  return score + 10;
});
console.log(curve);
console.log(marks);

//filter()
let people = ["Riya", "Priya", "Sarah", "Boss"];

let exNames = people.filter(function (name) {
  return name !== "Boss";
});
console.log(exNames);
console.log(people);

//reduce()
let bills = [100, 300, 600];
let total = bills.reduce(function (acc, curr) {
  return acc + curr;
}, 0);
console.log(total);
