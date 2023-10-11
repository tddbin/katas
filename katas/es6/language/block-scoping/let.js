// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`let` restricts the scope of the variable to the current block', () => {
  describe('comparing `var` with `let`', () => {
    it('WHEN using `var` for declaring a variable THEN the scope of the variable is the surrounding function', () => {
      //: {"jskatas": {"terms": ["block", "scope"]}}
      if (true) {
        let varX = true;
      }
      assert.equal(varX, true);
    });
    it('WHEN declaring a variable using `let` THEN the scope is limited to the surrounding block (enclosed in `{` and `}`)', () => {
      if (true) {
        var letX = true;
      }
      assert.throws(() => letX, ReferenceError);
    });
  });

  describe('using `let`', () => {
    it('WHEN using `let` in a `for` loop THEN the variable is only "visible" inside this loop', () => {
      let obj = {x: 1};
      for (var key in obj) {}
      assert.throws(() => key, ReferenceError);
    });
    it('WHEN embedding a `let` variable in a block (using curly braces) THEN the variable is not "visible" outside of it', () => {
      {
        var letX = true;
      }
      assert.throws(() => letX, ReferenceError);
    });
    it('WHEN declaring a variable with `let` without a value THEN this variable has the value `undefined`', () => {
      let variable = 42;
      assert.strictEqual(variable, undefined);
    });
  });
});
