// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Map` is a key/value map', function(){

  it('`Map` is a new global constructor function', function() {
    assert.equal(typeof Map, 'function');
  });
  
  it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
    let map = new Map();
    map.set('key', 'value');
    const value = map.get('key');
    
    assert.equal(value, 'value');
  });
  
  it('`has()` tells if map has the given key', function() {
    let map = new Map();
    map.set('key', 'value');
    const hasIt = map.has('key');
    
    assert.equal(hasIt, true);
  });

  it('a map is iterable', function() {
    let map = new Map();
    map.set('1', 'one');
    map.set('2', 'two');
    const mapAsArray = [...map];
    
    assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
  });
  

  it('`Map()` even complex types can be keys', function() {
    const obj = {};
    let map = new Map();
    map.set(obj, '');
    
    const otherObj = {};
    assert.equal(map.has(otherObj), false);
  });
  
});
