// ES1 - 3: parseInt
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`parseInt()` parses a string and returns an integer.', () => {
  it('it is a global function', () => {
    //// const whatType = 'global function';
    const whatType = 'function';
    assert.equal(typeof parseInt, whatType);
  });
  describe('WHEN given a numeric string', () => {
    it('THEN converts it to an integer', () => {
      assert.equal(parseInt('1'), 1);
    });
    it('AND a radix=16 THEN converts to an integer applying the radix (like hexadecimal)', () => {
      assert.equal(parseInt('10', 16), 16);
    });
    it('AND a radix=9 THEN converts to an integer applying the radix', () => {
      assert.equal(parseInt('10', 9), 9);
    });
    it('AND a radix=0 THEN converts to an integer assuming radix=10', () => {
      assert.equal(parseInt('10', 0), 10);
    });
    it('AND the string starts with `0x` THEN converts to an integer assuming radix=16', () => {
      assert.equal(parseInt('0x10'), 16);
    });
    it('AND the string starts with `0X` THEN converts to an integer assuming radix=16', () => {
      assert.equal(parseInt('0X10'), 16);
    });
  });
  describe('WHEN given a NOT-numeric string, it will be converted to a string first', () => {
    it('a string starting with numbers', () => {
      assert.equal(parseInt(' 12AB34'), 12)
    });
    it('a string starting with numbers, as hex', () => {
      assert.equal(parseInt('-F', 16), -15)
    });
    it('a word made of letters', () => {
      assert(isNaN(parseInt('word')));
    });
    it('an empty object literal RETURNS `NaN`', () => {
      assert(isNaN(parseInt({})));
    });
    it('an empty array', () => {
      assert(isNaN(parseInt([])));
    });
    it('a array [123]', () => {
      assert.equal(parseInt([123]), 123);
    });
  });
});
