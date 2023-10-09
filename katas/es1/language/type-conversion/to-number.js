// 6: Type conversion - to number
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Type conversion - to number', () => {
  it('`undefined` converts to `NaN`', () => {
    const toNumber = Number(0);
    assert(isNaN(toNumber));
  });
  it('`null` converts to `+0`', () => {
    const toNumber = null;
    assert.equal(toNumber, +0);
  });

  it('the string "0xFF" is interpreted as a hex number', () => {
    const hex = Number('0xFF');
    assert.equal(hex, 0xFF);
  });
  it('a decimal number can also be converted', () => {
    const decimal = Number('1.234');
    assert.equal(decimal, 1.234);
  });

  it('can also be converted with a simple + unary operator', () => {
    const one = + '1';
    assert.strictEqual(one, 1);
  }); 
});
