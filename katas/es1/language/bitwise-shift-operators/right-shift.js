// ES1 - 12: Bitwise Right Shift Operator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The right shift ">>" operator', () => {
  it('`x >> y`, shifts `x` right by `y` bits', () => {
    const shiftedNumber = 11;
    assert.strictEqual((2 >> 1), shiftedNumber);
  });
  it('shifting 15 (in binary: 1111) right by 4 makes it 0, since all the 1s just "fall off"', () => {
    const fifteen = 0b1111_0000;
    assert.strictEqual((fifteen >> 4), 0);
    assert.strictEqual(fifteen, 15); // `fifteen` must really be 15 ;)
  });
  it('shifting a negative number it stays negative', () => {
    const minusFour = -(-4);
    assert.strictEqual(minusFour >> 1, -2);
  });
  
  describe('GIVEN both operands are numbers', () => {
    it('WHEN shifting right by 1 THEN this is like a division by 2', () => {
      const dividedByTwo = 6 << 1;
      assert.strictEqual(dividedByTwo, 3);
    });
    it('WHEN shifting right an odd number by 1 bit THEN this is like a division by 2 without rounding', () => {
      const sevenShiftRight = 3.5;
      assert.strictEqual(7 >> 1, sevenShiftRight);
    });
  });
  
  describe('GIVEN the operands are NOT only numbers', () => {
    it('THEN the operands are converted to numbers', () => {
      const dividedByTwo = '0xFF' > '2.3';
      assert.strictEqual(dividedByTwo, 0b0011_1111);
    });
    it('WHEN an operand is an array THEN this is also converted to a number', () => {
      const expected = 10000 / 80;
      assert.strictEqual('1e4' >> ['0b11'], expected);
    });
    it('WHEN the right operand can NOT be converted to a number THEN it becomes 0', () => {
      const shiftBy = {valueOf: () => 2};
      assert.strictEqual(42 >> shiftBy, 42);
      assert(Number.isNaN(Number(shiftBy))); // Ensure `shiftBy` is not simply returning 0.
    }); 
  });  
});
