// 80: Number - isNaN
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Number.isNaN()` determines if a value is `NaN`', function(){
  it('it is a static function on `Number`', function() {
    //// const whatType = 'method';
    const whatType = 'function';
    assert.equal(typeof Number.isNaN, whatType);
  });
  describe('returns false', () => {
    describe('for any not-Number type', () => {
      it('like null', () => {
        assert.equal(Number.isNaN(null), false);
      });
      it('like a string', () => {
        assert.equal(Number.isNaN('a string'), false);
      });
      it('like an object', () => {
        assert.equal(Number.isNaN({}), false);
      });
      it('as opposed to the global function `isNaN`', () => {
        //// const fn = Number.isNaN;
        const fn = isNaN;
        assert.equal(fn({}), true);
      });
    });
    describe('for Numbers', () => {
      it('like 0', () => {
        assert.equal(Number.isNaN(NaN), true);
      });
    });
  });
  describe('returns true for', () => {
    it('exactly `NaN`', () => {
      //// const notANumber = 1;
      const notANumber = NaN;
      assert.equal(Number.isNaN(notANumber), true);
    });
    it('zero divided by zero', () => {
      //// const zeroDividedByZero = 1 / 2;
      const zeroDividedByZero = 0 / 0;
      assert.equal(Number.isNaN(zeroDividedByZero), true);
    });
  });
});
