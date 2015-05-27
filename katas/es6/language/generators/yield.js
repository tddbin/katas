// Generators - Yield Statements
// To do: make all tests pass, leave the assert lines unchanged!

describe('generator instance', () => {
  
  function* generator() {
    yield 'hello';
    yield 'world';
  }
  
  let genInstance ;

  beforeEach(function() {
    genInstance = generator();
  });
  
  it('converted to an array returns all yielded values', () => {
    let value = Array.from(genInstance);
    assert.deepEqual(value, ['hello', 'world']);
  });
  
  it('should have value of "hello" after first next() call', () => {
    let thisStep = genInstance.next();
    let [value, done] = [thisStep.value, thisStep.done];
    assert.equal(value, 'hello');
    assert.equal(done, false);
  });
  
  it('should have value of "world" after second next() call', () => {
    genInstance.next();
    let thisStep = genInstance.next();
    let [value, done] = [thisStep.value, thisStep.done];  
    assert.equal(value, 'world');
    assert.equal(done, false);
  });
  
  it('done property = true after stepping past all yield statements', () => {
    genInstance.next();
    genInstance.next();
    let done = genInstance.next().done;
    assert.equal(done, true);
  });

});
