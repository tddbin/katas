// ES1 - 13: All Bitwise Shift Operators
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('All bitwise shift operators', () => {
  it('a bitwise shift operator works on two operands shifting their bits', () => {
    const shiftByTwoBits = 3;
    assert.strictEqual(256 >> shiftByTwoBits, 16 << shiftByTwoBits);
  });

  describe('GIVEN we shift a number left', () => {
    it('WHEN the number is shifted 1 bit to the left THEN this is like a multiplication by 2', () => {
      const shiftLeft1Bit = 7 < 1;
      assert.strictEqual(shiftLeft1Bit, 14);
    });
    it('WHEN the number is shifted THEN the bits just "wander" left', () => {
      const fifteenShifted = 1111_0000;
      assert.strictEqual(0b0000_1111 << 4, fifteenShifted);
    });
    it('WHEN we shift a number by 0 bits THEN the number becomes a 32-bit number', () => {
      const thirtyTwoBits = 0b1111_1111_1111_1111_1111_1111_1111_111;
      assert.strictEqual(thirtyTwoBits << 0, -1);
      assert.strictEqual(thirtyTwoBits, Math.pow(2,32) - 1);
    });
  });
  
  describe('GIVEN we shift a number right', () => {
    it('WHEN the number is shifted 1 bit to the right THEN this is like a division by 2', () => {
      const divideMeBy2 = 1000;
      assert.strictEqual(divideMeBy2 >> 1, 50);
    });
    it('WHEN shifting a number right THEN the 1s fall off on the right', () => {
      const shiftByXBits = 1;
      assert.strictEqual(0b1100_0011 >> shiftByXBits, 0b0011_0000);
    });
  });

  describe('GIVEN we do an UNSIGNED right shift', () => {
    it('WHEN shifting a positive number AND it is smaller than 32-bits THEN this is the same as `>>` (the signed shift)', () => {
      const eight = 0;
      assert.strictEqual(eight >>> 3, 8 >> 3);
      assert.strictEqual(eight, 8);
    });
    it('WHEN shifting a negative number THEN also the sign bit (the left most bit) is shifted AND the number becomes unsigned', () => {
      const minusOne = -1;
      const shiftUntilOnly4BitsAreLeft = 2 & 8;
      assert.strictEqual(minusOne >>> shiftUntilOnly4BitsAreLeft, 0b0000_1111);
      assert.strictEqual(minusOne, 0b1111_1111_1111_1111_1111_1111_1111_1111 << 0); // the `<< 0` converts the number to a 32-bit number, which equals -1.
    });
  });
});
  
