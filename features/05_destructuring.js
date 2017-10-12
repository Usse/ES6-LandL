/* eslint-disable */

// Destructuring is a convenient way of creating new variables by
// extracting some values from data stored in objects or arrays.


// Old way
function today() {
  return {
    month: 6,
    day: 2,
    year: 2015
  }
}
var month = today().month
var day = today().day
console.log(month)
console.log(day)

// New way
// function today() {
//   return {
//     month: 6,
//     day: 2,
//     year: 2015
//   }
// }

// let {month, day} = today()
// console.log(month)
// console.log(day)







// ------------------------------------------------------------------------------
// Destructuring (Arrays)

// // Old way
// function today() {
//   return [6,2,2015]
// }

// var day = today()[0]
// var month = today()[1]
// console.log(day, month)

// // New way
// function today() {
//   return [6,2,2015]
// }
// let [day, month, year ] = today()
// console.log(day, month, year)