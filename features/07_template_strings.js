/* eslint-disable */

let name = "Bob";


// Old way
let greeting = "Hello " + name + "!";
console.log(greeting);

// New way
let greeting2 = `Hello ${name}!`;
console.log(greeting2);



function upper(s) {
  return s.toUpperCase();
}
var text = `Hello ${upper( name )}!`
console.log( text );







// let message = [
//   "Multiline ",
//   "string"
// ].join("\n");
// console.log(message)

// let message2 = "Multiline \n string";
// console.log(message2)




// let message3 = `Multiline
// string`;

// console.log(message3.length);


// // all whitespace inside of the backticks is considered to be part of the string
// let message4 = `Multiline
//               string`;

// console.log(message4.length);
