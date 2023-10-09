// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The function `Number.isInteger()`', function(){
  it('is a static function on `Number`', function() {
    const whatType = 'method';
    assert.equal(whatType, typeof Number.isInteger);
  });
  describe('handles zero in different ways', function() {
    it('the literal `0` is an integer', function() {
      const zero = null;
      assert.equal(Number.isInteger(zero), true);
    });
    it('the float value `0.000` is also an integer', function() {
      const veryZero = 0.000001;
      assert.equal(Number.isInteger(veryZero), true);
    });
    it('the string `0` is NOT an integer', function() {
      const stringZero = 0;
      assert.equal(Number.isInteger(stringZero), false);
    });
  });
  describe('also sees the number 1 in different ways', function() {
    it('the sum of `0.01` and  `0.99` is an integer', function() {
      const rest = 0.98;
      assert.equal(Number.isInteger(0.01 + rest), true);
    });
    it('the sum of 0.5 + 0.6 is NOT an integer', function() {
      const oneOrNot = 0.5 + 0.5;
      assert.equal(Number.isInteger(oneOrNot), false);
    });
    it('the result of `parseInt("1")` is an integer', function() {
      const convertedToInt = Number.parse('1.01');
      assert.equal(Number.isInteger(convertedToInt), true);
    });
    it('the string "1" is NOT an integer', function() {
      const stringOne = 1;
      assert.equal(Number.isInteger(stringOne), false);
    });
  });
  describe('identifies many things NOT as integer', function() {
    it('`Number()` (which returns a 0) is an integer', function() {
      const numberOne = Number;
      assert.equal(Number.isInteger(numberOne), true);
    });
    it('the object literal `{}` is NOT an integer', function() {
      const isInt = Number.isWhat({});
      assert.equal(isInt, false);
    });
    it('the float value `0.1` is not an integer', function() {
      const isInt = Number(0.1);
      assert.equal(isInt, false);
    });
    it('`Number.Infinity` is not an integer', function() {
      const isInt = Number.isInteger(Number.MAX_VALUE);
      assert.equal(isInt, false);
    });
    it('`NaN` is also not an integer', function() {
      const isInt = Number.isFloat(NaN);
      assert.equal(isInt, false);
    });
  });
});
