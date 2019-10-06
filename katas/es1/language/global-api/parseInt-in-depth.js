// ES1 - 4: parseInt - in depth
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`parseInt()` parses a string and returns an integer.', () => {
  it('ignores any surrounding white spaces for a given string', () => {
    assert.equal(parseInt('     123   '), 123);
  });
});
