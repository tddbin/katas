describe('Using `new Function()` creates a new function', () => {
  it('WHEN using `new Function()` THEN this is equivalent to `Function()` with the same parameters', () => {
    const fn1 = new Function('a', 'b', 'return a + b');
    const fn2 = Function('a', 'b', 'return a + b');
    assert.deepStrictEqual(Object.getOwnPropertyDescriptors(fn1), Object.getOwnPropertyDescriptors(fn2));
  });
  it('num params', () => {
    const fn = new Function('a, b', 'c', 'return null');
    assert.strictEqual(fn.length, 3);
  }); 
}); 