describe('The `arguments` prop - discouraged since 1997 (and might not work)', () => {
  it('WHEN reading `arguments` in the function body THEN it is an array-like object containing all parameters the function was called with', () => {
    let args;
    const fn = function() {
      args = arguments;
    }
    fn(1, 'abc', {x: 'y'});
    assert.deepStrictEqual(Array.from(args), [1, 'abc', {x: 'y'}]);
  });
  it('WHEN `arguments` is defined inside a function THEN this is NOT overridden', () => {
    //: {"jskatas": {"runnerOptions": {"strictMode": false}}}
    const fn = function() {
      const arguments = 'arg';
      return arguments;
    }
    assert.equal(fn('the argument'), 'arg');
  });
});
