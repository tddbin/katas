// ES11 - ??: Bitwise Left Shift Operator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('things new since ES11', () => {

  it('shifting BigInt to the left', () => {
    const bigInt = 1n << 1n;
    assert.equal(bigInt, 2n);
  });
  it('shifting BigInt can be any huge number, even larger than 32bits', () => {
    const bigInt = 1n << 255n;
    assert.equal(bigInt.toString(2), '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
  });
  
  it('left and right operand have to be same type', () => {
    assert.throws(() => 1n << 1, TypeError);
    assert.throws(() => 1 << 1n, TypeError);
  });
});
