// 43: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {

  it('`values()` returns an iterator', function() {
    const arr = ['a', 'b'];
    const iterator = arr.values();
    
    assert.deepEqual(iterator.next(), {value: 'a', done: false});
    assert.deepEqual(iterator.next(), {value: 'b', done: false});
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  
  it('gets all keys', function() {
    const arr = ['keys', 'values', 'entries'];
    const values = [];
    for (let value of arr.values()) {
      values.push(value);
    }
    
    assert.deepEqual(values, ['keys', 'values', 'entries']);
  });
  
  it('empty array contains no values', function() {
    const arr = [];
    const values = [...arr.values()];
    
    assert.equal(values.length, 0);
  });
  
  it('a sparse array without real values has values though', function() {
    const arr = [,,];
    const keys = [...arr.values()];
    
    assert.deepEqual(keys, [void 0, void 0]);
  });
  
  it('also includes holes in sparse arrays', function() {
    const arr = ['a', , 'c'];
    const keys = [...arr.values()];
    
    assert.deepEqual(keys, ['a', void 0, 'c']);
  });
  
});
