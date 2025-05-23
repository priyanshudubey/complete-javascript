/**
 * ! STRINGS:
 * * Sequence of characters, written inside quotes.
 */
let name = "toaster Code;
let ex1 = "Riya";
let ex2 = "Priya's friend";
let ex3 = `Sarah`;

let text = 'she said "I still miss you"';
let text2 = 'He replied, "That\'s not my problem"';
console.log(text);
console.log(text2);

/**
 * ! String Methods
 */
// 1. .length - measure the length of string
console.log(ex1.length);

// 2. .uppercase() and .lowercase()
let msg = "I need closure";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

//3. .trim()
let reply = "     it's over between us.     ";
console.log(reply.trim());

//4. indexOf
console.log(msg.indexOf("need"));

// .charAt()
let name3 = "Toaster";
console.log(name3.charAt(2));

//.slice()
let say = "I miss you";
let sliced = say.slice(2, 6);
console.log(sliced);

//substring()
let note = "Don't text me back";
console.log(note.substring(0, 4));

//.spit()
let breakup = "We,were,never,on,a,break";
let pieces = breakup.split(",");
console.log(pieces);

//.replace()
let old = "You were the one one one";
let newMsg = old.replace("one", "mistake");
console.log(old);
console.log(newMsg);

//.includes() 
console.log(old.includes("where"));

let chat = "Hey.... I miss us";
let fixed = chat.replace("us", "pizza");
console.log(fixed);

//Template Literals
let names2 = "Morgan";
let newMessage = `Hi ${names2}, I'have moved on`;
console.log(newMessage);

let oldONe = `hey dear,
Need to talk to you


sdkljfhsfijvd
`;
console.log(oldONe);
