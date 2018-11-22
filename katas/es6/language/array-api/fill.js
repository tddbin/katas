// 31: array - `Array.prototype.fill` method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.fill` can fill up an array with one value', () => {

  it('`fill(0)` will populate `0` into each array element', function() {
    //// const arr = new Array(3).fill();
    const arr = new Array(3).fill(0);
    
    assert.deepEqual(arr, [0, 0, 0]);
  });

  it('fill only changes content, adds no new elements', function() {
    //// const arr = [undefined].fill(0);
    const arr = [].fill(0);

    assert.deepEqual(arr, []);
  });

  it('second parameter to `fill()` is the position where to start filling', function() {
    //// const fillPosition = 0;
    const fillPosition = 2;
    const arr = [1,2,3].fill(42, fillPosition);
    
    assert.deepEqual(arr, [1, 2, 42]);
  });

  it('third parameter is the position where filling stops', function() {
    const fillStartAt = 1;
    //// const fillEndAt = 1;
    const fillEndAt = 2;
    const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);
    
    assert.deepEqual(arr, [1, 42, 3]);
  });

  it('is a mutating method, and will change this object itself', function() {
    const arr = new Array(3);
    //// arr.fill('foo')
    arr.fill(8);

    assert.deepEqual(arr, [8,8,8]);
  });
  
  it('when gets passed an object, all elements of the mutated array would be the same reference to that object', function(){
    //// const obj = {hi: 'foobar'};
    const obj = {hi: 'es6 katas'};
    const arr = Array(3).fill(obj);
    
    assert.equal(arr[2].hi, 'es6 katas');
  });
});
