const util = require('util');

const Person = function(name) {
  this.sayName = function() {
    console.log(name);
  }
}

Person.prototype.whatever = 'foo';


const Brett = new Person('Brett');
const Jeremy = new Person('Jeremy');

Person.prototype.whatever = 'bar';



Brett.__proto__.sayHi = function() {
  console.log('hi');
}

console.log(Jeremy.sayHi())
console.log(Brett.whatever);
console.log(Brett.prototype);