// 2: template strings - multiline
// To do: make all tests pass, leave the asserts unchanged!

describe('template string, can contain multiline content', function() {

  it('a normal string can`t span across multiple lines', function() {
    var normalString = 'line1' +
                       'line2';
    assert.equal(normalString, 'line1\nline2');
  });
  
  it('wrapped in backticks it can span over multiple lines', function() {
    var templateString = `line1
                          line2`;
    assert.equal(templateString, 'line1\nline2');
  });
  
  it('even over more than two lines', function() {
    var multiline = `line 1
                     line 2
                     line 3`;
    assert.equal(multiline.split('\n').length, 4);
  });

  describe('and expressions inside work too', function() {
    
    var x = 42;
    
    it('like simple variables', function() {
      var multiline = `line 1
          $ {x}`;
      assert.equal(multiline, 'line 1\n          42');
    });
    
    it('also here spaces matter', function() {
      var multiline = `
          ${x}`;
      assert.equal(multiline, '\n42');
    });
    
  });
  
});