// 4: template strings - String.raw
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!


describe('Using `raw` property in a tagged template function', function() {
  describe('What? The property `raw` is on the array that contains all string parts of a template string', () => {
    it('WHEN reading `.raw` of the strings (the 1st parameter) THEN it returns an array of all raw strings of the template', () => {
      // `strings` contains only the pure strings, not the expressions! 
      // This means the ${2} and ${3} are not contained in `strings`.
      function tag(strings) {
        return strings.___;
      }
      assert.deepEqual(tag`1${2}\n${3}4`, ['1', '\\n', '4']);
    });
    it('WHEN reading the `raw` value of a backslash THEN this returns the text as written in the original string, not the character only', () => {
      function tag(strings) {
        return {string: strings[0], rawString: strings[0]};
      }
      // Note: the four backslashes below are needed in order to escape each backslash, so \ in a string must always be \\
      // otherwise it is seen as a character to escape the following character, see e.g. \n which is a line break, without the
      // leading \ it would just be an n.
      assert.deepEqual(tag`\\`, {string: '\\', rawString: '\\\\'});
    });
    it('WHEN analyzing the tag-function arguments THEN the function signature is much like the one of `String.raw`', () => {
      //: {"jskatas":{"terms": ["function signature", "tag-function"]}}
      function tag({raw}, ...values) {
        return [{raw}, ...values];
      }

      const signature = [{raw: ['one', '\\n']}, 0];
      assert.deepStrictEqual(tag`one${0}\n`, signature);
      assert.deepStrictEqual(String.raw(...signature), 'one0\\n');
    });
  });

  describe('using `raw` in a tagged template', () => {
    it('WHEN using `.raw` on a "normal" character THEN this is the character itself', () => {
      function tagged(string) {
        return string.raw[0][0]; 
      }
      assert.equal(tagged`AB`, 'B');
    });
    it('WHEN reading the first character of the `raw` value of a line break THEN this is a backslash', function() {
      function firstCharEntered(strings) {
        var lineBreak = strings.raw;
        return lineBreak;
      }
      assert.equal(firstCharEntered`\n`, '\\');
    });
  });
});
