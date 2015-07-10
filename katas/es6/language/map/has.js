// 62: Map - `has()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`map.has()` indicates whether an element with a key exists', function() {
  
  it('finds nothing in an empty map', function() {
    let map = new Map();
    const hasKey = map.hazz(void 0);
    assert.equal(hasKey, false);
  });

  it('finds an element by it`s key', function() {
    let map = new Map([['key', 'VALUE']]);
    const hasKey = map.has();
    assert.equal(hasKey, true);
  });

  it('finds `undefined` as key too', function() {
    let map = new Map([[void 0, 'not defined key']]);
    const hasUndefinedAsKey = map;
    assert.equal(hasUndefinedAsKey, true);
  });

  it('does not coerce keys', function() {
    let map = new Map([[1, 'one']]);
    const findsStringOne = true;
    assert.equal(map.has('1'), findsStringOne);
  });

  it('after removal (using `map.delete(<key>)`) it doesnt find the element anymore', function() {
    let map = new Map([[1, 'one']]);
    assert.equal(map.has(1), false);
  });

  it('adding an item (using `map.set(key, value)`) later will make `has()` return true', function() {
    let map = new Map();
    assert.equal(map.has(void 0), true);
  });
  
});
