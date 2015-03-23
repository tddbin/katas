// 2: template strings - multiline
// To do: make all tests pass

describe('template string, can be multiline', function() {
  
  it('count the lines properly', function() {
    var multiline = `line 1
    line 2
    line 3`;
    assert.equal(multiline.split('\n').length, 4);
  });
  
  it('with variable place holders and spaces matter', function() {
    var x = 42;
    var multiline = `line 1
        ${x}`;
    assert.equal(multiline, 'line 1\n42');
  });
  
});