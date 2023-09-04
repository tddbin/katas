it('-true', () => {
  assert.strictEqual(-true, -1);
});

describe('GIVEN the unary - operator, it tries to convert its operand to a number and negate it', () => {
  it('WHEN used before a number-like string THEN it returns the negated number', () => {
    assert.strictEqual(-'-23', 23);
  });
  it('WHEN used before a not-number-like string THEN it returns `NaN`', () => {
    assert.strictEqual(-'twenty three', NaN);
  });
});
