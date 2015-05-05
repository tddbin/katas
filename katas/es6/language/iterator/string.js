// 36: iterator/iterable - string. 
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!

describe('string is a built-in iterable object', function() {
  
  const s = 'abc';
  
  it('`Symbol.iterator` function is implemented on it', function() {
    assert.equal(typeof s[Symbol.iterator], 'function');
  });
  
  describe('a string`s iterator', function() {
    let iterator;
    beforeEach(function() {
      iterator = s[Symbol.iterator]();
    });
    
    it('has a special string representation', function(){
      assert.equal(iterator.toString(), '[object String Iterator]');
    });
    
    it('`iterator.next()` returns the first character', function(){
      assert.equal(iterator.next().value, 'a');
    });
    
    it('`iterator.next()` reports done=false, which means there is more to iterate', function(){
      assert.equal(iterator.next().done, false);
    });
    
    it('the 4th call to `iterator.next()` says done=false, no more elements', function(){
      iterator.next();
      iterator.next();
      iterator.next();
      assert.equal(iterator.next().done, true);
    });
    
    it('for-of uses the iterator', function(){
      let values = [];
      for (let value of s) {
        values.push(value);
      }
      assert.deepEqual(values, ['a', 'b', 'c']);
    });
  });
  
  it('create an array using `Array.from()`', function(){
    const arr = Array.from(s);
    assert.deepEqual(arr, ['a', 'b', 'c']);
  });
  
});
