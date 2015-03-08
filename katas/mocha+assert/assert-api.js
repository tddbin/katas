describe('mocha + assert', function() {
  it('assert.equal', function() {
    assert.equal('equal', 'not equals');
  });
  it('to compare complex types use deepEqual', function() {
    assert.deepEqual([1,2,3], [1,2,3]);
  });
});