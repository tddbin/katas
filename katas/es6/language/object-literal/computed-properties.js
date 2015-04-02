// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!

describe('object literal properties may be computed values', () => {

  it('dynamic property `x`', () => {
    const propertyName = 'x';
    const obj = {[propertyName]: 1};
    assert.equal(obj.x, 1);
  });

  it('computed property `x` as a function', () => {
    const key = 'x';
    const obj = {[key]() {return 'seven'}};
    assert.equal(obj.x(), 'seven');
  });

  it('computed property name results from a function call', () => {
    const getName = () => 'propName';
    const obj = {[getName()]() {return 'seven'}};
    assert.equal(obj.propName(), 'seven');
  });

  it('an expression makes up the property name', () => {
    const what = 'X';
    const obj = {
      ['key' + what]: 1
    };
    assert.equal(obj.keyX, 1);
  });

  it('accessor keys can be computed names too', () => {
    const obj = {
      get ['key']() {return 1}
    };
    assert.equal(obj.key, 1);
  });
});
