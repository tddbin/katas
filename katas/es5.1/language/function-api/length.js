describe('The property `function.length` indicates the number of parameters a function expects', () => {
  describe('GIVEN we read the `length` from a bound function', () => {
    it('WHEN binding a function with 3 parameters THEN the bound value has still a `length` of 3', () => {
      const fn = function(a, b, c) {};
      const boundFn = fn.____(null);
      assert.equal(boundFn.length, 3);
    });
    it('WHEN binding a function (that expects three parameters) with one parameter THEN the `length` will reduced by 1, it will be 2', () => {
      const fn = function(a, b, c) {};
      const boundFn = fn.bind(null, 1, 2, 3);
      assert.equal(boundFn.length, 2);
    });
  });
});
