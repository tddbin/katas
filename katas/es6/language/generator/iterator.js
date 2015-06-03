// 50: Generator - iterator
// To do: make all tests pass, leave the assert lines unchanged!

describe('a generator returns an iterable object', function() {
  
  const generatorFunction = function* (){
    yield 1;
    yield 2;
  };
  
  let generator;
  
  beforeEach(() => {
    generator = new generatorFunction();
  });
    
  it('a generator returns an object', function() {
    const theType = typeof generator;
    const expected = 'function';
    
    assert.equal(theType, expected);
  });
  
  it('a generator object has an iterator, which is a function', function() {
    const iterator = generator[Symbol.iterator];
    const theType = typeof iterator;
    const expected = 'object';
    
    assert.equal(theType, expected);
  });
  
  it('can be looped with `for-of`, which expects an iterable', function() {

    function iterateForOf(){
      for (let value of {}) {
        // no statements needed
      }
    }
    
    assert.doesNotThrow(iterateForOf);
  });
  
});
