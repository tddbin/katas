// 52: Generator - Send value to a generator
// To do: make all tests pass, leave the assert lines unchanged!

describe('pass a value to a generator', () => {

  it('basics: get the values from a generator in two ways', function() {
    function* generatorFunction() {
      yield 1;
      yield 2;
    }
    
    // way #1
    var convertedToAnArray = Array.from(generatorFunction());
    
    // way #2
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next().value];
    
    assert.deepEqual(convertedToAnArray, iteratedOver);
  });

  it('pass a value to the iterator', function() {
    function* generatorFunction() {
      const param = yield 1;
      yield param;
    }

    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(2).value];
    
    assert.deepEqual([1, 2], iteratedOver);
  });

  it('passing a value to the first `next()` call throws', function() {
    function* generatorFunction() {
      yield 1;
    }

    assert.throws(function() { generatorFunction().next(1); });
  });

});
