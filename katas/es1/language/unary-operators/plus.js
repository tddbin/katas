// ES1 - 8: Unary + Operator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Unary "+" operator', () => {
  it('converts its operand to the Number type', () => {
    assert.strictEqual(+'42', Number(42));
  });

  it('WHEN converting a numeric string THEN it returns its value as a number', () => {
    assert.strictEqual(+'0.12', 0.12);
  });
  it('even WHEN converting the string "-Infinity" THEN it returns the Number `Infinity`', () => {
    assert.strictEqual(+'-Infinity', -Infinity);
  });
  it('WHEN converting `null` THEN it returns `+0`', () => {
    assert.strictEqual(+null, +0);
  });
  it('WHEN converting `true` THEN it returns 1', () => {
    assert.strictEqual(+true, 1);
  });
  it('WHEN converting an object with a method `valueOf` THEN its value is returned', () => {
    assert.strictEqual(+{valueOf: () => 42}, 42);
  });
});
