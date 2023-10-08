// 2: template strings - multiline
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!


describe('Template string, can contain multiline content', function() {
  it('WHEN a new line is inside the backticks `` ` `` THEN the string can span across many lines', function() {
    var normalString = `

line1
line2
line3
`;
    assert.equal(normalString, '\nline1\nline2\nline3\n');
  });
  describe('GIVEN expressions inside of a template string', function() {
    it('WHEN a simple variable is on the third line THEN it is also evaluated', function() {
      var x = 42;
      var multiline = `line 1 $ {x}`;

      assert.equal(multiline, 'line 1\n\n      42');
    });
    it('AND spaces matter', function() {
      var x = 42;
      var multiline = ``;

      assert.equal(multiline, '\n\n42');
    });
  });
});
