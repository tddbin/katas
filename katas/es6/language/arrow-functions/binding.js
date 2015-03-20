// arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!

describe('arrow functions have lexical `this`, no dynamic `this`', () => {
 
  it('bound at definition time, use `=>` ', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    assert.strictEqual(fn(), bound);
  });
 
  it('can NOT bind a different context', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    var someObj = {};
    assert.strictEqual(fn.call(someObj), bound);
  });
  
  it('`arguments` doesnt work inside arrow functions', function() {
    var bound = new LexicallyBound();
    var fn = bound.getArgumentsFunction();
    assert.notEqual(fn(1, 2).length, 2);
  });
  
});

class LexicallyBound {
  
  getFunction() {
    return () => {
      return this;
    }
  }
  
  // less verbose version
  getArgumentsFunction() () => arguments
  
}
