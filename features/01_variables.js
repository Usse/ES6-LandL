/* eslint-disable */


var x = 10

// var and let are about the same, but let declared variables
//    are block scoped
//    are not accessible before they are assigned
//    can't be re-declared in the same scope
let z = 10

//const declared variables behave like let variables, but also they can't be reassigned.
const PI = 3.14



function myFunction() {
  var x = 10
  if (true) {
    let x = 15
    let y = 20
    // console.log(x)
    // console.log(y)
  }
  // console.log(x)
  // console.log(y)
}

myFunction()



// PI = 6