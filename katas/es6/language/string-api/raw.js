import assert from "assert";

describe('`String.raw` provides the raw string of a template literal', function() {
  describe('GIVEN using `String.raw` as a tag-function', () => {
    it('WHEN passing line-break (\\n) THEN the `String.raw` of it escapes the backslash and makes it "visible"', function() {
      var expected = '\n';
      assert.equal(String.raw`\n`, expected);
    });
    it('WHEN passing an escaped backslash to `String.raw` THEN this equals a string with two backslashes, where each is escaped', function() {
      const TWO_BACKSLASHES = '\\';
      assert.equal(String.raw`\\`, TWO_BACKSLASHES);
    });
    it('WHEN passing a unicode character THEN the leading backslash is made "visible"', function() {
      var rawSmilie = '\u{1F600}';
      const actual = String.raw`\u{1F600}`;
      assert.equal(actual, rawSmilie);
    });
  });
  describe('GIVEN using `String.raw` as a function to call', () => {
    it('WHEN `String.raw()` is called without a parameter THEN it throws', () => {
      const callingStringRaw = () => String.raw;
      assert.throws(callingStringRaw, TypeError);
    });
    it('WHEN `String.raw()` is called with a string as parameter THEN it still throws', () => {
      const callRawWithAString = () => String.raw({raw: 'a string'});
      assert.throws(callRawWithAString, TypeError);
    });
    it('WHEN passing the first parameter `{raw: []}` THEN this equals to an empty string', () => {
      const firstParam = {raw: undefined};
      assert.equal(String.raw(firstParam), '');
    });
    it('WHEN passing the first property `raw` an array of strings THEN they are just concatenated', () => {
      const expected = 'a,b,c';
      assert.equal(String.raw({raw: ['a', 'b', 'c']}), expected);
    });
    it('WHEN passing more parameters, the substitutions THEN these are used as the filler between each raw string, in their according place', () => {
      const rawStrings = ['-', '-'];
      assert.equal(String.raw({raw: rawStrings}, 1, 2), '.1-2.');
    });
  });
});
