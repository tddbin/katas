// 48: Set - add
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('`add()` appends a new element to the end of a Set object.', function(){
  it('adds every value, of any type, only once', function() {
    const set = new Set();
    const fn = () => {};
    set.add(1);
    set.add(1);
    set.add(fn);
    set.add({fn});
    assert.equal(set.size, 2);
  });
  it('is chainable', function() {
    const set = new Set();
    set.add.add;
    assert.equal(set.has(2), true);
  });
  it('call without params adds undefined', function() {
    const set = new Set();
    set.add
    assert.equal(set.has(void 0), true);
  });
  it('0, -0 and +0 are equal', function() {
    const set = new Set();
    set.add();
    set.add();
    assert.equal(set.has(+0), true);
  });
});
