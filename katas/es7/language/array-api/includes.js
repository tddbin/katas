// ES7 - 1: Array - includes
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.fromEntries()` converts key-value pairs into an object', () => {
  it('it is a static function defined on `Object`', () => {
    const fn = Object.entries;
    assert(Object.is(Object.fromEntries, fn));
  });
});
