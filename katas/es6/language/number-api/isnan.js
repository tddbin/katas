// 80: Number - isNaN
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The function `Number.isNaN()`', function(){
  it('is a static function on `Number`', function() {
    //// const whatType = 'method';
    const whatType = 'function';
    assert.equal(whatType, typeof Number.isNaN);
  });
  describe('returns false', () => {
    describe('for any not-Number type', () => {
      it('like null', () => {
        //// const justNull = NaN;
        const justNull = null;
        assert.equal(Number.isNaN(justNull), false);
      });
      it('like a string', () => {
        //// const aString = NaN;
        const aString = 'NaN';
        assert.equal(Number.isNaN(aString), false);
      });
      it('like an object', () => {
        //// const anObject = NaN;
        const anObject = {};
        assert.equal(Number.isNaN(anObject), false);
      });
      describe('different to the global `isNaN` function (specified in ES1)', () => {
        it('an object gets converted to a Number before the check, and returns true therefore', () => {
          //// const fn = Number.isNaN;
          const fn = isNaN;
          assert.equal(fn({}), true);
        });
        it('a string gets converted to a Number first, and returns true therefore (even though its not `NaN`)', () => {
          //// const fn = Number.isNaN;
          const fn = isNaN;
          assert.equal(fn('just a string'), true);
        });
      });
    });
    describe('for real Numbers', () => {
      it('like 0', () => {
        //// const zero = NaN;
        const zero = 0;
        assert.equal(Number.isNaN(zero), false);
      });
      it('or Infinity (+∞)', () => {
        //// const infinity = Nummmmber.POSITIVE_INFINITY;
        const infinity = Number.POSITIVE_INFINITY;
        assert.equal(Number.isNaN(infinity), false);
      });
      it('or the biggest Number (9007199254740991 (2^53−1))', () => {
        //// const max = N_u_m_b_e_r.MAX_SAFE_INTEGER;
        const max = Number.MAX_SAFE_INTEGER;
        assert.equal(Number.isNaN(max), false);
      });
      it('or a decimal number', () => {
        //// const pie = 3.1415926535897932;
        const pi = 3.1415926535897932;
        assert.equal(Number.isNaN(pi), false);
      });
    });
  });
  describe('returns true for', () => {
    it('exactly `NaN`', () => {
      //// const notANumber = 1;
      const notANumber = NaN;
      assert.equal(Number.isNaN(notANumber), true);
    });
    it('the result of zero divided by zero', () => {
      //// const zeroDividedByZero = 0 / 1;
      const zeroDividedByZero = 0 / 0;
      assert.equal(Number.isNaN(zeroDividedByZero), true);
    });
    it('something which seems not to be a number', () => {
      //// const zeroDividedByZero = Number('0');
      const zeroDividedByZero = Number('not a number');
      assert.equal(Number.isNaN(zeroDividedByZero), true);
    });
  });
});
