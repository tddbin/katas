// 51: Generator - Yield Expressions
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('Generator - `yield` is used to pause and resume a generator function', () => {
  it('converting a generator to an array (using `Array.from`) resumes the generator until all values are received', () => {
    function* generatorFunction() {
      yield 'hello';
      yield 'world';
    }
    let values = Array.from(generatorFunction);
    assert.deepEqual(values, ['hello', 'world']);
  });
  describe('after the first `generator.next()` call', function() {
    it('the value is "hello"', function() {
      function* generatorFunction() {
        yield 'hello';
        yield 'world';
      }
      const generator = generatorFunction();
      const {value} = generator.next;
      assert.equal(value, 'hello');
    });
    it('and `done` is false', function() {
      function* generatorFunction() {
        yield 'hello';
        yield 'world';
      }
      const generator = generatorFunction();
      const {done} = generator;
      assert.equal(done, false);
    });
  });
  describe('after the second `next()` call', function() {
    it('`value` is "world"', function() {
      function* generatorFunction() {
        yield 'hello';
        yield 'world';
      }
      const generator = generatorFunction();
      generator.next();
      const secondItem = generator.next();
      let {value} = secondItem;
      assert.equal(value, 'world');
    });
    it('and `done` is still false', function() {
      function* generatorFunction() {
        yield 'hello';
        yield 'world';
      }
      const generator = generatorFunction();
      generator.next();
      const secondItem = generator.next();
      const done = secondItem;
      assert.equal(done, false);
    });
  });
  describe('after stepping past the last element, calling `next()` that often', function() {
    it('`done` property equals true, since there is nothing more to iterator over', function() {
      function* generatorFunction() {
        yield 'hello';
        yield 'world';
      }
      const generator = generatorFunction();
      generator.next();
      generator.next();
      let done = generator.done;
      assert.equal(done, true);
    });
  });
});

