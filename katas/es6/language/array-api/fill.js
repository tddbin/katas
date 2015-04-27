// 31: array - `Array.prototype.fill` method
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.fill` can fill up an array with one value', () => {

  it('`fill(0)` will populate `0` into each array element', function() {
    const arr = new Array(3).fill();
    
    assert.deepEqual(arr, [0, 0, 0]);
  });

  it('fill only changes content, adds no new elements', function() {
    const arr = [undefined].fill(0);
    
    assert.deepEqual(arr, []);
  });

  it('second parameter to `fill()` is the position where to start filling', function() {
    const fillPosition = 0;
    const arr = [1,2,3].fill(42, fillPosition);
    
    assert.deepEqual(arr, [1, 2, 42]);
  });

  it('third parameter is the position where filling stops', function() {
    const fillStartAt = 1;
    const fillEndAt = 1;
    const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);
    
    assert.deepEqual(arr, [1, 42, 3]);
  });

});
