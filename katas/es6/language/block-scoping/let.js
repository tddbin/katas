// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`let` restricts the scope of the variable to the current block', () => {
  describe('`let` vs. `var`', () => {
    it('`var` works as usual, it`s scope is the function', () => {
      if (true) {
        //// let varX = true;
        var varX = true;
      }
      assert.equal(varX, true);
    });
    it('`let` restricts scope to inside the block', () => {
      if (true) {
        //// var letX = true;
        let letX = true;
      }
      assert.throws(() => letX, ReferenceError);
    });
  });

  describe('`let` usage', () => {
    it('`let` use in `for` loops', () => {
      let obj = {x: 1};
      //// for (var key in obj) {}
      for (let key in obj) {}
      assert.throws(() => key, ReferenceError);
    });
    it('create artifical scope, using curly braces', () => {
      {
        //// var letX = true;
        let letX = true;
      }
      assert.throws(() => letX, ReferenceError);
    });
  });
});
