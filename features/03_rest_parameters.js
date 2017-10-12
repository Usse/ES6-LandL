/* eslint-disable */

// In function parameters, we can use the rest operator to inject parameters
// into an array we can loop in.

// Old way
function logMyBooks1() {
  var books = Array.prototype.slice.call(arguments)
  books.forEach(function(book) {
    console.log(book)
  })
}
// logMyBooks1('Book 1','Book 2')


// New way
function logMyBooks2(...books) {
  books.forEach(function(book) {
    console.log(book)
  })
}
// logMyBooks2('Book 1','Book 2')


function logMyBooks3(author, ...books) {
  console.log(author, books)
}
// logMyBooks3('Bob','Book 1','Book 2')