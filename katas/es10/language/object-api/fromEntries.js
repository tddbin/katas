// 1: Object - fromEntries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.fromEntries()` converts key-value pairs into an object', () => {
  it('is a function defined on `Object`', () => {
    //// const expectedType = '???';
    const expectedType = 'function';
    assert.equal(typeof Object.fromEntries, expectedType);
  });
  describe('requires an argument that can be converted to an object', () => {
    it('`undefined` throws a TypeError', () => {
      assert.throws(() => { Object.fromEntries(undefined); }, TypeError);
    });
    it('`null` throws a TypeError', () => {
      assert.throws(() => { Object.fromEntries(undefined); }, TypeError);
    });
    it('a boolean does not throw', () => {
      assert.doesNotThrow(() => { Object.fromEntries(true); });
    });
    it('a string does not throw', () => {
      assert.doesNotThrow(() => { Object.fromEntries(''); });
    });
    it('a Symbol does not throw', () => {
      assert.doesNotThrow(() => { Object.fromEntries(Symbol.for('some')); });
    });
  });
});
