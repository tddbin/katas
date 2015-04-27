// 30: array - `Array.of` static method
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.of` creates an array with the given arguments as elements', () => {
  
  it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
    const arr = Array(10);
    
    assert.deepEqual(arr, [10]);
  });
  
  it('puts all arguments into array elements', () => {
    const arr = Array.of();
    
    assert.deepEqual(arr, [1, 2]);
  });
  
  it('takes any kind and number of arguments', () => {
    const starter = [1, 2];
    const end = [3, '4'];
    const arr = Array.of(...starter, ...end);
    
    assert.deepEqual(arr, [[1, 2], 3, '4']);
  });
  
});
