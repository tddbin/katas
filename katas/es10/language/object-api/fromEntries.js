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
    it('an empty string does NOT throw', () => {
      assert.doesNotThrow(() => { Object.fromEntries(''); });
    });
    it('an non-empty string does throw', () => {
      assert.throws(() => { Object.fromEntries(' '); });
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

  describe('use cases', () => {
    it('from JSON to object', () => {
      // the
    });
    it('mapping data', () => {
      const people = [{name: 'Alex', age: 21}, {name: 'Anna', age: 21}];
      const peoplesAge = Object.fromEntries(people.map(({name, age}) => [name, age]));
      assert.deepEqual({Alex: 21, Anna:21}, peoplesAge);
    });
    it('toString-ables can be keys', () => {
      const s = new class { toString() { return 'key'; }  };
      assert.deepEqual(Object.fromEntries([[s, 42]]), {key: 42});
    });
  });
  describe('relates to `Object.entries()`', () => {
    it('is almost the reverse of Object.entries()', () => {

    });
    it('allows Symbols as keys, while `Object.entries()` does not report them', () => {
      const sym = Symbol();
      const fromEntries = Object.fromEntries([[sym, 42]]);
      assert.deepEqual(fromEntries, {[sym]: 42});
      // while
      assert.deepEqual(Object.entries(fromEntries), []);
    });
  });
});
