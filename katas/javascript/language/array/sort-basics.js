// 1: sort - basics 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`[].sort()` sorts an array using each value as a string', function() {

  it('is a function on the array prototype', function() {
    assert.equal(typeof [].sort, 'function');
  });

  describe('sorts characters', function() {
  
    it('in alphabetical order', function() {
      assert.deepEqual(['b', 'a'].sort(), ['a', 'b']);
    });
  
    it('upper case characters come first', function() {
      assert.deepEqual(['B', '\u{61}', 'C'].sort(), ['B', 'C', 'a']);
    });
  
    it('depending on their position in the unicode table', function() {
      assert.deepEqual(['+', '*', '(', ')'].sort(), ['(', ')', '*', '+']);
    });
  
    it('unicode characters depending on their code point', function() {
      assert.deepEqual(['\u{1F602}', '\u{1F603}', '\u{1F601}'].sort(), ['\u{1F601}', '\u{1F602}', '\u{1F603}']);
    });
    
  });
  
  describe('sorts strings', function() {
    
    it('considering the string from start to end', function() {
      assert.deepEqual(['aa', 'Ba'].sort(), ['Ba', 'aa']);
    });
    
    it('shorter strings go to front', function() {
      assert.deepEqual(['Balls', 'Ball'].sort(), ['Ball', 'Balls']);
    });
    
  });

  describe('sorts numbers as if they were strings', function() {
    
    it('`1` and `2` are sorted as expected', function() {
      assert.deepEqual([1, 2].sort(), [1, 2]);
    });
    
    it('see multi digit numbers as strings!', function() {
      assert.deepEqual([1, 2, 11].sort(), [1, 11, 2]);
    });
    
  });
  
});