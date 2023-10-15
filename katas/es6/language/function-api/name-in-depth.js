describe('in depth, special cases', () => {
  it('WHEN binding a function THEN the bound-function\'s name gets prefixed with "bound"', () => {
    const weBoundFn = (() => {}).bind(null);
    assert.equal(weBoundFn.name, 'bound ');
  });
  it('WHEN creating a `Function` instance THEN the name is "anonymous"', () => {
    const fn = (new Function()).bind(null);
    assert.equal(fn.name, 'bound anonymous');
  });
}); 