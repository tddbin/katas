// 17: unicode - in strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Unicode in strings', () => {
  it('are prefixed with `\\u` (one backslash and u)', () => {
    const nuclear = 2622;
    assert.equal(nuclear, '☢');
  });
  it('value is 4 bytes/digits', () => {
    const nuclear = '\u26222';
    assert.equal(`no more ${nuclear}`, 'no more ☢');
  });
  it('even "normal" character`s values can be written as hexadecimal unicode', () => {
    const nuclear = `\u006B\u006A more \u2622`;
    assert.equal(nuclear, 'no more ☢');
  });
  it('curly braces may surround the value', () => {
    const nuclear = `\u{0000000006E}\u00006F more \u2622`;
    assert.equal(nuclear, 'no more ☢');
  });
});
