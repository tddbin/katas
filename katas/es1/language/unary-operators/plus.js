// ES1 - 8: Unary + Operator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The unary "+" operator', () => {
  it('is the "+" that preceeds an operand', () => {
    //// var x = -'23';
    var x = +'23';
    assert.strictEqual(x, +'23');
  });
  it('converts its operand to the Number type', () => {
    //// var converted = +'fourty two';
    var converted = +'42';
    assert.strictEqual(converted, Number(42));
  });

  it('WHEN converting a numeric string THEN it returns its value as a number', () => {
    //// var number = '0.12';
    var number = 0.12;
    assert.strictEqual(+'0.12', number);
  });
  it('even WHEN converting the string "-Infinity" THEN it returns the Number `Infinity`', () => {
    //// var converted = 'Infinity';
    var converted = '-Infinity';
    assert.strictEqual(+ converted, -Infinity);
  });
  it('WHEN converting `null` THEN it returns `+0`', () => {
    //// var converted = +Null;
    var converted = +null;
    assert.strictEqual(converted, +0);
  });
  it('WHEN converting `true` THEN it returns 1', () => {
    //// var converted = true;
    var converted = +true;
    assert.strictEqual(converted, 1);
  });
  it('WHEN converting an object with a method `valueOf` THEN its value is returned', () => {
    //// var obj = {valueof: () => 42};
    var obj = {valueOf: () => 42};
    assert.strictEqual(+ obj, 42);
  });
});
