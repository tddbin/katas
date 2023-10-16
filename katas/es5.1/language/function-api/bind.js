describe('Using `fn.bind()` creates a new function with scope (and parameters) pre-configured', () => {
  describe('GIVEN we bind a scope to a function', () => {
    it('WHEN we call the bound function with a custom object THEN the scope of `this` refers to the given object', () => {
      const fn = function() {
        return this.myScopeVariable;
      };
      const boundFn = fn.bind({myScopeVariable: 'forty-two'});
      assert.strictEqual(boundFn(), 'forty-two');
    });
    it('WHEN binding a string to String\'s `toUpperCase` THEN calling the resulting function returns the upper case value of the string', () => {
      const yell = String.prototype.toUpperCase.bind('hello');
      assert.strictEqual(yell(), 'HELLO');
    });
    it('WHEN binding Array\'s `slice()` method THEN array-like values can dynamically be converted to an array', () => {
      const arrayLike = {length: 1, 0: 'a'};
      const toArray = function (a) { return Array.prototype.slice.bind(a)(); };
      assert.deepStrictEqual(toArray(arrayLike), ['a']);
    }); 
  });
  describe('GIVEN we bind parameters to a function', () => {
    it('WHEN binding the first parameter of a function THEN the bound function can be called just with the seconds parameter', () => {
      const add = function(a, b) { return a + b; };
      const add5 = add.bind(null, 5);
      assert.strictEqual(add5(10), 15);
    });
  });
}); 