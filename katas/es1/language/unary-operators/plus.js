// ES1 - 8: Unary + Operator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The unary "+" operator', () => {
  it('is the "+" that preceeds an operand', () => {
    //// const x = -'23';
    const x = +'23';
    assert.strictEqual(x, +'23');
  });
  it('converts its operand to the Number type', () => {
    //// const converted = +'fourty two';
    const converted = +'42';
    assert.strictEqual(converted, Number(42));
  });

  it('WHEN converting a numeric string THEN it returns its value as a number', () => {
    //// const number = '0.12';
    const number = 0.12;
    assert.strictEqual(+'0.12', number);
  });
  it('even WHEN converting the string "-Infinity" THEN it returns the Number `Infinity`', () => {
    //// const converted = 'Infinity';
    const converted = '-Infinity';
    assert.strictEqual(+ converted, -Infinity);
  });
  it('WHEN converting `null` THEN it returns `+0`', () => {
    //// const converted = +Null;
    const converted = +null;
    assert.strictEqual(converted, +0);
  });
  it('WHEN converting `true` THEN it returns 1', () => {
    //// const converted = true;
    const converted = +true;
    assert.strictEqual(converted, 1);
  });
  it('WHEN converting an object with a method `valueOf` THEN its value is returned', () => {
    //// const obj = {valueof: () => 42};
    const obj = {valueOf: () => 42};
    assert.strictEqual(+ obj, 42);
  });
});
