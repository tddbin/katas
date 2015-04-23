// 29: array - 
// To do: make all tests pass, leave the assert lines unchanged!

describe('Array.from converts an array-like object or list into an Array', () => {

  it('from an object, requires the length property', function() {
    const arr = Array.from({0: 1, 1: 2, length: 2});
    
    assert.deepEqual(arr, [1, 2]);
  });
  
  it('a DOM node`s classList object can be converted', function() {
    document.body.classList.add('some');
    document.body.classList.add('other');
    const classList = Array.from(document.body.classList);
    
    assert.deepEqual(classList, ['some', 'other']);
  });
  
  it('convert a NodeList to an Array and filter works on it', function() {
    const nodeList = Array.from(document.querySelectorAll('body'));
    const bodies = nodeList.filter((node) => node === document.body);
    
    assert.deepEqual(bodies, [document.body]);
  });
  
  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      const arr = Array.from({0: 1, 1: 2, length: 2}, (value) => value - 1);
      assert.deepEqual(arr, [0, 1]);
    });
    
    it('and we also get the object`s key', function() {
      const arrLike = {0: 'one', 1: 'two', length: 2};
      const arr = Array.from(arrLike, (value, key) => `${key}=${value}`);
      assert.deepEqual(arr, ['0=one', '1=two']);
    });
  });
  
  
});
