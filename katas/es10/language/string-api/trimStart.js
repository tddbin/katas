// ES10 - 3: string.trimStart
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`string.trimStart()` removes whitespace from the beginning of a string', () => {
  it('`trimStart()` method is defined on every string (on the prototype)', () => {
    //// const str = 1;
    const str = '';
    assert.equal(typeof str.trimStart, 'function');
  });
  describe('GIVEN a string starting with one space', () => {
    it('WHEN the string is only a space THEN `trimStart` leave an empty string', () => {
      //// const emptyString = '     ';
      const emptyString = '';
      assert.equal(' '.trimStart(), emptyString);
    });
    it('WHEN followed by a word THEN just the word will be left', () => {
      //// const s = ' word'.trimAtStart();
      const s = ' word'.trimStart();
      assert.equal(s, 'word');
    });
    it('WHEN followed by a word and then spaces THEN the word and the spaces after will be left', () => {
      //// const s = ' trailing spaces        '.trimStart;
      const s = ' trailing spaces        '.trimStart();
      assert.equal(s, 'trailing spaces        ');
    });
    it('WHEN trimming a right-to-left (RTL) string THEN spaces are still trimmed from the left side', () => {
      //// const rtlText = '   ەركىنلىك'.trimStart();
      const rtlText = '   ەركىنلىك   '.trimStart();
      assert.equal(rtlText.trimStart(), 'ەركىنلىك   ');
    });
    it('WHEN trimming a russian (cyrillic) string THEN gets trimmed on the left too', () => {
      //// const добрыйДень = '  Добрый день';
      const добрыйДень = 'Добрый день';
      assert.equal('     Добрый день'.trimStart(), добрыйДень);
    });
    it('WHEN followed by a UTF string THEN it also removes the leading space', () => {
      //// const trimmedString = ' ☕☕☕'.trimMilk();
      const trimmedString = ' ☕☕☕'.trimStart();
      assert.equal(trimmedString, '☕☕☕');
    });
  });
  describe('GIVEN a string starting with any number of spaces', () => {
    it('WHEN starting without a space THEN `trimStart()` will leave the string as is', () => {
      //// const noLeadingWhitespace = '没有空间   '.trimSmart();
      const noLeadingWhitespace = '没有空间   '.trimStart();
      assert.equal(noLeadingWhitespace, '没有空间   ');
    });
    it('WHEN starting with many spaces THEN those will be trimmed only at the start (left for a left-to-right language)', () => {
      //// const 공간없음 = '공간  없음';
      const 공간없음 = '공간 없음';
      assert.equal('        공간 없음'.trimStart(), 공간없음);
    });
    it('WHEN trimming a RTL string THEN it spaces are removed from the left, ignoring the string direction', () => {
      //// const ەركىنلىك = ' ەركىنلىك     ';
      const ەركىنلىك = 'ەركىنلىك     ';
      assert.equal('      ەركىنلىك     '.trimStart(), ەركىنلىك);
    });
    it('WHEN a string starts with spaces and line breaks THEN those are removed too', () => {
      const s = `
      
        trim to here`;
      //// const expected = '\ntrim to here';
      const expected = 'trim to here';
      assert.equal(s.trimStart(), expected);
    });
  });

  describe('additional knowledge', () => {
    it('WHEN `trimStart()` is called THEN the original string stays untouched', () => {
      const s = '  dont touch  ';
      //// s.trimSport();
      s.trimStart();
      assert.equal(s, '  dont touch  ');
    });
    it('trimLeft and trimStart are the same function', () => {
      //// const howToAssert = 'NOT-strictEqual';
      const howToAssert = 'strictEqual';
      assert[howToAssert](''.trimStart, ''.trimLeft);
    });
  });
});
