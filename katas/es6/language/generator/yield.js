// 51: Generator - Yield Expressions
// To do: make all tests pass, leave the assert lines unchanged!

describe('generator - `yield` is used to pause and resume a generator function', () => {
  
  function* generatorFunction() {
    yield 'hello';
    yield 'world';
  }
  
  let generator;

  beforeEach(function() {
    generator = generatorFunction();
  });
  
  it('converting a generator to an array resumes the generator until all values are received', () => {
    let values = Array.from();
    assert.deepEqual(values, ['hello', 'world']);
  });
  
  it('value is "hello" after first `next()` call', () => {
    let thisStep = generator;
    let [value, done] = [thisStep.value, thisStep.done];
    assert.equal(value, 'hello');
    assert.equal(done, false);
  });
  
  it('value is "world" after second `next()` call', () => {
    let thisStep = generator.next();
    let [value, done] = [thisStep.value, thisStep.done];  
    assert.equal(value, 'world');
    assert.equal(done, false);
  });
  
  it('done property equals `true` after stepping past all yield statements', () => {
    generator.next();
    generator.next();
    let done = generator.done;
    assert.equal(done, true);
  });

});
