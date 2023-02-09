// Function Spies
//  Exercise 12 of 18

// # Task

// Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

// Create a spy that keeps track of how many times a function is called.

// ## Example

//     var spy = Spy(console, 'error')

//     console.error('calling console.error')
//     console.error('calling console.error')
//     console.error('calling console.error')

//     console.log(spy.count) // 3

// ## Arguments

//   * target: an object containing the method `method`
//   * method: a string with the name of the method on `target` to spy on.

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any unnecessary functions e.g. helpers.

// ## Hint

//   * Functions have context, input and output. Make sure you consider the context, input to *and output from* the function you are spying on.

// ## Boilerplate

//     function Spy(target, method) {
//       // SOLUTION GOES HERE
//     }

//     module.exports = Spy


// --------------------------------

// Their solution

// function Spy(target, method) {
//   var originalFunction = target[method];

//   var result = {
//     count: 0,
//   };

//   target[method] = function () {
//     result.count++;
//     return originalFunction.apply(this, arguments);
//   };

//   return result;
// }
// module.exports = Spy;

// --------------------------------


// when target[method] is called, it keep the characteristics of console.error is logging error
// however when spy is created, the console.error is overwritten by the original function that increase the count
function Spy(target, method) {
  if (!(this instanceof Spy)) return new Spy(target, method);

  this.count = 0;

  // stores the original function in the originalFn variable
  var originalFn = target[method];

  // the target[method] will be overwritten
  target[method] = function secretAgent() {
    this.count++;
    // if replace originalFn by target[method] it will be endless loop
    return originalFn.apply(target, arguments);
  }.bind(this);
  // using bind(this) to ensure that the this value inside the function refers to the spy object, rather than the target object
}

module.exports = Spy;

/*
// bind example
var obj = {
  method: function () {}
};

var spy = Spy(obj, 'method');
obj.method();
console.log(spy.count); // 1
*/