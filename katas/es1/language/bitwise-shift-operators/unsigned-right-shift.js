describe('', () => {
  it('can be used to find out if the number is positive or negative', () => {
    const isPositive = (123 >>> 31) == 0;
    assert.equal(isPositive, true);
  });
  it('is negative, the left most bit (of the 32bit number) is 1', () => {
    assert.equal((-123 >>> 31), 1);
  });
});