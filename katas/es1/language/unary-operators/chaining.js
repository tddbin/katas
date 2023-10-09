// ES1 - ???: All Unary Operators
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Chaining unary operators', () => {

  it('++ is not the same 2x +x', () => {
    let usePlusPlus = -1;
    const withPlusPlus = ++usePlusPlus;

    let unaryOperatorTwice = -1;
    unaryOperatorTwice = +unaryOperatorTwice;
    unaryOperatorTwice = +unaryOperatorTwice;

    assert.notStrictEqual(withPlusPlus, unaryOperatorTwice);
  });
  it('++1 throws', () => {
    assert.throws(() => eval('++1'), SyntaxError);
  });

  describe('chaining unary operators', () => {
    it('-+-+-+-+-"42"', () => {
      assert.strictEqual(-+-+-+-+-'42', -42);
    });
    it('...', () => {
      assert.strictEqual(+ ! - ~ '', 0);
    });
    it('...', () => {
      assert.strictEqual(+ ~ ! - '', -2);
    });
    it('...', () => {
      assert.strictEqual(! + ~ - '', false);
    });
    it('...', () => {
      assert.strictEqual(! + ~ - '1', true);
    });
  });
});
