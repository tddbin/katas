// 39: array - entries
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.entries` returns an iterator object with all entries', function() {
  
  it('returns key+value for each element', function() {
    const arr = ['a', 'b', 'c'];
    const entries = Array.from(arr.entries());
    
    assert.deepEqual(entries, [[0,"a"], [1,"b"], [2,"c"]]);
  });
  
});
