// ES1 - 3: parseInt
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`parseInt()` parses a string and returns an integer.', () => {
  it('it is a global function', () => {
    //// const whatType = 'global function';
    const whatType = 'function';
    assert.equal(typeof parseInt, whatType);
  });
  it('WHEN given a numeric string THEN converts it to an integer', () => {
    assert.equal(parseInt('1'), 1);
  });
  it('WHEN given a numeric string AND a radix THEN converts to an integer applying the radix', () => {
    assert.equal(parseInt('10', 16), 16);
  });
  it('WHEN given a numeric string AND a radix=0 THEN converts to an integer assuming radix=10', () => {
    assert.equal(parseInt('10', 0), 10);
  });
  it('WHEN given a numeric string starting with `0x` THEN converts to an integer assuming radix=16', () => {
    assert.equal(parseInt('0x10'), 16);
  });
  it('WHEN given a numeric string starting with `0X` THEN converts to an integer assuming radix=16', () => {
    assert.equal(parseInt('0X10'), 16);
  });

  it('ignores any surrounding white spaces for a given string', () => {
    assert.equal(parseInt('     123   '), 123);
  });
});
