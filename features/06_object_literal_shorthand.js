/* eslint-disable */

// When assigning a variable to an object property, if the variable name
// is equal to the property name, we can use a new synthax

// Old way
function createPerson() {
  var name = "Bob"
  var age = 28
  return {
      name: name,
      age: age
  }
}
// console.log(createPerson())


// New way
function createPerson2() {
  var name = "Bob"
  var age = 28
  return {
      name,
      age
  }
}
// console.log(createPerson2())


// Renaming
function createPerson3() {
  var name = "Bob"
  var age = 28
  return {
      fullName: name,
      age
  }
}
// console.log(createPerson3())



// Old way
var person = {
  name: "Bob",
  sayName: function() {
      console.log(this.name);
  }
};
// person.sayName()


// New way
var person = {
  name: "Bob",
  sayName() {
      console.log(this.name);
  }
};
// person.sayName()