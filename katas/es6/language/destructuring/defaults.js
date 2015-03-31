// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring can also have default values', () => {

  it('array', () => {
    const [a, b=2] = [1];
    assert.equal(b, 2);
  });

  it('array', () => {
    const [a, b=2] = [1,,3];
    assert.equal(b, 2);
  });

  it('object', () => {
    const {a, b=2} = {a: 1};
    assert.equal(b, 2);
  });

  it('object', () => {
    const {a, b=2} = {a: 1, b: void 0};
    assert.equal(b, 2);
  });

  it('string', () => {
    const [a, b=2] = '1';
    assert.equal(a, '1');
    assert.equal(b, 2);
  });

});
