// 39: iterator - custom. Iterable is a protocol, when implemented allows objects 
// to customize their iteration behavior, such as what values are looped over in a for..of construct.
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!

describe('Iterable protocol', () => {

  it('', function() {
    const arr = {};
    arr[Symbol.iterator] = function() {
      return {
        next: function() {
          return 1;
        }
      }
    };
    
    for (let value of arr) {
      assert.equal(value, 1);
    }
  });

 it('an iterable object has to implement the function `Symbol.iterator`', function() {
   let iterable = {};
   iterable[Symbol.iterator] = function() {return {next: function(){}}};

   assert.equal(Array.from(iterable), '');
 });

 it('', function() {
   let iterableWithOneItem = {};
   iterableWithOneItem[Symbol.iterator] = function() {
     return {
       next: function() {
         return {value: 1, done: true};
       }
     }
   };

   for (let value of arr) {
     assert.equal(value, 1);
   }
 });

 //convert iterable simple to an array Array.from(iterable)
  