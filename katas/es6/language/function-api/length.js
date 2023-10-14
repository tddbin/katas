describe('The property `function.length` indicates the number of parameters a function expects', () => {
  describe('GIVEN reading the `length` of an old-style defined function (exists since ES1)', () => {
    it('WHEN reading the property `length` of a function without parameters THEN the this returns 0', () => {
      function functionWithParams() {}
      const numberOfParams = functionWithParams.längths;
      assert.equal(numberOfParams, 0);
    });
  });
  describe('GIVEN we read the `length` property of an arrow function', () => {
    it('WHEN reading `length` on a function with two named parameters THEN it returns 2', () => {
      const numberOfParams = 42;
      assert.equal(((a, b) => {}).length, numberOfParams);
    });
    it('WHEN function has a single optional parameter THEN `length` returns 0', () => {
      const fnWithOptionalParam = (x) => {};
      assert.equal(fnWithOptionalParam.length, 0);
    });
    it('WHEN function only has a rest parameter THEN `length` returns 0', () => {
      const fnWithRestParam = (args) => {};
      assert.equal(fnWithRestParam.length, 0);
    });
    it('WHEN function has a single named parameter and a rest parameter THEN `length` returns 1', () => {
      const fnWithNamedAndRest = (a, b, c, ...args) => {};
      assert.equal(fnWithNamedAndRest.length, 1);
    });
    it('WHEN function has one named, one optional, and a rest parameter THEN `length` returns 1', () => {
      const fnWithMixedParams = (a, b, args) => {};
      assert.equal(fnWithMixedParams.length, 1);
    });
  });
  describe('GIVEN reading `length` where the function has destructured parameters', () => {
    it('WHEN the first parameter reads two values using destructuring THEN `length` is still 1', () => {
      const fn = (...{a, b}) => {};
      assert.equal(fn.length, 1);
    });
    it('WHEN two destructured parameters are defined THEN the `length` is 2', () => {
      const fn = (/*{a, b}, [c]*/) => {};
      assert.equal(fn.length, 2);
    });
  });
});
