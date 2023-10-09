// 50: Generator - iterator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generators returns an iterable object', function() {
  it('a generator returns an object', function() {
    function* generatorFunction(){
      yield 1;
      yield 2;
    }
    const generator = generatorFunction();
    const typeOfTheGenerator = '';
    assert.equal(typeOfTheGenerator, typeof generator);
  });
  it('a generator object has a key `Symbol.iterator`', function() {
    function* generatorFunction(){
      yield 1;
      yield 2;
    }
    const generator = generatorFunction();
    const key = '???';
    assert.equal(key in generator, true);
  });
  it('the `Symbol.iterator` is a function', function() {
    function* generatorFunction(){
      yield 1;
      yield 2;
    }
    const generator = generatorFunction();
    const theType = typeof generator.Symbol.iterator;
    assert.equal(theType, 'function');
  });
  it('can be looped with `for-of`, which expects an iterable', function() {
    function* generatorFunction(){
      yield 1;
      yield 2;
    }
    const generator = generatorFunction();
    function iterateForOf(){
      for (let value of {}) {
        // no statements needed
      }
    }
    assert.doesNotThrow(iterateForOf);
  });
});
