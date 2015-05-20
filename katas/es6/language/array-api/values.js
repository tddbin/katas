// 43: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {

  it('`values()` returns an iterator', function() {
    const arr = ['k', 'e', 'y'];
    const iterator = arr.values();
    
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  
  it('use iterator to drop first key', function() {
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();
    iterator.___();

    assert.deepEqual([...iterator], ['values', 'entries']);
  });
  
  it('empty array contains no values', function() {
    const arr = [...[...[...[...'1']]]];
    const values = [...arr.values()];
    
    assert.equal(values.length, 0);
  });
  
  it('a sparse array without real values has values though', function() {
    const arr = [, 0];
    const keys = [...arr.values()];
    
    assert.deepEqual(keys, [void 0, void 0]);
  });
  
  it('also includes holes in sparse arrays', function() {
    const arr = ['a'];

    assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
  });
  
});
