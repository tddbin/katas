// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!

class LexicallyBound {
  
  getFunction() {
    return () => {
      return new LexicallyBound();
    }
  }
  
  getArgumentsFunction() {
    return function() {return arguments}
  }
  
}

describe('arrow functions have lexical `this`, no dynamic `this`', () => {
 
  it('bound at definition time, use `=>` ', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    
    assert.strictEqual(fn(), bound);
  });
 
  it('can NOT bind a different context', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    var anotherObj = {};
    var expected = anotherObj;
    
    assert.strictEqual(fn.call(anotherObj), expected);
  });
  
  it('`arguments` doesnt work inside arrow functions', function() {
    var bound = new LexicallyBound();
    var fn = bound.getArgumentsFunction();
    
    assert.equal(fn(1, 2).length, 0);
  });
  
});
