// 38: iterator/iterable - string. 
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The native string is a built-in iterable object', function() {
  describe('string is iterable', function() {
    it('the string`s object key `Symbol.iterator` is a function', function() {
      const s = 'abc';
      const isA = typeof s.Symbol.iterator;
      assert.equal(isA, 'function');
    });
    it('use `Array.from()` to make an array out of any iterable', function(){
      const s = 'abc';
      const arr = s;
      assert.deepEqual(arr, ['a', 'b', 'c']);
    });
  });
  
  describe('a string`s iterator', function() {
    it('has a special string representation', function(){
      const s = 'abc';
      const iterator = s[Symbol.iterator]();
      const description = iterator.to____();
      assert.equal(description, '[object String Iterator]');
    });
    it('`iterator.next()` returns an object according to the iterator protocol', function(){
      const s = 'abc';
      const iterator = s[Symbol.iterator]();
      const value = iterator.___();
      assert.deepEqual(value, {done: false, value: 'a'});
    });
    it('the after-last call to `iterator.next()` says done=true, no more elements', function(){
      const s = 'abc';
      const iterator = s[Symbol.iterator]();
      iterator.next();
      
      
      
      assert.equal(iterator.next().done, true);
    });
  });
});

