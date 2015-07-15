// 65: Set - API
// To do: make all tests pass, leave the assert lines unchanged!

describe('the API', function(){

  it('`length` is always 0', function() {
    assert.equal(Set.length, 0);
  });

  it('a set can be created from an array', function() {
    let set = new Set([1, 2, 3, 4]);
    assert.equal(set.size, 4);
  });

  it('`size` is the number of values', function() {
    let set = new Set([1]);
    assert.equal(set.size, 1);
  });

  it('`add()` appends the given value', function() {
    let set = new Set([1]);
    set.add(2);
    assert.equal(set.size, 2);
  });

  it('`clear()` removes all elements', function() {
    let set = new Set([1, 2, 3]);
    set.clear();
    assert.equal(set.size, 0);
  });

  it('`delete()` removes the given value', function() {
    let set = new Set([1]);
    set.delete(1);
    assert.equal(set.size, 0);
  });
  
  it('`entries()` returns an iterator for all values', function() {
    let set = new Set(['one', 'two']);
    assert.deepEqual([...set.entries()], [['one', 'one'], ['two', 'two']]);
  });
  
  it('`forEach()`', function() {
    let set = new Set([1, 2]);
    let values = [];
    set.forEach(value => { values.push(value); });
    assert.deepEqual(values, [1, 2]);
  });
  
  it('`has()` returns true if the given value is in the set', function() {
    let set = new Set([1]);
    assert.equal(set.has(1), true);
  });
  
  it('`keys()`', function() {
    let set = new Set([3, 2, 1]);
    assert.deepEqual([...set.keys()], [3, 2, 1]);
  });
  
  it('`values()`', function() {
    let set = new Set([1, 2, 3]);
    assert.deepEqual([...set.values()], [1, 2, 3]);
  });
  
  it('`[Symbol.iterator]()`', function() {
    let set = new Set([1, 2, 3]);
    assert.deepEqual([...set[Symbol.iterator]()], [1, 2, 3]);
  });
  
});
