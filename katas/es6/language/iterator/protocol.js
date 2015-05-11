// 39: iterator - custom. Iterable is a protocol, when implemented allows objects 
// to customize their iteration behavior, such as what values are looped over in a for..of construct.
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!

describe('A simple iterable without items inside, implementing the right protocol', () => {

  function iteratorFunction() {
    return { 
      next: function() { return {done: true}; }
    }
  }

  describe('the iterator function needs to comply to the iterator protocol', function() {
    it('must return an object', function() {
      assert.equal(typeof iteratorFunction(), 'object');
    });
    it('the object must have a key `next` which must be a function', function() {
      assert.equal(typeof iteratorFunction().next, 'function');
    });
    it('calling `next()` must return an object with `{done: true}`', function() {
      assert.deepEqual(iteratorFunction().next(), {done: true});
    });
  });

  let iterable;
  beforeEach(function() {
    iterable = {
      [Symbol.iterator]: iteratorFunction
    };
  });

  describe('the iterable', function() {
    it('must be an object', function() {
      assert.equal(typeof iterable, 'object');
    });
    it('must have the iterator function assigned to the key `Symbol.iterator`', function() {
      assert.equal(iterable[Symbol.iterator], iteratorFunction);
    });
  });
  
  describe('using the iterable', function() {
    it('it contains no values', function() {
      let numberOfValues = 0;
      for (let value of iterable) {
        numberOfValues++;
      }
      assert.equal(numberOfValues, 0);
    });
    
    it('has no `.length` property', function() {
      assert.equal('length' in iterable, false);
    });
    
    describe('can be converted to an array', function() {
      it('using `Array.from()`', function() {
        const arr = Array.from(iterable);
        assert.equal(Array.isArray(arr), true);
      });
      
      it('which length is still 0', function() {
        const arr = Array.from(iterable);
        assert.equal(arr.length, 0);
      });
    });
  });
  
});
