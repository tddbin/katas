// ES6 - 81: Number - parseInt
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Number.parseInt()` parses a string and returns an integer.', () => {
  it('it is a static function on `Number`', () => {
    const whatType = 'global';
    assert.equal(whatType, typeof Number.parseInt);
  });
  it('is the same as the global function `parseInt`', () => {
    const global = () => globalThis || window || global;
    const parseIntFunction = Number.parse_int;
    assert.equal(parseIntFunction, global().parseInt);
  });
  it('`parseInt` was specified in ECMAScript v1 (please find that ES1 kata for learning more)', () => {
    const version = 6;
    assert.equal('ECMAScript v' + version, 'ECMAScript v1');
  });
});
