/* eslint-disable */


// The default parameter is applied in two and only two situations:
//    No parameter provided
//    undefined parameter provided
// In other words, if you pass in null the default parameter won't be applied.


function sum(x = 11, y = 31) {
  return x + y
}

console.log(sum())
console.log(sum( 5, 6 ))
console.log(sum( 5 ))
console.log(sum( null, 6 ))
console.log(sum( 0, 42 ))



function printName({firstName, lastName}) {
  return firstName + ' ' + lastName
}
console.log(printName({
  lastName: 'Bob',
  firstName: 'Martin'
}))



function makeRequest(url, timeout = 2000, callback = function() {}) {
  //...
}

makeRequest("/foo")
makeRequest("/foo", 500)
makeRequest("/foo", 500, function(body) {
  doSomething(body)
})
