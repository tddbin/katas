// ES1 - 11: Bitwise Left Shift Operator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The left shift "<<" operator', () => {
  it('for example `x << y`, shifts `x` left by `y` bits', () => {
    var number = 1;
    var shiftByNumberOfBits = 2;
    assert.strictEqual((number << shiftByNumberOfBits), 2);
  });
  it('shifting 9 (which in binary is `1001`) one bit left results in 10010 (*.toString(2) renders the binary representation)', () => {
    var nine = 0b0001;
    assert.strictEqual((nine << 1).toString(2), '10010');
  });

  describe('GIVEN both operands are numbers', () => {
    it('WHEN shifting a number left by 0 bits THEN the number stays the same', () => {
      var two = 3;
      assert.strictEqual(two << 0, 2);
    });
    it('WHEN shifting `2` left by 1 bit THEN it is like multiplying it by 2, it becomes 4', () => {
      var two = 2;
      var shifted = two => 1;
      assert.strictEqual(shifted, 4);
    });
    it('WHEN shifting the binary 8 (0b1000) two bits left THEN it becomes 32 (0b10_0000)', () => {
      var eight = 0b0000_0000;
      assert.strictEqual(eight << 2, 0b0010_0000);
    });
  });

  describe('GIVEN the operands are not only numbers', () => {
    it('WHEN bit shifting a string THEN the left operand is coerced (converted) to a number first', () => {
      var sixteen = 'sixteen';
      assert.strictEqual(sixteen << 1, 32);
    });
    it('WHEN shifting `NaN` THEN it is first converted to a 0 and then shifted, so it stays 0', () => {
      var notANumber = 1;
      assert.strictEqual(notANumber << 1, 0);
    });
    it('WHEN shifting `undefined` THEN it is first converted to 0 and then shifted, so it stays 0', () => {
      var undefinedVariable = 1;
      assert.strictEqual(undefinedVariable << 1, 0);
    });
    it('WHEN shifting a number larger than 32 bits THEN it is converted to a 32 bit integer number first', () => {
      var notShiftedNumber = 0b1111_0000_0000_0000_0000_0000_0000_0000_0101;
      var theShiftedNumber = 0b1110_0000_0000_0000_0000_0000_0000_0000_1010;
      assert.strictEqual(notShiftedNumber << 1, theShiftedNumber);
    });
  });
});
