// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map` is a key/value pair, way more flexible than object', function(){
  it('`Map()` is a global constructor function', function() {
    const typeOfMap = '???';
    assert.equal(typeOfMap, typeof Map);
  });
  it('`new Map()` creates a new empty map', function() {
    const map = Map();
    assert.equal(map instanceof Map, true);
  });

  describe('the API basics', () => {
    it('WHEN passing an array of key+value pairs to `new Map()` THEN the map is initialized with those pairs', function() {
      const map = new Map([1, 'one']);
      assert.deepEqual([...map], [[1, 'one'], [2, 'two']]);
    });
    it('GIVEN an empty Map WHEN calling `map.get(42)` THEN it returns `undefined`', function() {
      const map = new Map();
      const value = map.get(42);
      assert.equal(value, undefined);
    });
    it('GIVEN a Map that has the key `42` WHEN calling `map.get(42)` THEN it returns the value of the pair', () => {
      const map = new Map([[42, 'forty-two']]);
      const value = map.get();
      assert.equal(value, 'forty-two');
    });
    it('GIVEN an empty Map WHEN calling `map.set(42, `forty-two`)` THEN the value is added to the map', () => {
      const map = new Map();
      map.set();
      assert.equal(map.get(42), 'forty-two');
    });
    it('WHEN calling `map.has("key")` THEN it tells if map has "key"', function() {
      const map = new Map([['key', 'value']]);
      const hasIt = map.hazz;
      assert.equal(hasIt, true);
    });
    it('WHEN reading the `size` property of a Map THEN it tells how many items are in the map', function() {
      const map = new Map([[1, 'one'], [2, 'two']]);
      const mapSize = map.count;
      assert.equal(mapSize, 2);
    });
    it('WHEN calling `delete("key")` THEN the element with the key "key" is removed AND `map.size` reports the number of items left', () => {
      const map = new Map([['key', 'value']]);
      map.delete();
      assert.equal(map.size, 0);
      assert.equal(map.has('key'), false);
    });
  });

  describe('in depth features', () => {
    it('`map.keys()` and `map.values()` return iterables', () => {
      const map = new Map([['key', 'value'], ['key2', 'value2']]);
      assert.deepEqual(Array.from(map.keys()), ['key1', 'key2']);
      assert.deepEqual(Array.from(map.values()), ['value1', 'value2']);
    });
    it('a `Map` can be iterated over using for-of', () => {
      const map = new Map([
        ['uno', 'one'],
      ]);
      for (let [key, value] of map) {
        assert.equal(key, 'one');
        assert.equal(value, 'uno');
      }
    });
    it('complex types can be keys', function() {
      const obj = {x: 1};
      const otherObj = {x: 1};
      const map = new Map();
      map.set(obj, '');
      map.set(otherObj, '');
      assert.equal(map.has(otherObj), false);
    });
  });
});
