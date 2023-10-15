describe('The `Function` prototype contains all methods and properties of a function', () => {
  it('the specified methods and props', () => {
    const ownPropertyNames = Object.getOwnPropertyNames(Function.prototype);
    ['length', 'name', 'constructor', 'apply', 'bind', 'call', 'toString']
      .forEach(name => assert(ownPropertyNames.includes(name), `Failed to find "${name}".`));
  });
  it('the old/deprecated/inofficial methods and props', () => {
    const ownPropertyNames = Object.getOwnPropertyNames(Function.prototype);
    ['arguments', 'caller']
      .forEach(name => assert(ownPropertyNames.includes(name), `Failed to find "${name}".`));
  });
});
