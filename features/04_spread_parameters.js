/* eslint-disable */

// The spread operator is used to expand elements of an iterable
// (like an array) into places where multiple elements can fit.

// Old way
let values1 = [25, 50, 75, 100]
console.log(Math.max.apply(Math, values1))


// New way
let values2 = [25, 50, 75, 100]
console.log(Math.max(...values2))



let a = [1, ...[2,3], 4]
let x = ['a', 'b']
let y = ['c']
let z = ['d', 'e']
let xyz = [...x, ...y, ...z]

console.log(a)
console.log(xyz)
