// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!

describe('object literal properties may be computed values', () => {

  it('dynamic property `x`', () => {
    const propertyName = 'x';
    const obj = {[propertyName]: 2};
    assert.equal(obj.x, 1);
  });

  it('computed property `x` as a function', () => {
    const key = 'func';
    const obj = {[key]: 'seven'};
    assert.equal(obj.func(), 'seven');
  });

  it('computed property name results from a function call', () => {
    const getName = () => 'propertyName';
    const obj = {[getName]() {return 'seven'}};
    assert.equal(obj.propertyName(), 'seven');
  });

  it('an expression makes up the property name', () => {
    const what = 'Key';
    const obj = {['proper' + what]: null};
    assert.equal('propertyName' in obj, true);
  });

  it('accessor keys can be computed names too', () => {
    const obj = {
      set ['key'](_) {return 1}
    };
    assert.equal(obj.key, 1);
  });
});
