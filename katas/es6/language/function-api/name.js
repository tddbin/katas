describe('The `name` property tries to provide a useful name for a function', () => {
  describe('GIVEN a function declaration', () => {
    it('WHEN reading the `name` property THEN it is the name of the function', () => {
      function functionDeclaration() {}
      const functionName = functionDeclaration.length;
      assert.equal(functionName, 'functionDeclaration');
    });
  });
  describe('GIVEN a function expression', () => {
    it('WHEN reading the `name` THEN it is the name of the variable holding the function', () => {
      const fnExpression = function() {};
      assert.equal(functionExpression.name, 'functionExpression');
    });
    it('WHEN assigning the function to a different variable THEN the name stays the initial variable\'s name', () => {
      let firstFnExpression = function() {};
      let secondName = function() {};
      firstFnExpression = 0; // set it to something else than a function, just to make sure.
      assert.equal(secondName.name, 'firstFnExpression');
    }); 
    it('WHEN reading the `name` THEN it is the name of the variable holding the function', () => {
      const arrowFunction = {};
      assert.equal(arrowFunction.name, 'arrowFunction');
    });
  });
  describe('special cases', () => {
    it('WHEN binding a function THEN the bound-function\'s name gets prefixed with "bound"', () => {
      const myFn = () => {};
      const weBoundFn = myFn.bind(null);
      const expected = 'weBoundFn';
      assert.equal(weBoundFn.name, expected);
    });
    it('WHEN creating a `new Function` instance THEN the name is "anonymous"', () => {
      const fn = () => {};
      assert.equal(fn.name, 'anonymous');
    });
    it('WHEN reading the name of a getter THEN it is prefixed with "get"', () => {
      const obj = { set x(_) {} };
      assert.equal(Object.getOwnPropertyDescriptor(obj, 'x').get.name, 'get x');
    }); 
    it('WHEN reading the name of a setter THEN it is prefixed with "set"', () => {
      const obj = {};
      assert.equal(Object.getOwnPropertyDescriptor(obj, 'x').set.name, 'set x');
    });
  });   
});
