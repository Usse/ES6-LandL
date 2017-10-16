/* eslint-disable */



/*
  JavaScript is a prototype-based language.
  ES6 has introduced JavaScript classes which are meant to be a
  syntactic sugar for prototype-based inheritance
*/

// Old way
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.displayName = function() {
  return this.firstName + " " + this.lastName
}

var person = new Person("(Uncle) Bob", "Martin")
console.log(person.displayName())





// New way
class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  displayName() {
    return `${this.firstName} ${this.lastName}`
  }


}

let person2 = new Person2("(Uncle) Bob", "Martin")
console.log(person2.displayName())





class Employee extends Person {
  constructor(firstName, lastName, employeeId) {
    super(firstName, lastName)
    this.employeeId = employeeId
  }

  describe() {
    return `${super.displayName()} (ID: ${this.employeeId})`
  }
}

let employee = new Employee("(Uncle) Bob", "Martin", 1234)
console.log(employee.describe())




// The static keyword is used in classes to declare static methods.
// Static methods are functions in a class that belongs to the class object
// and are not available to any instance of that class.


class Repo {
  static getName() {
    return "Elementary"
  }
}
console.log(Repo.getName())

//This will throw an error
let r = new Repo();
console.log(r.getName())
