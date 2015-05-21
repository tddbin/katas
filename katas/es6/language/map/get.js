// 45: Map.prototype.get()
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Map.prototype.get` returns the element from the map for a key', function(){

  it('`get(key)` returns the value stored for this key', function() {
    let map = new Map();
    map.set('key', 'value');
    assert.equal(map.get('key'), 'value');
  });

  it('requires exactly the same value as passed to `set()`', function() {
    let map = new Map();
    map.set({}, 'NOT undefined');
    assert.equal(map.get({}), void 0);
  });

  it('multiple calls still return the same value', function() {
    let map = new Map();
    map.set('value', 'value');
    
    var value = map.get(map.get(map.get('value')));
    assert.equal(value, 'value');
  });

  it('a missing key is the same as `undefined`', function() {
    let map = new Map();
    map.set(void 0, 'yo');
    
    assert.equal(map.get(), 'yo');
  });

  it('returns undefined for an unknown key', function() {
    let map = new Map();
    assert.equal(map.get('unknown'), void 0);
  });
  
});
