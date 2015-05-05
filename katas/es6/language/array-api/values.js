// 41: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.values` ', () => {

  it('', function() {
    const arr = ['a', 'b', 'c'];
    const values = Array.from(arr.values());
    
    assert.deepEqual(values, ['a', 'b', 'c']);
  });
});
