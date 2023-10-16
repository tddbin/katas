describe('The `arguments` prop - discouraged since 1997 (and might not work)', () => {
  it('WHEN accessing `arguments` in strict mode THEN the JS throws', () => {
    const fn = function() {}
    assert.throws(() => fn.arguments);
  });
  it('WHEN reading `arguments` using an Object-method THEN it returns `undefined`', () => {
    const fn = function() {}
    assert.equal(Object.getOwnPropertyDescriptor(fn, 'arguments'), undefined);
  });
  it('WHEN reading `arguments` in the function body THEN it is an array-like object containing all parameters the function was called with', () => {
    let args;
    const fn = function() {
      args = arguments;
    }
    fn(1, 'abc', {x: 'y'});
    assert.deepStrictEqual(Array.from(args), [1, 'abc', {x: 'y'}]);
  });
}); 