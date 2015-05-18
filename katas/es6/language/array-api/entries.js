// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.entries` returns an iterator object with all entries', function() {
  
  it('returns key+value for each element', function() {
    const arr = ['a', 'b', 'c'];
    const entriesAsArray = Array.from(arr.entries());
    
    assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
  });
  
  it('empty elements contain the value `undefined`', function() {
    const arr = ['one'];
    arr[2] = 'three';
    const entries = Array.from(arr.entries());
    
    assert.deepEqual(entries[1], [1, void 0]);
  });

  describe('returns an iterable', function() {
    
    it('has an iterator function', function() {
      const arr = [];
      const entries = arr.entries();
      
      assert.deepEqual(Symbol.iterator in entries, true);
    });
    
    it('has `next()` to iterate', function() {
      const arr = ['one'];
      const entries = arr.entries();
      const value = entries.next().value;
      
      assert.deepEqual(value, [0, 'one']);
    });
    
  });
  
});
