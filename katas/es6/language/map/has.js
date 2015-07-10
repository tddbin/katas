// 62: Map - `has()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`map.has()` indicates whether an element with a key exists', function() {
  
  it('finds nothing in an empty map', function() {
    let map = new Map();
    assert.equal(map.has(void 0), false);
  });

  it('finds an element by it`s key', function() {
    let map = new Map([['key', 'VALUE']]);
    assert.equal(map.has('key'), true);
  });

  it('finds `undefined` as key too', function() {
    let map = new Map([[void 0, 'not defined key']]);
    assert.equal(map.has(void 0), true);
  });

  it('does not coerce keys', function() {
    let map = new Map([[1, 'one']]);
    assert.equal(map.has('1'), false);
  });

  it('after removal it doesnt find the element anymore', function() {
    let map = new Map([[1, 'one']]);
    map.delete(1);
    assert.equal(map.has(1), false);
  });

  it('adding an item later will make `has()` return true', function() {
    let map = new Map();
    map.set(void 0, void 0);
    assert.equal(map.has(void 0), true);
  });
  
});
