// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map` is a key/value map', function(){
  it('`Map` is a global constructor function', function() {
    const typeOfMap = '???';
    assert.equal(typeOfMap, typeof Map);
  });
  it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
    const map = new Map();
    map.set('key', null);
    const value = map.get();
    assert.equal(value, 'value');
  });
  it('`has()` tells if map has the given key', function() {
    const map = new Map();
    map.set('key', 'value');
    const hasIt = map.hazz;
    assert.equal(hasIt, true);
  });
  it('`delete()` deletes the element given by the key AND `map.size` reports the number of items', () => {
    const map = new Map([['key', 'value']]);
    map.delete('key');
    assert.equal(map.size, 0);
  });
  it('`keys()` and `values()` return iterables of the keys and values', () => {
    const map = new Map([['key', 'value']]);
    assert.deepEqual(Array.from(map.keys()), ['key']);
    assert.deepEqual(Array.from(map.values()), ['value']);
  });
  it('a map can be iterated over using for-of', () => {
    const map = new Map([
      ['uno', 'one'],
    ]);
    for (let [key, value] of map) {
      assert.equal(key, 'one');
      assert.equal(value, 'uno');
    }
  });
  it('a map is iterable', function() {
    const map = new Map();
    map.set('1', 'one');
    map.set('2', 'two');
    const mapAsArray = map; // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
    assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
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
