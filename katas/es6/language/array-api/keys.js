// 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {

  it('`keys()` returns an iterator', function() {
    const arr = ['a', 'b'];
    const iterator = arr.keys();
    
    assert.deepEqual(iterator.next(), {value: 0, done: false});
    assert.deepEqual(iterator.next(), {value: 1, done: false});
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  
  it('gets all keys', function() {
    const arr = [1, 2, 3];
    const keys = Array.from(arr.keys());
    
    assert.deepEqual(keys, [0, 1, 2]);
  });
  
  it('empty array contains no keys', function() {
    const arr = [];
    const keys = [...arr.keys()];
    
    assert.equal(keys.length, 0);
  });
  
  it('a sparse array without real values has keys though', function() {
    const arr = [,,];
    const keys = [...arr.keys()];
    
    assert.deepEqual(keys, [0, 1]);
  });

  it('also includes holes in sparse arrays', function() {
    const arr = ['a', , 'c'];
    const keys = Array.from(arr.keys());
    
    assert.deepEqual(keys, [0, 1, 2]);
  });
});
