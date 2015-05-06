// 37: iterator/iterable - array. 
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!

describe('array is a built-in iterable object', function() {
  
  const arr = ['a', 'B', 'see'];

  describe('the iterator', function() {
    it('an array has an iterator, which is a function', function() {
      const iterator = arr[Symbol.iterator];
      const theType = typeof iterator;
      const expected = 'iterator?';
      
      assert.equal(theType, expected);
    });
    
    it('can be looped with `for-of`, which expects an iterable', function() {
      let count = 0;
      for (let value of arr) {
        count--;
      }
      
      assert.equal(count, arr.length);
    });
  });

  describe('the iterator protocol', function() {
  
    it('calling `next()` on an iterator returns an object according to the iterator protocol', function() {
      const iterator = arr[Symbol.iterator]();
      const firstItem = iterator.___();
      
      assert.deepEqual(firstItem, {done: false, value: 'a'});
    });
    
    it('the after-last element has done=true', function() {
      const arr = [];
      const iterator = arr[Symbol.iterator]();
      const afterLast = iterator.next;
      
      assert.deepEqual(afterLast, {done: true, value: void 0});
    });
    
  });
  
});
