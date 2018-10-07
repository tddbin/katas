// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map` is a key/value map', function(){
  it('`Map` is a new global constructor function', function() {
    //// const typeOfMap = '???';
    const typeOfMap = 'function';
    assert.equal(typeof Map, typeOfMap);
  });
  it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
    let map = new Map();
    //// map.set('key', null);
    map.set('key', 'value');
    //// const value = map.get();
    const value = map.get('key');
    assert.equal(value, 'value');
  });
  it('`has()` tells if map has the given key', function() {
    let map = new Map();
    map.set('key', 'value');
    //// const hasIt = map.hazz;
    const hasIt = map.has('key');
    assert.equal(hasIt, true);
  });
  it('a map is iterable', function() {
    let map = new Map();
    map.set('1', 'one');
    map.set('2', 'two');
    //// const mapAsArray = map; // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
    const mapAsArray = Array.from(map); // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
    assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
  });
  it('complex types can be keys', function() {
    const obj = {x: 1};
    const otherObj = {x: 1};
    let map = new Map();
    map.set(obj, '');
    //// map.set(otherObj, '');

    assert.equal(map.has(otherObj), false);
  });
});
