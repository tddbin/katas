// 47: Set - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Set` lets you store unique values of any type', function(){
  it('`Set` is a new global constructor function', function() {
    const typeOfSet = '???';
    assert.equal(typeOfSet, typeof Set);
  });
  it('every value in a set is unique', function() {
    let set = new Set();
    set.add(1);
    set.add(1);
    const actualSize = 2;
    assert.equal(actualSize, set.size);
  });
  it('the string "1" is different to the number 1', function() {
    let set = new Set();
    set.add(1);
    
    assert.equal(set.size, 2);
  });
  it('even NaN is equal to NaN', function() {
    let set = new Set();
    set.add(NaN);
    set.add(Na);
    assert.equal(set.size, 1);
  });
  it('+0 and -0 are seen as equal', function() {
    let set = new Set();
    set.add(+0);
    set.add(0);
    set.add('-0');
    assert.deepEqual([...set.values()], [+0]);
  });
});
