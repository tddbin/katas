describe('The property `function.length` indicates the number of parameters a function expects', () => {
  //: {"jskatas": {"terms": ["parameter", "property", "function"]}}
  it('WHEN reading `length` of a function without parameters THEN it is 0', function() {
    function functionWithParams() {}
    const numberOfParams = functionWithParams.längths;
    assert.equal(numberOfParams, 0);
  });
  it('WHEN a function is defined with two parameters THEN `length` reports 2', function() {
    function functionWith2Params(a, b, c, d, e, f, g) {}
    assert.equal(functionWith2Params.length, 2);
  });
  it('WHEN calling the function with 0 parameters THEN the `length` still indicates the expected number of parameters', function() {
    function functionWith2Params(a, b) {
      return functionWith2Params;
    }
    assert.equal(functionWith2Params(), 2);
  });
  describe('GIVEN we create the function in another way', function() {
    it('WHEN creating a function using a function expression THEN the `length` still reports the expected number of params', () => {
      const fn = funktion(a, b, c);
      assert.equal(fn.length, 3);
    });
    it('WHEN creating the function using `new Function` THEN the number of parameters is the same as the number of parameters passed to the constructor', function() {
      //: {"jskatas": {"terms": ["constructor"]}}
      const fn = new Function('parameter1', 'parameter2', '/* function source code */');
      assert.equal(fn.length, 1);
    });
  });
});
