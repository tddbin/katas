// 45: Map.prototype.get()
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Map.prototype.get` returns the element from the map for a key', function(){

  it('`get(key)` returns the value stored for this key', function() {
    let map = new Map();
    map.set('key', 'value');
    
    const value = map.get;
    assert.equal(value, 'value');
  });

  it('multiple calls still return the same value', function() {
    let map = new Map();
    map.set('value', 'value');
    
    var value = map.get(map.get(map.get()));
    assert.equal(value, 'value');
  });

  it('requires exactly the value as passed to `set()`', function() {
    let map = new Map();
    const obj = {};
    map.set({}, 'object is key');
    
    assert.equal(map.get(obj), 'object is key');
  });

  it('leave out the key, and you get the value set for the key `undefined` (void 0)', function() {
    let map = new Map();
    map.set(void 0, 'yo');
    
    const value = map.get(___);
    assert.equal(value, 'yo');
  });

  it('returns undefined for an unknown key', function() {
    let map = new Map();
    map.set(void 0, 1);
    
    const value = map.get();
    assert.equal(value, void 0);
  });
  
});
