// ES1 - 4: parseInt - in depth
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('`parseInt()` parses a string and returns an integer.', () => {
  it('ignores any surrounding white spaces for a given string', () => {
    const stringNumber = '     abc     ';
    assert.equal(parseInt(stringNumber), 123);
  });
});
