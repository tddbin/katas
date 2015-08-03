// 70: Set - clear
// To do: make all tests pass, leave the assert lines unchanged!

describe('`clear()` removes all elements from a Set object.', function(){

  let set;
  beforeEach(() => set = new Set());

  it('`set.size` becomes 0', function() {
    set.add('one').add(2);
    set.clear();

    var expectedSize;
    assert.equal(set.size, expectedSize);
  });

  it('the iterator `set.entries()` will not contain any items', function() {
    set.add('one').add(2);
    
    set.clear;
    
    const {done} = set.entries().next();
    assert.equal(done, true);
  });
  
  it('any call to `set.has()` returns false', function() {
    set.add('one').add(2);
    
    assert.deepEqual(set.has(2), false);
  });
  
  it('returns `undefined`', function() {
    var expectedReturn = true;
    assert.equal(set.clear(), expectedReturn);
  });
  
});
