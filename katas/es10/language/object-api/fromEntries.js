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
    it('a boolean throws a TypeError', () => {
      assert.throws(() => { Object.fromEntries(true); }, TypeError);
    });
    it('a Symbol throws a TypeError', () => {
      assert.throws(() => { Object.fromEntries(Symbol.for('some')); }, TypeError);
    });
    it('a string does not throw', () => {
      assert.doesNotThrow(() => { Object.fromEntries(''); });
    });
  });

  describe('works', () => {
    it('empty string', () => {
      assert.doesNotThrow(() => { Object.fromEntries(''); });
      assert.deepEqual(Object.fromEntries([]), {});
    });
    it('empty array', () => {
      assert.doesNotThrow(() => { Object.fromEntries([]); });
      assert.deepEqual(Object.fromEntries([]), {});
    });
    it('array of arrays', () => {
      assert.doesNotThrow(() => { Object.fromEntries([[]]); });
      assert.deepEqual(Object.fromEntries([[], []]), {undefined: undefined});
    });
    it('array of arrays #2', () => {
      assert.doesNotThrow(() => { Object.fromEntries([[], []]); });
      assert.deepEqual(Object.fromEntries([[], []]), {undefined: undefined});
    });
    it('array of arrays #3', () => {
      assert.doesNotThrow(() => { Object.fromEntries([[], []]); });
      assert.deepEqual(Object.fromEntries([[1,2], [3,4]]), {1:2, 3:4});
    });
  });
});
