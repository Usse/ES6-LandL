/* eslint-disable */


// loops over the keys/indexes in the a array
var a = ["a","b","c","d","e"];
for(var idx in a) {
  console.log( idx );
}


// loops over the values in the a array
var a = ["a","b","c","d","e"];
for(var val of a) {
  console.log( val );
}


// Array methods - from
const arrayLike = { length: 2, 0: 'a', 1: 'b' };
const arr = Array.from(arrayLike);
for (const x of arr) {
    console.log(x);
}
console.log(Array.from([0,,,,,,2]))


// Array methods - Array.prototype.keys()
let myArray = ['a', 'b', 'c']
for(var key of myArray.keys()) {
  console.log(key)
}

// Array methods - Array.prototype.entries()
for(var entry of myArray.entries()) {
  console.log(entry)
}


// Array methods - find and findIndex
console.log(
  [6, -5, 8].find(x => x < 0)
)

console.log(
  [6, 5, 8].find(x => x < 0)
)

// Array methods - fill
let filledArray = ['a', 'b', 'c'].fill(7)
console.log(filledArray)


// Array methods - includes
var myNewArray = [1, 2, 3];
console.log(myNewArray.includes(2))
console.log(myNewArray.includes(4))



// Array every - some
function isEven(element, index, array) {
  return element % 2 == 0;
}

console.log(
  [12, 5, 8, 130, 44].every(isEven)
)
console.log(
  [12, 54, 18, 130, 44].every(isEven)
)

console.log(
  [12, 5, 8, 130, 44].some(isEven)
)
console.log(
  [13, 53, 19, 131, 45].some(isEven)
)
