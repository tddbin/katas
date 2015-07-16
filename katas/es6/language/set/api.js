// 65: Set - API overview
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Set` API overview', function(){

  const api = ['size', 'add', 'clear', 'delete', 'entries', 'forEach', 'has', 'keys', 'values'];
  let set;
  beforeEach(function() {
    set = new Set(api);
  });
  
  it('a Set can be created from an array', function() {
    assert.deepEqual(Array.from(set), api);
  });

  it('`size` is the number of values', function() {
    assert.equal(set.size, api.length);
  });

  it('`add()` appends the given value', function() {
    set.add(Symbol.iterator);
    assert.equal(set.size, api.length + 1);
  });

  it('`clear()` removes all elements', function() {
    set.clear();
    assert.equal(set.size, 0);
  });

  it('`delete()` removes the given value', function() {
    set.delete('size');
    const numberOfMethods = api.length - 1;
    assert.equal(set.size, numberOfMethods);
  });
  
  it('`entries()` returns an iterator for all values', function() {
    const entries = api.map(entry => [entry, entry]);
    assert.deepEqual([...set.entries()], entries);
  });
  
  it('`forEach()` calls a callback for each value', function() {
    let values = [];
    set.forEach(value => { values.push(value); });
    assert.deepEqual(values, api);
  });
  
  it('`has()` returns true if the given value is in the set', function() {
    const propertyName = 'size';
    assert.equal(set.has(propertyName), true);
  });

  describe('returns an iterator that contains all values', function() {
    // in order to be alike to `Map` `keys()` and `values()` are essentially the same thing for a `Set`. 
    it('`keys()`', function() {
      assert.deepEqual([...set.keys()], api);
    });
    
    it('`values()`', function() {
      assert.deepEqual([...set.values()], api);
    });
    
    it('`[Symbol.iterator]()`', function() {
      assert.deepEqual([...set[Symbol.iterator]()], api);
    });
  });
  
});
