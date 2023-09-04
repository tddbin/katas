describe('GIVEN the logical NOT operator (!), it tries to convert its operand to a boolean and returns the negated value', () => {
  it('WHEN used before a boolean-like string THEN it returns the negated boolean', () => {
    assert.strictEqual(!'true', false);
  });
  it('WHEN used before an empty string THEN it returns false', () => {
    assert.strictEqual(!'', true);
  });
  it('WHEN used before a non-empty string THEN it returns true', () => {
    assert.strictEqual(!'not empty, this string', false);
  });
});
