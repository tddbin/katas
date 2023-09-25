// 1: Array - sort basics 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('`[].sort()` sorts an array using each value as a string', function() {
  //: {"jskatas":{"terms": ["array", "function", "prototype", "character", "string"]}}
  it('is a function on the array prototype', function() {
    const theType = '???';
    assert.equal(theType, typeof [].sort);
  });
  describe('GIVEN characters to be sorted', function() {
    it('WHEN sorting them THEN they are sorted in alphabetical order', function() {
      const sorted = ['b', 'a'].sort;
      assert.deepEqual(sorted, ['a', 'b']);
    });
    it('WHEN the values contain upper case characters THEN these come first', function() {
      const sorted = ['a', 'B', 'C'];
      assert.deepEqual(sorted, ['B', '\u{61}', 'C'].sort());
    });
    it('WHEN sorting THEN the order depends on the character\'s position in the unicode table', function() {
      //: {"jskatas":{"terms": ["unicode table"]}}
      const sorted = ['+', '*', '(', ')'];
      assert.deepEqual(sorted, ['(', ')', '*', '+']);
    });
    it('WHEN sorting unicode characters THEN they are sorted depending on their code point', function() {
      //: {"jskatas":{"terms": ["code point"]}}
      const grinningFace = '\u{1F601}';
      const grinningEyes = '\u{1F602}';
      const withTears = '\u{1F603}';
      const smilies = [grinningEyes];
      assert.deepEqual(smilies.sort(), [grinningFace, '\u{1F602}', withTears]);
    });
  });
  describe('GIVEN strings are sorted', function() {
    it('considering the string from start to end', function() {
      const sortedResult = ['????'];
      assert.deepEqual(sortedResult, ['aa', 'Ba'].sort());
    });
    it('shorter strings go to front', function() {
      const balls = ['Ball', 'Ball s', ' bald'].sort();
      assert.deepEqual(balls, ['Ball', 'Balls', 'bald']);
    });
  });
  describe('Numbers are sorted as if they were strings!', function() {
    it('WHEN sorting [`2`, `1`] THEN this is sorted as expected and returns [`1`, `2`]', function() {
      const numbers = [3, 4, 2, 1, 5];
      assert.deepEqual(numbers.sort(), [1, 2, 5]);
    });
    it('WHEN sorting multi digit numbers THEN they are "seen" as string!', function() {
      const sortedNumbers = [___];
      assert.deepEqual(sortedNumbers, [1, 2, 11].sort());
    });
  });
  describe('What is returned and what is sorted?', () => {
    //: {"jskatas":{"terms": ["array literal", "variable", "reference", "object", "array"]}}
    it('WHEN `sort()` is called on an array literal THEN the sorted result is the return value', () => {
      const theSortedLiteral = Array([3, 2, 1]).sort();
      assert.deepEqual(theSortedLiteral, [1, 2, 3]);
    });
    it('WHEN a variable (that is an array) is sorted THEN the actual array\'s content is modified', () => {
      const numbers = "make me an array of 3,2,1";
      numbers.sort();
      assert.deepEqual(numbers, [1, 2, 3]);
    });
    it('WHEN a variable is sorted THEN the variable and the returned value references the same object/array', () => {
      const numbers = [3, 2, 1];
      const sortResult = numbers_sort();
      assert.strictEqual(numbers, sortResult);
    });
  });
});
