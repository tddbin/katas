// 50: Generators return iterator objects
// To do: make all tests pass, leave the assert lines unchanged!

describe('a generator returns an iterable object', function() {
  
  const gen = function* (){
    yield 1;
    yield 2;
  };
  
  let genInstance;
  
  beforeEach(() => {
    genInstance = new gen();
  });
    
  it('a generator returns an object', function() {
    const theType = typeof genInstance;
    const expected = 'object';
    
    assert.equal(theType, expected);
  });
  
  it('a generator object has an iterator, which is a function', function() {
    const iterator = genInstance[Symbol.iterator];
    const theType = typeof iterator;
    const expected = 'function';
    
    assert.equal(theType, expected);
  });
  
  it('can be looped with `for-of`, which expects an iterable', function() {

    function iterateForOf(){
      for (let value of genInstance) {
        // no statements needed
      }
    }
    
    assert.doesNotThrow(iterateForOf);
  });
  
});
