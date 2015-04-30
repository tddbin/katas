// 33: array - `Array.prototype.findIndex` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.findIndex` makes finding items in arrays easier', () => {

  it('takes a compare function', function() {
    const foundAt = [false, true].findIndex(item => item === true);
    
    assert.equal(foundAt, 1);
  });

  it('returns the first position it was found at', function() {
    const foundAt = [0, 1, 1, 1].findIndex(item => item === 1);
    
    assert.equal(foundAt, 1);
  });

  it('returns `-1` when nothing was found', function() {
    const foundAt = [1, 2, 3].findIndex(item => item > 3);
    
    assert.equal(foundAt, -1);
  });

  it('you get all info in the arguments', function() {
    const three = 3;
    const isThree = num => num === three;
    const containsThree = arr => arr.indexOf(three) > -1;
    function theSecondThree(item, index, arr) {
      const allPreviousItems = arr.slice(0, index);
      return isThree(item) && containsThree(allPreviousItems);
    }
    const foundAt = [1, 1, 2, 3, 3, 3].findIndex(theSecondThree);
    
    assert.equal(foundAt, 4);
  });

  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const foundAt = [bob, alice].findIndex(({name:{length}}) => length > 3);
    
    assert.equal(foundAt, 1);
  });

});
