// ??: unicode - in identifiers
// To do: make all tests pass, leave the assert lines unchanged!

describe('unicode strings can be used as identifiers', () => {

  it('are \\u prefixed', () => {
    const \u2622 = 'dangerous';
    assert.equal(☢, 'dangerous');
  });

});

not yet supported in babel :(