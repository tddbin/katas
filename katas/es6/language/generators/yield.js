// Generators - Yield Statements
// To do: make all tests pass, leave the assert lines unchanged!

describe('generator instance', () => {
  
  function* generator() {
    yield 'hello';
    yield 'world';
  }
  
  // create instance
  let genInstance = generator();
  
  it('should have an undefined value property after initialisation', () => {
    let value = genInstance;
    assert.equal(value, undefined);
  });
  
  it('should have value of "hello" after first next() call', () => {
    let thisStep = genInstance.next;
    let [value, done] = [thisStep.value, thisStep.done];
    assert.equal(value, 'hello');
    assert.equal(done, false);
  });
  
  it('should have value of "world" after second next() call', () => {
    let thisStep = genInstance;
    let [value, done] = [thisStep.value, thisStep.done];  
    assert.equal(value, 'world');
    assert.equal(done, false);
  });
  
  it('done property = true after stepping past all yield statements', () => {
    let done = genInstance.done;
    assert.equal(done, true);
  });

});