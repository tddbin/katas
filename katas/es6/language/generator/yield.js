// Generators - Yield Expressions
// To do: make all tests pass, leave the assert lines unchanged!

describe('generator instance', () => {
  
  function* generator() {
    yield 'hello';
    yield 'world';
  }
  
  let genInstance;

  beforeEach(function() {
    genInstance = generator();
  });
  
  it('instance converted to an array returns all yielded values', () => {
    let values = Array.from();
    assert.deepEqual(values, ['hello', 'world']);
  });
  
  it('should have value of "hello" after first next() call', () => {
    let thisStep = genInstance;
    let [value, done] = [thisStep.value, thisStep.done];
    assert.equal(value, 'hello');
    assert.equal(done, false);
  });
  
  it('should have value of "world" after second next() call', () => {
    let thisStep = genInstance.next();
    let [value, done] = [thisStep.value, thisStep.done];  
    assert.equal(value, 'world');
    assert.equal(done, false);
  });
  
  it('done property = true after stepping past all yield statements', () => {
    genInstance.next();
    genInstance.next();
    let done = genInstance.done;
    assert.equal(done, true);
  });

});
