// ES1 - ??: Bitwise Left Shift Operator in depth
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The left shift "<<" operator in depth', () => {
  it('shifting using a decimal, it gets truncated NOT rounded!', () => {
    assert.strictEqual(10 << 1.9, 20);
  }); 
});
