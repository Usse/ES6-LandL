/* eslint-disable */

// The ES6 has introduced arrow functions, which is another
// way to declare and use functions.
//    More concise
//    this is picked up from surroundings
//    implicit return

// Old way
function sum(x,y) {
  return x + y;
}
console.log(sum(4, 5))


// New way
var sum2 = (x,y) => x + y;
console.log(sum2(4, 5))




var f1 = () => 12;
var f2 = x => x * 2;
var f3 = (x,y) => {
  var z = x * 2 + y;
  y++;
  x *=3;
  return (x + y + z) / 2;
};


console.log(f1())
console.log(f2(4))
console.log(f3(4, 5))
