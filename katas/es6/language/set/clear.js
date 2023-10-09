// 70: Set - clear
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`clear()` removes all elements from a Set object.', function(){
  it('`set.size` becomes 0', function() {
    const set = new Set();
    set.add('one').add(2);
    set.clear();
    var actualSize;
    assert.equal(actualSize, set.size);
  });
  it('the iterator `set.entries()` will not contain any items', function() {
    const set = new Set();
    set.add('one').add(2);
    set.clear;
    const {done} = set.entries().next();
    assert.equal(done, true);
  });
  it('any call to `set.has()` returns false', function() {
    const set = new Set();
    set.add('one').add(2);
    
    assert.deepEqual(set.has(2), false);
  });
  it('returns `undefined`', function() {
    const set = new Set();
    var actualReturn = true;
    assert.equal(actualReturn, set.clear());
  });
});
