// ES10 - 3: string.trimStart
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`string.trimStart()` removes whitespace from the beginning of a string', () => {
  it('`trimStart()` method is defined on every string (on the prototype)', () => {
    const str = '';
    assert.equal(typeof str.trimStart, 'function');
  });
  describe('GIVEN a string starting with one space', () => {
    it('WHEN the string is only a space THEN `trimStart` leave an empty string', () => {
      assert.equal(' '.trimStart(), '');
    });
    it('WHEN followed by a word THEN just the word will be left', () => {
      assert.equal(' word'.trimStart(), 'word');
    });
    it('WHEN followed by a word and then spaces THEN the word and the spaces after will be left', () => {
      assert.equal(' trailing spaces        '.trimStart(), 'trailing spaces        ');
    });
    it('WHEN trimming a right-to-left (RTL) string THEN spaces are trimmed from the right side', () => {
      const rtlText = '             مرحبا بالعالم ';
      assert.equal(rtlText.trimStart(), 'مرحبا بالعالم ');
    });
    it('WHEN a russian (cyrillic) string THEN gets trimmed on the left too', () => {
      assert.equal('     Добрый день'.trimStart(), 'Добрый день');
    });
    it('WHEN followed by a UTF string THEN it also removes the leading space', () => {
      assert.equal(' ☕☕☕'.trimStart(), '☕☕☕');
    });
  });
  describe('GIVEN a string starting with any number of spaces', () => {
    it('WHEN starting without a space THEN `trimStart()` will leave the string as is', () => {
      assert.equal('没有空间   '.trimStart(), '没有空间   ');
    });
    it('WHEN starting with many spaces THEN those will be trimmed only at the start (left for a left-to-right language)', () => {
      assert.equal('        공간 없음'.trimStart(), '공간 없음');
    });
    it('WHEN trimming a RTL string THEN spaces on the right are remove', () => {
      assert.equal('      ەركىنلىك'.trimStart(), 'ەركىنلىك');
    });
    it('WHEN a string starts with spaces and line breaks THEN those are removed too', () => {
      const s = `
      
        trim to here`;
      assert.equal(s.trimStart(), 'trim to here');
    });
  });

  describe('additional knowledge', () => {
    it('WHEN `trimStart()` is called THEN the original string stays untouched', () => {
      const s = '  dont touch  ';
      s.trimStart();
      assert.equal(s, '  dont touch  ');
    });
    it('trimLeft and trimStart are the same function', () => {
        assert(''.trimStart === ''.trimLeft);
    });
  });
});
