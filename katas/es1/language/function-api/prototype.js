describe('The `prototype` property - the place to add shared functionality', () => {
  it('WHEN defining the `prototype` on a function THEN the instance of that function inherits these properties', () => {
    const fn = function() {}
    fn.prototype = {
      solution: 42,
    };
    const obj = new fn();
    assert.equal(obj.solution, 42);
  });
}); 