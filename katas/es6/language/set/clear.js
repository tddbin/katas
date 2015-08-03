// ??: Set - clear
// To do: make all tests pass, leave the assert lines unchanged!

describe('`clear()` removes all elements from a Set object.', function(){

  let set;
  beforeEach(() => set = new Set());

  it('`set.size` becomes 0', function() {
    set.add('one').add(2);
    set.clear();
    assert.equal(set.size, 0);
  });

  it('`set.entries()` will be an empty iterator', function() {
    set.add('one').add(2);
    set.clear();
    const next = set.entries().next();
    assert.deepEqual(next.done, true);
  });
  
  it('any call to `set.has()` returns false', function() {
    set.add('one').add(2);
    
    set.clear();
    
    assert.deepEqual(set.has(), false);
  });
  
  it('returns `undefined`', function() {
    assert.equal(set.clear(), void 0);
  });
  
});
