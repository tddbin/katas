// 38: iterator/iterable - string. 
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The native string is a built-in iterable object', function() {
  
  const s = 'abc';
  
  describe('string is iterable', function() {
    it('the string`s object key `Symbol.iterator` is a function', function() {
      //// const isA = typeof s.Symbol.iterator;
      const isA = typeof s[Symbol.iterator];
      assert.equal(isA, 'function');
    });
    it('use `Array.from()` to make an array out of any iterable', function(){
      //// const arr = s;
      const arr = Array.from(s);
      assert.deepEqual(arr, ['a', 'b', 'c']);
    });
  });
  
  describe('a string`s iterator', function() {
    let iterator;
    beforeEach(function() {
      iterator = s[Symbol.iterator]();
    });
    it('has a special string representation', function(){
      //// const description = iterator.to____();
      const description = iterator.toString();
      assert.equal(description, '[object String Iterator]');
    });
    it('`iterator.next()` returns an object according to the iterator protocol', function(){
      //// const value = iterator.___();
      const value = iterator.next();
      assert.deepEqual(value, {done: false, value: 'a'});
    });
    it('the after-last call to `iterator.next()` says done=true, no more elements', function(){
      iterator.next();
      ////
      iterator.next();
      ////
      iterator.next();
      ////
      iterator.next();
      assert.equal(iterator.next().done, true);
    });
  });
});

