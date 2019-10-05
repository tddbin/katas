// ES6 - 81: Number - parseInt
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Number.parseInt()` parses a string and returns an integer.', () => {
  it('it is a static function on `Number`', () => {
    const whatType = 'function';
    assert.equal(typeof Number.isNaN, whatType);
  });
  it('is the same as the global function `parseInt`', () => {
    assert.equal(Number.parseInt, global().parseInt);
  });
});

const global = () => globalThis || window || global;

