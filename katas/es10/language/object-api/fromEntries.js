// ES10 - 2: Object - fromEntries in depth
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.fromEntries()` converts key-value pairs (entries) into an object', () => {
  it('`fromEntries()` method is defined on `Object` (not on the object literal)', () => {
    //// const fn = {}.fromEntries;
    const fn = Object.fromEntries;
    assert.equal(typeof fn, 'function');
  });
  describe('GIVEN a list of entries (a key and a value) each WILL be converted into an object', () => {
    it('WHERE an entry is an array with two elements', () => {
      const entry1 = ['key', 'value'];
      ////
      const entry2 = ['key1', 'value 1'];
      assert.deepEqual(Object.fromEntries([entry1, entry2]), {key: 'value', key1: 'value 1'});
    });
    it('WHEN using `arr.entries()` the array-index becomes the key and values stay values', () => {
      //// const arr = ['two', 'one'];
      const arr = ['one', 'two'];
      assert.deepEqual(Object.fromEntries(arr.entries()), {0: 'one', 1: 'two'});
    });
    it('WHERE an entry is a Map, and key and value map naturally', () => {
      const map = new Map();
      //// map.set('value', 'key');
      map.set('key', 'value');
      //// map.set('value 1', 'key1');
      map.set('key1', 'value 1');
      assert.deepEqual(Object.fromEntries(map.entries()), {key: 'value', key1: 'value 1'});
    });
    it('WHERE an entry is a Set, the values are used as keys too', () => {
      const set = new Set();
      //// set.add('___');
      set.add('set value 1');
      assert.deepEqual(Object.fromEntries(set.entries()), {'set value 1': 'set value 1'});
    });
    it('WHERE an entry is an object, the properties `0` and `1` are key and value', () => {
      //// const entry1Object = {1: 'key', 2: 'value'};
      const entry1Object = {0: 'key', 1: 'value'};
      //// const entry2Object = {'key1': 'value 1'};
      const entry2Object = {0: 'key1', 1: 'value 1'};
      assert.deepEqual(Object.fromEntries([entry1Object, entry2Object]), {key: 'value', key1: 'value 1'});
    });
  });
});