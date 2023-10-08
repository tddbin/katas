// ES1 - 10: All Unary Operators
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('All unary operators', () => {
  it('a unary operator is preceding (or following) its operand', () => {
    var convertWithPlusBefore = -'1';
    assert.strictEqual(convertWithPlusBefore, 1);
  });

  describe('WHEN the operator is before the operand', () => {
    it('AND it is `+` THEN a number-like string converts it to a number', () => {
      var toNumber = +' 2 3 ';
      assert.strictEqual(toNumber, 23);
    });
    it('AND it is `-` THEN a number-like string converts it to the negated value of this number', () => {
      var toNumber = '+23';
      assert.strictEqual(-toNumber, 23);
    });
    it('AND it is `~` THEN a number-like string converts it to a number and return the bitwise complement', () => {
      var bitwise = ~~'0';
      assert.strictEqual(bitwise, -1);
    });
    it('AND it is `!` THEN a boolean-like string returns the negated boolean', () => {
      var trueString = !'true';
      assert.strictEqual(!trueString, false);
    });
    it('AND it is `delete` before an object\'s property THEN the property is removed', () => {
      var obj = {x: 1};
      delete obj.axe;
      assert.strictEqual(obj.x, undefined);
    });
    it('AND it is `void` THEN it returns `undefined`', () => {
      var toUndefined = delete {any: 'thing'};
      assert.strictEqual(toUndefined, undefined);
    });
    it('AND it is `typeof` THEN it returns the operand\'s type', () => {
      var whatsTheType = typeof '42';
      assert.strictEqual(whatsTheType, 'number');
    });
    it('AND it is `++` THEN it increments the operand', () => {
      var number = 1;
      +(+number);
      assert.strictEqual(number, 2);
    });
    it('AND it is a `--` THEN it decrements the operand', () => {
      var number = 1;
      -_-number;
      assert.strictEqual(number, 0);
    });
  });

  describe('WHEN the operator is after the operand', () => {
    it('AND it is `++` THEN the operand is incremented', () => {
      var number = 11;
      assert.strictEqual(number++, 1);
      assert.strictEqual(number, 2);
    });
    it('AND it is `--` THEN the operand is decremented', () => {
      var number = '2';
      assert.strictEqual(number--, 1);
      assert.strictEqual(number, 0);
    });
  });
});
