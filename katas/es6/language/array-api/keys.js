// 41: array - `Array.prototype.keys` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.keys` ', () => {

  it('', function() {
    const arr = ['a', 'b', 'c'];
    const keys = Array.from(arr.keys());
    
    assert.deepEqual(keys, [0, 1, 2]);
  });
});
