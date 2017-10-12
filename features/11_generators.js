/* eslint-disable */


function *foo() {
  console.log('execution starts');
  yield 'one';
  yield 'two';
  yield 'three';
  console.log('execution completes');
}
let myFoo = foo();

// console.log(myFoo.next());
// console.log(myFoo.next());
// console.log(myFoo.next());
// console.log(myFoo.next());
// console.log(myFoo.next());
