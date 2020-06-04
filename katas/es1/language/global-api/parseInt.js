// ES1 - 3: parseInt
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`parseInt()` parses a string and returns an integer.', () => {
  it('it is a global function', () => {
    //// var whatType = 'global function';
    var whatType = 'function';
    assert.equal(whatType, typeof parseInt);
  });
  describe('WHEN given a numeric string', () => {
    it('THEN converts it to an integer', () => {
      //// var numericString = '';
      var numericString = '1';
      assert.equal(parseInt(numericString), 1);
    });
    it('AND a radix=16 THEN converts to an integer applying the radix (like hexadecimal)', () => {
      //// var radix = 6;
      var radix = 16;
      assert.equal(parseInt('10', radix), 16);
    });
    it('AND a radix=9 THEN converts to an integer applying the radix', () => {
      //// var actual = 10;
      var actual = 9;
      assert.equal(actual, parseInt('10', 9));
    });
    it('AND a radix=0 THEN converts to an integer assuming radix=10', () => {
      //// var radix = 8;
      var radix = 0;
      assert.equal(parseInt('10', radix), 10);
    });
    it('AND the string starts with `0x` THEN converts to an integer assuming radix=16', () => {
      //// var parsedToInt = '10';
      var parsedToInt = '0x10';
      assert.equal(parseInt(parsedToInt), 16);
    });
    it('AND the string starts with `0X` THEN converts to an integer assuming radix=16', () => {
      //// var hex = '1X10';
      var hex = '0X10';
      assert.equal(parseInt(hex), 16);
    });
  });
  describe('WHEN given a NOT-numeric string (it will be tried to be converted to a string)', () => {
    it('a string starting with numbers THEN converts containing the leading numbers only', () => {
      //// var s = ' AB34';
      var s = ' 12AB34';
      assert.equal(parseInt(s), 12)
    });
    it('a string starting with `-F` (a hexadecimal number) AND radix=16 THEN returns -15', () => {
      //// var hex = '-';
      var hex = '-F';
      assert.equal(parseInt(hex, 16), -15)
    });
    it('a string, a word made of letters only THEN returns `NaN` (not a number)', () => {
      //// var word = '1 word';
      var word = 'word';
      assert.equalToNaN(parseInt(word));
    });
    it('an empty object literal THEN returns `NaN`', () => {
      //// var emptyObject = 1+{};
      var emptyObject = {};
      assert.equalToNaN(parseInt(emptyObject));
    });
    it('an empty array THEN returns `NaN`', () => {
      //// var emptyArray = [9];
      var emptyArray = [];
      assert.equalToNaN(parseInt(emptyArray));
    });
    it('an array with `[123,456]` THEN converts it to a string and then to an integer', () => {
      //// var filledArray = [123456];
      var filledArray = [123,456];
      assert.equal(parseInt(filledArray), 123);
    });
  });
});

assert.equalToNaN = actual => {
  assert(isNaN(actual), new assert.AssertionError({
    message: 'Expected `parseInt() to return `NaN`.',
    actual,
    expected: NaN,
  }));
};
