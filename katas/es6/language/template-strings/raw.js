// 4: template strings - String.raw
// To do: make all tests pass, leave the asserts unchanged!

describe('on tagged template strings you can use the `raw` property like so `s.raw`', function() {
  
  it('the `raw` property accesses the string as it was entered', function() {
    function firstChar(strings) {
      return strings;
    }
    assert.equal(firstChar`\n`, '\\n');
  });

  it('`raw` can access the backslash of a line-break', function() {
    function firstCharEntered(strings) {
      var lineBreak = strings.raw;
      return lineBreak;
    }
    assert.equal(firstCharEntered`\n`, '\\');
  });

  describe('`String.raw` as a static function', function(){
    
    it('concats the raw strings', function() {
      var expected = '\n';
      assert.equal(String.raw`\n`, expected);
    });
    
    it('two raw-templates-string-backslashes equal two escaped backslashes', function() {
      const TWO_BACKSLASHES = '\\';
      assert.equal(String.raw`\\`, TWO_BACKSLASHES);
    });
    
    it('works on unicodes too', function() {
      var smilie = '\u{1F600}';
      var actual = String.raw`\u{1F600}`;
      assert.equal(actual, smilie);
    });
    
  });
});